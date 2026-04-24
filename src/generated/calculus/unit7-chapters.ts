/* eslint-disable max-len -- generated from ap-calculus/units/unit7.html */
export type CalcChapterChunk = { id: string; title: string; bodyHtml: string };

export const calcUnit7DocTitle = "Unit 7: Differential Equations";
export const calcUnit7DocLabel = "AP Calculus (AB + BC)";
export const calcUnit7SidebarHeader = "Calculus Unit 7";
export const calcUnit7SwitcherSummary = "Unit 7: Differential Equations";

export const calcUnit7Chapters: CalcChapterChunk[] = [
  {
    "id": "overview",
    "title": "How To Study This Unit",
    "bodyHtml": "<div class=\"learn-block\" id=\"overview\">\n    <div class=\"teaching-label\">How To Study This Unit</div>\n    <p>A differential equation relates a function to its derivatives. AP expects you to <strong>build</strong> models from prose, <strong>verify</strong> proposed solutions by substitution, and <strong>visualize</strong> or <strong>approximate</strong> solutions with slope fields and Euler’s method.</p>\n    <p>Keep separation of variables tidy: divide before integrating, and isolate \\(C\\) from initial data. Logistic DEs add carrying capacity language—always interpret \\(L\\) in context.</p>\n  </div>"
  },
  {
    "id": "t71",
    "title": "7.1 Modeling Situations with Differential Equations",
    "bodyHtml": "<p>Translate phrases like “proportional to the amount present” into symbols: \\(\\frac{dy}{dt}=ky\\). Constraints (half-life, doubling time, initial population) become constants or initial conditions.</p>\n    <div class=\"formula-block\">Proportionality to both \\(y\\) and \\((L-y)\\): \\(\\dfrac{dy}{dt}=ky(L-y)\\) (logistic seed form).</div>\n    <div class=\"qa-item\"><div class=\"qa-question\">AP-Style Prompt</div><div class=\"qa-answer\">Write a DE for the volume \\(V\\) of water in a tank if water enters at \\(3\\) L/min and leaves at a rate proportional to \\(\\sqrt{V}\\).</div></div>"
  },
  {
    "id": "t72",
    "title": "7.2 Verifying Solutions for Differential Equations",
    "bodyHtml": "<p>Given \\(y=f(x)\\), compute \\(y'\\) (and \\(y''\\) if needed) and substitute into the DE. If the equation becomes an identity on an interval, \\(f\\) is a solution.</p>\n    <div class=\"steps-block\"><div class=\"teaching-label\">Verification Routine</div><ul class=\"notes-list\"><li>Differentiate the candidate \\(y\\) carefully (quotient/chain as needed).</li><li>Replace \\(y\\) and derivatives in the DE.</li><li>Simplify; if true for all \\(x\\) in the domain, verification succeeds.</li></ul></div>\n    <div class=\"callout example\">Show \\(y=Ce^{2x}\\) solves \\(y'=2y\\) for any constant \\(C\\).</div>"
  },
  {
    "id": "t73",
    "title": "7.3 Sketching Slope Fields",
    "bodyHtml": "<p>At each grid point \\((x,y)\\), draw a short segment with slope \\(\\frac{dy}{dx}=F(x,y)\\) from the DE. Segments show local tangent directions for solution curves.</p>\n    <div class=\"formula-block\">For \\(\\frac{dy}{dx}=x+y\\), at \\((1,2)\\) the slope is \\(3\\); draw a small line segment with slope \\(3\\) through that point.</div>\n    <div class=\"mini-diagram\">\n      <svg viewBox=\"0 0 320 110\" xmlns=\"http://www.w3.org/2000/svg\" aria-label=\"Schematic slope ticks\">\n        <g stroke=\"#5b8dee\" stroke-width=\"1.5\">\n          <line x1=\"40\" y1=\"55\" x2=\"55\" y2=\"45\"></line><line x1=\"80\" y1=\"55\" x2=\"95\" y2=\"42\"></line><line x1=\"120\" y1=\"55\" x2=\"138\" y2=\"40\"></line>\n          <line x1=\"160\" y1=\"55\" x2=\"182\" y2=\"38\"></line><line x1=\"200\" y1=\"55\" x2=\"225\" y2=\"36\"></line><line x1=\"240\" y1=\"55\" x2=\"268\" y2=\"35\"></line>\n        </g>\n        <path d=\"M35 75 Q160 30 285 70\" fill=\"none\" stroke=\"#c792ea\" stroke-width=\"2\"></path>\n        <text x=\"20\" y=\"100\" fill=\"#8892b0\" font-size=\"11\">Solution threads follow the tick directions.</text>\n      </svg>\n    </div>\n    <div class=\"mistake-block\"><div class=\"teaching-label\">Common Mistake</div><p>Plotting slope using the wrong coordinates (mixing up \\(x\\) and \\(y\\) in \\(F(x,y)\\)).</p></div>"
  },
  {
    "id": "t74",
    "title": "7.4 Reasoning Using Slope Fields",
    "bodyHtml": "<p>Equilibrium solutions occur where \\(\\frac{dy}{dt}=0\\) for all relevant \\(y\\) (autonomous case: \\(y'=g(y)\\)). Horizontal lines at those \\(y\\)-values are solution curves.</p>\n    <div class=\"formula-block\">For \\(y'=k(y-L)\\) with \\(k&lt;0\\) and \\(y&lt;L\\), slopes are positive so solutions increase toward \\(L\\).</div>"
  },
  {
    "id": "t75",
    "title": "7.5 Approximating Solutions Using Euler's Method",
    "bodyHtml": "<p>Euler’s method follows the local slope in discrete steps: \\(y_{n+1}=y_n+h\\cdot F(x_n,y_n)\\) with step size \\(h=\\Delta x\\).</p>\n    <div class=\"formula-block\">Iteration: \\(x_{n+1}=x_n+h\\), \\(y_{n+1}=y_n+h\\,F(x_n,y_n)\\).</div>\n    <div class=\"data-table\">\n      <table>\n        <thead><tr><th>\\(n\\)</th><th>\\(x_n\\)</th><th>\\(y_n\\)</th><th>\\(F(x_n,y_n)\\)</th><th>\\(y_{n+1}\\)</th></tr></thead>\n        <tbody>\n          <tr><td>0</td><td>\\(x_0\\)</td><td>\\(y_0\\)</td><td>\\(F_0\\)</td><td>\\(y_0+hF_0\\)</td></tr>\n          <tr><td>1</td><td>\\(x_0+h\\)</td><td>\\(y_1\\)</td><td>\\(F_1\\)</td><td>\\(y_1+hF_1\\)</td></tr>\n        </tbody>\n      </table>\n    </div>\n    <div class=\"mistake-block\"><div class=\"teaching-label\">Common Mistake</div><p>Using the <em>next</em> point’s slope before updating \\(y\\), or adding \\(h\\) twice to \\(x\\) per step.</p></div>"
  },
  {
    "id": "t76",
    "title": "7.6 Finding General Solutions Using Separation of Variables",
    "bodyHtml": "<p>If \\(\\frac{dy}{dx}=g(x)h(y)\\), write \\(\\frac{1}{h(y)}\\,dy=g(x)\\,dx\\) and integrate both sides. Constants of integration collapse to one \\(C\\) on one side.</p>\n    <div class=\"formula-block\">\\(\\displaystyle \\int \\frac{1}{h(y)}\\,dy = \\int g(x)\\,dx + C\\).</div>\n    <div class=\"callout example\">\\(\\frac{dy}{dx}=xy \\Rightarrow \\int\\frac{1}{y}\\,dy=\\int x\\,dx \\Rightarrow \\ln|y|=\\frac{x^2}{2}+C \\Rightarrow y=Ke^{x^2/2}\\).</div>"
  },
  {
    "id": "t77",
    "title": "7.7 Finding Particular Solutions Using Initial Conditions and Separation of Variables",
    "bodyHtml": "<p>After the general solution, substitute \\(y(x_0)=y_0\\) to solve for \\(C\\) (or \\(K=e^C\\) when exponentials appear). Watch domain restrictions (e.g. \\(\\ln y\\) requires \\(y&gt;0\\)).</p>\n    <div class=\"steps-block\"><div class=\"teaching-label\">IVP Checklist</div><ul class=\"notes-list\"><li>Separate and integrate.</li><li>Solve algebraically for \\(y\\) if required by the prompt.</li><li>Plug \\((x_0,y_0)\\); note if solution is unique by standard existence theorems for nice \\(F\\).</li></ul></div>"
  },
  {
    "id": "t78",
    "title": "7.8 Exponential Models with Differential Equations",
    "bodyHtml": "<p>Unlimited growth/decay: \\(\\frac{dy}{dt}=ky\\) gives \\(y=y_0e^{kt}\\). The sign of \\(k\\) determines growth vs decay; \\(|k|\\) is the relative rate.</p>\n    <div class=\"formula-block\">Half-life \\(t_{1/2}\\) for \\(k&lt;0\\): \\(t_{1/2}=\\dfrac{\\ln 2}{|k|}\\). Doubling time for \\(k&gt;0\\): \\(t_d=\\dfrac{\\ln 2}{k}\\).</div>\n    <div class=\"qa-item\"><div class=\"qa-question\">AP-Style Prompt</div><div class=\"qa-answer\">A culture satisfies \\(\\frac{dP}{dt}=0.05P\\). If \\(P(0)=200\\), find \\(P(10)\\) and interpret \\(0.05\\).</div></div>"
  },
  {
    "id": "t79",
    "title": "7.9 Logistic Models with Differential Equations",
    "bodyHtml": "<p>Logistic growth adds a ceiling \\(L\\) (carrying capacity): \\(\\dfrac{dP}{dt}=kP(L-P)\\) with \\(k&gt;0\\). Solutions rise toward \\(L\\) when \\(0&lt;P&lt;L\\).</p>\n    <div class=\"formula-block\">Standard form: \\(\\dfrac{dP}{dt}=kP\\left(1-\\frac{P}{L}\\right)\\). Equilibria: \\(P=0\\) (unstable) and \\(P=L\\) (stable) for typical signs.</div>\n    <div class=\"mistake-block\"><div class=\"teaching-label\">Common Mistake</div><p>Treating logistic curves like exponentials for large \\(t\\); growth rate \\(\\frac{dP}{dt}\\) shrinks as \\(P\\to L\\).</p></div>"
  },
  {
    "id": "practice",
    "title": "Mixed Practice and FRQ Strategy",
    "bodyHtml": "<div class=\"steps-block\"><div class=\"teaching-label\">Timed Routine</div><ul class=\"notes-list\"><li>1 modeling + 1 verification.</li><li>1 slope-field sketch or interpretation.</li><li>2 Euler steps by hand from a table starter.</li><li>2 separation IVPs (one exponential, one logistic-style setup).</li></ul></div>"
  }
];
