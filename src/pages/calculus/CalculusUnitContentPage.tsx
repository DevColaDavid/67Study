import { Navigate } from "react-router-dom";
import { getCalculusUnitContent } from "../../content/calculus/calculusUnitContent";
import { UnitPageContainer } from "../UnitPageContainer";

export function CalculusUnitContentPage({ unitNumber }: { unitNumber: number }) {
  const unitPageContent = getCalculusUnitContent(unitNumber);
  if (!unitPageContent) {
    return <Navigate to="/ap-calculus" replace />;
  }
  return <UnitPageContainer {...unitPageContent} />;
}
