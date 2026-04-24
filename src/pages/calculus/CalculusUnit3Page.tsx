import { CALCULUS_UNIT_SWITCHER } from "../../data/calculus";
import {
  calcUnit3Chapters,
  calcUnit3DocLabel,
  calcUnit3DocTitle,
  calcUnit3SidebarHeader,
  calcUnit3SwitcherSummary,
} from "../../generated/calculus/unit3-chapters";
import { calcUnit3Toc } from "../../generated/calculus/unit3-toc";
import SubjectChaptersHtmlPage from "../SubjectChaptersHtmlPage";

export default function CalculusUnit3Page() {
  const docLabel = calcUnit3DocLabel.trim() || "AP Calculus";
  return (
    <SubjectChaptersHtmlPage
      unitNumber={3}
      hubPath="/ap-calculus"
      docLabel={docLabel}
      docTitle={calcUnit3DocTitle}
      sidebarHeader={calcUnit3SidebarHeader}
      unitSwitcherSummary={calcUnit3SwitcherSummary}
      switcherLinks={CALCULUS_UNIT_SWITCHER}
      toc={[...calcUnit3Toc]}
      chapters={calcUnit3Chapters}
      enableMathJax
    />
  );
}
