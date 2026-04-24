import * as cheerio from "cheerio";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

/** @type {Record<string, { inputSubdir: string; outSubdir: string; exportPrefix: string; typeName: string; units: number[] }>} */
const SUBJECTS = {
  chemistry: {
    inputSubdir: "ap-chemistry/units",
    outSubdir: "src/generated/chemistry",
    exportPrefix: "chemUnit",
    typeName: "ChemChapterChunk",
    units: [3, 4, 5, 6, 7, 8, 9],
  },
  calculus: {
    inputSubdir: "ap-calculus/units",
    outSubdir: "src/generated/calculus",
    exportPrefix: "calcUnit",
    typeName: "CalcChapterChunk",
    units: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
  },
  worldHistory: {
    inputSubdir: "ap-world-history/units",
    outSubdir: "src/generated/world-history",
    exportPrefix: "whUnit",
    typeName: "WhChapterChunk",
    units: [1, 2, 3, 4, 5, 6, 7, 8, 9],
  },
};

/**
 * @param {import("cheerio").CheerioAPI} $
 * @param {import("cheerio").Cheerio} main
 */
function extractOrderedSections($, main) {
  const sections = [];
  main.children().each((_, el) => {
    const tag = el.tagName?.toLowerCase();
    if (tag === "script") {
      return;
    }
    const $el = $(el);
    if ($el.hasClass("doc-title-block")) {
      return;
    }
    if ($el.hasClass("learn-block") && $el.attr("id")) {
      const id = $el.attr("id");
      const title = $el.find(".teaching-label").first().text().trim() || id;
      const html = $.html($el);
      if (!id || html == null) {
        return;
      }
      sections.push({ id, title, bodyHtml: html.trim() });
      return;
    }
    if ($el.hasClass("chapter")) {
      const id = $el.attr("id");
      const title = $el.find(".chapter-header h2").first().text().trim();
      const body = $el.find(".chapter-content").first().html();
      if (!id || !title || body == null) {
        return;
      }
      sections.push({ id, title, bodyHtml: body.trim() });
    }
  });
  return sections;
}

/**
 * @param {import("cheerio").CheerioAPI} $
 */
function extractPageMeta($) {
  const docTitle = $("#main .doc-title").first().text().trim();
  const docLabel = $("#main .doc-title-block .doc-label").first().text().trim();
  const sidebarHeader = $("#sidebar .sidebar-header").first().text().trim();
  const unitSwitcherSummary = $("#sidebar details.unit-switcher > summary").first().text().trim();
  return { docTitle, docLabel, sidebarHeader, unitSwitcherSummary };
}

/**
 * @param {keyof typeof SUBJECTS} subjectKey
 */
function generateSubject(subjectKey) {
  const cfg = SUBJECTS[subjectKey];
  if (!cfg) {
    console.error(`Unknown subject: ${subjectKey}`);
    process.exit(1);
  }
  const outDir = path.join(root, cfg.outSubdir);
  fs.mkdirSync(outDir, { recursive: true });

  for (const n of cfg.units) {
    const htmlPath = path.join(root, cfg.inputSubdir, `unit${n}.html`);
    const raw = fs.readFileSync(htmlPath, "utf8");
    const $ = cheerio.load(raw);
    const main = $("#main");
    const chapters = extractOrderedSections($, main);
    const meta = extractPageMeta($);

    const varName = `${cfg.exportPrefix}${n}Chapters`;
    const json = JSON.stringify(chapters, null, 2);
    const metaLines = [
      `export const ${cfg.exportPrefix}${n}DocTitle = ${JSON.stringify(meta.docTitle)};`,
      `export const ${cfg.exportPrefix}${n}DocLabel = ${JSON.stringify(meta.docLabel)};`,
      `export const ${cfg.exportPrefix}${n}SidebarHeader = ${JSON.stringify(meta.sidebarHeader)};`,
      `export const ${cfg.exportPrefix}${n}SwitcherSummary = ${JSON.stringify(meta.unitSwitcherSummary)};`,
    ].join("\n");

    const chaptersTs = `/* eslint-disable max-len -- generated from ${cfg.inputSubdir}/unit${n}.html */
export type ${cfg.typeName} = { id: string; title: string; bodyHtml: string };

${metaLines}

export const ${varName}: ${cfg.typeName}[] = ${json};
`;
    fs.writeFileSync(path.join(outDir, `unit${n}-chapters.ts`), chaptersTs, "utf8");

    const tocLines = chapters
      .map((c) => `  { id: ${JSON.stringify(c.id)}, label: ${JSON.stringify(c.title)} },`)
      .join("\n");
    const tocTs = `/* generated from ${cfg.inputSubdir}/unit${n}.html */
export const ${cfg.exportPrefix}${n}Toc = [
${tocLines}
] as const;
`;
    fs.writeFileSync(path.join(outDir, `unit${n}-toc.ts`), tocTs, "utf8");
    console.log(`${subjectKey}: unit${n} (${chapters.length} sections)`);
  }
}

const arg = process.argv[2];
if (!arg || arg === "all") {
  for (const key of Object.keys(SUBJECTS)) {
    generateSubject(key);
  }
} else if (SUBJECTS[arg]) {
  generateSubject(arg);
} else {
  console.error(`Usage: node scripts/generate-subject-chapters.mjs [${Object.keys(SUBJECTS).join(" | ")} | all]`);
  process.exit(1);
}
