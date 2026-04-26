import type { ReactNode } from "react";
import type { TocItem } from "../data/toc";
import type { UnitSwitcherLink } from "../layouts/UnitLayout";

export type UnitChapterContent = {
  id: string;
  title: string;
  bodyHtml?: string;
  content?: ReactNode;
};

export type UnitPageContent = {
  unitNumber: number;
  hubPath: string;
  docLabel: string;
  docTitle: string;
  sidebarHeader: string;
  unitSwitcherSummary: string;
  switcherLinks: readonly UnitSwitcherLink[];
  toc: readonly TocItem[];
  chapters: readonly UnitChapterContent[];
  enableMathJax?: boolean;
};
