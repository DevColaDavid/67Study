/* eslint-disable max-len -- generated from ap-calculus/units/unit2.html */
export type CalcChapterChunk = { id: string; title: string; bodyHtml: string };

export const calcUnit2DocTitle = "Unit 2: Differentiation: Definition and Fundamental Properties";
export const calcUnit2DocLabel = "AP Calculus (AB + BC)";
export const calcUnit2SidebarHeader = "Calculus Unit 2";
export const calcUnit2SwitcherSummary = "Unit 2: Differentiation: Definition and Fundamental Properties";

export const calcUnit2Chapters: CalcChapterChunk[] = [
  {
    "id": "overview",
    "title": "How To Study This Unit",
    "bodyHtml": "<div class=\"learn-block\" id=\"overview\">\n    <div class=\"teaching-label\">How To Study This Unit</div>\n    <p>Unit 2 turns “rate of change” into a function: the <strong>derivative</strong>. Master both the limit definition and the shortcut rules, because AP will mix symbolic computation with interpretation (units, slopes, local linearity).</p>\n    <p>Practice each rule on expressions that already require algebra cleanup (products inside composites, etc.). Always ask: “What is the inner function?” before you differentiate.</p>\n  </div>"
  },
  {
    "id": "t21",
    "title": "2.1 Defining Average and Instantaneous Rates of Change at a Point",
    "bodyHtml": "<p>The average rate of change of \\(f\\) on \\([a,b]\\) is the slope of the secant through \\((a,f(a))\\) and \\((b,f(b))\\). The instantaneous rate at \\(x=a\\) is the limit of average rates as the interval shrinks to \\(a\\).</p>\n    <div class=\"formula-block\">\\(\\dfrac{f(b)-f(a)}{b-a}\\quad\\text{and}\\quad f'(a)=\\lim_{h\\to0}\\dfrac{f(a+h)-f(a)}{h}\\).</div>\n    <div class=\"steps-block\"><div class=\"teaching-label\">Secant to Tangent Picture</div><ul class=\"notes-list\"><li>Pick two points and compute secant slope.</li><li>Let the second point approach the first.</li><li>Interpret the limiting slope as the derivative at that point.</li></ul></div>\n    <div class=\"callout example\">If \\(f(x)=x^3\\), average rate on \\([1,1+h]\\) is \\(\\frac{(1+h)^3-1}{h}=3+3h+h^2\\). As \\(h\\to0\\), \\(f'(1)=3\\).</div>"
  },
  {
    "id": "t22",
    "title": "2.2 Defining the Derivative of a Function and Using Derivative Notation",
    "bodyHtml": "<p>The derivative \\(f'(x)\\) is the instantaneous rate of change of \\(f\\) with respect to \\(x\\). Notation matters: \\(f'(x)\\), \\(\\frac{dy}{dx}\\), and \\(D_x y\\) all refer to the same object when \\(y=f(x)\\).</p>\n    <div class=\"formula-block\">\\(f'(a)=\\lim_{h\\to0}\\frac{f(a+h)-f(a)}{h}=\\lim_{x\\to a}\\frac{f(x)-f(a)}{x-a}\\) when the limit exists.</div>\n    <div class=\"mistake-block\"><div class=\"teaching-label\">Common Mistake</div><p>Treating \\(\\frac{dy}{dx}\\) as a fraction you can “cancel” without a theorem. It is a limit of ratios, not a literal quotient of differentials on AP Calc AB.</p></div>\n    <div class=\"qa-item\"><div class=\"qa-question\">AP-Style Prompt</div><div class=\"qa-answer\">Use the limit definition to find \\(g'(2)\\) for \\(g(x)=5x-x^2\\). Show factor/cancel or direct evaluation clearly.</div></div>"
  },
  {
    "id": "t23",
    "title": "2.3 Estimating Derivatives of a Function at a Point",
    "bodyHtml": "<p>When a formula is messy or only a table/graph is given, estimate \\(f'(a)\\) with a symmetric difference quotient or secant between two nearby points.</p>\n    <table class=\"data-table\">\n      <thead><tr><th>x</th><th>1.98</th><th>2.00</th><th>2.02</th></tr></thead>\n      <tbody><tr><td>f(x)</td><td>7.92</td><td>8.00</td><td>8.08</td></tr></tbody>\n    </table>\n    <p>Here \\(\\frac{f(2.02)-f(1.98)}{0.04}=\\frac{0.16}{0.04}=4\\) estimates \\(f'(2)\\).</p>\n    <div class=\"mistake-block\"><div class=\"teaching-label\">Common Mistake</div><p>Using a huge step size so the secant slope is not a good tangent approximation.</p></div>"
  },
  {
    "id": "t24",
    "title": "2.4 Connecting Differentiability and Continuity: Determining When Derivatives Do and Do Not Exist",
    "bodyHtml": "<p>Differentiable at a point implies continuous there. The converse is false: \\(|x|\\) is continuous at \\(0\\) but not differentiable at \\(0\\) (corner).</p>\n    <div class=\"formula-block\">If \\(f'(a)\\) exists, then \\(\\lim_{x\\to a}f(x)=f(a)\\). Failures: corners, cusps, vertical tangents, discontinuities.</div>\n    <div class=\"mini-diagram\">\n      <svg viewBox=\"0 0 360 120\" xmlns=\"http://www.w3.org/2000/svg\" aria-label=\"Corner vs smooth\">\n        <path d=\"M40,90 L180,30 L320,90\" stroke=\"#5b8dee\" fill=\"none\" stroke-width=\"2\"></path>\n        <text x=\"120\" y=\"18\" fill=\"#d4daf0\" font-size=\"11\">corner: different left/right slopes</text>\n        <path d=\"M40,100 Q180,40 320,100\" stroke=\"#7dd3a8\" fill=\"none\" stroke-width=\"2\"></path>\n        <text x=\"110\" y=\"115\" fill=\"#d4daf0\" font-size=\"11\">smooth: single tangent slope</text>\n      </svg>\n    </div>\n    <div class=\"qa-item\"><div class=\"qa-question\">AP-Style Prompt</div><div class=\"qa-answer\">For a piecewise linear function with a kink at \\(x=2\\), explain why \\(f'(2)\\) does not exist even if \\(f\\) is continuous at 2.</div></div>"
  },
  {
    "id": "t25",
    "title": "2.5 Applying the Power Rule",
    "bodyHtml": "<p>For powers \\(x^n\\) with \\(n\\) rational on the domain, differentiate by bringing the exponent down and reducing the power by one.</p>\n    <div class=\"formula-block\">\\(\\frac{d}{dx}(x^n)=nx^{n-1}\\).</div>\n    <div class=\"callout example\">\\(\\frac{d}{dx}(3x^4-2x^{-2})=12x^3+4x^{-3}\\). Watch negative exponents: they are still powers, not “exceptions.”</div>\n    <div class=\"mistake-block\"><div class=\"teaching-label\">Common Mistake</div><p>Forgetting the chain rule when the “inside” is not just \\(x\\) (e.g. \\((2x+1)^3\\) needs chain rule, not power rule alone).</p></div>"
  },
  {
    "id": "t26",
    "title": "2.6 Derivative Rules: Constant, Sum, Difference, and Constant Multiple",
    "bodyHtml": "<p>Derivatives respect linearity: constants factor out, sums and differences differentiate term-by-term.</p>\n    <div class=\"formula-block\">\\((cf)'=cf',\\ (f\\pm g)'=f'\\pm g'\\).</div>\n    <div class=\"steps-block\"><div class=\"teaching-label\">Cleanup First</div><ul class=\"notes-list\"><li>Expand products only if it reduces work.</li><li>Rewrite radicals as powers before differentiating.</li><li>Combine like terms to avoid redundant quotient/product work.</li></ul></div>"
  },
  {
    "id": "t27",
    "title": "2.7 The Product Rule",
    "bodyHtml": "<p>The derivative of a product is <em>not</em> the product of derivatives. Use \\((fg)'=f'g+fg'\\).</p>\n    <div class=\"formula-block\">\\(\\frac{d}{dx}\\big(x^2\\sin x\\big)=2x\\sin x+x^2\\cos x\\).</div>\n    <div class=\"callout example\">If \\(h(x)=(3x+1)(x^2-4)\\), then \\(h'=(3)(x^2-4)+(3x+1)(2x)\\).</div>"
  },
  {
    "id": "t28",
    "title": "2.8 The Quotient Rule",
    "bodyHtml": "<p>For quotients, memorize “low \\(D\\) high minus high \\(D\\) low, over low squared,” but always verify algebra.</p>\n    <div class=\"formula-block\">\\(\\left(\\frac{f}{g}\\right)'=\\frac{f'g-fg'}{g^2}\\).</div>\n    <div class=\"mistake-block\"><div class=\"teaching-label\">Common Mistake</div><p>Subtracting in the wrong order in the numerator or forgetting to square the denominator.</p></div>\n    <div class=\"qa-item\"><div class=\"qa-question\">AP-Style Prompt</div><div class=\"qa-answer\">Differentiate \\(\\frac{x^2}{x^2+1}\\) and simplify the numerator.</div></div>"
  },
  {
    "id": "t29",
    "title": "2.9 Finding Derivatives of Trigonometric Functions",
    "bodyHtml": "<p>Trig derivatives are core AP fluency. Know sine/cosine first; others follow from identities and chain rule.</p>\n    <div class=\"formula-block\">\\(\\frac{d}{dx}(\\sin x)=\\cos x,\\quad \\frac{d}{dx}(\\cos x)=-\\sin x,\\quad \\frac{d}{dx}(\\tan x)=\\sec^2 x\\).</div>\n    <div class=\"steps-block\"><div class=\"teaching-label\">Chain + Trig</div><ul class=\"notes-list\"><li>Identify inner \\(u(x)\\).</li><li>Differentiate outer trig with respect to \\(u\\).</li><li>Multiply by \\(u'(x)\\).</li></ul></div>\n    <div class=\"callout example\">\\(\\frac{d}{dx}\\sin(3x^2)=\\cos(3x^2)\\cdot 6x\\).</div>"
  },
  {
    "id": "t210",
    "title": "2.10 Finding the Derivatives of Exponential Functions",
    "bodyHtml": "<p>Exponential models grow at a rate proportional to themselves: \\(\\frac{d}{dx}(e^x)=e^x\\). For base \\(a&gt;0\\), \\(\\frac{d}{dx}(a^x)=a^x\\ln a\\).</p>\n    <div class=\"formula-block\">\\(\\frac{d}{dx}(e^{kx})=ke^{kx}\\).</div>\n    <div class=\"mistake-block\"><div class=\"teaching-label\">Common Mistake</div><p>Dropping the factor from the chain rule when differentiating \\(e^{u(x)}\\).</p></div>"
  },
  {
    "id": "t211",
    "title": "2.11 Finding the Derivative of Inverse Functions",
    "bodyHtml": "<p>If \\(g\\) is the inverse of differentiable \\(f\\), then \\(g'(x)=\\frac{1}{f'(g(x))}\\) at points where \\(f'(g(x))\\neq0\\).</p>\n    <div class=\"formula-block\">\\((f^{-1})'(b)=\\frac{1}{f'(a)}\\) where \\(f(a)=b\\).</div>\n    <div class=\"callout example\">If \\(f(2)=5\\) and \\(f'(2)=4\\), then \\((f^{-1})'(5)=\\frac{1}{4}\\).</div>"
  },
  {
    "id": "t212",
    "title": "2.12 Finding Derivatives of Logarithmic Functions",
    "bodyHtml": "<p>Logarithms turn products into sums before differentiating. Remember \\(\\frac{d}{dx}(\\ln x)=\\frac{1}{x}\\) for \\(x&gt;0\\); for \\(\\ln|x|\\) the same derivative holds on each interval of the domain.</p>\n    <div class=\"formula-block\">\\(\\frac{d}{dx}(\\ln u)=\\frac{u'}{u}\\).</div>\n    <div class=\"qa-item\"><div class=\"qa-question\">AP-Style Prompt</div><div class=\"qa-answer\">Find \\(\\frac{d}{dx}\\ln(x^2+9)\\) and state the domain where the derivative is valid.</div></div>"
  },
  {
    "id": "t213",
    "title": "2.13 Applying Differentiation Rules",
    "bodyHtml": "<p>Real AP problems stack rules: product inside quotient, chain on trig, etc. Slow down and label \\(u\\) when helpful.</p>\n    <div class=\"steps-block\"><div class=\"teaching-label\">Mixed-Differentiation Routine</div><ul class=\"notes-list\"><li>Identify outer structure (sum/product/quotient/composition).</li><li>Differentiate outermost rule first, then work inward.</li><li>Simplify only after the derivative is fully written.</li></ul></div>\n    <div class=\"callout example\">Try \\(\\frac{d}{dx}\\big(x^2 e^{\\sin x}\\big)\\): product rule with \\(f=x^2\\), \\(g=e^{\\sin x}\\), and chain on \\(g\\).</div>"
  },
  {
    "id": "practice",
    "title": "Mixed Practice and FRQ Strategy",
    "bodyHtml": "<div class=\"steps-block\"><div class=\"teaching-label\">Timed Routine</div><ul class=\"notes-list\"><li>Identify rule stack before writing any derivative.</li><li>Check differentiability hypotheses for piecewise and absolute value.</li><li>On interpretation items, include units if the context gives them.</li></ul></div>\n    <div class=\"callout example\">Daily set: 2 limit-definition derivatives, 4 mixed-rule derivatives, 1 table estimate, 1 continuity/differentiability explanation.</div>"
  }
];
