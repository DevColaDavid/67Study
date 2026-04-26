import { UnitLayout } from "../../layouts/UnitLayout";
import { CHEMISTRY_UNIT_SWITCHER, getChemistryUnitToc } from "../../data/chemistry";
import Unit1PartA from "../../content/ap-chemistry/unit1-a";
import Unit1PartB from "../../content/ap-chemistry/unit1-b";
import Unit1PartC from "../../content/ap-chemistry/unit1-c";

export default function ChemistryUnit1Page() {
  return (
    <UnitLayout
      sidebarHeader="Unit 1"
      backTo="/ap-chemistry"
      backLabel="Home"
      unitSwitcherSummary="Unit 1: Atomic Structure and Properties"
      switcherLinks={CHEMISTRY_UNIT_SWITCHER}
      toc={getChemistryUnitToc(1)}
    >
      <div className="doc-title-block">
        <div className="doc-label">AP Chemistry</div>
        <h1 className="doc-title">Unit 1: Atomic Structure and Properties</h1>
      </div>
      <Unit1PartA />
      <Unit1PartB />
      <Unit1PartC />
    </UnitLayout>
  );
}
