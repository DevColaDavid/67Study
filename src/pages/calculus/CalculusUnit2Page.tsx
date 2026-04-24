import { CALCULUS_UNIT_SWITCHER } from "../../data/calculus";
import {
  calcUnit2Chapters,
  calcUnit2DocLabel,
  calcUnit2DocTitle,
  calcUnit2SidebarHeader,
  calcUnit2SwitcherSummary,
} from "../../generated/calculus/unit2-chapters";
import { calcUnit2Toc } from "../../generated/calculus/unit2-toc";
import SubjectChaptersHtmlPage from "../SubjectChaptersHtmlPage";

export default function CalculusUnit2Page() {
  const docLabel = calcUnit2DocLabel.trim() || "AP Calculus";
  return (
    <SubjectChaptersHtmlPage
      unitNumber={2}
      hubPath="/ap-calculus"
      docLabel={docLabel}
      docTitle={calcUnit2DocTitle}
      sidebarHeader={calcUnit2SidebarHeader}
      unitSwitcherSummary={calcUnit2SwitcherSummary}
      switcherLinks={CALCULUS_UNIT_SWITCHER}
      toc={[...calcUnit2Toc]}
      chapters={calcUnit2Chapters}
      enableMathJax
    />
  );
}
