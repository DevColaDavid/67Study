import { CALCULUS_UNIT_SWITCHER } from "../../data/calculus";
import type { UnitPageContent } from "../unitContent";
import { calcUnit1Chapters, calcUnit1DocLabel, calcUnit1DocTitle, calcUnit1SidebarHeader, calcUnit1SwitcherSummary } from "../../generated/calculus/unit1-chapters";
import { calcUnit1Toc } from "../../generated/calculus/unit1-toc";
import { calcUnit2Chapters, calcUnit2DocLabel, calcUnit2DocTitle, calcUnit2SidebarHeader, calcUnit2SwitcherSummary } from "../../generated/calculus/unit2-chapters";
import { calcUnit2Toc } from "../../generated/calculus/unit2-toc";
import { calcUnit3Chapters, calcUnit3DocLabel, calcUnit3DocTitle, calcUnit3SidebarHeader, calcUnit3SwitcherSummary } from "../../generated/calculus/unit3-chapters";
import { calcUnit3Toc } from "../../generated/calculus/unit3-toc";
import { calcUnit4Chapters, calcUnit4DocLabel, calcUnit4DocTitle, calcUnit4SidebarHeader, calcUnit4SwitcherSummary } from "../../generated/calculus/unit4-chapters";
import { calcUnit4Toc } from "../../generated/calculus/unit4-toc";
import { calcUnit5Chapters, calcUnit5DocLabel, calcUnit5DocTitle, calcUnit5SidebarHeader, calcUnit5SwitcherSummary } from "../../generated/calculus/unit5-chapters";
import { calcUnit5Toc } from "../../generated/calculus/unit5-toc";
import { calcUnit6Chapters, calcUnit6DocLabel, calcUnit6DocTitle, calcUnit6SidebarHeader, calcUnit6SwitcherSummary } from "../../generated/calculus/unit6-chapters";
import { calcUnit6Toc } from "../../generated/calculus/unit6-toc";
import { calcUnit7Chapters, calcUnit7DocLabel, calcUnit7DocTitle, calcUnit7SidebarHeader, calcUnit7SwitcherSummary } from "../../generated/calculus/unit7-chapters";
import { calcUnit7Toc } from "../../generated/calculus/unit7-toc";
import { calcUnit8Chapters, calcUnit8DocLabel, calcUnit8DocTitle, calcUnit8SidebarHeader, calcUnit8SwitcherSummary } from "../../generated/calculus/unit8-chapters";
import { calcUnit8Toc } from "../../generated/calculus/unit8-toc";
import { calcUnit9Chapters, calcUnit9DocLabel, calcUnit9DocTitle, calcUnit9SidebarHeader, calcUnit9SwitcherSummary } from "../../generated/calculus/unit9-chapters";
import { calcUnit9Toc } from "../../generated/calculus/unit9-toc";
import { calcUnit10Chapters, calcUnit10DocLabel, calcUnit10DocTitle, calcUnit10SidebarHeader, calcUnit10SwitcherSummary } from "../../generated/calculus/unit10-chapters";
import { calcUnit10Toc } from "../../generated/calculus/unit10-toc";

const CALCULUS_CONTENT: Record<number, UnitPageContent> = {
  1: { unitNumber: 1, hubPath: "/ap-calculus", docLabel: calcUnit1DocLabel.trim() || "AP Calculus", docTitle: calcUnit1DocTitle, sidebarHeader: calcUnit1SidebarHeader, unitSwitcherSummary: calcUnit1SwitcherSummary, switcherLinks: CALCULUS_UNIT_SWITCHER, toc: [...calcUnit1Toc], chapters: calcUnit1Chapters, enableMathJax: true },
  2: { unitNumber: 2, hubPath: "/ap-calculus", docLabel: calcUnit2DocLabel.trim() || "AP Calculus", docTitle: calcUnit2DocTitle, sidebarHeader: calcUnit2SidebarHeader, unitSwitcherSummary: calcUnit2SwitcherSummary, switcherLinks: CALCULUS_UNIT_SWITCHER, toc: [...calcUnit2Toc], chapters: calcUnit2Chapters, enableMathJax: true },
  3: { unitNumber: 3, hubPath: "/ap-calculus", docLabel: calcUnit3DocLabel.trim() || "AP Calculus", docTitle: calcUnit3DocTitle, sidebarHeader: calcUnit3SidebarHeader, unitSwitcherSummary: calcUnit3SwitcherSummary, switcherLinks: CALCULUS_UNIT_SWITCHER, toc: [...calcUnit3Toc], chapters: calcUnit3Chapters, enableMathJax: true },
  4: { unitNumber: 4, hubPath: "/ap-calculus", docLabel: calcUnit4DocLabel.trim() || "AP Calculus", docTitle: calcUnit4DocTitle, sidebarHeader: calcUnit4SidebarHeader, unitSwitcherSummary: calcUnit4SwitcherSummary, switcherLinks: CALCULUS_UNIT_SWITCHER, toc: [...calcUnit4Toc], chapters: calcUnit4Chapters, enableMathJax: true },
  5: { unitNumber: 5, hubPath: "/ap-calculus", docLabel: calcUnit5DocLabel.trim() || "AP Calculus", docTitle: calcUnit5DocTitle, sidebarHeader: calcUnit5SidebarHeader, unitSwitcherSummary: calcUnit5SwitcherSummary, switcherLinks: CALCULUS_UNIT_SWITCHER, toc: [...calcUnit5Toc], chapters: calcUnit5Chapters, enableMathJax: true },
  6: { unitNumber: 6, hubPath: "/ap-calculus", docLabel: calcUnit6DocLabel.trim() || "AP Calculus", docTitle: calcUnit6DocTitle, sidebarHeader: calcUnit6SidebarHeader, unitSwitcherSummary: calcUnit6SwitcherSummary, switcherLinks: CALCULUS_UNIT_SWITCHER, toc: [...calcUnit6Toc], chapters: calcUnit6Chapters, enableMathJax: true },
  7: { unitNumber: 7, hubPath: "/ap-calculus", docLabel: calcUnit7DocLabel.trim() || "AP Calculus", docTitle: calcUnit7DocTitle, sidebarHeader: calcUnit7SidebarHeader, unitSwitcherSummary: calcUnit7SwitcherSummary, switcherLinks: CALCULUS_UNIT_SWITCHER, toc: [...calcUnit7Toc], chapters: calcUnit7Chapters, enableMathJax: true },
  8: { unitNumber: 8, hubPath: "/ap-calculus", docLabel: calcUnit8DocLabel.trim() || "AP Calculus", docTitle: calcUnit8DocTitle, sidebarHeader: calcUnit8SidebarHeader, unitSwitcherSummary: calcUnit8SwitcherSummary, switcherLinks: CALCULUS_UNIT_SWITCHER, toc: [...calcUnit8Toc], chapters: calcUnit8Chapters, enableMathJax: true },
  9: { unitNumber: 9, hubPath: "/ap-calculus", docLabel: calcUnit9DocLabel.trim() || "AP Calculus BC Only", docTitle: calcUnit9DocTitle, sidebarHeader: calcUnit9SidebarHeader, unitSwitcherSummary: calcUnit9SwitcherSummary, switcherLinks: CALCULUS_UNIT_SWITCHER, toc: [...calcUnit9Toc], chapters: calcUnit9Chapters, enableMathJax: true },
  10: { unitNumber: 10, hubPath: "/ap-calculus", docLabel: calcUnit10DocLabel.trim() || "AP Calculus BC Only", docTitle: calcUnit10DocTitle, sidebarHeader: calcUnit10SidebarHeader, unitSwitcherSummary: calcUnit10SwitcherSummary, switcherLinks: CALCULUS_UNIT_SWITCHER, toc: [...calcUnit10Toc], chapters: calcUnit10Chapters, enableMathJax: true },
};

export function getCalculusUnitContent(unitNumber: number): UnitPageContent | undefined {
  return CALCULUS_CONTENT[unitNumber];
}
