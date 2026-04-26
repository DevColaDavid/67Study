import { Navigate } from "react-router-dom";
import { getChemistryGeneratedUnitContent } from "../../content/chemistry/chemistryGeneratedUnitContent";
import { UnitPageContainer } from "../UnitPageContainer";

export function ChemistryGeneratedUnitContentPage({ unitNumber }: { unitNumber: number }) {
  const unitPageContent = getChemistryGeneratedUnitContent(unitNumber);
  if (!unitPageContent) {
    return <Navigate to="/ap-chemistry" replace />;
  }
  return <UnitPageContainer {...unitPageContent} />;
}
