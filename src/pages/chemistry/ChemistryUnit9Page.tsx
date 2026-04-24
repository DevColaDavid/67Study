import { chemUnit9Chapters } from "../../generated/chemistry/unit9-chapters";
import { chemUnit9Toc } from "../../generated/chemistry/unit9-toc";
import ChemistryChaptersHtmlPage from "./ChemistryChaptersHtmlPage";

export default function ChemistryUnit9Page() {
  return (
    <ChemistryChaptersHtmlPage
      unitNumber={9}
      docTitle="Unit 9: Thermodynamics and Electrochemistry"
      sidebarHeader="Unit 9"
      unitSwitcherSummary="Unit 9: Thermodynamics and Electrochemistry"
      toc={[...chemUnit9Toc]}
      chapters={chemUnit9Chapters}
    />
  );
}
