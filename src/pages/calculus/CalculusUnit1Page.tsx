import { CALCULUS_UNIT_SWITCHER } from "../../data/calculus";
import {
  calcUnit1Chapters,
  calcUnit1DocLabel,
  calcUnit1DocTitle,
  calcUnit1SidebarHeader,
  calcUnit1SwitcherSummary,
} from "../../generated/calculus/unit1-chapters";
import { calcUnit1Toc } from "../../generated/calculus/unit1-toc";
import SubjectChaptersHtmlPage from "../SubjectChaptersHtmlPage";

export default function CalculusUnit1Page() {
  const docLabel = calcUnit1DocLabel.trim() || "AP Calculus";
  return (
    <SubjectChaptersHtmlPage
      unitNumber={1}
      hubPath="/ap-calculus"
      docLabel={docLabel}
      docTitle={calcUnit1DocTitle}
      sidebarHeader={calcUnit1SidebarHeader}
      unitSwitcherSummary={calcUnit1SwitcherSummary}
      switcherLinks={CALCULUS_UNIT_SWITCHER}
      toc={[...calcUnit1Toc]}
      chapters={calcUnit1Chapters}
      enableMathJax
    />
  );
}
