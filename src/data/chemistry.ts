import type { TocItem } from "./toc";
import { chemUnit3Toc } from "../generated/chemistry/unit3-toc";
import { chemUnit4Toc } from "../generated/chemistry/unit4-toc";
import { chemUnit5Toc } from "../generated/chemistry/unit5-toc";
import { chemUnit6Toc } from "../generated/chemistry/unit6-toc";
import { chemUnit7Toc } from "../generated/chemistry/unit7-toc";
import { chemUnit8Toc } from "../generated/chemistry/unit8-toc";
import { chemUnit9Toc } from "../generated/chemistry/unit9-toc";

export const CHEMISTRY_UNIT_SWITCHER = [
  { to: "/ap-chemistry/units/1", label: "Unit 1: Atomic Structure and Properties" },
  { to: "/ap-chemistry/units/2", label: "Unit 2: Compound Structure and Properties" },
  { to: "/ap-chemistry/units/3", label: "Unit 3: Properties of Substances and Mixtures" },
  { to: "/ap-chemistry/units/4", label: "Unit 4: Chemical Reactions" },
  { to: "/ap-chemistry/units/5", label: "Unit 5: Kinetics" },
  { to: "/ap-chemistry/units/6", label: "Unit 6: Thermochemistry" },
  { to: "/ap-chemistry/units/7", label: "Unit 7: Equilibrium" },
  { to: "/ap-chemistry/units/8", label: "Unit 8: Acids and Bases" },
  { to: "/ap-chemistry/units/9", label: "Unit 9: Thermodynamics and Electrochemistry" },
] as const;

const UNIT_1_TOC: TocItem[] = [
  { id: "t11", label: "1.1 Moles and Molar Mass" },
  { id: "t12", label: "1.2 Mass Spectra of Elements" },
  { id: "t13", label: "1.3 Elemental Composition" },
  { id: "t14", label: "1.4 Composition of Mixtures" },
  { id: "t15", label: "1.5 Atomic Structure and Electron Configuration" },
  { id: "t16", label: "1.6 Photoelectron Spectroscopy" },
  { id: "t17", label: "1.7 Periodic Trends" },
  { id: "t18", label: "1.8 Valence Electrons and Ionic Compounds" },
  { id: "unit1-extended", label: "Unit 1 Synthesis and Exam Framing" },
  { id: "unit1-practice", label: "Unit 1: Practice (AP-Style)" },
];

const UNIT_2_TOC: TocItem[] = [
  { id: "t21", label: "2.1 Types of Chemical Bonds" },
  { id: "t22", label: "2.2 Intramolecular Force and Potential Energy" },
  { id: "t23", label: "2.3 Structure of Ionic Solids" },
  { id: "t24", label: "2.4 Structure of Metals and Alloys" },
  { id: "t25", label: "2.5 Lewis Diagrams" },
  { id: "t26", label: "2.6 Resonance and Formal Charge" },
  { id: "t27", label: "2.7 VSEPR and Bond Hybridization" },
  { id: "unit2-practice", label: "Unit 2: Practice (AP-Style)" },
];

export function getChemistryUnitToc(unit: number): TocItem[] {
  switch (unit) {
    case 1:
      return UNIT_1_TOC;
    case 2:
      return UNIT_2_TOC;
    case 3:
      return [...chemUnit3Toc];
    case 4:
      return [...chemUnit4Toc];
    case 5:
      return [...chemUnit5Toc];
    case 6:
      return [...chemUnit6Toc];
    case 7:
      return [...chemUnit7Toc];
    case 8:
      return [...chemUnit8Toc];
    case 9:
      return [...chemUnit9Toc];
    default:
      return [];
  }
}
