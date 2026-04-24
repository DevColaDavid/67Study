/* eslint-disable max-len -- generated from ap-chemistry/units/unit5.html */
export type ChemChapterChunk = { id: string; title: string; bodyHtml: string };

export const chemUnit5DocTitle = "Unit 5: Kinetics";
export const chemUnit5DocLabel = "AP Chemistry";
export const chemUnit5SidebarHeader = "Unit 5";
export const chemUnit5SwitcherSummary = "Unit 5: Kinetics";

export const chemUnit5Chapters: ChemChapterChunk[] = [
  {
    "id": "t51",
    "title": "5.1 Reaction Rate",
    "bodyHtml": "<p>For \\(\\mathrm{aA + bB \\to cC + dD}\\) the <strong>rate of reaction</strong> is</p>\n    <div class=\"formula-block\">\\(\\text{Rate} = -\\dfrac{1}{a}\\dfrac{d[\\mathrm{A}]}{dt} = \\dfrac{1}{c}\\dfrac{d[\\mathrm{C}]}{dt}\\) &nbsp; (or average rate \\(\\Delta[]/\\Delta t\\))</div>\n    <p>Signs: reactant concentrations <em>decrease</em> with time—introduce a minus for reactants. Units: \\(\\mathrm{M\\cdot s^{-1}}\\) (or M/min). For gases, you may use partial pressures—keep consistent in rate laws.</p>"
  },
  {
    "id": "t52",
    "title": "5.2 Introduction to Rate Law",
    "bodyHtml": "<p><strong>Method of initial rates</strong> and integrated plots determine orders. Overall order = sum of exponents. \\(k\\)=rate constant—depends on \\(T\\), not on concentration; units depend on order.</p>\n    <div class=\"formula-block\">\\(\\text{rate} = k[\\mathrm{A}]^m[\\mathrm{B}]^n\\)</div>\n    <div class=\"mistake-block\"><div class=\"teaching-label\">Common Mistake</div><p>Setting \\(m,n\\) from balanced coefficients on the <em>overall</em> reaction. Coefficient = order <strong>only for an elementary step</strong> in that step’s rate law, not the overall equation in general.</p></div>"
  },
  {
    "id": "t53",
    "title": "5.3 Concentration Changes Over Time (Integrated)",
    "bodyHtml": "<p>Linear plots identify order: <strong>zero</strong>: \\([A]\\) vs \\(t\\); <strong>first</strong>: \\(\\ln[A]\\) vs \\(t\\); <strong>second</strong> (single [A] species): \\(1/[A]\\) vs \\(t\\).</p>\n    <div class=\"formula-block\">\\(\\text{0: } [A]=[A]_0-kt, \\quad \\text{1: } \\ln[A]=\\ln[A]_0-kt, \\quad \\text{2: } \\dfrac{1}{[A]}=\\dfrac{1}{[A]_0}+kt\\)</div>\n    <p>Half-lives: 1st: \\(t_{1/2} = 0.693/k\\) (constant—first-order radioactive decay, concentration clock); 0nd: \\(t_{1/2}=[A]_0/(2k)\\); 2nd: \\(t_{1/2} = 1/(k[A]_0)\\).</p>"
  },
  {
    "id": "t54",
    "title": "5.4 Elementary Reactions",
    "bodyHtml": "<p><strong>Elementary step</strong>: a single collision event as written—its rate law is <em>as written</em> in molecularity: unimolecular rate \\(= k[A]\\) (first order in A for one molecule), bimolecular A+B gives rate \\(= k[A][B]\\), etc. <strong>Molecularity</strong> is only for elementary steps.</p>"
  },
  {
    "id": "t55",
    "title": "5.5 Collision Model",
    "bodyHtml": "<p>Collision theory: <strong>orientation</strong> and <strong>energy</strong> (must meet or exceed activation energy, \\(E_a\\), along a reaction path). <strong>Arrhenius (qualitative for AP):</strong> as \\(T\\) increases, more collisions have sufficient energy— \\(k\\) typically rises exponentially via \\(k = Ae^{-E_a/(RT)}\\).</p>"
  },
  {
    "id": "t56",
    "title": "5.6 Reaction Energy Profile",
    "bodyHtml": "<p>Reactants→ <strong>transition state</strong> (peak—not an intermediate)→ products. <strong>Activation energy</strong> \\(E_a\\): from reactant level to the peak. <strong>\\(\\Delta H_{\\mathrm{rxn}}\\)</strong> = product energy − reactant energy (independent of \\(E_a\\)).</p>\n    <div class=\"mini-diagram\">\n      <svg viewBox=\"0 0 420 110\" xmlns=\"http://www.w3.org/2000/svg\" aria-label=\"Two reaction profiles: higher and lower activation\">\n        <line x1=\"20\" y1=\"90\" x2=\"400\" y2=\"90\" stroke=\"#8892b0\"></line>\n        <path d=\"M30 80 Q130 10 210 75 T390 65\" fill=\"none\" stroke=\"#f0a04b\" stroke-width=\"2\"></path>\n        <path d=\"M30 80 Q130 35 210 75 T390 65\" fill=\"none\" stroke=\"#7dd3a8\" stroke-width=\"2\"></path>\n        <text x=\"20\" y=\"16\" fill=\"#f0a04b\" font-size=\"11\">uncatalyzed (higher Ea)</text>\n        <text x=\"20\" y=\"30\" fill=\"#7dd3a8\" font-size=\"11\">catalyzed (lower Ea)</text>\n      </svg>\n    </div>\n    <p>Based on the diagram, both paths can share the same endpoints (same \\(\\Delta H\\)) but the catalyzed path has a lower maximum—faster <em>rate</em> without changing thermodynamic favorability.</p>"
  },
  {
    "id": "t57",
    "title": "5.7 Introduction to Mechanisms",
    "bodyHtml": "<p>Elementary steps <strong>sum to</strong> the overall balanced equation—intermediates (formed then consumed) cancel when you add the steps. <strong>Rate-determining step (RDS)</strong>: the slowest step—often the bottleneck; sometimes an equilibrium before it produces a <em>pre-equilibrium</em> (advanced) pattern.</p>"
  },
  {
    "id": "t58",
    "title": "5.8 Mechanism and Rate Law",
    "bodyHtml": "<p>Proposed mechanism’s slow-step prediction must match the <em>measured</em> rate law. If slow step is \\(\\mathrm{A + B \\to I}\\) (intermediate I), the rate is often first order in [A] and [B] <em>unless</em> a prior fast equilibrium feeds [I]. Use pre-equilibrium or steady-state to eliminate intermediates—AP gives hints.</p>\n    <div class=\"steps-block\"><div class=\"teaching-label\">Checklist</div><ul class=\"notes-list\">\n      <li>Add steps; cancel intermediates—equals overall.</li>\n      <li>Write rate from slow step; replace intermediates (SSA or equilibrium).</li>\n      <li>Compare to experiment—must match; if not, reject mechanism.</li>\n    </ul></div>"
  },
  {
    "id": "t59",
    "title": "5.9 Steady-State Approximation (SSA)",
    "bodyHtml": "<p>For a short-lived intermediate \\(I\\), \\(\\frac{d[I]}{dt} \\approx 0\\): its formation rate equals its destruction rate—you can solve algebraically to eliminate \\([I]\\) from the observed rate. Used when the intermediate is <em>very</em> reactive and no simple pre-equilibrium applies.</p>"
  },
  {
    "id": "t510",
    "title": "5.10 Multistep Energy Profile",
    "bodyHtml": "<p>Each step has its own transition state; a true <strong>intermediate</strong> is a <em>valley</em> (local minimum) between two peaks—lower stability than products but a stable-enough well on the PES. The highest barrier along the lowest-energy path often corresponds to the slow step—but compare carefully: sometimes the second high barrier is rate-limiting in complex scenarios.</p>"
  },
  {
    "id": "t511",
    "title": "5.11 Catalysis",
    "bodyHtml": "<p><strong>Homogeneous</strong> (same phase as reactants) vs <strong>heterogeneous</strong> (surface). Catalyst provides an alternate, lower-\\(E_a\\) path; is <em>regenerated</em> at cycle end—not consumed overall. <strong>Enzymes</strong> (biocatalysts) are highly specific; <strong>inhibitors</strong> can block the active site (competitive—in Unit 4/8 tie-ins).</p>\n    <div class=\"why-block\"><div class=\"teaching-label\">Link to Unit 6</div><p>Catalysts do <strong>not</strong> change \\(\\Delta H\\), \\(K\\), or \\(\\Delta G^\\circ\\) of the net reaction—only how fast you approach equilibrium (see Unit 7).</p></div>"
  },
  {
    "id": "unit5-synthesis",
    "title": "Unit 5 Synthesis",
    "bodyHtml": "<p>Data → order → rate law; mechanism → <em>predict</em> rate law; compare. Always say whether you use initial rates, integrated data, or half-life logic.</p>"
  },
  {
    "id": "unit5-practice",
    "title": "Unit 5: Practice (AP-Style)",
    "bodyHtml": "<div class=\"learn-block\"><div class=\"teaching-label\">How these are written</div><p>AP tests <strong>integrated data</strong> (linear plots, rate laws) and the distinction between <strong>thermodynamics</strong> and <strong>kinetics</strong>. Original items.</p></div>\n    <div class=\"qa-item\"><div class=\"qa-question\">1. (Orders) A reactant A decomposes in a closed system. The graph of \\(\\ln[\\mathrm{A}]\\) versus time (in s) is a straight line with a negative slope. (a) What is the reaction order in A? (b) What is the sign of the slope, and what quantity does the magnitude of the slope equal?</div><div class=\"qa-answer\">(a) <strong>First order</strong> in A. (b) Slope is <strong>negative</strong> and in magnitude equal to the rate constant, \\(k\\) (i.e. slope \\(= -k\\)).</div></div>\n    <div class=\"qa-item\"><div class=\"qa-question\">2. (Mechanism) A proposed <em>elementary</em> step in a mechanism is: \\(2\\,\\mathrm{NO_2} \\to \\mathrm{NO_3} + \\mathrm{NO}\\) (as written, single event). (a) Write the rate law implied by that step. (b) If the <em>overall</em> rate law is found to be first order in \\(\\mathrm{NO_2}\\) only, what can you say about the proposed step <em>as the</em> slowest step? Explain briefly.</div><div class=\"qa-answer\">(a) If elementary, rate law from molecularity: \\(\\mathrm{rate} = k[\\mathrm{NO_2}]^2\\). (b) That step cannot be the <strong>sole</strong> rate-determining step as written (which gives second order in \\(\\mathrm{NO_2}\\)), because it contradicts the experimental first order—the student should reject the mechanism or add fast equilibria/another RDS.</div></div>\n    <div class=\"qa-item\"><div class=\"qa-question\">3. (Thermodynamics vs kinetics) A certain reaction is highly product-favored at 298 K (\\(\\Delta G^\\circ \\ll 0\\)), yet a plot of [reactant] vs time shows a half-life of many hours. (a) Name one kinetics quantity that is not determined by \\(\\Delta G^\\circ\\). (b) Give one <em>physical</em> reason the reaction can still be slow.</div><div class=\"qa-answer\">(a) The <strong>rate constant</strong> and activation energy (kinetics) are not fixed by \\(\\Delta G^\\circ\\) alone. (b) A large <strong>activation energy</strong> (high barrier) means only a small fraction of collisions are successful at 298 K, so the <em>rate</em> is small even if \\(\\Delta G^\\circ\\) is very negative.</div></div>\n    <div class=\"qa-item\"><div class=\"qa-question\">4. (Half-life) A first-order reaction in species X has half-life \\(t_{1/2} = 120\\ \\mathrm{s}\\) at 298 K. (a) Calculate \\(k\\). (b) If \\([X]\\) is halved, does the half-life (of that remaining) change? (<em>Yes/No</em> and one sentence of reasoning.)</div><div class=\"qa-answer\">(a) \\(k = 0.693 / t_{1/2} = 0.693 / 120\\ \\mathrm{s} = 5.78\\times 10^{-3}\\ \\mathrm{s^{-1}}\\) (2 s.f. to match 120). (b) <strong>No</strong> for a first-order process: the half-life is <em>constant</em> and does not depend on the initial \\([X]\\).</div></div>"
  }
];
