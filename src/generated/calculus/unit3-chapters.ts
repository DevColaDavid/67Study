/* eslint-disable max-len -- generated from ap-calculus/units/unit3.html */
export type CalcChapterChunk = { id: string; title: string; bodyHtml: string };

export const calcUnit3DocTitle = "Unit 3: Differentiation: Composite, Implicit, and Inverse Functions";
export const calcUnit3DocLabel = "AP Calculus (AB + BC)";
export const calcUnit3SidebarHeader = "Calculus Unit 3";
export const calcUnit3SwitcherSummary = "Unit 3: Differentiation: Composite, Implicit, and Inverse Functions";

export const calcUnit3Chapters: CalcChapterChunk[] = [
  {
    "id": "overview",
    "title": "How To Study This Unit",
    "bodyHtml": "<div class=\"learn-block\" id=\"overview\">\n    <div class=\"teaching-label\">How To Study This Unit</div>\n    <p>Unit 3 is where differentiation becomes <strong>structural</strong>: almost every AP expression is a composition, product, quotient, or implicit relation. The chain rule is the spine—if you can spot the “outer” and “inner” function, the rest follows.</p>\n    <p>Train yourself to write \\(u=\\) inner explicitly on hard problems. For implicit relations, treat \\(y\\) as \\(y(x)\\) and collect \\(y'\\) terms at the end.</p>\n  </div>"
  },
  {
    "id": "t31",
    "title": "3.1 The Chain Rule",
    "bodyHtml": "<p>If \\(y=f(u)\\) and \\(u=g(x)\\), then \\(\\frac{dy}{dx}=\\frac{dy}{du}\\cdot\\frac{du}{dx}\\). In prime notation: \\(\\frac{d}{dx}f(g(x))=f'(g(x))g'(x)\\).</p>\n    <div class=\"formula-block\">\\(\\frac{d}{dx}\\big[f(g(x))\\big]=f'(g(x))\\,g'(x)\\).</div>\n    <div class=\"mini-diagram\">\n      <svg viewBox=\"0 0 420 100\" xmlns=\"http://www.w3.org/2000/svg\" aria-label=\"Composition chain\">\n        <text x=\"20\" y=\"35\" fill=\"#d4daf0\" font-size=\"12\">x</text>\n        <path d=\"M45,30 L95,30\" stroke=\"#5b8dee\" marker-end=\"url(#ah)\"></path>\n        <text x=\"100\" y=\"35\" fill=\"#d4daf0\" font-size=\"12\">g(x)=u</text>\n        <path d=\"M165,30 L215,30\" stroke=\"#5b8dee\"></path>\n        <text x=\"220\" y=\"35\" fill=\"#d4daf0\" font-size=\"12\">f(u)=y</text>\n        <defs><marker id=\"ah\" markerWidth=\"6\" markerHeight=\"6\" refX=\"5\" refY=\"3\" orient=\"auto\"><path d=\"M0,0 L6,3 L0,6 Z\" fill=\"#5b8dee\"></path></marker></defs>\n        <text x=\"20\" y=\"75\" fill=\"#8892b0\" font-size=\"11\">Multiply slopes: outer derivative at inner times inner derivative.</text>\n      </svg>\n    </div>\n    <div class=\"mistake-block\"><div class=\"teaching-label\">Common Mistake</div><p>Forgetting \\(g'(x)\\) or applying the chain rule to a sum of unrelated functions (chain applies to composition, not addition).</p></div>"
  },
  {
    "id": "t32",
    "title": "3.2 Differentiating Composite Functions",
    "bodyHtml": "<p>Nested compositions need repeated chain steps: peel layers from outside in, or substitute \\(u\\) and \\(v\\) for clarity.</p>\n    <div class=\"formula-block\">Example: \\(\\frac{d}{dx}\\sqrt{1+\\ln(2x+1)}=\\frac{1}{2\\sqrt{1+\\ln(2x+1)}}\\cdot\\frac{1}{2x+1}\\cdot2\\).</div>\n    <div class=\"steps-block\"><div class=\"teaching-label\">Layered Chain Routine</div><ul class=\"notes-list\"><li>Name the outermost operation (root, trig, exp, ln).</li><li>Differentiate it, leaving the inner untouched.</li><li>Multiply by derivative of inner; repeat if still composite.</li></ul></div>\n    <div class=\"callout example\">\\(\\frac{d}{dx}\\sin^3(5x)=3\\sin^2(5x)\\cdot\\cos(5x)\\cdot5\\).</div>"
  },
  {
    "id": "t33",
    "title": "3.3 Differentiating Implicitly",
    "bodyHtml": "<p>When \\(y\\) is not isolated, differentiate both sides with respect to \\(x\\), using \\(\\frac{d}{dx}(y)=y'\\) and chain rule on terms like \\(y^2\\) or \\(\\sin y\\).</p>\n    <div class=\"formula-block\">Example: \\(x^2+y^2=25 \\Rightarrow 2x+2yy'=0 \\Rightarrow y'=-\\frac{x}{y}\\).</div>\n    <div class=\"mistake-block\"><div class=\"teaching-label\">Common Mistake</div><p>Treating \\(y\\) as a constant. Any function of \\(y\\) picks up a factor of \\(y'\\) from the chain rule.</p></div>\n    <div class=\"qa-item\"><div class=\"qa-question\">AP-Style Prompt</div><div class=\"qa-answer\">Find \\(\\frac{dy}{dx}\\) for \\(x^3+xy-y^2=7\\) and evaluate \\(y'\\) at a point \\((x,y)\\) on the curve.</div></div>"
  },
  {
    "id": "t34",
    "title": "3.4 Differentiating Inverse Functions",
    "bodyHtml": "<p>For inverse trig, memorize core derivatives (e.g. \\(\\frac{d}{dx}\\arcsin x=\\frac{1}{\\sqrt{1-x^2}}\\)) and always combine with chain rule when the argument is not \\(x\\).</p>\n    <div class=\"formula-block\">\\(\\frac{d}{dx}\\arctan u=\\frac{u'}{1+u^2},\\quad \\frac{d}{dx}\\arcsin u=\\frac{u'}{\\sqrt{1-u^2}}\\).</div>\n    <div class=\"callout example\">\\(\\frac{d}{dx}\\arctan(3x)=\\frac{3}{1+9x^2}\\).</div>"
  },
  {
    "id": "t35",
    "title": "3.5 Selecting Procedures for Calculating Derivatives",
    "bodyHtml": "<p>AP speed comes from recognizing structure: log differentiation can simplify products/quotients; implicit differentiation avoids solving for \\(y\\); logarithmic identities may shorten work.</p>\n    <div class=\"steps-block\"><div class=\"teaching-label\">Procedure Choice</div><ul class=\"notes-list\"><li>Composition-heavy? chain first.</li><li>Many factors raised to powers? consider \\(\\ln\\) both sides.</li><li>Relation not a function? implicit.</li></ul></div>\n    <div class=\"qa-item\"><div class=\"qa-question\">AP-Style Prompt</div><div class=\"qa-answer\">Compare finding \\(\\frac{d}{dx}\\big(x^x\\big)\\) using \\(\\ln\\) differentiation versus rewriting as \\(e^{x\\ln x}\\).</div></div>"
  },
  {
    "id": "t36",
    "title": "3.6 Calculating Higher-Order Derivatives",
    "bodyHtml": "<p>\\(f''(x)\\) is the derivative of \\(f'(x)\\); it measures concavity and acceleration in motion contexts. Some patterns repeat (polynomials eventually go to zero).</p>\n    <div class=\"formula-block\">If \\(f(x)=e^{2x}\\), then \\(f^{(n)}(x)=2^n e^{2x}\\).</div>\n    <div class=\"mistake-block\"><div class=\"teaching-label\">Common Mistake</div><p>Confusing notation: \\(f''(x)\\) is not \\((f')^2\\).</p></div>"
  },
  {
    "id": "t37",
    "title": "3.7 Derivatives of ln and e With Chain Rule Context",
    "bodyHtml": "<p>\\(\\frac{d}{dx}e^{u}=e^u u'\\) and \\(\\frac{d}{dx}\\ln u=\\frac{u'}{u}\\). These pair naturally with growth/decay models and log transforms.</p>\n    <div class=\"formula-block\">\\(\\frac{d}{dx}\\ln|f(x)|=\\frac{f'(x)}{f(x)}\\) on intervals where \\(f(x)\\neq0\\).</div>\n    <div class=\"callout example\">\\(\\frac{d}{dx}\\ln(\\cos x)=\\frac{-\\sin x}{\\cos x}=-\\tan x\\) on intervals where \\(\\cos x&gt;0\\).</div>"
  },
  {
    "id": "t38",
    "title": "3.8 Multiple Representations of Derivatives",
    "bodyHtml": "<p>The same derivative appears as slope on a graph, rate in a word problem, sensitivity in a model, or velocity from position. Translate between representations on AP “interpretation” stems.</p>\n    <div class=\"steps-block\"><div class=\"teaching-label\">Interpretation Checklist</div><ul class=\"notes-list\"><li>State units as (output)/(input).</li><li>Sign: increasing vs decreasing.</li><li>Magnitude: steep vs flat.</li></ul></div>"
  },
  {
    "id": "practice",
    "title": "Mixed Practice and FRQ Strategy",
    "bodyHtml": "<div class=\"steps-block\"><div class=\"teaching-label\">Timed Routine</div><ul class=\"notes-list\"><li>5 pure chain problems with nested composition.</li><li>3 implicit differentiation curves.</li><li>2 inverse-trig-with-chain problems.</li><li>1 write-up connecting derivative sign to graph behavior.</li></ul></div>\n    <div class=\"callout example\">If you miss a factor, slow down and label \\(u\\) every time until the habit sticks.</div>"
  }
];
