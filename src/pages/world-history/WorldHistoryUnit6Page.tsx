import { WORLD_HISTORY_UNIT_SWITCHER } from "../../data/worldHistory";
import {
  whUnit6Chapters,
  whUnit6DocTitle,
  whUnit6SidebarHeader,
  whUnit6SwitcherSummary,
} from "../../generated/world-history/unit6-chapters";
import { whUnit6Toc } from "../../generated/world-history/unit6-toc";
import SubjectChaptersHtmlPage from "../SubjectChaptersHtmlPage";

export default function WorldHistoryUnit6Page() {
  return (
    <SubjectChaptersHtmlPage
      unitNumber={6}
      hubPath="/ap-world-history"
      docLabel="AP World History"
      docTitle={whUnit6DocTitle}
      sidebarHeader={whUnit6SidebarHeader}
      unitSwitcherSummary={whUnit6SwitcherSummary}
      switcherLinks={WORLD_HISTORY_UNIT_SWITCHER}
      toc={[...whUnit6Toc]}
      chapters={whUnit6Chapters}
      enableMathJax={false}
    />
  );
}
