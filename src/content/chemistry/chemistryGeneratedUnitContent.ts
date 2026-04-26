import { CHEMISTRY_UNIT_SWITCHER } from "../../data/chemistry";
import type { UnitPageContent } from "../unitContent";
import { chemUnit3Chapters, chemUnit3DocTitle, chemUnit3SidebarHeader, chemUnit3SwitcherSummary } from "../../generated/chemistry/unit3-chapters";
import { chemUnit3Toc } from "../../generated/chemistry/unit3-toc";
import { chemUnit4Chapters, chemUnit4DocTitle, chemUnit4SidebarHeader, chemUnit4SwitcherSummary } from "../../generated/chemistry/unit4-chapters";
import { chemUnit4Toc } from "../../generated/chemistry/unit4-toc";
import { chemUnit5Chapters, chemUnit5DocTitle, chemUnit5SidebarHeader, chemUnit5SwitcherSummary } from "../../generated/chemistry/unit5-chapters";
import { chemUnit5Toc } from "../../generated/chemistry/unit5-toc";
import { chemUnit6Chapters, chemUnit6DocTitle, chemUnit6SidebarHeader, chemUnit6SwitcherSummary } from "../../generated/chemistry/unit6-chapters";
import { chemUnit6Toc } from "../../generated/chemistry/unit6-toc";
import { chemUnit7Chapters, chemUnit7DocTitle, chemUnit7SidebarHeader, chemUnit7SwitcherSummary } from "../../generated/chemistry/unit7-chapters";
import { chemUnit7Toc } from "../../generated/chemistry/unit7-toc";
import { chemUnit8Chapters, chemUnit8DocTitle, chemUnit8SidebarHeader, chemUnit8SwitcherSummary } from "../../generated/chemistry/unit8-chapters";
import { chemUnit8Toc } from "../../generated/chemistry/unit8-toc";
import { chemUnit9Chapters, chemUnit9DocTitle, chemUnit9SidebarHeader, chemUnit9SwitcherSummary } from "../../generated/chemistry/unit9-chapters";
import { chemUnit9Toc } from "../../generated/chemistry/unit9-toc";

const CHEMISTRY_GENERATED_CONTENT: Record<number, UnitPageContent> = {
  3: {
    unitNumber: 3,
    hubPath: "/ap-chemistry",
    docLabel: "AP Chemistry",
    docTitle: chemUnit3DocTitle,
    sidebarHeader: chemUnit3SidebarHeader,
    unitSwitcherSummary: chemUnit3SwitcherSummary,
    switcherLinks: CHEMISTRY_UNIT_SWITCHER,
    toc: [...chemUnit3Toc],
    chapters: chemUnit3Chapters,
    enableMathJax: true,
  },
  4: {
    unitNumber: 4,
    hubPath: "/ap-chemistry",
    docLabel: "AP Chemistry",
    docTitle: chemUnit4DocTitle,
    sidebarHeader: chemUnit4SidebarHeader,
    unitSwitcherSummary: chemUnit4SwitcherSummary,
    switcherLinks: CHEMISTRY_UNIT_SWITCHER,
    toc: [...chemUnit4Toc],
    chapters: chemUnit4Chapters,
    enableMathJax: true,
  },
  5: {
    unitNumber: 5,
    hubPath: "/ap-chemistry",
    docLabel: "AP Chemistry",
    docTitle: chemUnit5DocTitle,
    sidebarHeader: chemUnit5SidebarHeader,
    unitSwitcherSummary: chemUnit5SwitcherSummary,
    switcherLinks: CHEMISTRY_UNIT_SWITCHER,
    toc: [...chemUnit5Toc],
    chapters: chemUnit5Chapters,
    enableMathJax: true,
  },
  6: {
    unitNumber: 6,
    hubPath: "/ap-chemistry",
    docLabel: "AP Chemistry",
    docTitle: chemUnit6DocTitle,
    sidebarHeader: chemUnit6SidebarHeader,
    unitSwitcherSummary: chemUnit6SwitcherSummary,
    switcherLinks: CHEMISTRY_UNIT_SWITCHER,
    toc: [...chemUnit6Toc],
    chapters: chemUnit6Chapters,
    enableMathJax: true,
  },
  7: {
    unitNumber: 7,
    hubPath: "/ap-chemistry",
    docLabel: "AP Chemistry",
    docTitle: chemUnit7DocTitle,
    sidebarHeader: chemUnit7SidebarHeader,
    unitSwitcherSummary: chemUnit7SwitcherSummary,
    switcherLinks: CHEMISTRY_UNIT_SWITCHER,
    toc: [...chemUnit7Toc],
    chapters: chemUnit7Chapters,
    enableMathJax: true,
  },
  8: {
    unitNumber: 8,
    hubPath: "/ap-chemistry",
    docLabel: "AP Chemistry",
    docTitle: chemUnit8DocTitle,
    sidebarHeader: chemUnit8SidebarHeader,
    unitSwitcherSummary: chemUnit8SwitcherSummary,
    switcherLinks: CHEMISTRY_UNIT_SWITCHER,
    toc: [...chemUnit8Toc],
    chapters: chemUnit8Chapters,
    enableMathJax: true,
  },
  9: {
    unitNumber: 9,
    hubPath: "/ap-chemistry",
    docLabel: "AP Chemistry",
    docTitle: chemUnit9DocTitle,
    sidebarHeader: chemUnit9SidebarHeader,
    unitSwitcherSummary: chemUnit9SwitcherSummary,
    switcherLinks: CHEMISTRY_UNIT_SWITCHER,
    toc: [...chemUnit9Toc],
    chapters: chemUnit9Chapters,
    enableMathJax: true,
  },
};

export function getChemistryGeneratedUnitContent(unitNumber: number): UnitPageContent | undefined {
  return CHEMISTRY_GENERATED_CONTENT[unitNumber];
}
