/* eslint-disable max-len -- generated from ap-chemistry/units/unit7.html */
export type ChemChapterChunk = { id: string; title: string; bodyHtml: string };

export const chemUnit7DocTitle = "Unit 7: Equilibrium";
export const chemUnit7DocLabel = "AP Chemistry";
export const chemUnit7SidebarHeader = "Unit 7";
export const chemUnit7SwitcherSummary = "Unit 7: Equilibrium";

export const chemUnit7Chapters: ChemChapterChunk[] = [
  {
    "id": "t71",
    "title": "7.1 Introduction to Equilibrium",
    "bodyHtml": "<p>Macroscopically nothing changes, microscopically reactants and products still interconvert—equal rates, not equal amounts. Only <strong>closed system</strong> (no net loss of matter) reaches a stable equilibrium (constant-composition) state in time.</p>"
  },
  {
    "id": "t72",
    "title": "7.2 Direction of Reversible Reactions",
    "bodyHtml": "<p>Compare the <strong>reaction quotient</strong> \\(Q\\) to the <strong>equilibrium constant</strong> \\(K\\). In standard form, if \\(Q \\lt K\\), the forward net reaction is favored (shift right); if \\(Q \\gt K\\), the reverse is favored; if \\(Q = K\\), you are at equilibrium.</p>\n    <div class=\"mini-diagram\">\n      <svg viewBox=\"0 0 420 95\" xmlns=\"http://www.w3.org/2000/svg\" aria-label=\"Q vs K: shift left, equilibrium, shift right\">\n        <rect x=\"20\" y=\"20\" width=\"110\" height=\"45\" stroke=\"#8892b0\" fill=\"none\"></rect>\n        <rect x=\"155\" y=\"20\" width=\"110\" height=\"45\" stroke=\"#8892b0\" fill=\"none\"></rect>\n        <rect x=\"290\" y=\"20\" width=\"110\" height=\"45\" stroke=\"#8892b0\" fill=\"none\"></rect>\n        <text x=\"38\" y=\"48\" fill=\"#d4daf0\" font-size=\"11\">Q &lt; K</text>\n        <text x=\"180\" y=\"48\" fill=\"#d4daf0\" font-size=\"11\">Q = K</text>\n        <text x=\"320\" y=\"48\" fill=\"#d4daf0\" font-size=\"11\">Q &gt; K</text>\n        <text x=\"32\" y=\"78\" fill=\"#7dd3a8\" font-size=\"10\">shift right</text>\n        <text x=\"176\" y=\"78\" fill=\"#7dd3a8\" font-size=\"10\">at equilibrium</text>\n        <text x=\"307\" y=\"78\" fill=\"#e06c75\" font-size=\"10\">shift left</text>\n      </svg>\n    </div>"
  },
  {
    "id": "t73",
    "title": "7.3 Reaction Quotient and Equilibrium Constant",
    "bodyHtml": "<p>Write \\(K_c\\) (concentration) or \\(K_p\\) (partial pressures) as <strong>products over reactants</strong>, each raised to the coefficient power. <strong>Exclude</strong> pure solids and pure liquids (fixed activity) from \\(K\\); <strong>include</strong> \\( [\\mathrm{H_2O}] \\) only for gas-phase and non-aqueous when told—for dilute solutions in water, the solvent is often taken as 1. <strong>Homogeneous</strong> vs <strong>heterogeneous</strong> (multiple phases—only gas or aqueous species in \\(K\\) for typical AP set-ups).</p>\n    <div class=\"formula-block\">\\(K_p = K_c (RT)^{\\Delta n}\\) (gas reactions; \\(\\Delta n\\)=moles gaseous products − moles gaseous reactants)</div>"
  },
  {
    "id": "t74",
    "title": "7.4 Calculating the Equilibrium Constant",
    "bodyHtml": "<p>\\(\\mathrm{aA + bB \\rightleftharpoons cC + dD}\\) gives</p>\n    <div class=\"formula-block\">\\(K_c = \\dfrac{[C]^c[D]^d}{[A]^a[B]^b}\\) &nbsp; (equilibrium <em>concentration</em> values only, not at arbitrary time unless Q)</div>"
  },
  {
    "id": "t75",
    "title": "7.5 Magnitude of K",
    "bodyHtml": "<p>\\(K \\gg 1\\): <strong>product-favored</strong> at standard-state comparison (large ratio at equilibrium). \\(K \\ll 1\\): <strong>reactant-favored</strong>. The magnitude of \\(K\\) does <strong>not</strong> say how <em>fast</em> you get there—that’s kinetics (Unit 5).</p>"
  },
  {
    "id": "t76",
    "title": "7.6 Manipulations of K",
    "bodyHtml": "<p>Reverse reaction: \\(K' = 1/K\\). Multiply equation by n: \\(K' = K^n\\). Add two reactions: \\(K' = K_1 K_2\\). These follow from the exponential form in \\(\\Delta G^\\circ = -RT\\ln K\\) (Unit 9).</p>"
  },
  {
    "id": "t77",
    "title": "7.7 Calculating Equilibrium Concentrations (RICE)",
    "bodyHtml": "<p><strong>R</strong>eaction, <strong>I</strong>nitial, <strong>C</strong>hange, <strong>E</strong>quilibrium. Express change as \\(+/- x\\) (or a multiple) consistent with coefficients; set \\(K\\) equal to the equilibrium expression in \\(x\\). For quadratics, use the <strong>physically meaningful</strong> root (positive, non-negligible) and check with \\(Q\\).</p>"
  },
  {
    "id": "t78",
    "title": "7.8 Representations of Equilibrium",
    "bodyHtml": "<p>Graph: concentrations level off as \\(t\\)→ finite (dynamic equilibrium, not [reactants] = 0 for reversible systems). <strong>Particulate</strong> diagram at equilibrium: forward and reverse <em>would</em> be equal in rate—particle counts in each region stable.</p>"
  },
  {
    "id": "t79",
    "title": "7.9 Le Châtelier’s Principle (Stress)",
    "bodyHtml": "<p>When a stress is applied, the system <strong>shifts to partially offset</strong> the stress—not fully cancel the external change, but a new balance is reached. <strong>Concentration:</strong> add reactant→ right (until \\(Q=K\\)). <strong>Pressure (gas):</strong> only if moles of gas differ—increase P by compression→ side with fewer <em>gas</em> moles. <strong>Temperature:</strong> treat heat as a product in exothermic forward rxn; heating favors endo direction. <strong>Inert gas at constant V:</strong> <em>no</em> shift—partial pressures of reactants and products are unchanged. <strong>At constant P</strong> adding inert—volume expands—partial pressures drop—shift toward <em>more</em> gas moles (if \\(\\Delta n\\neq0\\)).</p>"
  },
  {
    "id": "t710",
    "title": "7.10 Q and Le Châtelier",
    "bodyHtml": "<p>Immediately after a concentration jump, recompute <strong>Q</strong> with new concentrations—compare to \\(K\\) to predict the direction of the net change before the new equilibrium. This is the precise statement behind many Le Châtelier word problems.</p>"
  },
  {
    "id": "t711",
    "title": "7.11 Solubility Equilibria (K\\(_{\\mathrm{sp}}\\))",
    "bodyHtml": "<p>Sparingly soluble salt \\(\\text{M}_m \\text{X}_n\\text{(s)} \\rightleftharpoons m\\,\\text{M}^{+} + n\\,\\text{X}^{-}\\) (ion charges in your symbols must match the real salt—shown here in the usual compact form). \\(K_{\\mathrm{sp}} = [\\mathrm{M}]^{m}[\\mathrm{X}]^{n}\\) (each ion raised to its coefficient). <strong>Common-ion effect</strong>: added ion common to the solubility equilibrium lowers the salt’s molar solubility (Q momentarily &gt; \\(K_{\\mathrm{sp}}\\) until precip dissolves/less or precip forms). pH (Unit 8) can shift anion solubility if anion is basic (e.g. \\(\\mathrm{F}^{-}\\) from \\(\\mathrm{CaF}_2\\)).</p>"
  },
  {
    "id": "unit7-synthesis",
    "title": "Unit 7 Synthesis",
    "bodyHtml": "<p>Build \\(K\\); set \\(Q\\) from the problem; RICE to unknowns. Always: units for \\(K_c\\) = \\((M)^{\\Delta n}\\) context; catalyst → same \\(K\\), faster; temperature → new \\(K\\).</p>"
  },
  {
    "id": "unit7-practice",
    "title": "Unit 7: Practice (AP-Style)",
    "bodyHtml": "<div class=\"learn-block\"><div class=\"teaching-label\">How these are written</div><p>AP emphasizes \\(Q\\), \\(K\\), and Le Châtelier with a <strong>mechanistic</strong> reason (concentration, partial pressure) rather than a memorized “shift.” Original items.</p></div>\n    <div class=\"qa-item\"><div class=\"qa-question\">1. (Q vs K) For \\(\\mathrm{H_2(g)} + \\mathrm{I_2(g)} \\rightleftharpoons 2\\,\\mathrm{HI(g)}\\) at 700 K, assume \\(K_p = 4.0\\) (units omitted for simplicity) for the form \\(P_{\\mathrm{HI}}^2 / (P_{\\mathrm{H_2}} P_{\\mathrm{I_2}})\\) with partial pressures. In a 1.0 L bulb you measure: \\(P_{\\mathrm{H_2}} = 1.0\\), \\(P_{\\mathrm{I_2}} = 1.0\\), \\(P_{\\mathrm{HI}} = 1.0\\ \\mathrm{atm}\\) (hypothetical). (a) Compute \\(Q\\). (b) In which net direction will the system shift to approach equilibrium? Explain in terms of \\(Q\\) and \\(K\\).</div><div class=\"qa-answer\">(a) \\(Q = 1.0^2 / (1.0 \\cdot 1.0) = 1.0\\). (b) Since \\(Q \\lt K\\) (\\(1.0 \\lt 4.0\\)), the <strong>forward</strong> reaction (making more HI) is favored to raise \\(Q\\) until \\(Q = K\\) at the new equilibrium.</div></div>\n    <div class=\"qa-item\"><div class=\"qa-question\">2. (Inert gas) A fixed-volume vessel at constant \\(T\\) contains a gas equilibrium. Helium, which is inert, is added so that the <em>total</em> pressure rises but the volume is unchanged. (a) What happens to the <em>partial pressure</em> of each reactant and product? (b) What happens to \\(Q\\) and to the position of equilibrium?</div><div class=\"qa-answer\">(a) Partial pressures of the reacting species are <em>unchanged</em> (same moles, same \\(V\\), same \\(T\\)). (b) \\(Q\\) is <strong>unchanged</strong>, so the system is still at the same value relative to \\(K\\); <strong>no</strong> shift in position (only inert is added—not in \\(Q\\)).</div></div>\n    <div class=\"qa-item\"><div class=\"qa-question\">3. (Le Châtelier, stress) For an endothermic reaction (\\(\\Delta H \\gt 0\\) in the forward direction: reactants + heat → products), the mixture is at equilibrium, then the temperature is <em>increased</em> at constant volume. (a) In which net direction will the system shift? (b) How does the equilibrium constant \\(K\\) (for the forward process) change as \\(T\\) increases, qualitatively?</div><div class=\"qa-answer\">(a) Treat <strong>heat</strong> as a “reactant” for the <em>forward</em> endothermic step—raising \\(T\\) favors consuming heat in the product direction, so a net shift to <em>form more products</em> (forward). (b) For this endothermic forward case, <strong>increasing T increases K</strong> (van’t Hoff trend; more product-favored at high T for \\(\\Delta H^\\circ \\gt 0\\)).</div></div>\n    <div class=\"qa-item\"><div class=\"qa-question\">4. (Solubility) A saturated solution of \\(\\mathrm{CaF_2}\\) in pure water is in equilibrium with undissolved solid. Solid \\(\\mathrm{NaF}\\) is added, dissolving completely, so \\([F^-]\\) increases (common ion). (a) What happens to the position of the dissolution equilibrium of \\(\\mathrm{CaF_2}\\)? (b) Name the <em>effect</em> and give the \\(Q\\) vs \\(K_{sp}\\) reasoning in one line.</div><div class=\"qa-answer\">(a) The equilibrium shifts <strong>left</strong> (less dissolved \\(\\mathrm{Ca^{2+}}\\) at new equilibrium)—more precipitate is favored. (b) <strong>Common-ion effect</strong>: \\(Q \\gt K_{sp}\\) until excess \\(\\mathrm{CaF_2}\\) precipitates and ion concentrations re-satisfy \\(K_{sp}\\).</div></div>"
  }
];
