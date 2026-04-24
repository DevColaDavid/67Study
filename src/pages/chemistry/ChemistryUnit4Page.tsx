import { chemUnit4Chapters } from "../../generated/chemistry/unit4-chapters";
import { chemUnit4Toc } from "../../generated/chemistry/unit4-toc";
import ChemistryChaptersHtmlPage from "./ChemistryChaptersHtmlPage";

export default function ChemistryUnit4Page() {
  return (
    <ChemistryChaptersHtmlPage
      unitNumber={4}
      docTitle="Unit 4: Chemical Reactions"
      sidebarHeader="Unit 4"
      unitSwitcherSummary="Unit 4: Chemical Reactions"
      toc={[...chemUnit4Toc]}
      chapters={chemUnit4Chapters}
    />
  );
}
