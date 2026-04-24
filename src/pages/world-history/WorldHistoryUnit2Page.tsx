import { WORLD_HISTORY_UNIT_SWITCHER } from "../../data/worldHistory";
import {
  whUnit2Chapters,
  whUnit2DocTitle,
  whUnit2SidebarHeader,
  whUnit2SwitcherSummary,
} from "../../generated/world-history/unit2-chapters";
import { whUnit2Toc } from "../../generated/world-history/unit2-toc";
import SubjectChaptersHtmlPage from "../SubjectChaptersHtmlPage";

export default function WorldHistoryUnit2Page() {
  return (
    <SubjectChaptersHtmlPage
      unitNumber={2}
      hubPath="/ap-world-history"
      docLabel="AP World History"
      docTitle={whUnit2DocTitle}
      sidebarHeader={whUnit2SidebarHeader}
      unitSwitcherSummary={whUnit2SwitcherSummary}
      switcherLinks={WORLD_HISTORY_UNIT_SWITCHER}
      toc={[...whUnit2Toc]}
      chapters={whUnit2Chapters}
      enableMathJax={false}
    />
  );
}
