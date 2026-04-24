import { WORLD_HISTORY_UNIT_SWITCHER } from "../../data/worldHistory";
import {
  whUnit8Chapters,
  whUnit8DocTitle,
  whUnit8SidebarHeader,
  whUnit8SwitcherSummary,
} from "../../generated/world-history/unit8-chapters";
import { whUnit8Toc } from "../../generated/world-history/unit8-toc";
import SubjectChaptersHtmlPage from "../SubjectChaptersHtmlPage";

export default function WorldHistoryUnit8Page() {
  return (
    <SubjectChaptersHtmlPage
      unitNumber={8}
      hubPath="/ap-world-history"
      docLabel="AP World History"
      docTitle={whUnit8DocTitle}
      sidebarHeader={whUnit8SidebarHeader}
      unitSwitcherSummary={whUnit8SwitcherSummary}
      switcherLinks={WORLD_HISTORY_UNIT_SWITCHER}
      toc={[...whUnit8Toc]}
      chapters={whUnit8Chapters}
      enableMathJax={false}
    />
  );
}
