import { chemUnit6Chapters } from "../../generated/chemistry/unit6-chapters";
import { chemUnit6Toc } from "../../generated/chemistry/unit6-toc";
import ChemistryChaptersHtmlPage from "./ChemistryChaptersHtmlPage";

export default function ChemistryUnit6Page() {
  return (
    <ChemistryChaptersHtmlPage
      unitNumber={6}
      docTitle="Unit 6: Thermochemistry"
      sidebarHeader="Unit 6"
      unitSwitcherSummary="Unit 6: Thermochemistry"
      toc={[...chemUnit6Toc]}
      chapters={chemUnit6Chapters}
    />
  );
}
