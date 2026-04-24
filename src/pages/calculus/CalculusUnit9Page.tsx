import { CALCULUS_UNIT_SWITCHER } from "../../data/calculus";
import {
  calcUnit9Chapters,
  calcUnit9DocLabel,
  calcUnit9DocTitle,
  calcUnit9SidebarHeader,
  calcUnit9SwitcherSummary,
} from "../../generated/calculus/unit9-chapters";
import { calcUnit9Toc } from "../../generated/calculus/unit9-toc";
import SubjectChaptersHtmlPage from "../SubjectChaptersHtmlPage";

export default function CalculusUnit9Page() {
  const docLabel = calcUnit9DocLabel.trim() || "AP Calculus";
  return (
    <SubjectChaptersHtmlPage
      unitNumber={9}
      hubPath="/ap-calculus"
      docLabel={docLabel}
      docTitle={calcUnit9DocTitle}
      sidebarHeader={calcUnit9SidebarHeader}
      unitSwitcherSummary={calcUnit9SwitcherSummary}
      switcherLinks={CALCULUS_UNIT_SWITCHER}
      toc={[...calcUnit9Toc]}
      chapters={calcUnit9Chapters}
      enableMathJax
    />
  );
}
