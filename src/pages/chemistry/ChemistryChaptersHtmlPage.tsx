import { CHEMISTRY_UNIT_SWITCHER } from "../../data/chemistry";
import SubjectChaptersHtmlPage, { type HtmlChapter } from "../SubjectChaptersHtmlPage";
import type { TocItem } from "../../data/toc";
type ChemistryChaptersHtmlPageProps = {
  unitNumber: number;
  docTitle: string;
  sidebarHeader: string;
  unitSwitcherSummary: string;
  toc: readonly TocItem[];
  chapters: readonly HtmlChapter[];
};

export default function ChemistryChaptersHtmlPage({
  unitNumber,
  docTitle,
  sidebarHeader,
  unitSwitcherSummary,
  toc,
  chapters,
}: ChemistryChaptersHtmlPageProps) {
  return (
    <SubjectChaptersHtmlPage
      unitNumber={unitNumber}
      hubPath="/ap-chemistry"
      docLabel="AP Chemistry"
      docTitle={docTitle}
      sidebarHeader={sidebarHeader}
      unitSwitcherSummary={unitSwitcherSummary}
      switcherLinks={CHEMISTRY_UNIT_SWITCHER}
      toc={toc}
      chapters={chapters}
      enableMathJax
    />
  );
}
