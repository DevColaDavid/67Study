import { chemUnit7Chapters } from "../../generated/chemistry/unit7-chapters";
import { chemUnit7Toc } from "../../generated/chemistry/unit7-toc";
import ChemistryChaptersHtmlPage from "./ChemistryChaptersHtmlPage";

export default function ChemistryUnit7Page() {
  return (
    <ChemistryChaptersHtmlPage
      unitNumber={7}
      docTitle="Unit 7: Equilibrium"
      sidebarHeader="Unit 7"
      unitSwitcherSummary="Unit 7: Equilibrium"
      toc={[...chemUnit7Toc]}
      chapters={chemUnit7Chapters}
    />
  );
}
