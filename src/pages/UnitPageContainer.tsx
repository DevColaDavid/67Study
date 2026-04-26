import { useEffect, useRef } from "react";
import { Chapter } from "../components/notes";
import { UnitLayout } from "../layouts/UnitLayout";
import { HtmlSanitizedContent } from "../components/HtmlSanitizedContent";
import { clearLegacyMathTypeset, typesetLegacyMathIn } from "../lib/mathJaxLegacy";
import type { UnitPageContent } from "../content/unitContent";

function renderChapterTitle(title: string) {
  const matchedTitle = title.match(/^(.*)\s+\(BC\)\s*$/);
  if (!matchedTitle) {
    return title;
  }
  return (
    <>
      {matchedTitle[1]}{" "}
      <span className="chapter-tag-bc" aria-label="BC only topic">
        BC
      </span>
    </>
  );
}

export function UnitPageContainer({
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
}: UnitPageContent) {
  const mathRootRef = useRef<HTMLDivElement>(null);
  const hasBcChapters = chapters.some((chapterItem) => /\(BC\)\s*$/.test(chapterItem.title));
  const isBcOnlyLabel = /bc only/i.test(docLabel);

  useEffect(() => {
    if (!enableMathJax) {
      return;
    }
    const rootElement = mathRootRef.current;
    if (!rootElement) {
      return;
    }
    void typesetLegacyMathIn(rootElement).catch(() => undefined);
    return () => {
      clearLegacyMathTypeset(rootElement);
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
        {chapters.map((chapterItem) => (
          <Chapter key={chapterItem.id} id={chapterItem.id} title={renderChapterTitle(chapterItem.title)}>
            <div className="legacy-chapter-html">
              {chapterItem.content ?? <HtmlSanitizedContent htmlText={chapterItem.bodyHtml ?? ""} />}
            </div>
          </Chapter>
        ))}
      </div>
    </UnitLayout>
  );
}
