/* eslint-disable max-len -- generated from ap-calculus/units/unit4.html */
export type CalcChapterChunk = { id: string; title: string; bodyHtml: string };

export const calcUnit4DocTitle = "Unit 4: Contextual Applications of Differentiation";
export const calcUnit4DocLabel = "AP Calculus (AB + BC)";
export const calcUnit4SidebarHeader = "Calculus Unit 4";
export const calcUnit4SwitcherSummary = "Unit 4: Contextual Applications of Differentiation";

export const calcUnit4Chapters: CalcChapterChunk[] = [
  {
    "id": "overview",
    "title": "How To Study This Unit",
    "bodyHtml": "<div class=\"learn-block\" id=\"overview\">\n    <div class=\"teaching-label\">How To Study This Unit</div>\n    <p>Unit 4 is about <strong>meaning</strong>: every derivative is a rate with units. AP will ask you to read a model, set up a relationship, and explain behavior (speeding up, concave down, etc.).</p>\n    <p>For related rates, draw a diagram first. For linearization, think “tangent line as local approximation.” BC-only L’Hospital belongs in limit problems with justified indeterminate forms.</p>\n  </div>"
  },
  {
    "id": "t41",
    "title": "4.1 Interpreting the Meaning of the Derivative in Context",
    "bodyHtml": "<p>If \\(C(x)\\) is cost to produce \\(x\\) units, then \\(C'(x)\\) is <strong>marginal cost</strong> (approximate cost of the next unit). If \\(P(t)\\) is population, \\(P'(t)\\) is growth rate in individuals per year.</p>\n    <div class=\"formula-block\">Units of \\(f'\\): \\(\\frac{\\text{units of }f}{\\text{units of }x}\\).</div>\n    <div class=\"mistake-block\"><div class=\"teaching-label\">Common Mistake</div><p>Reporting a derivative value without connecting it to what the variables represent in the story.</p></div>\n    <div class=\"qa-item\"><div class=\"qa-question\">AP-Style Prompt</div><div class=\"qa-answer\">If \\(R(p)\\) is revenue at price \\(p\\) and \\(R'(12)=-30\\) dollars per dollar, interpret the sign and magnitude at \\(p=12\\).</div></div>"
  },
  {
    "id": "t42",
    "title": "4.2 Straight-Line Motion: Connecting Position, Velocity, and Acceleration",
    "bodyHtml": "<p>For position \\(s(t)\\), velocity is \\(v(t)=s'(t)\\) and acceleration is \\(a(t)=v'(t)=s''(t)\\). Speed is \\(|v(t)|\\).</p>\n    <div class=\"formula-block\">Particle speeds up when \\(v\\) and \\(a\\) have the same sign; slows down when they have opposite signs.</div>\n    <div class=\"mini-diagram\">\n      <svg viewBox=\"0 0 420 110\" xmlns=\"http://www.w3.org/2000/svg\" aria-label=\"Position to acceleration\">\n        <rect x=\"20\" y=\"28\" width=\"100\" height=\"50\" stroke=\"#8892b0\" fill=\"none\"></rect><text x=\"38\" y=\"58\" fill=\"#d4daf0\" font-size=\"12\">s(t)</text>\n        <text x=\"130\" y=\"58\" fill=\"#5b8dee\" font-size=\"14\">→</text>\n        <rect x=\"155\" y=\"28\" width=\"100\" height=\"50\" stroke=\"#8892b0\" fill=\"none\"></rect><text x=\"178\" y=\"58\" fill=\"#d4daf0\" font-size=\"12\">v=s'</text>\n        <text x=\"265\" y=\"58\" fill=\"#5b8dee\" font-size=\"14\">→</text>\n        <rect x=\"290\" y=\"28\" width=\"100\" height=\"50\" stroke=\"#8892b0\" fill=\"none\"></rect><text x=\"305\" y=\"58\" fill=\"#d4daf0\" font-size=\"12\">a=v'</text>\n        <text x=\"20\" y=\"100\" fill=\"#8892b0\" font-size=\"11\">Differentiate once for velocity; twice for acceleration.</text>\n      </svg>\n    </div>\n    <div class=\"callout example\">If \\(v(t)=t^2-4t\\), then \\(a(t)=2t-4\\). At \\(t=1\\), \\(v=-3\\) and \\(a=-2\\) (same sign → speeding up in negative direction).</div>"
  },
  {
    "id": "t43",
    "title": "4.3 Rates of Change in Applied Contexts Other Than Motion",
    "bodyHtml": "<p>Any quantity \\(Q(t)\\) changing over time has rate \\(Q'(t)\\): water height in a tank, angle of a ladder, temperature cooling, etc.</p>\n    <div class=\"steps-block\"><div class=\"teaching-label\">Modeling Routine</div><ul class=\"notes-list\"><li>Identify variables and what is fixed vs changing.</li><li>Write a geometric or physical relation linking variables.</li><li>Differentiate with respect to time when appropriate.</li></ul></div>"
  },
  {
    "id": "t44",
    "title": "4.4 Introduction to Related Rates",
    "bodyHtml": "<p>Related rates link two or more quantities that change together. You differentiate an equation that is true <em>for all time</em> in the situation, then substitute numeric values <em>after</em> differentiating.</p>\n    <div class=\"formula-block\">If \\(x^2+y^2=z^2\\) for a right triangle with changing legs, then \\(2xx'+2yy'=2zz'\\).</div>\n    <div class=\"mistake-block\"><div class=\"teaching-label\">Common Mistake</div><p>Plugging numbers in before differentiating, which freezes variables that should still be changing.</p></div>"
  },
  {
    "id": "t45",
    "title": "4.5 Solving Related Rates Problems",
    "bodyHtml": "<p>Classic templates: expanding circle \\(A=\\pi r^2\\Rightarrow A'=2\\pi r r'\\); cone or cylinder volume; ladder sliding with Pythagoras.</p>\n    <div class=\"steps-block\"><div class=\"teaching-label\">Problem Setup</div><ul class=\"notes-list\"><li>Draw and label diagram with constants vs variables.</li><li>Write one equation relating the variables.</li><li>Differentiate, substitute known rates and positions, solve for unknown rate.</li></ul></div>\n    <div class=\"qa-item\"><div class=\"qa-question\">AP-Style Prompt</div><div class=\"qa-answer\">A spherical balloon’s radius increases at \\(2\\) cm/s. Find the rate of change of volume when \\(r=5\\) cm. Include units.</div></div>"
  },
  {
    "id": "t46",
    "title": "4.6 Local Linearity and Linearization",
    "bodyHtml": "<p>Near \\(x=a\\), a differentiable function is well approximated by its tangent line: \\(L(x)=f(a)+f'(a)(x-a)\\).</p>\n    <div class=\"formula-block\">\\(f(x)\\approx f(a)+f'(a)(x-a)\\) for \\(x\\) close to \\(a\\) (local linearization).</div>\n    <div class=\"callout example\">Linearize \\(\\sqrt{x}\\) at \\(a=9\\): \\(L(x)=3+\\frac{1}{6}(x-9)\\). Estimate \\(\\sqrt{9.2}\\approx3+\\frac{0.2}{6}\\approx3.033\\).</div>"
  },
  {
    "id": "t47",
    "title": "4.7 Using L'Hospital's Rule for Determining Limits of Indeterminate Forms (BC)",
    "bodyHtml": "<p><strong>BC only.</strong> L’Hospital’s rule applies to limits giving indeterminate forms such as \\(0/0\\) or \\(\\infty/\\infty\\) when numerator and denominator are differentiable near the point (with correct one-sided hypotheses).</p>\n    <div class=\"formula-block\">If \\(\\lim\\frac{f}{g}\\) is \\(0/0\\) or \\(\\infty/\\infty\\), then \\(\\lim\\frac{f}{g}=\\lim\\frac{f'}{g'}\\) when the latter limit exists (or is \\(\\pm\\infty\\)).</div>\n    <div class=\"mistake-block\"><div class=\"teaching-label\">Common Mistake</div><p>Applying L’Hospital without verifying indeterminate form, or applying when the limit of ratios of derivatives fails to exist.</p></div>\n    <div class=\"callout example\">\\(\\lim_{x\\to0}\\frac{\\sin x}{x}=\\lim_{x\\to0}\\frac{\\cos x}{1}=1\\) after checking \\(0/0\\).</div>"
  },
  {
    "id": "t48",
    "title": "4.8 Interpreting Differentiability and Continuity in Context",
    "bodyHtml": "<p>In models, nondifferentiability can mean a regime change: pricing tiers, piecewise policies, or constraints that create corners. Continuity failure can mean impossible jumps in inventory or height.</p>\n    <div class=\"qa-item\"><div class=\"qa-question\">AP-Style Prompt</div><div class=\"qa-answer\">Explain in context why a cost function might be continuous but not differentiable at a quantity where a bulk discount kicks in.</div></div>"
  },
  {
    "id": "practice",
    "title": "Mixed Practice and FRQ Strategy",
    "bodyHtml": "<div class=\"steps-block\"><div class=\"teaching-label\">Timed Routine</div><ul class=\"notes-list\"><li>2 interpretation-only prompts (units + meaning).</li><li>2 motion problems with speed vs velocity.</li><li>2 related rates with diagram.</li><li>1 linearization estimate.</li><li>BC: 1 L’Hospital limit with justification.</li></ul></div>"
  }
];
