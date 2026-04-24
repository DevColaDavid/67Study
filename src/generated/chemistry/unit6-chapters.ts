/* eslint-disable max-len -- generated from ap-chemistry/units/unit6.html */
export type ChemChapterChunk = { id: string; title: string; bodyHtml: string };

export const chemUnit6DocTitle = "Unit 6: Thermochemistry";
export const chemUnit6DocLabel = "AP Chemistry";
export const chemUnit6SidebarHeader = "Unit 6";
export const chemUnit6SwitcherSummary = "Unit 6: Thermochemistry";

export const chemUnit6Chapters: ChemChapterChunk[] = [
  {
    "id": "t61",
    "title": "6.1 Endothermic and Exothermic Processes",
    "bodyHtml": "<p><strong>Exothermic:</strong> system releases energy to surroundings (e.g. combustion)— \\(\\Delta H \\lt 0\\). <strong>Endothermic:</strong> system absorbs energy— \\(\\Delta H \\gt 0\\). At constant pressure, the heat observed is related to \\(\\Delta H\\) of the process.</p>\n    <div class=\"mistake-block\"><div class=\"teaching-label\">Common Mistake</div><p>If a beaker of water <em>warms up</em>, the <em>reaction in the beaker is exothermic</em> (it releases heat to the water, the surroundings in that local picture). The sign always refers to the <strong>system you define</strong> (reaction, not the water), so state your system in FRQ.</p></div>"
  },
  {
    "id": "t62",
    "title": "6.2 Energy Diagrams",
    "bodyHtml": "<p>Vertical: potential (or enthalpy) of species; horizontal: <em>reaction progress</em> (not time). <strong>Products below reactants</strong> in enthalpy → exothermic \\(\\Delta H_{\\mathrm{rxn}} \\lt 0\\). A catalyst alters the path’s peak, not the difference between start and end levels.</p>"
  },
  {
    "id": "t63",
    "title": "6.3 Heat Transfer and Thermal Equilibrium",
    "bodyHtml": "<p>Heat \\(|q|\\) flows from <strong>hot to cold</strong> until (macroscopically) one temperature—thermal equilibrium. For an <strong>isolated</strong> calorimetry “universe” of coffee cup + solution: \\(q_\\mathrm{rxn} + q_\\mathrm{calorimeter} + q_\\mathrm{solution} \\approx 0\\) (or \\(q_\\mathrm{gained} = -q_\\mathrm{lost}\\) between system choices).</p>"
  },
  {
    "id": "t64",
    "title": "6.4 Heat Capacity and Calorimetry",
    "bodyHtml": "<p>Heat capacity \\(C\\): q required to change \\(T\\) by 1 K for the whole object. <strong>Specific heat</strong> \\(C_s\\): per gram. \\(q = mC_s\\Delta T\\). \\(\\Delta T = T_f - T_i\\). Use consistent units (J or kJ—convert before comparing to enthalpy of reaction in kJ/mol).</p>\n    <p><strong>Calorimetry (constant pressure, coffee-cup):</strong> often \\(q = -q_\\mathrm{surroundings}\\) for the reaction if you measure the solution’s temperature change; include mass and \\(C_s\\) of everything that warms. <strong>Bomb (constant V):</strong> measures \\(\\Delta U\\); for reactions with no gas, \\(\\Delta H \\approx \\Delta U\\); for gas work differences use \\(\\Delta H = \\Delta U + \\Delta n_\\mathrm{gas}RT\\) in advanced items.</p>\n    <div class=\"callout example\">A 100.0 g water sample ( \\(C_s = 4.18\\ \\mathrm{J/(g\\cdot K)}\\) ) cools 2.00 K— \\(q = 100(4.18)(-2) = -836\\ \\mathrm{J}\\) (lost by water, gained elsewhere).</div>"
  },
  {
    "id": "t65",
    "title": "6.5 Energy of Phase Changes",
    "bodyHtml": "<p><strong>Latent</strong> heat at constant \\(T\\): solid→liquid <strong>fusion</strong> (\\(q = m\\Delta H_\\mathrm{fus}\\)); liquid→gas <strong>vaporization</strong> (\\(q = m\\Delta H_\\mathrm{vap}\\)). Vaporization and melting for most substances are <strong>endo</strong> (absorb) from the system’s perspective—condensation and freezing exothermic. A heating (or cooling) curve has <strong>plateaus</strong> at the MP and BP while latent heat is added or removed.</p>"
  },
  {
    "id": "t66",
    "title": "6.6 Enthalpy of Reaction",
    "bodyHtml": "<p>At constant pressure, \\(\\Delta H_{\\mathrm{rxn}} = H_\\mathrm{products} - H_\\mathrm{reactants}\\). <strong>State function:</strong> path from reactants to products does not change \\(\\Delta H\\)—only endpoints (Hess’s law foundation). <strong>Stoichiometry scales \\(\\Delta H\\):</strong> 2× the moles → 2× the kJ for the same reaction as written (double coefficients).</p>"
  },
  {
    "id": "t67",
    "title": "6.7 Bond Enthalpies (Estimation)",
    "bodyHtml": "<p>Average <strong>bond enthalpy</strong> (table values): <strong>break</strong> bonds in reactants (endothermic) − <strong>form</strong> bonds in products (exothermic):</p>\n    <div class=\"formula-block\">\\(\\Delta H_{\\mathrm{rxn}}^\\circ \\approx \\sum D_\\mathrm{broken} - \\sum D_\\mathrm{formed}\\) &nbsp; (kJ/mol of reaction as written)</div>\n    <p>Applies best to <strong>gas-phase</strong> covalent processes; is an estimate because “average” D differs slightly by context.</p>"
  },
  {
    "id": "t68",
    "title": "6.8 Standard Enthalpy of Formation",
    "bodyHtml": "<p> \\(\\Delta H_f^\\circ\\): enthalpy change forming <strong>1 mol</strong> of compound in its <strong>standard state</strong> from elements in <em>their</em> most stable form at 1 bar (1 atm often used) and 25°C. <strong>Elements in reference form</strong> have \\(\\Delta H_f^\\circ = 0\\).</p>\n    <div class=\"formula-block\">\\(\\Delta H_{\\mathrm{rxn}}^\\circ = \\sum n\\Delta H_f^\\circ(\\text{prod}) - \\sum n\\Delta H_f^\\circ(\\text{react})\\)</div>"
  },
  {
    "id": "t69",
    "title": "6.9 Hess’s Law",
    "bodyHtml": "<p>If reactions add, \\(\\Delta H\\) add; reverse a step → sign flip; scale by a factor n → multiply \\(\\Delta H\\) by n. <strong>Why:</strong> \\(H\\) is a state function—algebra of enthalpy changes follows algebra of the balanced equations. Use to build a target reaction from known thermochemical data.</p>\n    <div class=\"callout example\">To find \\(\\Delta H^\\circ\\) for C(s, graphite) + 1/2 O\\(_2\\)(g) → CO(g) from C + O\\(_2\\) → CO\\(_2\\) and CO + 1/2 O\\(_2\\) → CO\\(_2\\), subtract appropriate multiples (careful: subtract the step you can eliminate).</div>"
  },
  {
    "id": "unit6-synthesis",
    "title": "Unit 6 Synthesis",
    "bodyHtml": "<p>Always: define <strong>system</strong> → sign of \\(q\\) and \\(\\Delta H\\) → choose bond table vs \\(\\Delta H_f^\\circ\\) table vs calorimetry. Track units: J vs kJ; per mole vs per gram; stoichiometry factor.</p>"
  },
  {
    "id": "unit6-practice",
    "title": "Unit 6: Practice (AP-Style)",
    "bodyHtml": "<div class=\"learn-block\"><div class=\"teaching-label\">How these are written</div><p>AP-style: calorimetry with clear system vs surroundings, and <em>state-function</em> additive use of \\(\\Delta H_f^\\circ\\). Values below match standard data at 298 K in typical AP table.</p></div>\n    <div class=\"qa-item\"><div class=\"qa-question\">1. (Calorimetry) A chemical reaction in an open coffee-cup calorimeter releases heat to the contents. The solution is mostly water, mass \\(2.00\\times 10^2\\ \\mathrm{g}\\) with \\(C_s = 4.18\\ \\mathrm{J\\,(g\\cdot K)^{-1}}\\). The temperature increases by \\(3.0\\ \\mathrm{K}\\). (a) Calculate the heat, \\(q\\), absorbed by the water. (b) If the <em>reaction mixture is the system</em> and the water is a good approximation to the <em>surroundings</em> where heat is sensed, is the <strong>reaction</strong> exothermic or endothermic? Justify the sign of \\(\\Delta H\\) for the reaction in everyday language.</div><div class=\"qa-answer\">(a) \\(q = mC_s\\Delta T = 200(4.18)(3.0) = 2.51 \\times 10^3\\ \\mathrm{J}\\) (2 s.f. to match 3.0 and 2.0\\(\\times 10^2\\)). (b) The surroundings gained heat—so the system (reaction) <strong>released</strong> heat—the reaction is <strong>exothermic</strong> (\\(\\Delta H \\lt 0\\) for the system).</div></div>\n    <div class=\"qa-item\"><div class=\"qa-question\">2. (Formation enthalpy) For \\(2\\,\\mathrm{NO(g)} + \\mathrm{O_2(g)} \\to 2\\,\\mathrm{NO_2(g)}\\), use standard formation enthalpies at 298 K: \\(\\Delta H_f^\\circ(\\mathrm{NO})=+90.2\\ \\mathrm{kJ/mol}\\), \\(\\Delta H_f^\\circ(\\mathrm{NO_2})=+33.2\\ \\mathrm{kJ/mol}\\), and \\(\\Delta H_f^\\circ(\\mathrm{O_2})=0\\). (a) Write the summation. (b) Compute \\(\\Delta H_{rxn}^\\circ\\) in kJ (per reaction as written).</div><div class=\"qa-answer\">(a) \\(\\Delta H_{rxn}^\\circ = \\sum n\\,\\Delta H_f^\\circ(\\text{prods}) - \\sum n\\,\\Delta H_f^\\circ(\\text{react}) = 2(33.2) - [2(90.2) + 0]\\). (b) \\(= 66.4 - 180.4 = -114\\ \\mathrm{kJ}\\) (exothermic) for the two moles of \\(\\mathrm{NO_2}\\) produced as written (3 s.f. on line).</div></div>\n    <div class=\"qa-item\"><div class=\"qa-question\">3. (Hess) Given (i) \\(\\mathrm{P_4(s) + 5O_2(g) \\to P_4O_{10}(s)}\\) \\(\\Delta H^\\circ = a\\), and (ii) \\(\\mathrm{P_4(s) + 3O_2(g) \\to P_4O_6(s)}\\) \\(\\Delta H^\\circ = b\\), describe <em>qualitatively</em> what arithmetic you would do (multiply, reverse, add) to obtain \\(\\Delta H^\\circ\\) for \\(\\mathrm{P_4O_6(s) + 2O_2(g) \\to P_4O_{10}(s)}\\). You do <em>not</em> need numbers.</div><div class=\"qa-answer\">Form the target as <strong>sum of adjusted equations that cancel \\(\\mathrm{P_4(s)}\\) and the intermediate</strong> if needed—typically: take reaction (i) <em>as written</em> and subtract (ii) (or add the reverse of the appropriate part) so the net change is from \\(\\mathrm{P_4O_6} + 2\\,\\mathrm{O_2} \\to \\mathrm{P_4O_{10}}\\). The corresponding enthalpy sum follows (same combination as for balanced equations, including sign reversals and coefficients).</div></div>\n    <div class=\"qa-item\"><div class=\"qa-question\">4. (Bonds, estimate) For an estimate only: why does a reaction that breaks 4 C–H and forms 2 H–H and <em>other</em> products need a table of D(bond) values rather than just \\(\\Delta H_f^\\circ\\) to estimate \\(\\Delta H\\) from <em>bonds</em>?</div><div class=\"qa-answer\">The bond-enthalpy method uses an average of bond dissociation energies in <em>gas-phase, covalent</em> context; the equation balances all bonds broken and formed in the gaseous picture. It is a <strong>different pathway</strong> from \\(\\Delta H_f^\\circ\\) and is an approximation—you need a consistent table of D values, not just formation of compounds from their elements in standard states for every fragment.</div></div>"
  }
];
