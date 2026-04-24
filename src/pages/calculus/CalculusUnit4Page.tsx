import { CALCULUS_UNIT_SWITCHER } from "../../data/calculus";
import {
  calcUnit4Chapters,
  calcUnit4DocLabel,
  calcUnit4DocTitle,
  calcUnit4SidebarHeader,
  calcUnit4SwitcherSummary,
} from "../../generated/calculus/unit4-chapters";
import { calcUnit4Toc } from "../../generated/calculus/unit4-toc";
import SubjectChaptersHtmlPage from "../SubjectChaptersHtmlPage";

export default function CalculusUnit4Page() {
  const docLabel = calcUnit4DocLabel.trim() || "AP Calculus";
  return (
    <SubjectChaptersHtmlPage
      unitNumber={4}
      hubPath="/ap-calculus"
      docLabel={docLabel}
      docTitle={calcUnit4DocTitle}
      sidebarHeader={calcUnit4SidebarHeader}
      unitSwitcherSummary={calcUnit4SwitcherSummary}
      switcherLinks={CALCULUS_UNIT_SWITCHER}
      toc={[...calcUnit4Toc]}
      chapters={calcUnit4Chapters}
      enableMathJax
    />
  );
}
