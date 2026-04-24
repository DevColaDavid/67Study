import { useEffect, useRef } from "react";
import { UnitLayout } from "../layouts/UnitLayout";
import { Chapter } from "../components/notes";
import type { TocItem } from "../data/toc";
import type { UnitSwitcherLink } from "../layouts/UnitLayout";
import { clearLegacyMathTypeset, typesetLegacyMathIn } from "../lib/mathJaxLegacy";

export type HtmlChapter = { id: string; title: string; bodyHtml: string };

type SubjectChaptersHtmlPageProps = {
  unitNumber: number;
  hubPath: string;
  docLabel: string;
  docTitle: string;
  sidebarHeader: string;
  unitSwitcherSummary: string;
  switcherLinks: readonly UnitSwitcherLink[];
  toc: readonly TocItem[];
  chapters: readonly HtmlChapter[];
  enableMathJax?: boolean;
};

export default function SubjectChaptersHtmlPage({
  unitNumber,
  hubPath,
  docLabel,
  docTitle,
  sidebarHeader,
  unitSwitcherSummary,
  switcherLinks,
  toc,
  chapters,
  enableMathJax = true,
}: SubjectChaptersHtmlPageProps) {
  const mathRootRef = useRef<HTMLDivElement>(null);
  const hasBcChapters = chapters.some((c) => /\(BC\)\s*$/.test(c.title));
  const isBcOnlyLabel = /bc only/i.test(docLabel);

  const renderChapterTitle = (title: string) => {
    const m = title.match(/^(.*)\s+\(BC\)\s*$/);
    if (!m) {
      return title;
    }
    return (
      <>
        {m[1]}
        {" "}
        <span className="chapter-tag-bc" aria-label="BC only topic">
          BC
        </span>
      </>
    );
  };

  useEffect(() => {
    if (!enableMathJax) {
      return;
    }
    const el = mathRootRef.current;
    if (!el) {
      return;
    }
    void typesetLegacyMathIn(el).catch(() => undefined);
    return () => {
      clearLegacyMathTypeset(el);
    };
  }, [chapters, unitNumber, enableMathJax]);

  return (
    <UnitLayout
      sidebarHeader={sidebarHeader}
      backTo={hubPath}
      backLabel="Home"
      unitSwitcherSummary={unitSwitcherSummary}
      switcherLinks={switcherLinks}
      toc={[...toc]}
    >
      <div className="doc-title-block">
        {docLabel ? <div className="doc-label">{docLabel}</div> : null}
        <h1 className="doc-title">{docTitle}</h1>
        {hasBcChapters ? (
          <p className="bc-guidance-note">
            {isBcOnlyLabel
              ? "This unit is BC-only content."
              : "Sections marked BC are BC-only. AB students can skip those sections."}
          </p>
        ) : null}
      </div>
      <div ref={mathRootRef}>
        {chapters.map((c) => (
          <Chapter key={c.id} id={c.id} title={renderChapterTitle(c.title)}>
            <div className="legacy-chapter-html" dangerouslySetInnerHTML={{ __html: c.bodyHtml }} />
          </Chapter>
        ))}
      </div>
    </UnitLayout>
  );
}
