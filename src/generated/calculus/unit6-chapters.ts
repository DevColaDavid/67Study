/* eslint-disable max-len -- generated from ap-calculus/units/unit6.html */
export type CalcChapterChunk = { id: string; title: string; bodyHtml: string };

export const calcUnit6DocTitle = "Unit 6: Integration and Accumulation of Change";
export const calcUnit6DocLabel = "AP Calculus (AB + BC)";
export const calcUnit6SidebarHeader = "Calculus Unit 6";
export const calcUnit6SwitcherSummary = "Unit 6: Integration and Accumulation of Change";

export const calcUnit6Chapters: CalcChapterChunk[] = [
  {
    "id": "overview",
    "title": "How To Study This Unit",
    "bodyHtml": "<div class=\"learn-block\" id=\"overview\">\n    <div class=\"teaching-label\">How To Study This Unit</div>\n    <p>Integration is the language of <strong>total change</strong> and <strong>net area</strong>. Connect every definite integral to “sum of infinitely many tiny pieces,” then let the FTC bridge area and antiderivatives.</p>\n    <p>Master \\(u\\)-substitution until the chain rule runs backward in your head. BC students add algebraic splits (long division, partial fractions) and \\(\\int u\\,dv\\) structure.</p>\n  </div>"
  },
  {
    "id": "t61",
    "title": "6.1 Exploring Accumulations of Change",
    "bodyHtml": "<p>If \\(r(t)\\) is a rate (water flow, growth rate), then \\(\\int_a^b r(t)\\,dt\\) is the <strong>accumulated quantity</strong> over \\([a,b]\\)—not an instantaneous value.</p>\n    <div class=\"formula-block\">Net change: \\(\\displaystyle \\int_a^b f'(t)\\,dt = f(b)-f(a)\\).</div>\n    <div class=\"qa-item\"><div class=\"qa-question\">AP-Style Prompt</div><div class=\"qa-answer\">Oil leaks at rate \\(L(t)\\) gallons per minute. What does \\(\\int_0^{30} L(t)\\,dt\\) represent, with units?</div></div>"
  },
  {
    "id": "t62",
    "title": "6.2 Approximating Areas with Riemann Sums",
    "bodyHtml": "<p>Partition \\([a,b]\\) into subintervals of width \\(\\Delta x\\). Sample heights from left endpoints (L), right (R), midpoints (M), or max/min for bounds.</p>\n    <div class=\"formula-block\">Right sum: \\(\\displaystyle \\sum_{k=1}^n f(x_k)\\,\\Delta x\\) where \\(x_k=a+k\\Delta x\\), \\(\\Delta x=\\frac{b-a}{n}\\).</div>\n    <div class=\"data-table\">\n      <table>\n        <thead><tr><th>Rule</th><th>Sample point</th><th>Typical bias</th></tr></thead>\n        <tbody>\n          <tr><td>Left</td><td>left edge</td><td>depends on monotonicity</td></tr>\n          <tr><td>Right</td><td>right edge</td><td>opposite of left for monotone \\(f\\)</td></tr>\n          <tr><td>Midpoint</td><td>center</td><td>often smaller error for smooth \\(f\\)</td></tr>\n        </tbody>\n      </table>\n    </div>\n    <div class=\"mistake-block\"><div class=\"teaching-label\">Common Mistake</div><p>Using wrong \\(\\Delta x\\) or wrong number of rectangles after reading a table of unequal widths (use actual widths in that case).</p></div>"
  },
  {
    "id": "t63",
    "title": "6.3 Riemann Sums, Summation Notation, and Definite Integrals",
    "bodyHtml": "<p>As \\(n\\to\\infty\\) and \\(\\Delta x\\to 0\\), Riemann sums stabilize to the definite integral when \\(f\\) is integrable (continuous functions on \\([a,b]\\) are fine).</p>\n    <div class=\"formula-block\">\\(\\displaystyle \\int_a^b f(x)\\,dx=\\lim_{n\\to\\infty}\\sum_{k=1}^n f(x_k^*)\\,\\Delta x\\).</div>\n    <div class=\"steps-block\"><div class=\"teaching-label\">Limit-of-Sum Translation</div><ul class=\"notes-list\"><li>Identify \\(f(x_k^*)\\) and \\(\\Delta x\\) from the given sum.</li><li>Recover interval \\([a,b]\\) from endpoints of the partition.</li><li>Rewrite the limit as \\(\\int_a^b f(x)\\,dx\\).</li></ul></div>"
  },
  {
    "id": "t64",
    "title": "6.4 The Fundamental Theorem of Calculus and Definite Integrals",
    "bodyHtml": "<p>FTC Part 1: if \\(g(x)=\\int_a^x f(t)\\,dt\\) and \\(f\\) is continuous, then \\(g'(x)=f(x)\\). The upper limit “feeds through” the integrand when differentiated.</p>\n    <div class=\"formula-block\">Leibniz form: \\(\\dfrac{d}{dx}\\int_{u(x)}^{v(x)} f(t)\\,dt = f(v(x))v'(x)-f(u(x))u'(x)\\).</div>\n    <div class=\"callout example\">\\(\\dfrac{d}{dx}\\int_2^{x^2}\\sin(t^2)\\,dt = \\sin(x^4)\\cdot 2x\\).</div>"
  },
  {
    "id": "t65",
    "title": "6.5 Interpreting the Behavior of Accumulation Functions Involving Area",
    "bodyHtml": "<p>For \\(A(x)=\\int_a^x f(t)\\,dt\\), the graph of \\(A\\) increases where \\(f&gt;0\\), decreases where \\(f&lt;0\\), and has local extrema where \\(f\\) crosses zero (sign change).</p>\n    <div class=\"formula-block\">\\(A''(x)=f'(x)\\): concavity of the accumulation function tracks the slope of \\(f\\).</div>\n    <div class=\"qa-item\"><div class=\"qa-question\">AP-Style Prompt</div><div class=\"qa-answer\">If \\(f\\) is positive and decreasing on \\((0,5)\\), describe the increasing/dec concavity behavior of \\(g(x)=\\int_0^x f(t)\\,dt\\) on that interval.</div></div>"
  },
  {
    "id": "t66",
    "title": "6.6 Applying Properties of Definite Integrals",
    "bodyHtml": "<p>Integrals respect linearity, interval additivity, and reversal of limits. Symmetry can collapse work: odd functions on \\([-a,a]\\) integrate to \\(0\\).</p>\n    <div class=\"formula-block\">\\(\\int_a^b f=-\\int_b^a f\\); \\(\\int_a^b f+\\int_b^c f=\\int_a^c f\\); \\(\\int_a^b (cf+dg)=c\\int_a^b f+d\\int_a^b g\\).</div>"
  },
  {
    "id": "t67",
    "title": "6.7 The Fundamental Theorem of Calculus and Antidifferentiation",
    "bodyHtml": "<p>FTC Part 2: if \\(F'=f\\) on \\([a,b]\\), then \\(\\int_a^b f(x)\\,dx=F(b)-F(a)\\). This is how you evaluate definite integrals symbolically.</p>\n    <div class=\"formula-block\">\\(\\displaystyle \\int_a^b f(x)\\,dx = \\left[F(x)\\right]_a^b = F(b)-F(a)\\).</div>\n    <div class=\"mistake-block\"><div class=\"teaching-label\">Common Mistake</div><p>Confusing the evaluation notation \\([F]_a^b\\) with \\(F(b-a)\\).</p></div>"
  },
  {
    "id": "t68",
    "title": "6.8 Finding Antiderivatives and Indefinite Integrals: Basic Rules and Notation",
    "bodyHtml": "<p>\\(\\int f(x)\\,dx\\) means the family of all antiderivatives; include \\(+C\\) unless solving an initial-value problem that pins \\(C\\) down.</p>\n    <div class=\"formula-block\">Power (for \\(n\\neq -1\\)): \\(\\int x^n\\,dx=\\frac{x^{n+1}}{n+1}+C\\). Also memorize \\(\\int e^x\\,dx\\), \\(\\int \\frac{1}{x}\\,dx\\), and basic trig antiderivatives.</div>"
  },
  {
    "id": "t69",
    "title": "6.9 Integrating Using Substitution",
    "bodyHtml": "<p>Substitution reverses the chain rule: set \\(u\\) to an inner function whose derivative (up to a constant factor) appears in the integrand.</p>\n    <div class=\"formula-block\">\\(\\int f(g(x))g'(x)\\,dx=\\int f(u)\\,du\\) with \\(u=g(x)\\), \\(du=g'(x)\\,dx\\).</div>\n    <div class=\"steps-block\"><div class=\"teaching-label\">Definite Integral Substitution</div><ul class=\"notes-list\"><li>Change limits: when \\(x=a\\), \\(u=g(a)\\); when \\(x=b\\), \\(u=g(b)\\).</li><li>Or substitute back to \\(x\\) before evaluating at original limits.</li></ul></div>\n    <div class=\"callout example\">\\(\\int 2x\\cos(x^2)\\,dx\\): let \\(u=x^2\\), \\(du=2x\\,dx\\) → \\(\\int\\cos u\\,du=\\sin u+C=\\sin(x^2)+C\\).</div>"
  },
  {
    "id": "t610",
    "title": "6.10 Integrating Functions Using Long Division and Completing the Square (BC)",
    "bodyHtml": "<p><strong>BC only.</strong> When degree of numerator \\(\\geq\\) degree of denominator, polynomial long division reduces the integrand to a polynomial plus a proper rational function.</p>\n    <div class=\"formula-block\">Completing the square rewrites \\(x^2+bx+c\\) as \\((x-h)^2\\pm k^2\\) to match \\(\\int \\frac{1}{u^2+a^2}\\,du\\) or arctangent forms.</div>\n    <div class=\"mistake-block\"><div class=\"teaching-label\">Common Mistake</div><p>Jumping to partial fractions before making the rational function proper.</p></div>"
  },
  {
    "id": "t611",
    "title": "6.11 Integrating Using Integration by Parts (BC)",
    "bodyHtml": "<p><strong>BC only.</strong> \\(\\int u\\,dv = uv-\\int v\\,du\\). Choose \\(u\\) using LIATE (logs, inverse trig, algebraic, trig, exponential) as a priority guide—not a law.</p>\n    <div class=\"formula-block\">\\(\\int x e^x\\,dx\\): let \\(u=x\\), \\(dv=e^x\\,dx\\) → \\(xe^x-\\int e^x\\,dx=xe^x-e^x+C\\).</div>\n    <div class=\"callout example\">Cyclic by parts: \\(\\int e^x\\sin x\\,dx\\) returns after two applications; solve algebraically for the integral.</div>"
  },
  {
    "id": "t612",
    "title": "6.12 Integrating Using Linear Partial Fractions (BC)",
    "bodyHtml": "<p><strong>BC only.</strong> For distinct linear factors \\((x-a)(x-b)\\), write \\(\\dfrac{P}{(x-a)(x-b)}=\\dfrac{A}{x-a}+\\dfrac{B}{x-b}\\), clear denominators, and solve for \\(A,B\\).</p>\n    <div class=\"formula-block\">Each term integrates as \\(A\\ln|x-a|+B\\ln|x-b|+C\\) (watch absolute values in log antiderivatives).</div>"
  },
  {
    "id": "practice",
    "title": "Mixed Practice and FRQ Strategy",
    "bodyHtml": "<div class=\"steps-block\"><div class=\"teaching-label\">Timed Routine</div><ul class=\"notes-list\"><li>2 Riemann sum / limit-to-integral translations.</li><li>2 FTC Part 1 derivative-of-integral problems.</li><li>3 definite integrals (substitution + properties).</li><li>BC: 1 long division or partial fractions; 1 by parts.</li></ul></div>"
  }
];
