import { CALCULUS_UNIT_SWITCHER } from "../../data/calculus";
import {
  calcUnit7Chapters,
  calcUnit7DocLabel,
  calcUnit7DocTitle,
  calcUnit7SidebarHeader,
  calcUnit7SwitcherSummary,
} from "../../generated/calculus/unit7-chapters";
import { calcUnit7Toc } from "../../generated/calculus/unit7-toc";
import SubjectChaptersHtmlPage from "../SubjectChaptersHtmlPage";

export default function CalculusUnit7Page() {
  const docLabel = calcUnit7DocLabel.trim() || "AP Calculus";
  return (
    <SubjectChaptersHtmlPage
      unitNumber={7}
      hubPath="/ap-calculus"
      docLabel={docLabel}
      docTitle={calcUnit7DocTitle}
      sidebarHeader={calcUnit7SidebarHeader}
      unitSwitcherSummary={calcUnit7SwitcherSummary}
      switcherLinks={CALCULUS_UNIT_SWITCHER}
      toc={[...calcUnit7Toc]}
      chapters={calcUnit7Chapters}
      enableMathJax
    />
  );
}
