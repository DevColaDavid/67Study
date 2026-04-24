/* eslint-disable max-len -- generated from ap-calculus/units/unit9.html */
export type CalcChapterChunk = { id: string; title: string; bodyHtml: string };

export const calcUnit9DocTitle = "Unit 9: Parametric, Polar, and Vector-Valued Functions";
export const calcUnit9DocLabel = "BC only";
export const calcUnit9SidebarHeader = "Calculus Unit 9";
export const calcUnit9SwitcherSummary = "Unit 9: Parametric, Polar, and Vector-Valued Functions";

export const calcUnit9Chapters: CalcChapterChunk[] = [
  {
    "id": "overview",
    "title": "How To Study This Unit",
    "bodyHtml": "<div class=\"learn-block\" id=\"overview\">\n    <div class=\"teaching-label\">How To Study This Unit</div>\n    <p><strong>BC only.</strong> Parametric and vector motion share one idea: position is a curve in the plane as a parameter (usually time) advances. Polar coordinates rewrite the plane with \\((r,\\theta)\\); area uses fan-shaped wedges \\(\\tfrac12 r^2\\,d\\theta\\).</p>\n    <p>Always state where \\(dx/dt=0\\) when using \\(\\frac{dy}{dx}\\) for parametric curves (vertical tangents). For polar area between two curves, find intersection angles first.</p>\n  </div>"
  },
  {
    "id": "t91",
    "title": "9.1 Defining and Differentiating Parametric Equations (BC)",
    "bodyHtml": "<p>A parametric curve \\(\\mathbf{r}(t)=\\langle x(t),y(t)\\rangle\\) traces the path as \\(t\\) increases. The slope of the tangent line in the \\(xy\\)-plane is \\(\\frac{dy}{dx}\\) computed from derivatives with respect to \\(t\\).</p>\n    <div class=\"formula-block\">\\(\\displaystyle \\frac{dy}{dx}=\\frac{dy/dt}{dx/dt}\\), provided \\(dx/dt\\neq 0\\).</div>\n    <div class=\"mistake-block\"><div class=\"teaching-label\">Common Mistake</div><p>Differentiating \\(x\\) and \\(y\\) with respect to different parameters, or forgetting the chain structure when \\(t\\) is not time.</p></div>\n    <div class=\"callout example\">If \\(x=t^2\\), \\(y=t^3-t\\), then \\(\\frac{dy}{dx}=\\frac{3t^2-1}{2t}\\) for \\(t\\neq 0\\).</div>"
  },
  {
    "id": "t92",
    "title": "9.2 Second Derivatives of Parametric Equations (BC)",
    "bodyHtml": "<p>\\(\\frac{d^2y}{dx^2}\\) measures concavity of the trajectory as seen in \\(xy\\)-coordinates. Differentiate \\(\\frac{dy}{dx}\\) with respect to \\(t\\), then divide by \\(dx/dt\\).</p>\n    <div class=\"formula-block\">\\(\\displaystyle \\frac{d^2y}{dx^2}=\\frac{d}{dt}\\left(\\frac{dy}{dx}\\right)\\Big/\\frac{dx}{dt}\\).</div>\n    <div class=\"steps-block\"><div class=\"teaching-label\">Computation Order</div><ul class=\"notes-list\"><li>Form \\(\\frac{dy}{dx}\\) as a function of \\(t\\).</li><li>Differentiate that expression with respect to \\(t\\).</li><li>Divide by \\(dx/dt\\).</li></ul></div>"
  },
  {
    "id": "t93",
    "title": "9.3 Finding Arc Lengths of Curves Given by Parametric Equations (BC)",
    "bodyHtml": "<p>Speed along the path is \\(\\sqrt{(dx/dt)^2+(dy/dt)^2}\\). Integrate speed over time to get arc length.</p>\n    <div class=\"formula-block\">\\(L=\\displaystyle\\int_{t_1}^{t_2}\\sqrt{\\left(\\frac{dx}{dt}\\right)^2+\\left(\\frac{dy}{dt}\\right)^2}\\,dt\\).</div>\n    <div class=\"qa-item\"><div class=\"qa-question\">AP-Style Prompt</div><div class=\"qa-answer\">Set up the arc length integral for one revolution of the cycloid \\(x=t-\\sin t\\), \\(y=1-\\cos t\\) from \\(t=0\\) to \\(t=2\\pi\\).</div></div>"
  },
  {
    "id": "t94",
    "title": "9.4 Defining and Differentiating Vector-Valued Functions (BC)",
    "bodyHtml": "<p>Write \\(\\mathbf{r}(t)=\\langle x(t),y(t)\\rangle\\) (or 3D with \\(z\\)). Derivative \\(\\mathbf{r}'(t)=\\langle x',y'\\rangle\\) is the velocity vector tangent to the path.</p>\n    <div class=\"formula-block\">Speed: \\(\\|\\mathbf{r}'(t)\\|=\\sqrt{(x')^2+(y')^2}\\). Unit tangent (when speed \\(\\neq 0\\)): \\(\\mathbf{T}=\\mathbf{r}'/\\|\\mathbf{r}'\\|\\).</div>"
  },
  {
    "id": "t95",
    "title": "9.5 Integrating Vector-Valued Functions (BC)",
    "bodyHtml": "<p>Integrate componentwise: \\(\\int \\mathbf{r}(t)\\,dt=\\langle \\int x\\,dt,\\int y\\,dt\\rangle+\\mathbf{C}\\) with a constant vector \\(\\mathbf{C}\\).</p>\n    <div class=\"formula-block\">Displacement from \\(t=a\\) to \\(t=b\\): \\(\\displaystyle\\int_a^b \\mathbf{r}'(t)\\,dt=\\mathbf{r}(b)-\\mathbf{r}(a)\\).</div>"
  },
  {
    "id": "t96",
    "title": "9.6 Solving Motion Problems Using Parametric and Vector-Valued Functions (BC)",
    "bodyHtml": "<p>Initial value problems give \\(\\mathbf{r}(t_0)\\) and \\(\\mathbf{v}(t_0)\\); integrate acceleration if given. Distance traveled is \\(\\int \\| \\mathbf{v}\\|\\,dt\\), not always the magnitude of displacement.</p>\n    <div class=\"callout example\">If \\(\\mathbf{a}(t)=\\langle 0,-g\\rangle\\) and \\(\\mathbf{v}(0)=\\langle v_0\\cos\\theta,v_0\\sin\\theta\\rangle\\), integrate twice for projectile motion (with \\(\\mathbf{r}(0)=\\mathbf{0}\\)).</div>"
  },
  {
    "id": "t97",
    "title": "9.7 Defining Polar Coordinates and Differentiating in Polar Form (BC)",
    "bodyHtml": "<p>Polar \\((r,\\theta)\\) links to Cartesian by \\(x=r\\cos\\theta\\), \\(y=r\\sin\\theta\\). If \\(r=f(\\theta)\\) is given, then \\(x=f(\\theta)\\cos\\theta\\) and \\(y=f(\\theta)\\sin\\theta\\) are parametric in \\(\\theta\\).</p>\n    <div class=\"formula-block\">\\(\\displaystyle \\frac{dy}{dx}=\\frac{dy/d\\theta}{dx/d\\theta}=\\frac{r'\\sin\\theta+r\\cos\\theta}{r'\\cos\\theta-r\\sin\\theta}\\) when denominator \\(\\neq 0\\).</div>\n    <div class=\"mini-diagram\">\n      <svg viewBox=\"0 0 200 120\" xmlns=\"http://www.w3.org/2000/svg\" aria-label=\"Polar wedge\">\n        <line x1=\"20\" y1=\"100\" x2=\"160\" y2=\"100\" stroke=\"#8892b0\"></line><line x1=\"20\" y1=\"100\" x2=\"140\" y2=\"35\" stroke=\"#5b8dee\"></line><line x1=\"20\" y1=\"100\" x2=\"100\" y2=\"25\" stroke=\"#5b8dee\" stroke-dasharray=\"4 3\"></line>\n        <path d=\"M20 100 A80 80 0 0 1 140 35\" fill=\"rgba(91,141,238,0.15)\" stroke=\"#c792ea\"></path>\n        <text x=\"55\" y=\"95\" fill=\"#d4daf0\" font-size=\"11\">dθ</text><text x=\"125\" y=\"70\" fill=\"#8892b0\" font-size=\"10\">r(θ)</text>\n      </svg>\n    </div>"
  },
  {
    "id": "t98",
    "title": "9.8 Finding Area of a Polar Region or Area Bounded by a Single Polar Curve (BC)",
    "bodyHtml": "<p>Between angles \\(\\alpha\\) and \\(\\beta\\), the area inside \\(r=f(\\theta)\\) is the integral of triangular wedges of area \\(\\tfrac12 r^2\\,d\\theta\\).</p>\n    <div class=\"formula-block\">\\(A=\\dfrac{1}{2}\\displaystyle\\int_{\\alpha}^{\\beta} [f(\\theta)]^2\\,d\\theta\\).</div>\n    <div class=\"mistake-block\"><div class=\"teaching-label\">Common Mistake</div><p>Using \\(r\\,d\\theta\\) instead of \\(\\tfrac12 r^2\\,d\\theta\\), or integrating over \\(\\theta\\) without tracing the curve once without overlap.</p></div>"
  },
  {
    "id": "t99",
    "title": "9.9 Finding the Area of the Region Bounded by Two Polar Curves (BC)",
    "bodyHtml": "<p>When \\(r_{\\text{outer}}(\\theta)\\geq r_{\\text{inner}}(\\theta)\\) on \\([\\alpha,\\beta]\\), area is the outer polar area minus the inner.</p>\n    <div class=\"formula-block\">\\(A=\\dfrac{1}{2}\\displaystyle\\int_{\\alpha}^{\\beta}\\left([r_{\\text{outer}}]^2-[r_{\\text{inner}}]^2\\right)\\,d\\theta\\).</div>\n    <div class=\"steps-block\"><div class=\"teaching-label\">Intersection Angles</div><ul class=\"notes-list\"><li>Solve \\(r_1(\\theta)=r_2(\\theta)\\) for \\(\\theta\\).</li><li>Confirm which curve is outer on each subinterval (sketch or test angle).</li><li>Split the integral if the outer/inner roles switch.</li></ul></div>"
  },
  {
    "id": "practice",
    "title": "Mixed Practice and FRQ Strategy",
    "bodyHtml": "<div class=\"steps-block\"><div class=\"teaching-label\">Timed Routine</div><ul class=\"notes-list\"><li>2 parametric: \\(\\frac{dy}{dx}\\) and one second derivative or tangent line.</li><li>1 arc length setup.</li><li>1 vector IVP or speed-at-time.</li><li>2 polar: one area inside single curve, one between two curves.</li></ul></div>"
  }
];
