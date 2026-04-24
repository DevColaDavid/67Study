/* eslint-disable max-len -- generated from ap-chemistry/units/unit8.html */
export type ChemChapterChunk = { id: string; title: string; bodyHtml: string };

export const chemUnit8DocTitle = "Unit 8: Acids and Bases";
export const chemUnit8DocLabel = "AP Chemistry";
export const chemUnit8SidebarHeader = "Unit 8";
export const chemUnit8SwitcherSummary = "Unit 8: Acids and Bases";

export const chemUnit8Chapters: ChemChapterChunk[] = [
  {
    "id": "t81",
    "title": "8.1 Introduction to Acids and Bases",
    "bodyHtml": "<p><strong>Arrhenius (water):</strong> acid increases \\(\\mathrm{H^+}\\) (or \\({\\mathrm{H}_3\\mathrm{O}}^{+}\\)), base increases \\(\\mathrm{OH^-}\\). <strong>Brønsted–Lowry:</strong> acid = \\(\\mathrm{H^+}\\) donor, base = acceptor—conjugate pair \\(\\mathrm{HA / A^-}\\) (differs by one \\(\\mathrm{H^+}\\)). <strong>Lewis</strong> (Unit 2 tie-in): acid = electron-pair <em>acceptor</em> (e.g. \\(\\mathrm{BF_3}\\)), base = donor (\\(\\mathrm{NH_3}\\)).</p>"
  },
  {
    "id": "t82",
    "title": "8.2 pH and pOH of Strong Acids and Bases",
    "bodyHtml": "<p>Definitions (25°C): \\(\\mathrm{pH} = -\\log[\\mathrm{H^+}]\\), \\(\\mathrm{pOH} = -\\log[\\mathrm{OH^-}]\\), \\(\\mathrm{pH} + \\mathrm{pOH} = 14.00\\). <strong>Strong</strong> monoprotic acid: \\([\\mathrm{H^+}] = C_a\\) (fully dissociate). <strong>Strong</strong> group 1 hydroxides: \\([\\mathrm{OH^-}]\\) from full dissociation, then pOH→pH. For <strong>diprotic strong</strong> \\(\\mathrm{H_2SO_4}\\) first step complete; second is not always—read the problem—often AP uses first \\(\\mathrm{H^+}\\) only in dilute solution.</p>"
  },
  {
    "id": "t83",
    "title": "8.3 Weak Acids and Bases: \\(K_a\\), \\(K_b\\), ICE",
    "bodyHtml": "<p>Weak: \\(\\mathrm{HA} + \\mathrm{H_2O} \\rightleftharpoons {\\mathrm{H}_3\\mathrm{O}}^{+} + \\mathrm{A^-}\\), \\(K_a = \\dfrac{[{\\mathrm{H}_3\\mathrm{O}}^{+}][\\mathrm{A^-}]}{[\\mathrm{HA}]}\\). <strong>ICE table</strong> in concentration (M) with <strong>initial</strong>, <strong>change</strong> (\\(-x\\), \\(+x\\)), <strong>equilibrium</strong>. <strong>Percent ionization</strong> \\(= 100\\% \\times (x/[\\mathrm{HA}]_0)\\). <strong>Conjugate base</strong> strength: \\(K_b = K_w/K_a\\) (25°C: \\(K_w = 1.0\\times 10^{-14}\\)).</p>\n    <p>If \\([\\mathrm{HA}]\\) is not large vs \\(K_a\\), the approximation \\([\\mathrm{HA}]_{\\mathrm{eq}} \\approx [\\mathrm{HA}]_0 - x \\approx [\\mathrm{HA}]_0\\) can fail—use the quadratic. If \\(C/K_a \\ge 10^3\\), 5% rule often valid.</p>"
  },
  {
    "id": "t84",
    "title": "8.4 Acid–Base Reactions and Buffers",
    "bodyHtml": "<p><strong>Buffer</strong>: significant \\(\\mathrm{HA}\\) and \\(\\mathrm{A^-}\\) (or \\(\\mathrm{NH_3} / ({\\mathrm{NH}_4})^{+}\\))—resists pH to small strong acid or base. You build one by: partial titration, mixing salt + weak component, or adding limiting strong acid to weak base, etc. <strong>Stoich first</strong> on strong–strong or strong–weak in excess, then pH—HH only when you still have a weak+conjugate pair in meaningful amount.</p>"
  },
  {
    "id": "t85",
    "title": "8.5 Structure and Acid Strength",
    "bodyHtml": "<p>Across a period: oxyacids—more electronegative central and more O’s often strengthen (electron withdrawal stabilizes \\(\\mathrm{A^-}\\)). Down a group binary acids (HX): bond strength vs polar bond trade-off—HI stronger acid than HF in <em>water</em> (H–F bond very strong—dominant role). <strong>Resonance</strong> stabilizes the conjugate base (e.g. carboxylate).</p>"
  },
  {
    "id": "t86",
    "title": "8.6 pH, \\(K_a\\), and Henderson–Hasselbalch",
    "bodyHtml": "<p>\\(pK_a = -\\log K_a\\). For buffer: \\(\\mathrm{pH} = pK_a + \\log\\left(\\dfrac{[\\mathrm{A^-}]}{[\\mathrm{HA}]}\\right)\\). Use <strong>equilibrium</strong> amounts after any reaction—not initial acid volume-only ratios if a strong reagent is added.</p>"
  },
  {
    "id": "t87",
    "title": "8.7 Buffer Capacity and Range",
    "bodyHtml": "<p>Best buffering (minimum change in pH per added strong acid or base) when \\(\\mathrm{pH} \\approx pK_a\\). Higher total \\(\\mathrm{[HA] + [A^-]}\\) gives higher <strong>capacity</strong> (can absorb more strong acid or base). Effective range: roughly p\\(K_a \\pm 1\\).</p>"
  },
  {
    "id": "t88",
    "title": "8.8 pH and Solubility (Salts of Basic Anions)",
    "bodyHtml": "<p>If anion is basic (e.g. \\(\\mathrm{F^-}\\) from CaF\\(_2\\), \\(({\\mathrm{CO}_3})^{2-}\\) from a carbonate), lower pH (more \\(\\mathrm{H^+}\\)) protonates the anion, shifting the dissolution right—more soluble in acid. Qualitative: \\(K_{\\mathrm{sp}}\\) and \\(K_b\\) of anion (or second hydrolysis) connect through coupled equilibria (advanced: exact solving rare on timed MC).</p>"
  },
  {
    "id": "unit8-synthesis",
    "title": "Unit 8 Synthesis",
    "bodyHtml": "<p>Stoich → identify species at end → strong shortcut or weak ICE or buffer HH. Always check whether you are in <strong>buffer region</strong> or <strong>excess strong</strong> region—wrong equation = wrong pH by several units.</p>"
  },
  {
    "id": "unit8-practice",
    "title": "Unit 8: Practice (AP-Style)",
    "bodyHtml": "<div class=\"learn-block\"><div class=\"teaching-label\">How these are written</div><p>AP-style acid–base: identify <strong>strong</strong> vs <strong>weak</strong>, use ICE for weak, and Henderson–Hasselbalch only in <em>valid buffer</em> context. Original items; constants at 25°C unless stated.</p></div>\n    <div class=\"qa-item\"><div class=\"qa-question\">1. (Strong acid) A stock solution of \\(\\mathrm{HCl}\\) is labeled \\(0.100\\ \\mathrm{M}\\) at 25°C. (a) What is the hydronium concentration <em>assuming HCl is a strong acid in water</em>? (b) On the same exam, a problem gives \\(\\mathrm{H_2SO_4}\\) with “only the <em>first</em> dissociation is complete” for \\(0.100\\ \\mathrm{M}\\) solution—what is \\([\\mathrm{H^+}]\\) in that <em>single</em> statement?</div><div class=\"qa-answer\">(a) \\(\\mathrm{HCl}\\) is strong and monoprotic: \\([{\\mathrm{H}_3\\mathrm{O}}^{+}] = 0.100\\ \\mathrm{M}\\) (full dissociation). (b) If <em>only the first</em> \\(\\mathrm{H^+}\\) is complete, the concentration of \\(\\mathrm{H^+}\\) is \\(0.100\\ \\mathrm{M}\\) from that first step (the second is treated as <em>not</em> full unless specified).</div></div>\n    <div class=\"qa-item\"><div class=\"qa-question\">2. (Weak acid, ICE) At 25°C, the \\(K_a\\) of acetic acid, \\(\\mathrm{CH_3COOH}\\), is \\(1.8\\times 10^{-5}\\). For a \\(0.20\\ \\mathrm{M}\\) solution of \\(\\mathrm{CH_3COOH(aq)}\\), (a) write the correct \\(K_a\\) mass-action expression, (b) set up ICE for the ionization, and (c) compute \\([\\mathrm{H^+}]\\) to two significant figures (you may use the small-\\(x\\) approximation if you justify it with \\(C/K_a\\)).</div><div class=\"qa-answer\">(a) \\(K_a = [\\mathrm{H^+}][{\\mathrm{CH_3COO}}^{-}] / [\\mathrm{CH_3COOH}]\\). (b) Let \\(+x\\): −x from HA; \\(+x\\) and \\(+x\\) for products; equilibrium \\((0.20 - x, x, x)\\). (c) \\(C/K_a \\gg 1\\), so \\(x \\ll 0.20\\): \\(K_a \\approx x^2 / 0.20\\), so \\(x = \\sqrt{1.8\\times 10^{-5} \\times 0.20} = 0.0019\\ \\mathrm{M} = [H^+]\\) (2 s.f. here).</div></div>\n    <div class=\"qa-item\"><div class=\"qa-question\">3. (Buffer) A buffer is prepared with equal volumes of \\(0.20\\ \\mathrm{M\\ CH_3COOH}\\) and \\(0.20\\ \\mathrm{M\\ NaCH_3COO}\\) (both at 25°C). (a) Write Henderson–Hasselbalch. (b) If \\(K_a = 1.8\\times 10^{-5}\\) (\\(pK_a = 4.74\\)), find the pH. (c) A small amount of strong acid is added—which species consumes most of the added \\(\\mathrm{H^+}\\)?</div><div class=\"qa-answer\">(a) \\(\\mathrm{pH} = pK_a + \\log \\frac{[A^-]}{[HA]}\\). (b) Equal conc. → ratio 1, \\(\\log(1) = 0\\), so \\(\\mathrm{pH} = 4.74\\). (c) <strong>Acetate</strong> \\({\\mathrm{CH_3COO}}^{-}\\) (the base form) reacts with added \\(\\mathrm{H^+}\\) to re-form weak acid, buffering the pH change.</div></div>\n    <div class=\"qa-item\"><div class=\"qa-question\">4. (Solubility and pH) A sparingly soluble salt of a weak base (e.g. metal fluoride) has basic \\(\\mathrm{F^-}\\) in water. (a) Qualitatively, does lowering the pH (adding strong acid) increase or decrease the molar solubility of the salt? (b) One line: link this to the common-ion/secondary equilibrium idea.</div><div class=\"qa-answer\">(a) <strong>Increases</strong> molar solubility in acid—protonation of \\(\\mathrm{F^-}\\) to \\(\\mathrm{HF}\\) removes free \\(\\mathrm{F^-}\\), so more solid can dissolve. (b) The \\(\\mathrm{F^-}\\) that remains is tied to \\(K_b\\) and \\(K_a\\) of HF; by Le Châtelier, removing \\(\\mathrm{F^-}\\) (as HF) drives \\(\\mathrm{MF_2(s)} \\rightleftharpoons \\mathrm{M^{2+}} + 2\\mathrm{F^-}\\) right—more soluble in acid.</div></div>"
  }
];
