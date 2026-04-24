import { WORLD_HISTORY_UNIT_SWITCHER } from "../../data/worldHistory";
import {
  whUnit1Chapters,
  whUnit1DocTitle,
  whUnit1SidebarHeader,
  whUnit1SwitcherSummary,
} from "../../generated/world-history/unit1-chapters";
import { whUnit1Toc } from "../../generated/world-history/unit1-toc";
import SubjectChaptersHtmlPage from "../SubjectChaptersHtmlPage";

export default function WorldHistoryUnit1Page() {
  return (
    <SubjectChaptersHtmlPage
      unitNumber={1}
      hubPath="/ap-world-history"
      docLabel="AP World History"
      docTitle={whUnit1DocTitle}
      sidebarHeader={whUnit1SidebarHeader}
      unitSwitcherSummary={whUnit1SwitcherSummary}
      switcherLinks={WORLD_HISTORY_UNIT_SWITCHER}
      toc={[...whUnit1Toc]}
      chapters={whUnit1Chapters}
      enableMathJax={false}
    />
  );
}
