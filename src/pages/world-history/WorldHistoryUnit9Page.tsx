import { WORLD_HISTORY_UNIT_SWITCHER } from "../../data/worldHistory";
import {
  whUnit9Chapters,
  whUnit9DocTitle,
  whUnit9SidebarHeader,
  whUnit9SwitcherSummary,
} from "../../generated/world-history/unit9-chapters";
import { whUnit9Toc } from "../../generated/world-history/unit9-toc";
import SubjectChaptersHtmlPage from "../SubjectChaptersHtmlPage";

export default function WorldHistoryUnit9Page() {
  return (
    <SubjectChaptersHtmlPage
      unitNumber={9}
      hubPath="/ap-world-history"
      docLabel="AP World History"
      docTitle={whUnit9DocTitle}
      sidebarHeader={whUnit9SidebarHeader}
      unitSwitcherSummary={whUnit9SwitcherSummary}
      switcherLinks={WORLD_HISTORY_UNIT_SWITCHER}
      toc={[...whUnit9Toc]}
      chapters={whUnit9Chapters}
      enableMathJax={false}
    />
  );
}
