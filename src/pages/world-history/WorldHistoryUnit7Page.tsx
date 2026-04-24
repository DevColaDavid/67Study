import { WORLD_HISTORY_UNIT_SWITCHER } from "../../data/worldHistory";
import {
  whUnit7Chapters,
  whUnit7DocTitle,
  whUnit7SidebarHeader,
  whUnit7SwitcherSummary,
} from "../../generated/world-history/unit7-chapters";
import { whUnit7Toc } from "../../generated/world-history/unit7-toc";
import SubjectChaptersHtmlPage from "../SubjectChaptersHtmlPage";

export default function WorldHistoryUnit7Page() {
  return (
    <SubjectChaptersHtmlPage
      unitNumber={7}
      hubPath="/ap-world-history"
      docLabel="AP World History"
      docTitle={whUnit7DocTitle}
      sidebarHeader={whUnit7SidebarHeader}
      unitSwitcherSummary={whUnit7SwitcherSummary}
      switcherLinks={WORLD_HISTORY_UNIT_SWITCHER}
      toc={[...whUnit7Toc]}
      chapters={whUnit7Chapters}
      enableMathJax={false}
    />
  );
}
