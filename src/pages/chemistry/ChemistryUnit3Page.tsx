import { chemUnit3Chapters } from "../../generated/chemistry/unit3-chapters";
import { chemUnit3Toc } from "../../generated/chemistry/unit3-toc";
import ChemistryChaptersHtmlPage from "./ChemistryChaptersHtmlPage";

export default function ChemistryUnit3Page() {
  return (
    <ChemistryChaptersHtmlPage
      unitNumber={3}
      docTitle="Unit 3: Properties of Substances and Mixtures"
      sidebarHeader="Unit 3"
      unitSwitcherSummary="Unit 3: Properties of Substances and Mixtures"
      toc={[...chemUnit3Toc]}
      chapters={chemUnit3Chapters}
    />
  );
}
