import { Navigate } from "react-router-dom";
import { getWorldHistoryUnitContent } from "../../content/world-history/worldHistoryUnitContent";
import { UnitPageContainer } from "../UnitPageContainer";

export function WorldHistoryUnitContentPage({ unitNumber }: { unitNumber: number }) {
  const unitPageContent = getWorldHistoryUnitContent(unitNumber);
  if (!unitPageContent) {
    return <Navigate to="/ap-world-history" replace />;
  }
  return <UnitPageContainer {...unitPageContent} />;
}
