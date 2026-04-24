/* eslint-disable max-len -- generated from ap-chemistry/units/unit9.html */
export type ChemChapterChunk = { id: string; title: string; bodyHtml: string };

export const chemUnit9DocTitle = "Unit 9: Thermodynamics and Electrochemistry";
export const chemUnit9DocLabel = "AP Chemistry";
export const chemUnit9SidebarHeader = "Unit 9";
export const chemUnit9SwitcherSummary = "Unit 9: Thermodynamics and Electrochemistry";

export const chemUnit9Chapters: ChemChapterChunk[] = [
  {
    "id": "t91",
    "title": "9.1 Introduction to Entropy (S)",
    "bodyHtml": "<p>Entropy = measure of the number of ways to arrange energy in a system—more particles, more freedom of motion, more phase disorder → usually higher \\(S\\). <strong>Second law (universe):</strong> total \\(S\\) increases for a spontaneous <em>isolated</em> change; in chemistry, system + surroundings together increase for spontaneous processes. Qualitative: solid &lt; liquid &lt; gas; moles of gas ↑ often \\(\\Delta S \\gt 0\\).</p>"
  },
  {
    "id": "t92",
    "title": "9.2 Standard Entropies and \\(\\Delta S^\\circ\\)",
    "bodyHtml": "<p>Third law: a perfect crystal at 0 K has \\(S=0\\). Tabulated \\(S^\\circ\\) (J\\(/(\\mathrm{mol\\cdot K})\\)) is absolute (unlike enthalpy). For a reaction, \\(\\Delta S^\\circ = \\sum n S^\\circ(\\mathrm{prod}) - \\sum n S^\\circ(\\mathrm{react})\\) with coefficients in moles in the reaction as written.</p>"
  },
  {
    "id": "t93",
    "title": "9.3 Gibbs Free Energy: \\(\\Delta G = \\Delta H - T\\Delta S\\)",
    "bodyHtml": "<p>At constant \\(T\\) and \\(P\\), \\(\\Delta G \\lt 0\\): <strong>thermodynamically favorable</strong> in the <em>forward</em> sense as written. <strong>Enthalpy–entropy trade-off</strong>: exothermic (\\(\\Delta H \\lt 0\\)) helps; \\(\\Delta S \\gt 0\\) at high \\(T\\) can overcome unfavorable \\(\\Delta H\\). Same \\(\\Delta H\\) and \\(\\Delta S\\): the sign of \\(\\Delta G\\) can <em>flip</em> with temperature.</p>"
  },
  {
    "id": "t94",
    "title": "9.4 Thermodynamic vs Kinetic Control",
    "bodyHtml": "<p>Under \\(\\Delta G\\), the <strong>favored</strong> process may be slow—high \\(E_a\\). <strong>Kinetically</strong> controlled: faster pathway wins on lab timescale; <strong>thermodynamically</strong> controlled: time or catalyst allows the lowest-\\(G\\) product to form.</p>"
  },
  {
    "id": "t95",
    "title": "9.5 Free Energy and the Equilibrium Constant",
    "bodyHtml": "<div class=\"formula-block\">\\(\\Delta G^\\circ = -RT\\ln K\\)</div>\n    <p>At 298 K, a rule-of-thumb: \\(\\Delta G^\\circ\\) (kJ/mol) has same sign as \\(\\ln K\\). \\(K \\gt 1\\) (products favored at std states) if \\(\\Delta G^\\circ \\lt 0\\).</p>"
  },
  {
    "id": "t96",
    "title": "9.6 Free Energy of Dissolution",
    "bodyHtml": "<p>\\(\\Delta G = \\Delta H - T\\Delta S\\): dissolving a salt: often \\(\\Delta S \\gt 0\\) (ions become free) but sometimes \\(\\Delta H\\)-dominated—explains exothermic vs endothermic dissolution and T-dependent solubility in some cases.</p>"
  },
  {
    "id": "t97",
    "title": "9.7 Coupled Reactions in Bio",
    "bodyHtml": "<p>ATP hydrolysis with large negative \\(\\Delta G\\): couples to unfavorable but necessary processes so overall \\(\\Delta G \\lt 0\\)—the sum of the coupled half-reactions’ free energies. Same algebra as enthalpy with \\(\\Delta G\\).</p>"
  },
  {
    "id": "t98",
    "title": "9.8 Galvanic and Electrolytic Cells",
    "bodyHtml": "<p><strong>Galvanic (voltaic):</strong> spontaneous redox— chemical energy→ electrical work— \\(E_{\\mathrm{cell}} \\gt 0\\), \\(\\Delta G \\lt 0\\). <strong>Electrolytic:</strong> nonspontaneous— external voltage drives redox— \\(E_{\\mathrm{cell}} \\lt 0\\), \\(\\Delta G \\gt 0\\). <strong>Electrons</strong> flow: anode = oxidation, cathode = reduction (both types). <strong>Salt bridge</strong> (or ion-permeable barrier) keeps masses neutral—ions migrate.</p>\n    <div class=\"mini-diagram\">\n      <svg viewBox=\"0 0 420 96\" xmlns=\"http://www.w3.org/2000/svg\" aria-label=\"Galvanic vs electrolytic current direction\" role=\"img\">\n        <rect x=\"25\" y=\"18\" width=\"150\" height=\"60\" stroke=\"#8892b0\" fill=\"none\" stroke-width=\"1\"></rect>\n        <rect x=\"245\" y=\"18\" width=\"150\" height=\"60\" stroke=\"#8892b0\" fill=\"none\" stroke-width=\"1\"></rect>\n        <text x=\"100\" y=\"32\" text-anchor=\"middle\" fill=\"#d4daf0\" font-size=\"11\" font-family=\"Outfit, system-ui, sans-serif\">Galvanic</text>\n        <line x1=\"50\" y1=\"50\" x2=\"150\" y2=\"50\" stroke=\"#7dd3a8\" stroke-width=\"2\"></line>\n        <polygon points=\"150,50 140,45 140,55\" fill=\"#7dd3a8\"></polygon>\n        <text x=\"100\" y=\"70\" text-anchor=\"middle\" fill=\"#7dd3a8\" font-size=\"10\" font-family=\"Outfit, system-ui, sans-serif\">chemical to electrical</text>\n        <text x=\"320\" y=\"32\" text-anchor=\"middle\" fill=\"#d4daf0\" font-size=\"11\" font-family=\"Outfit, system-ui, sans-serif\">Electrolytic</text>\n        <line x1=\"370\" y1=\"50\" x2=\"270\" y2=\"50\" stroke=\"#e06c75\" stroke-width=\"2\"></line>\n        <polygon points=\"270,50 280,45 280,55\" fill=\"#e06c75\"></polygon>\n        <text x=\"320\" y=\"70\" text-anchor=\"middle\" fill=\"#e06c75\" font-size=\"10\" font-family=\"Outfit, system-ui, sans-serif\">electrical to chemical</text>\n      </svg>\n    </div>"
  },
  {
    "id": "t99",
    "title": "9.9 Cell Potential and Free Energy",
    "bodyHtml": "<p>\\(n\\) = moles of electrons <strong>in the balanced cell reaction as written</strong>, \\(F = 96485\\ \\mathrm{C/mol\\ e^-}\\) (Faraday). \\(E^\\circ\\) from standard tables with reduction written as reductions (cathode − anode, or with \\(\\Delta G^\\circ = -n F E^\\circ\\)).</p>\n    <div class=\"formula-block\">\\(\\Delta G^\\circ = -n F E^{\\circ}_{\\mathrm{cell}}\\)</div>\n    <p>Spontaneous cell: positive \\(E^{\\circ}_{\\mathrm{cell}}\\) for the reaction in the <em>discharge</em> (galvanic) direction. Balance half-reactions for \\(n\\).</p>"
  },
  {
    "id": "t910",
    "title": "9.10 Nernst Equation (Nonstandard)",
    "bodyHtml": "<p><strong>Walther Nernst</strong>: adjust \\(E\\) from standard conditions. At 298.15 K, a common form uses \\(\\log_{10}\\):</p>\n    <div class=\"formula-block\">\\(E = E^\\circ - \\dfrac{0.0592\\ \\mathrm{V}}{n}\\log_{10} Q\\)</div>\n    <p>Build \\(Q\\) for the redox <strong>reaction as written for the cell</strong>—include concentration or pressure of each solution/gas as in equilibrium expressions (pure solids, liquids: activity 1). \\(Q\\) to the direction of the written reaction—more product ratio lowers \\(E\\).</p>"
  },
  {
    "id": "t911",
    "title": "9.11 Electrolysis, Charge, and Faraday’s Law",
    "bodyHtml": "<p>Charge passed: \\(Q = I \\cdot t\\) (coulombs = amperes × seconds). Moles of e\\(^-\\): \\(n_e = Q/F\\). Moles of metal deposited or gas evolved from a half-reaction—scale by the stoichiometry of the reduction at the electrode. <strong>Overpotential</strong> in real electrolysis—actual voltage can exceed the thermodynamic value (kinetic barrier).</p>\n    <div class=\"callout example\">1.00 A for 3600 s → \\(Q=3600\\ \\mathrm{C}\\); \\(n_e = 3600/96485 = 0.0373\\ \\mathrm{mol\\ e^-}\\). For \\(\\mathrm{Ag^+} + e^- \\to \\mathrm{Ag}\\), moles Ag = 0.0373.</div>"
  },
  {
    "id": "unit9-synthesis",
    "title": "Unit 9 Synthesis",
    "bodyHtml": "<p>Sign agreement: favorability \\(\\Delta G \\lt 0\\) or \\(E \\gt 0\\) in the product-forming (galvanic) direction—with matched \\(Q\\) to reaction direction. Nernst + Faraday—keep \\(n\\), \\(F\\), and balanced half-reaction consistent in every number.</p>"
  },
  {
    "id": "unit9-practice",
    "title": "Unit 9: Practice (AP-Style)",
    "bodyHtml": "<div class=\"learn-block\"><div class=\"teaching-label\">How these are written</div><p>AP Unit 9 ties \\(\\Delta G\\), \\(K\\), and \\(E_{\\mathrm{cell}}\\) with sign conventions, then Nernst and Faraday for calculations—show units on \\(n\\) and \\(F\\). Original items.</p></div>\n    <div class=\"qa-item\"><div class=\"qa-question\">1. (Gibbs) A reaction is known to be <em>exothermic</em> in the forward direction and have \\(\\Delta S^\\circ \\lt 0\\). (a) Using \\(\\Delta G^\\circ = \\Delta H^\\circ - T\\Delta S^\\circ\\), <em>qualitatively</em>, is the forward reaction more likely to be product-favored at <strong>low</strong> T or <strong>high</strong> T? (b) What happens to the term \\(-T\\Delta S^\\circ\\) as \\(T\\) increases (given \\(\\Delta S^\\circ \\lt 0\\))?</div><div class=\"qa-answer\">(a) <strong>Low T</strong> is more favorable—the unfavorable (positive) \\(-T\\Delta S^\\circ\\) is smaller when T is small, so a negative \\(\\Delta H^\\circ\\) can win. (b) Since \\(\\Delta S^\\circ \\lt 0\\), \\(-T\\Delta S^\\circ \\gt 0\\) and grows in magnitude with \\(T\\), working against the negative \\(\\Delta H^\\circ\\).</div></div>\n    <div class=\"qa-item\"><div class=\"qa-question\">2. (Nernst) A galvanic cell reaction <em>as written</em> (discharge) has \\(E^{\\circ}_{\\mathrm{cell}} \\gt 0\\) at 298 K. (a) If only <em>product</em> concentrations are increased, does \\(Q\\) for the <em>forward</em> cell reaction go up or down? (b) Does \\(E_{\\mathrm{cell}}\\) (still at 298 K) increase, decrease, or stay the same? (Use the Nernst idea without necessarily calculating.)</div><div class=\"qa-answer\">(a) \\(Q\\) (products over reactants) <strong>increases</strong> when [products] increase. (b) \\(E_{\\mathrm{cell}}\\) <strong>decreases</strong> toward 0—the cell is going toward equilibrium—less nonstandard driving force. (Nernst: larger \\(Q\\) in log term for standard product-over-reactant form typically lowers \\(E_{\\mathrm{cell}}\\)).</div></div>\n    <div class=\"qa-item\"><div class=\"qa-question\">3. (Faraday) An electrolysis deposits silver from \\(\\mathrm{Ag^+}\\) in solution: \\(\\mathrm{Ag^+} + e^- \\to \\mathrm{Ag(s)}\\). A current of \\(0.50\\ \\mathrm{A}\\) runs for \\(1930\\ \\mathrm{s}\\). (a) Calculate the charge, \\(Q\\), in coulombs. (b) Moles of \\(\\mathrm{Ag}\\) deposited (use \\(F = 9.65\\times 10^4\\ \\mathrm{C/mol\\ e^-}\\) as on AP data).</div><div class=\"qa-answer\">(a) \\(Q = I t = 0.50\\ \\mathrm{A} \\times 1930\\ \\mathrm{s} = 965\\ \\mathrm{C}\\). (b) Moles of e\\(^-\\) = \\(965 / 9.65\\times 10^4 = 0.0100\\ \\mathrm{mol\\ e^-}\\), so 1:1 with Ag gives \\(0.0100\\ \\mathrm{mol\\ Ag}\\) (2 s.f. to match 0.50 A).</div></div>\n    <div class=\"qa-item\"><div class=\"qa-question\">4. (Link \\(K\\) and \\(E\\)) The relationship \\(\\Delta G^\\circ = -RT\\ln K\\) and \\(\\Delta G^\\circ = -nF E^{\\circ}_{\\mathrm{cell}}\\) must be consistent. If \\(E^{\\circ}_{\\mathrm{cell}} \\gt 0\\) for a <em>voltaic</em> process as written, (a) what is the sign of \\(\\Delta G^\\circ\\)? (b) Is \\(K\\) for that reaction (as written) greater or less than 1 at standard state?</div><div class=\"qa-answer\">(a) Positive \\(E^{\\circ}_{\\mathrm{cell}}\\) makes \\(\\Delta G^\\circ = -nFE^{\\circ}_{\\mathrm{cell}} \\lt 0\\). (b) \\(\\Delta G^\\circ \\lt 0 \\Rightarrow K \\gt 1\\) (product-favored at std-state comparison).</div></div>"
  }
];
