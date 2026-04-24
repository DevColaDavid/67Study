import { WORLD_HISTORY_UNIT_SWITCHER } from "../../data/worldHistory";
import {
  whUnit3Chapters,
  whUnit3DocTitle,
  whUnit3SidebarHeader,
  whUnit3SwitcherSummary,
} from "../../generated/world-history/unit3-chapters";
import { whUnit3Toc } from "../../generated/world-history/unit3-toc";
import SubjectChaptersHtmlPage from "../SubjectChaptersHtmlPage";

export default function WorldHistoryUnit3Page() {
  return (
    <SubjectChaptersHtmlPage
      unitNumber={3}
      hubPath="/ap-world-history"
      docLabel="AP World History"
      docTitle={whUnit3DocTitle}
      sidebarHeader={whUnit3SidebarHeader}
      unitSwitcherSummary={whUnit3SwitcherSummary}
      switcherLinks={WORLD_HISTORY_UNIT_SWITCHER}
      toc={[...whUnit3Toc]}
      chapters={whUnit3Chapters}
      enableMathJax={false}
    />
  );
}
