import { CALCULUS_UNIT_SWITCHER } from "../../data/calculus";
import {
  calcUnit10Chapters,
  calcUnit10DocLabel,
  calcUnit10DocTitle,
  calcUnit10SidebarHeader,
  calcUnit10SwitcherSummary,
} from "../../generated/calculus/unit10-chapters";
import { calcUnit10Toc } from "../../generated/calculus/unit10-toc";
import SubjectChaptersHtmlPage from "../SubjectChaptersHtmlPage";

export default function CalculusUnit10Page() {
  const docLabel = calcUnit10DocLabel.trim() || "AP Calculus";
  return (
    <SubjectChaptersHtmlPage
      unitNumber={10}
      hubPath="/ap-calculus"
      docLabel={docLabel}
      docTitle={calcUnit10DocTitle}
      sidebarHeader={calcUnit10SidebarHeader}
      unitSwitcherSummary={calcUnit10SwitcherSummary}
      switcherLinks={CALCULUS_UNIT_SWITCHER}
      toc={[...calcUnit10Toc]}
      chapters={calcUnit10Chapters}
      enableMathJax
    />
  );
}
