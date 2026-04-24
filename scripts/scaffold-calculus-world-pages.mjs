import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, "..");

const calcDir = path.join(root, "src", "pages", "calculus");
const whDir = path.join(root, "src", "pages", "world-history");
fs.mkdirSync(calcDir, { recursive: true });
fs.mkdirSync(whDir, { recursive: true });

for (let n = 1; n <= 10; n++) {
  const ts = `import { CALCULUS_UNIT_SWITCHER } from "../../data/calculus";
import {
  calcUnit${n}Chapters,
  calcUnit${n}DocLabel,
  calcUnit${n}DocTitle,
  calcUnit${n}SidebarHeader,
  calcUnit${n}SwitcherSummary,
} from "../../generated/calculus/unit${n}-chapters";
import { calcUnit${n}Toc } from "../../generated/calculus/unit${n}-toc";
import SubjectChaptersHtmlPage from "../SubjectChaptersHtmlPage";

export default function CalculusUnit${n}Page() {
  const docLabel = calcUnit${n}DocLabel.trim() || "AP Calculus";
  return (
    <SubjectChaptersHtmlPage
      unitNumber={${n}}
      hubPath="/ap-calculus"
      docLabel={docLabel}
      docTitle={calcUnit${n}DocTitle}
      sidebarHeader={calcUnit${n}SidebarHeader}
      unitSwitcherSummary={calcUnit${n}SwitcherSummary}
      switcherLinks={CALCULUS_UNIT_SWITCHER}
      toc={[...calcUnit${n}Toc]}
      chapters={calcUnit${n}Chapters}
      enableMathJax
    />
  );
}
`;
  fs.writeFileSync(path.join(calcDir, `CalculusUnit${n}Page.tsx`), ts, "utf8");
}

for (let n = 1; n <= 9; n++) {
  const ts = `import { WORLD_HISTORY_UNIT_SWITCHER } from "../../data/worldHistory";
import {
  whUnit${n}Chapters,
  whUnit${n}DocTitle,
  whUnit${n}SidebarHeader,
  whUnit${n}SwitcherSummary,
} from "../../generated/world-history/unit${n}-chapters";
import { whUnit${n}Toc } from "../../generated/world-history/unit${n}-toc";
import SubjectChaptersHtmlPage from "../SubjectChaptersHtmlPage";

export default function WorldHistoryUnit${n}Page() {
  return (
    <SubjectChaptersHtmlPage
      unitNumber={${n}}
      hubPath="/ap-world-history"
      docLabel="AP World History"
      docTitle={whUnit${n}DocTitle}
      sidebarHeader={whUnit${n}SidebarHeader}
      unitSwitcherSummary={whUnit${n}SwitcherSummary}
      switcherLinks={WORLD_HISTORY_UNIT_SWITCHER}
      toc={[...whUnit${n}Toc]}
      chapters={whUnit${n}Chapters}
      enableMathJax={false}
    />
  );
}
`;
  fs.writeFileSync(path.join(whDir, `WorldHistoryUnit${n}Page.tsx`), ts, "utf8");
}

console.log("Wrote calculus 1–10 and world-history 1–9 unit pages.");
