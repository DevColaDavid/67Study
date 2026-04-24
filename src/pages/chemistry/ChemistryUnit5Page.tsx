import { chemUnit5Chapters } from "../../generated/chemistry/unit5-chapters";
import { chemUnit5Toc } from "../../generated/chemistry/unit5-toc";
import ChemistryChaptersHtmlPage from "./ChemistryChaptersHtmlPage";

export default function ChemistryUnit5Page() {
  return (
    <ChemistryChaptersHtmlPage
      unitNumber={5}
      docTitle="Unit 5: Kinetics"
      sidebarHeader="Unit 5"
      unitSwitcherSummary="Unit 5: Kinetics"
      toc={[...chemUnit5Toc]}
      chapters={chemUnit5Chapters}
    />
  );
}
