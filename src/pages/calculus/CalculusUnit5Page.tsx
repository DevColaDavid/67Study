import { CALCULUS_UNIT_SWITCHER } from "../../data/calculus";
import {
  calcUnit5Chapters,
  calcUnit5DocLabel,
  calcUnit5DocTitle,
  calcUnit5SidebarHeader,
  calcUnit5SwitcherSummary,
} from "../../generated/calculus/unit5-chapters";
import { calcUnit5Toc } from "../../generated/calculus/unit5-toc";
import SubjectChaptersHtmlPage from "../SubjectChaptersHtmlPage";

export default function CalculusUnit5Page() {
  const docLabel = calcUnit5DocLabel.trim() || "AP Calculus";
  return (
    <SubjectChaptersHtmlPage
      unitNumber={5}
      hubPath="/ap-calculus"
      docLabel={docLabel}
      docTitle={calcUnit5DocTitle}
      sidebarHeader={calcUnit5SidebarHeader}
      unitSwitcherSummary={calcUnit5SwitcherSummary}
      switcherLinks={CALCULUS_UNIT_SWITCHER}
      toc={[...calcUnit5Toc]}
      chapters={calcUnit5Chapters}
      enableMathJax
    />
  );
}
