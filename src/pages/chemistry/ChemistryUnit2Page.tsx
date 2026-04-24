import { UnitLayout } from "../../layouts/UnitLayout";
import { CHEMISTRY_UNIT_SWITCHER, getChemistryUnitToc } from "../../data/chemistry";
import Unit2PartA from "../../content/ap-chemistry/unit2-a.mdx";
import Unit2PartB from "../../content/ap-chemistry/unit2-b.mdx";

export function ChemistryUnit2Page() {
  return (
    <UnitLayout
      sidebarHeader="Unit 2"
      backTo="/ap-chemistry"
      backLabel="Home"
      unitSwitcherSummary="Unit 2: Compound Structure and Properties"
      switcherLinks={CHEMISTRY_UNIT_SWITCHER}
      toc={getChemistryUnitToc(2)}
    >
      <div className="doc-title-block">
        <div className="doc-label">AP Chemistry</div>
        <h1 className="doc-title">Unit 2: Compound Structure and Properties</h1>
      </div>
      <Unit2PartA />
      <Unit2PartB />
    </UnitLayout>
  );
}
