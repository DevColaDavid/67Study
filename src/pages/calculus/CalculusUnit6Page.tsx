import { CALCULUS_UNIT_SWITCHER } from "../../data/calculus";
import {
  calcUnit6Chapters,
  calcUnit6DocLabel,
  calcUnit6DocTitle,
  calcUnit6SidebarHeader,
  calcUnit6SwitcherSummary,
} from "../../generated/calculus/unit6-chapters";
import { calcUnit6Toc } from "../../generated/calculus/unit6-toc";
import SubjectChaptersHtmlPage from "../SubjectChaptersHtmlPage";

export default function CalculusUnit6Page() {
  const docLabel = calcUnit6DocLabel.trim() || "AP Calculus";
  return (
    <SubjectChaptersHtmlPage
      unitNumber={6}
      hubPath="/ap-calculus"
      docLabel={docLabel}
      docTitle={calcUnit6DocTitle}
      sidebarHeader={calcUnit6SidebarHeader}
      unitSwitcherSummary={calcUnit6SwitcherSummary}
      switcherLinks={CALCULUS_UNIT_SWITCHER}
      toc={[...calcUnit6Toc]}
      chapters={calcUnit6Chapters}
      enableMathJax
    />
  );
}
