export interface UnitMeta {
  unit: number;
  title: string;
  bcOnly?: boolean;
}

export interface SubjectMeta {
  id: string;
  name: string;
  slug: string;
  color: string;
  units: UnitMeta[];
}

export const SUBJECTS: SubjectMeta[] = [
  {
    id: 'ap-chemistry',
    name: 'AP Chemistry',
    slug: 'ap-chemistry',
    color: 'teal',
    units: [
      { unit: 1, title: 'Atomic Structure and Properties' },
      { unit: 2, title: 'Compound Structure and Properties' },
      { unit: 3, title: 'Properties of Substances and Mixtures' },
      { unit: 4, title: 'Chemical Reactions' },
      { unit: 5, title: 'Kinetics' },
      { unit: 6, title: 'Thermochemistry' },
      { unit: 7, title: 'Equilibrium' },
      { unit: 8, title: 'Acids and Bases' },
      { unit: 9, title: 'Thermodynamics and Electrochemistry' },
    ],
  },
  {
    id: 'ap-calculus',
    name: 'AP Calculus',
    slug: 'ap-calculus',
    color: 'violet',
    units: [
      { unit: 1, title: 'Limits and Continuity' },
      { unit: 2, title: 'Differentiation: Definition and Basic Derivative Rules' },
      { unit: 3, title: 'Differentiation: Composite, Implicit, and Inverse Functions' },
      { unit: 4, title: 'Contextual Applications of Differentiation' },
      { unit: 5, title: 'Analytical Applications of Differentiation' },
      { unit: 6, title: 'Integration and Accumulation of Change' },
      { unit: 7, title: 'Differential Equations' },
      { unit: 8, title: 'Applications of Integration' },
      { unit: 9, title: 'Parametric, Polar, and Vector-Valued Functions', bcOnly: true },
      { unit: 10, title: 'Infinite Sequences and Series', bcOnly: true },
    ],
  },
  {
    id: 'ap-world-history',
    name: 'AP World History',
    slug: 'ap-world-history',
    color: 'amber',
    units: [
      { unit: 1, title: 'The Global Tapestry' },
      { unit: 2, title: 'Networks of Exchange' },
      { unit: 3, title: 'Land-Based Empires' },
      { unit: 4, title: 'Transoceanic Interconnections' },
      { unit: 5, title: 'Revolutions' },
      { unit: 6, title: 'Consequences of Industrialization' },
      { unit: 7, title: 'Global Conflict' },
      { unit: 8, title: 'Cold War and Decolonization' },
      { unit: 9, title: 'Globalization' },
    ],
  },
  {
    id: 'religion',
    name: 'Religion',
    slug: 'religion',
    color: 'rose',
    units: [
      { unit: 1, title: 'Core Theology & Church' },
      { unit: 2, title: 'New Testament Study Guide' },
    ],
  },
  {
    id: 'jrotc',
    name: 'JROTC',
    slug: 'jrotc',
    color: 'olive',
    units: [
      { unit: 1, title: 'Identity, Ranks & Values' },
      { unit: 2, title: 'Skills, Drill & Knowledge' },
    ],
  },
];

export function getSubject(slug: string): SubjectMeta | undefined {
  return SUBJECTS.find((s) => s.slug === slug);
}

export function getUnit(slug: string, unitNum: number): UnitMeta | undefined {
  return getSubject(slug)?.units.find((u) => u.unit === unitNum);
}
