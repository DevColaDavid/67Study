import { WORLD_HISTORY_UNIT_SWITCHER } from "../../data/worldHistory";
import {
  whUnit5Chapters,
  whUnit5DocTitle,
  whUnit5SidebarHeader,
  whUnit5SwitcherSummary,
} from "../../generated/world-history/unit5-chapters";
import { whUnit5Toc } from "../../generated/world-history/unit5-toc";
import SubjectChaptersHtmlPage from "../SubjectChaptersHtmlPage";

export default function WorldHistoryUnit5Page() {
  return (
    <SubjectChaptersHtmlPage
      unitNumber={5}
      hubPath="/ap-world-history"
      docLabel="AP World History"
      docTitle={whUnit5DocTitle}
      sidebarHeader={whUnit5SidebarHeader}
      unitSwitcherSummary={whUnit5SwitcherSummary}
      switcherLinks={WORLD_HISTORY_UNIT_SWITCHER}
      toc={[...whUnit5Toc]}
      chapters={whUnit5Chapters}
      enableMathJax={false}
    />
  );
}
