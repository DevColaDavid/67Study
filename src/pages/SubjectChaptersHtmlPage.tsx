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
      </div>
      <div ref={mathRootRef}>
        {chapters.map((c) => (
          <Chapter key={c.id} id={c.id} title={c.title}>
            <div className="legacy-chapter-html" dangerouslySetInnerHTML={{ __html: c.bodyHtml }} />
          </Chapter>
        ))}
      </div>
    </UnitLayout>
  );
}
