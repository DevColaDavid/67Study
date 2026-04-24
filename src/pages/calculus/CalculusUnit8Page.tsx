import { CALCULUS_UNIT_SWITCHER } from "../../data/calculus";
import {
  calcUnit8Chapters,
  calcUnit8DocLabel,
  calcUnit8DocTitle,
  calcUnit8SidebarHeader,
  calcUnit8SwitcherSummary,
} from "../../generated/calculus/unit8-chapters";
import { calcUnit8Toc } from "../../generated/calculus/unit8-toc";
import SubjectChaptersHtmlPage from "../SubjectChaptersHtmlPage";

export default function CalculusUnit8Page() {
  const docLabel = calcUnit8DocLabel.trim() || "AP Calculus";
  return (
    <SubjectChaptersHtmlPage
      unitNumber={8}
      hubPath="/ap-calculus"
      docLabel={docLabel}
      docTitle={calcUnit8DocTitle}
      sidebarHeader={calcUnit8SidebarHeader}
      unitSwitcherSummary={calcUnit8SwitcherSummary}
      switcherLinks={CALCULUS_UNIT_SWITCHER}
      toc={[...calcUnit8Toc]}
      chapters={calcUnit8Chapters}
      enableMathJax
    />
  );
}
