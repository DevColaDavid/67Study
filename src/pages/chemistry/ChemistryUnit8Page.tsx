import { chemUnit8Chapters } from "../../generated/chemistry/unit8-chapters";
import { chemUnit8Toc } from "../../generated/chemistry/unit8-toc";
import ChemistryChaptersHtmlPage from "./ChemistryChaptersHtmlPage";

export default function ChemistryUnit8Page() {
  return (
    <ChemistryChaptersHtmlPage
      unitNumber={8}
      docTitle="Unit 8: Acids and Bases"
      sidebarHeader="Unit 8"
      unitSwitcherSummary="Unit 8: Acids and Bases"
      toc={[...chemUnit8Toc]}
      chapters={chemUnit8Chapters}
    />
  );
}
