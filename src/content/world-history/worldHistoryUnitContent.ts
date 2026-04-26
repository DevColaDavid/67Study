import { WORLD_HISTORY_UNIT_SWITCHER } from "../../data/worldHistory";
import type { UnitPageContent } from "../unitContent";
import { whUnit1Chapters, whUnit1DocTitle, whUnit1SidebarHeader, whUnit1SwitcherSummary } from "../../generated/world-history/unit1-chapters";
import { whUnit1Toc } from "../../generated/world-history/unit1-toc";
import { whUnit2Chapters, whUnit2DocTitle, whUnit2SidebarHeader, whUnit2SwitcherSummary } from "../../generated/world-history/unit2-chapters";
import { whUnit2Toc } from "../../generated/world-history/unit2-toc";
import { whUnit3Chapters, whUnit3DocTitle, whUnit3SidebarHeader, whUnit3SwitcherSummary } from "../../generated/world-history/unit3-chapters";
import { whUnit3Toc } from "../../generated/world-history/unit3-toc";
import { whUnit4Chapters, whUnit4DocTitle, whUnit4SidebarHeader, whUnit4SwitcherSummary } from "../../generated/world-history/unit4-chapters";
import { whUnit4Toc } from "../../generated/world-history/unit4-toc";
import { whUnit5Chapters, whUnit5DocTitle, whUnit5SidebarHeader, whUnit5SwitcherSummary } from "../../generated/world-history/unit5-chapters";
import { whUnit5Toc } from "../../generated/world-history/unit5-toc";
import { whUnit6Chapters, whUnit6DocTitle, whUnit6SidebarHeader, whUnit6SwitcherSummary } from "../../generated/world-history/unit6-chapters";
import { whUnit6Toc } from "../../generated/world-history/unit6-toc";
import { whUnit7Chapters, whUnit7DocTitle, whUnit7SidebarHeader, whUnit7SwitcherSummary } from "../../generated/world-history/unit7-chapters";
import { whUnit7Toc } from "../../generated/world-history/unit7-toc";
import { whUnit8Chapters, whUnit8DocTitle, whUnit8SidebarHeader, whUnit8SwitcherSummary } from "../../generated/world-history/unit8-chapters";
import { whUnit8Toc } from "../../generated/world-history/unit8-toc";
import { whUnit9Chapters, whUnit9DocTitle, whUnit9SidebarHeader, whUnit9SwitcherSummary } from "../../generated/world-history/unit9-chapters";
import { whUnit9Toc } from "../../generated/world-history/unit9-toc";

const WORLD_HISTORY_CONTENT: Record<number, UnitPageContent> = {
  1: { unitNumber: 1, hubPath: "/ap-world-history", docLabel: "AP World History", docTitle: whUnit1DocTitle, sidebarHeader: whUnit1SidebarHeader, unitSwitcherSummary: whUnit1SwitcherSummary, switcherLinks: WORLD_HISTORY_UNIT_SWITCHER, toc: [...whUnit1Toc], chapters: whUnit1Chapters, enableMathJax: false },
  2: { unitNumber: 2, hubPath: "/ap-world-history", docLabel: "AP World History", docTitle: whUnit2DocTitle, sidebarHeader: whUnit2SidebarHeader, unitSwitcherSummary: whUnit2SwitcherSummary, switcherLinks: WORLD_HISTORY_UNIT_SWITCHER, toc: [...whUnit2Toc], chapters: whUnit2Chapters, enableMathJax: false },
  3: { unitNumber: 3, hubPath: "/ap-world-history", docLabel: "AP World History", docTitle: whUnit3DocTitle, sidebarHeader: whUnit3SidebarHeader, unitSwitcherSummary: whUnit3SwitcherSummary, switcherLinks: WORLD_HISTORY_UNIT_SWITCHER, toc: [...whUnit3Toc], chapters: whUnit3Chapters, enableMathJax: false },
  4: { unitNumber: 4, hubPath: "/ap-world-history", docLabel: "AP World History", docTitle: whUnit4DocTitle, sidebarHeader: whUnit4SidebarHeader, unitSwitcherSummary: whUnit4SwitcherSummary, switcherLinks: WORLD_HISTORY_UNIT_SWITCHER, toc: [...whUnit4Toc], chapters: whUnit4Chapters, enableMathJax: false },
  5: { unitNumber: 5, hubPath: "/ap-world-history", docLabel: "AP World History", docTitle: whUnit5DocTitle, sidebarHeader: whUnit5SidebarHeader, unitSwitcherSummary: whUnit5SwitcherSummary, switcherLinks: WORLD_HISTORY_UNIT_SWITCHER, toc: [...whUnit5Toc], chapters: whUnit5Chapters, enableMathJax: false },
  6: { unitNumber: 6, hubPath: "/ap-world-history", docLabel: "AP World History", docTitle: whUnit6DocTitle, sidebarHeader: whUnit6SidebarHeader, unitSwitcherSummary: whUnit6SwitcherSummary, switcherLinks: WORLD_HISTORY_UNIT_SWITCHER, toc: [...whUnit6Toc], chapters: whUnit6Chapters, enableMathJax: false },
  7: { unitNumber: 7, hubPath: "/ap-world-history", docLabel: "AP World History", docTitle: whUnit7DocTitle, sidebarHeader: whUnit7SidebarHeader, unitSwitcherSummary: whUnit7SwitcherSummary, switcherLinks: WORLD_HISTORY_UNIT_SWITCHER, toc: [...whUnit7Toc], chapters: whUnit7Chapters, enableMathJax: false },
  8: { unitNumber: 8, hubPath: "/ap-world-history", docLabel: "AP World History", docTitle: whUnit8DocTitle, sidebarHeader: whUnit8SidebarHeader, unitSwitcherSummary: whUnit8SwitcherSummary, switcherLinks: WORLD_HISTORY_UNIT_SWITCHER, toc: [...whUnit8Toc], chapters: whUnit8Chapters, enableMathJax: false },
  9: { unitNumber: 9, hubPath: "/ap-world-history", docLabel: "AP World History", docTitle: whUnit9DocTitle, sidebarHeader: whUnit9SidebarHeader, unitSwitcherSummary: whUnit9SwitcherSummary, switcherLinks: WORLD_HISTORY_UNIT_SWITCHER, toc: [...whUnit9Toc], chapters: whUnit9Chapters, enableMathJax: false },
};

export function getWorldHistoryUnitContent(unitNumber: number): UnitPageContent | undefined {
  return WORLD_HISTORY_CONTENT[unitNumber];
}
