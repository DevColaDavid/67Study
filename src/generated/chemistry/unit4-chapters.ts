/* eslint-disable max-len -- generated from ap-chemistry/units/unit4.html */
export type ChemChapterChunk = { id: string; title: string; bodyHtml: string };

export const chemUnit4DocTitle = "Unit 4: Chemical Reactions";
export const chemUnit4DocLabel = "AP Chemistry";
export const chemUnit4SidebarHeader = "Unit 4";
export const chemUnit4SwitcherSummary = "Unit 4: Chemical Reactions";

export const chemUnit4Chapters: ChemChapterChunk[] = [
  {
    "id": "t41",
    "title": "4.1 Introduction to Reactions",
    "bodyHtml": "<p>Antoine Lavoisier’s <strong>conservation of mass</strong> underpins balancing: same atoms of each element on each side. <strong>Stoichiometric coefficients</strong> are mole-to-mole ratios—not masses. Include physical state symbols: (s), (l), (g), (aq) for water solutions.</p>\n    <div class=\"steps-block\"><div class=\"teaching-label\">How To Balance</div><ul class=\"notes-list\">\n      <li>Start with most complex species; use fractional coefficients if needed, then clear denominators at the end.</li>\n      <li>Balance free elements and polyatomic groups as units if they appear unchanged (e.g. \\(({\\mathrm{SO}_4})^{2-}\\) on both sides).</li>\n      <li>Verify atom and charge (for redox—see 4.9) counts.</li>\n    </ul></div>\n    <div class=\"callout example\">\\(\\mathrm{2\\,Al(s) + 3\\,Cl_2(g) \\to 2\\,AlCl_3(s)}\\)—atom count: 2 Al, 6 Cl on each side.</div>"
  },
  {
    "id": "t42",
    "title": "4.2 Net Ionic Equations",
    "bodyHtml": "<p>Steps: (1) balanced molecular, (2) split <strong>strong</strong> electrolytes into free ions—weak acids, weak bases, and solids/liquids/gases stay as formulas, (3) cancel <strong>spectator ions</strong> unchanged on both sides, (4) check charge and mass.</p>\n    <p>Know common <strong>solubility rules</strong> for salts—when a product is a precipitate, use (s) and keep the ion set that build it in the net ionic equation. Strong acids (\\(\\mathrm{HCl, H_2SO_4, HNO_3, HClO_4, HBr, HI}\\)) fully dissociate; strong group 1 and many nitrate salts are soluble, etc. (use your class table).</p>\n    <div class=\"callout example\">Mixing \\(\\mathrm{AgNO_3(aq)}\\) and \\(\\mathrm{NaCl(aq)}\\): net ionic \\(\\mathrm{Ag^+ + Cl^- \\to AgCl(s)}\\); \\(\\mathrm{Na^+}\\) and \\(({\\mathrm{NO}_3})^{-}\\) are spectators.</div>\n    <div class=\"mistake-block\"><div class=\"teaching-label\">Common Mistake</div><p>Splitting weak acids (e.g. HF, \\(\\mathrm{CH_3COOH}\\)) as \\(\\mathrm{H^+ + A^-}\\) in full strength—they are mostly undissociated; write \\(\\mathrm{CH_3COOH(aq)}\\) in net ionic unless a problem says “excess strong base” in a way that deprotonates them fully in that step.</p></div>"
  },
  {
    "id": "t43",
    "title": "4.3 Representations of Reactions",
    "bodyHtml": "<p>Match three levels: (1) <strong>symbolic</strong> balanced equation, (2) <strong>particulate</strong> (draw atoms/ions, correct ratios), (3) <strong>macro</strong> (color change, gas, T change). On AP, a particulate with wrong <em>integer particle counts</em> (vs coefficients) is always wrong—count circles carefully.</p>"
  },
  {
    "id": "t44",
    "title": "4.4 Physical and Chemical Changes",
    "bodyHtml": "<p><strong>Physical:</strong> state, size, or mixing with identity unchanged (boiling, dissolving sugar). <strong>Chemical:</strong> new substance(s) with new properties (burning, rusting, neutralization, precipitation). <strong>Evidence of chemical change:</strong> gas evolution (not always from just thermal expansion), permanent color change, light, non-reversible in simple cases, pH change, precipitate that is a new solid.</p>"
  },
  {
    "id": "t45",
    "title": "4.5 Stoichiometry",
    "bodyHtml": "<p>Bridge path: <strong>mass A → moles A → moles B (coefficient ratio) → mass B</strong> (or M, PVT for gases). <strong>Limiting reactant:</strong> runs out first—compute moles of reaction each initial amount could “drive” with its coefficient, smallest wins.</p>\n    <div class=\"formula-block\">\\(\\text{Theoretical yield} = n_{\\mathrm{limiting}} \\times M_{\\mathrm{product}} \\times \\dfrac{\\text{product coeff}}{\\text{limiting coeff}}\\), \\(\\quad \\% \\text{ yield} = \\dfrac{\\text{actual}}{\\text{theoretical}}\\times 100\\%\\)</div>\n    <p>Excess reagent: leftover after the limiting reagent is consumed—calculate how much is left, not just “it is excess”.</p>\n    <div class=\"callout example\">If 3 mol \\(\\mathrm{H_2}\\) and 1 mol \\(\\mathrm{O_2}\\) make water, the balanced \\(2\\mathrm{H_2} + \\mathrm{O_2} \\to 2\\mathrm{H_2O}\\) needs 2:1. \\(\\mathrm{O_2}\\) is limiting: 1 mol \\(\\mathrm{O_2}\\) can consume 2 mol \\(\\mathrm{H_2}\\); 1 mol \\(\\mathrm{H_2}\\) is unreacted. Water formed: 2 mol.</div>"
  },
  {
    "id": "t46",
    "title": "4.6 Introduction to Titration",
    "bodyHtml": "<p>Titration delivers a solution of known concentration to reach <strong>equivalence</strong>: moles of titrant×stoichiometry = moles of analyte×stoichiometry. For monoprotic strong–strong often \\(M_a V_a = M_b V_b\\); for diprotic (e.g. \\(\\mathrm{H_2SO_4}\\) first step) or polyprotic, include factors from the net ionic reaction.</p>\n    <p><strong>Equivalence point</strong> = stoichiometric point; <strong>endpoint</strong> = indicator change (ideally the same, slightly different in practice). Buret reads volume to 0.01 mL typically in lab problems.</p>\n    <div class=\"callout example\">25.0 mL of 0.100 M NaOH titrates 30.0 mL HCl. \\(M_{\\mathrm{acid}} = (0.100)(25.0)/(30.0) = 0.0833\\ \\mathrm{M}\\).</div>"
  },
  {
    "id": "t47",
    "title": "4.7 Types of Chemical Reactions",
    "bodyHtml": "<p><strong>Precipitation:</strong> form insoluble salt. <strong>Acid–base (neutralization):</strong> transfer of \\(\\mathrm{H^+}\\) (Unit 8 detail). <strong>Gas–formation:</strong> \\(\\mathrm{CO_2}\\), \\(\\mathrm{H_2S}\\), etc. (often from carbonate + strong acid, or from decomposition). <strong>Redox:</strong> change in oxidation numbers—combustion is a key subclass. Classifying drives how you write net ionic and balance (especially half-reactions in redox under acidic or basic media in advanced electrochemistry, Unit 9).</p>"
  },
  {
    "id": "t48",
    "title": "4.8 Introduction to Acid–Base Reactions",
    "bodyHtml": "<p><strong>Brønsted–Lowry:</strong> acid = \\(\\mathrm{H^+}\\) donor, base = \\(\\mathrm{H^+}\\) acceptor. <strong>Strong + strong in water (Arrhenius sense):</strong> net ionic is often \\(\\mathrm{H^+ (aq) + OH^- (aq) \\to H_2O(l)}\\) (or write \\({\\mathrm{H}_3\\mathrm{O}}^{+} + \\mathrm{OH}^{-} \\to 2\\,\\mathrm{H_2O}\\)).</p>\n    <p>With weak components, keep full molecules; conjugate pair \\(\\mathrm{HA}\\)/\\(\\mathrm{A^-}\\) and \\(\\mathrm{H_2O}\\)/\\({\\mathrm{H}_3\\mathrm{O}}^{+}\\) language matters for buffers in Unit 8.</p>"
  },
  {
    "id": "t49",
    "title": "4.9 Oxidation–Reduction Reactions",
    "bodyHtml": "<p><strong>Oxidation</strong> = loss of electrons (increase in oxidation number). <strong>Reduction</strong> = gain (decrease in O.N.). <strong>Reducing agent</strong> is oxidized (gives e\\(^-\\)); <strong>oxidizing agent</strong> is reduced (gains e\\(^-\\)).</p>\n    <p>Assign <strong>oxidation numbers</strong> with rules: elements in their standard state 0; monatomic ions = charge; O usually −2 (except peroxide—1, superoxide—1/2, OF\\(_2\\)); H usually +1 with nonmetals; group 1 = +1 in compounds. The sum in a species equals total charge (use for polyatomic and acid-base in redox context).</p>\n    <div class=\"callout example\">In \\(\\mathrm{2Mg + O_2 \\to 2MgO}\\), Mg is oxidized (0→+2); \\(\\mathrm{O_2}\\) is reduced to −2. \\(\\mathrm{O_2}\\) is the oxidizing agent; Mg is the reducing agent.</div>"
  },
  {
    "id": "unit4-synthesis",
    "title": "Unit 4 Synthesis",
    "bodyHtml": "<p>Every problem: balance → choose molecular vs net-ionic → use coefficients as <strong>mol</strong> ratios → convert to the requested unit. Redox: track oxidation numbers <em>before</em> half-reaction balancing in complex cases.</p>"
  },
  {
    "id": "unit4-practice",
    "title": "Unit 4: Practice (AP-Style)",
    "bodyHtml": "<div class=\"learn-block\"><div class=\"teaching-label\">How these are written</div><p>AP-style: net-ionic, stoichiometry with limiting reagent, and redox <strong>vocabulary with evidence</strong> (O.S. or half-reaction logic). Original items.</p></div>\n    <div class=\"qa-item\"><div class=\"qa-question\">1. (Precipitation) Aqueous solutions of \\(\\mathrm{BaCl_2}\\) and \\(\\mathrm{Na_2SO_4}\\) are mixed, producing a white precipitate. (a) Write a balanced <em>net ionic</em> equation, including (aq)/(s) as appropriate. (b) List all spectator ion species that do not appear in the net ionic.</div><div class=\"qa-answer\">(a) \\(\\mathrm{Ba^{2+}(aq) + ({\\mathrm{SO}_4})^{2-}(aq) \\to BaSO_4(s)}\\) (1:1, balanced charge and mass). (b) \\(\\mathrm{Na^+(aq)}\\) and \\(\\mathrm{Cl^-(aq)}\\).</div></div>\n    <div class=\"qa-item\"><div class=\"qa-question\">2. (Limiting) The catalytic formation of NO from \\(\\mathrm{NH_3}\\) and \\(\\mathrm{O_2}\\) is represented by: \\(4\\,\\mathrm{NH_3(g)} + 5\\,\\mathrm{O_2(g)} \\to 4\\,\\mathrm{NO(g)} + 6\\,\\mathrm{H_2O(g)}\\). In one run, a closed reactor initially contains exactly \\(1.0\\ \\mathrm{mol\\ NH_3}\\) and \\(2.0\\ \\mathrm{mol\\ O_2}\\). (a) Identify the limiting reactant. (b) How many moles of \\(\\mathrm{NO}\\) can be formed, maximum, based on the limiting reagent? Show a mole-to-mole ratio from the balanced equation.</div><div class=\"qa-answer\">(a) Compare required \\(\\mathrm{O_2}\\) to available: \\(1.0\\ \\mathrm{mol\\ NH_3}\\) needs \\((5/4)\\times 1.0 = 1.25\\ \\mathrm{mol\\ O_2}\\). You have \\(2.0\\ \\mathrm{mol\\ O_2}\\), so \\(\\mathrm{O_2}\\) is in excess and \\(\\mathrm{NH_3}\\) is the <strong>limiting</strong> reactant. (b) \\(\\mathrm{NO}\\) forms in a 1:1 mole ratio with \\(\\mathrm{NH_3}\\) from the balanced equation (\\(4{:}4\\)), so \\(n(\\mathrm{NO}) = 1.0\\ \\mathrm{mol}\\).</div></div>\n    <div class=\"qa-item\"><div class=\"qa-question\">3. (Redox) In acidic solution, \\(\\mathrm{Cl_2(aq) + 2\\,Br^-(aq) \\to 2\\,Cl^-(aq) + Br_2(l)}\\). (a) Assign the oxidation number of Cl in each Cl-containing species. (b) Name the <em>reducing</em> agent and explain using electron loss.</div><div class=\"qa-answer\">(a) \\(\\mathrm{Cl_2}\\): 0; \\(\\mathrm{Cl^-}\\): −1. (b) <strong>Reducing agent</strong> = \\(\\mathrm{Br^-}\\) (it is oxidized: −1 → 0 in \\(\\mathrm{Br_2}\\)), so it <em>donates</em> electrons to Cl.</div></div>\n    <div class=\"qa-item\"><div class=\"qa-question\">4. (Titration) A \\(25.00\\ \\mathrm{mL}\\) sample of an \\(\\mathrm{HCl}\\) solution of unknown concentration is titrated to the equivalence point with \\(32.0\\ \\mathrm{mL}\\) of \\(0.100\\ \\mathrm{M\\ NaOH}\\) (1:1 stoichiometry). (a) Calculate the molarity of the \\(\\mathrm{HCl}\\) solution. (b) The student over-read the buret (too large a final volume of \\(\\mathrm{NaOH}\\))—how would the calculated \\(\\mathrm{HCl}\\) molarity change? (<em>too high, too low, or no change</em>)</div><div class=\"qa-answer\">(a) \\(M_{\\mathrm{HCl}} = \\dfrac{(0.100\\ \\mathrm{M})(0.0320\\ \\mathrm{L})}{0.02500\\ \\mathrm{L}} = 0.128\\ \\mathrm{M}\\) (3 s.f.). (b) Over-reporting the titrant volume makes \\(M_{\\mathrm{HCl}}\\) <strong>too high</strong> (larger effective moles of base).</div></div>"
  }
];
