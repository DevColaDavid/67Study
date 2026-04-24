import { WORLD_HISTORY_UNIT_SWITCHER } from "../../data/worldHistory";
import {
  whUnit4Chapters,
  whUnit4DocTitle,
  whUnit4SidebarHeader,
  whUnit4SwitcherSummary,
} from "../../generated/world-history/unit4-chapters";
import { whUnit4Toc } from "../../generated/world-history/unit4-toc";
import SubjectChaptersHtmlPage from "../SubjectChaptersHtmlPage";

export default function WorldHistoryUnit4Page() {
  return (
    <SubjectChaptersHtmlPage
      unitNumber={4}
      hubPath="/ap-world-history"
      docLabel="AP World History"
      docTitle={whUnit4DocTitle}
      sidebarHeader={whUnit4SidebarHeader}
      unitSwitcherSummary={whUnit4SwitcherSummary}
      switcherLinks={WORLD_HISTORY_UNIT_SWITCHER}
      toc={[...whUnit4Toc]}
      chapters={whUnit4Chapters}
      enableMathJax={false}
    />
  );
}
