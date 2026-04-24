/* eslint-disable max-len -- generated from ap-calculus/units/unit8.html */
export type CalcChapterChunk = { id: string; title: string; bodyHtml: string };

export const calcUnit8DocTitle = "Unit 8: Applications of Integration";
export const calcUnit8DocLabel = "AP Calculus (AB + BC)";
export const calcUnit8SidebarHeader = "Calculus Unit 8";
export const calcUnit8SwitcherSummary = "Unit 8: Applications of Integration";

export const calcUnit8Chapters: CalcChapterChunk[] = [
  {
    "id": "overview",
    "title": "How To Study This Unit",
    "bodyHtml": "<div class=\"learn-block\" id=\"overview\">\n    <div class=\"teaching-label\">How To Study This Unit</div>\n    <p>Every application here is a definite integral of a <strong>slice quantity</strong>: average height, net displacement, area strip, volume slice, or arc element \\(ds\\).</p>\n    <p>Draw the region first. Decide whether to integrate with respect to \\(x\\) or \\(y\\) (sometimes one avoids splitting). BC adds shells when revolving around a “wrong” axis for discs.</p>\n  </div>"
  },
  {
    "id": "t81",
    "title": "8.1 Finding the Average Value of a Function on an Interval",
    "bodyHtml": "<p>The average value of \\(f\\) on \\([a,b]\\) is the constant height that would give the same signed area over the interval as \\(f\\) does.</p>\n    <div class=\"formula-block\">\\(f_{\\text{avg}}=\\dfrac{1}{b-a}\\displaystyle\\int_a^b f(x)\\,dx\\).</div>\n    <div class=\"mistake-block\"><div class=\"teaching-label\">Common Mistake</div><p>Forgetting the factor \\(\\frac{1}{b-a}\\) or integrating over the wrong interval from the story.</p></div>\n    <div class=\"callout example\">Average of \\(x^2\\) on \\([0,3]\\): \\(\\frac{1}{3}\\int_0^3 x^2\\,dx=\\frac{1}{3}\\cdot 9=3\\).</div>"
  },
  {
    "id": "t82",
    "title": "8.2 Connecting Position, Velocity, and Acceleration of Functions Using Integrals",
    "bodyHtml": "<p>Velocity integrates to displacement; speed integrates to distance traveled. Watch absolute value for distance.</p>\n    <div class=\"formula-block\">\\(\\displaystyle \\int_a^b v(t)\\,dt=s(b)-s(a)\\) (displacement). Distance \\(=\\int_a^b |v(t)|\\,dt\\).</div>\n    <div class=\"qa-item\"><div class=\"qa-question\">AP-Style Prompt</div><div class=\"qa-answer\">If \\(v(t)=t^2-1\\) on \\([0,2]\\), compute displacement and total distance traveled.</div></div>"
  },
  {
    "id": "t83",
    "title": "8.3 Using Definite Integrals to Find the Area Between Curves",
    "bodyHtml": "<p>Between \\(x=a\\) and \\(x=b\\), if \\(f(x)\\geq g(x)\\), area is \\(\\int_a^b (f-g)\\,dx\\). If curves cross, split at intersection points and add absolute areas.</p>\n    <div class=\"formula-block\">Area \\(=\\displaystyle\\int_a^b \\bigl|f(x)-g(x)\\bigr|\\,dx\\) when orientation flips.</div>\n    <div class=\"steps-block\"><div class=\"teaching-label\">Intersection Routine</div><ul class=\"notes-list\"><li>Set \\(f(x)=g(x)\\) to find bounds.</li><li>Pick a test point in each subinterval to see which graph is on top.</li><li>Integrate top minus bottom on each piece.</li></ul></div>"
  },
  {
    "id": "t84",
    "title": "8.4 Finding Volumes of Solids with Cross Sections",
    "bodyHtml": "<p>Slice perpendicular to an axis: if cross-sectional area at position \\(x\\) is \\(A(x)\\), then \\(V=\\int_a^b A(x)\\,dx\\).</p>\n    <div class=\"formula-block\">Square cross sections side \\(s(x)\\): \\(A=s^2\\). Equilateral triangles side \\(s(x)\\): \\(A=\\frac{\\sqrt3}{4}s^2\\).</div>\n    <div class=\"mini-diagram\">\n      <svg viewBox=\"0 0 380 100\" xmlns=\"http://www.w3.org/2000/svg\" aria-label=\"Slices along x\">\n        <line x1=\"40\" y1=\"80\" x2=\"320\" y2=\"80\" stroke=\"#8892b0\"></line>\n        <rect x=\"100\" y=\"45\" width=\"40\" height=\"35\" fill=\"none\" stroke=\"#5b8dee\"></rect><rect x=\"180\" y=\"50\" width=\"40\" height=\"30\" fill=\"none\" stroke=\"#5b8dee\"></rect><rect x=\"260\" y=\"55\" width=\"40\" height=\"25\" fill=\"none\" stroke=\"#5b8dee\"></rect>\n        <text x=\"20\" y=\"25\" fill=\"#d4daf0\" font-size=\"12\">A(x) changes with x → ∫ A(x) dx</text>\n      </svg>\n    </div>"
  },
  {
    "id": "t85",
    "title": "8.5 Finding Volume with Disc Method",
    "bodyHtml": "<p>Revolving a region around an axis: circular slices have area \\(\\pi R^2\\). The radius \\(R(x)\\) is the distance from the axis of revolution to the outer curve.</p>\n    <div class=\"formula-block\">Discs about the \\(x\\)-axis: \\(V=\\pi\\int_a^b [R(x)]^2\\,dx\\).</div>"
  },
  {
    "id": "t86",
    "title": "8.6 Finding Volume with Washer Method",
    "bodyHtml": "<p>When a hole remains through the solid, subtract inner disc area: washers use \\(\\pi(R_{\\text{out}}^2-R_{\\text{in}}^2)\\).</p>\n    <div class=\"formula-block\">\\(V=\\pi\\int_a^b \\bigl([R_{\\text{out}}(x)]^2-[R_{\\text{in}}(x)]^2\\bigr)\\,dx\\).</div>\n    <div class=\"mistake-block\"><div class=\"teaching-label\">Common Mistake</div><p>Squaring before subtracting \\((R_{\\text{out}}-R_{\\text{in}})^2\\) instead of subtracting squares—those are different solids.</p></div>"
  },
  {
    "id": "t87",
    "title": "8.7 Finding Volume with Cylindrical Shell Method (BC)",
    "bodyHtml": "<p><strong>BC only.</strong> Shells wrap around an axis parallel to the missing dimension of the thin cylinder: circumference \\(2\\pi r\\), height \\(h\\), thickness \\(dx\\) or \\(dy\\).</p>\n    <div class=\"formula-block\">Vertical shells revolving about a vertical axis: \\(V=2\\pi\\int_a^b (\\text{radius})(\\text{height})\\,dx\\).</div>\n    <div class=\"callout example\">Region between \\(y=0\\) and \\(y=\\sqrt{x}\\) from \\(x=0\\) to \\(4\\), revolved about \\(x=-1\\): radius \\(x+1\\), height \\(\\sqrt{x}\\), \\(V=2\\pi\\int_0^4 (x+1)\\sqrt{x}\\,dx\\).</div>"
  },
  {
    "id": "t88",
    "title": "8.8 Finding Arc Length of Curves Defined by Functions",
    "bodyHtml": "<p>Infinitesimal hypotenuse: \\(ds=\\sqrt{1+[f'(x)]^2}\\,dx\\). Total length is the integral of \\(ds\\).</p>\n    <div class=\"formula-block\">Arc length: \\(L=\\displaystyle\\int_a^b \\sqrt{1+\\left(\\frac{dy}{dx}\\right)^2}\\,dx\\).</div>\n    <div class=\"qa-item\"><div class=\"qa-question\">AP-Style Prompt</div><div class=\"qa-answer\">Set up (do not evaluate) the arc length integral for \\(y=\\ln(\\cos x)\\) from \\(x=0\\) to \\(\\pi/4\\).</div></div>"
  },
  {
    "id": "practice",
    "title": "Mixed Practice and FRQ Strategy",
    "bodyHtml": "<div class=\"steps-block\"><div class=\"teaching-label\">Timed Routine</div><ul class=\"notes-list\"><li>1 average value with units in context.</li><li>1 displacement/distance split.</li><li>2 area-between (possibly with \\(dy\\) setup).</li><li>2 volumes (one cross section, one disc/washer or BC shell).</li><li>1 arc length setup.</li></ul></div>"
  }
];
