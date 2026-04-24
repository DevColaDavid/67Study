/* eslint-disable max-len -- generated from ap-calculus/units/unit5.html */
export type CalcChapterChunk = { id: string; title: string; bodyHtml: string };

export const calcUnit5DocTitle = "Unit 5: Analytical Applications of Differentiation";
export const calcUnit5DocLabel = "AP Calculus (AB + BC)";
export const calcUnit5SidebarHeader = "Calculus Unit 5";
export const calcUnit5SwitcherSummary = "Unit 5: Analytical Applications of Differentiation";

export const calcUnit5Chapters: CalcChapterChunk[] = [
  {
    "id": "overview",
    "title": "How To Study This Unit",
    "bodyHtml": "<div class=\"learn-block\" id=\"overview\">\n    <div class=\"teaching-label\">How To Study This Unit</div>\n    <p>Unit 5 turns derivatives into a <strong>graph toolkit</strong>: where \\(f\\) rises or falls, bends up or down, and where extrema live. The AP rewards stating hypotheses (continuity, differentiability, closed interval) before naming a theorem.</p>\n    <p>Practice drawing three linked sketches: \\(f\\), \\(f'\\), and \\(f''\\) from partial information. For optimization, always reduce to one variable and justify max/min with a test or closed-interval argument.</p>\n  </div>"
  },
  {
    "id": "t51",
    "title": "5.1 Using the Mean Value Theorem",
    "bodyHtml": "<p>The Mean Value Theorem (MVT) says that on a smooth drive from \\((a,f(a))\\) to \\((b,f(b))\\), you must match the average slope at least once.</p>\n    <div class=\"formula-block\">If \\(f\\) is continuous on \\([a,b]\\) and differentiable on \\((a,b)\\), then \\(\\exists c\\in(a,b)\\) with \\(f'(c)=\\dfrac{f(b)-f(a)}{b-a}\\).</div>\n    <div class=\"mini-diagram\">\n      <svg viewBox=\"0 0 420 120\" xmlns=\"http://www.w3.org/2000/svg\" aria-label=\"MVT secant and tangent\">\n        <path d=\"M40 90 Q120 20 200 70 T380 40\" fill=\"none\" stroke=\"#5b8dee\" stroke-width=\"2\"></path>\n        <line x1=\"40\" y1=\"90\" x2=\"320\" y2=\"50\" stroke=\"#8892b0\" stroke-dasharray=\"6 4\"></line>\n        <line x1=\"155\" y1=\"18\" x2=\"255\" y2=\"118\" stroke=\"#c792ea\" stroke-width=\"2\"></line>\n        <text x=\"20\" y=\"110\" fill=\"#8892b0\" font-size=\"11\">Secant slope = average rate; tangent at c matches it.</text>\n      </svg>\n    </div>\n    <div class=\"mistake-block\"><div class=\"teaching-label\">Common Mistake</div><p>Invoking MVT on an interval where \\(f\\) is not differentiable everywhere inside (e.g. \\(|x|\\) on an interval crossing \\(0\\)).</p></div>\n    <div class=\"qa-item\"><div class=\"qa-question\">AP-Style Prompt</div><div class=\"qa-answer\">Show that \\(f(x)=x^3-x\\) satisfies MVT on \\([0,2]\\) and find a value of \\(c\\) guaranteed by the theorem.</div></div>"
  },
  {
    "id": "t52",
    "title": "5.2 Extreme Value Theorem and Global Extrema",
    "bodyHtml": "<p>On a <strong>closed</strong> interval, a continuous function attains an absolute maximum and minimum. Candidates: critical numbers inside the interval and <strong>endpoints</strong>.</p>\n    <div class=\"formula-block\">EVT: If \\(f\\) is continuous on \\([a,b]\\), then \\(\\exists x_1,x_2\\in[a,b]\\) where \\(f\\) attains its global min and max on \\([a,b]\\).</div>\n    <div class=\"steps-block\"><div class=\"teaching-label\">Closed-Interval Extrema Routine</div><ul class=\"notes-list\"><li>Verify continuity on \\([a,b]\\).</li><li>Find critical numbers in \\((a,b)\\) where \\(f'=0\\) or \\(f'\\) undefined.</li><li>Evaluate \\(f\\) at critical numbers and at \\(a,b\\); compare values.</li></ul></div>\n    <div class=\"callout example\">On \\([0,3]\\), \\(f(x)=x^3-3x\\) has \\(f'=3x^2-3=0\\) at \\(x=\\pm1\\); only \\(x=1\\) lies inside. Compare \\(f(0)=0\\), \\(f(1)=-2\\), \\(f(3)=18\\): min \\(-2\\), max \\(18\\).</div>"
  },
  {
    "id": "t53",
    "title": "5.3 Determining Intervals of Increase and Decrease",
    "bodyHtml": "<p>Where \\(f'&gt;0\\), \\(f\\) increases; where \\(f'&lt;0\\), \\(f\\) decreases. Partition the domain at critical numbers and points where \\(f'\\) fails to exist.</p>\n    <div class=\"formula-block\">If \\(f'&gt;0\\) on \\((a,b)\\), then \\(f\\) is increasing on \\((a,b)\\). If \\(f'&lt;0\\), then \\(f\\) is decreasing.</div>\n    <div class=\"mistake-block\"><div class=\"teaching-label\">Common Mistake</div><p>Using strict inequality conclusions at a point where \\(f'=0\\) without checking neighboring intervals.</p></div>"
  },
  {
    "id": "t54",
    "title": "5.4 Using the First Derivative Test to Determine Relative (Local) Extrema",
    "bodyHtml": "<p>At a critical number \\(c\\), if \\(f'\\) switches from positive to negative, \\(f(c)\\) is a local max; negative to positive gives a local min. No sign change means not a local extremum (often a plateau inflection).</p>\n    <div class=\"steps-block\"><div class=\"teaching-label\">First Derivative Test</div><ul class=\"notes-list\"><li>Locate critical numbers \\(c\\) in the interior of the domain.</li><li>Build a sign chart for \\(f'\\) with test points on each side of \\(c\\).</li><li>Classify each \\(c\\) from sign change of \\(f'\\) (max / min / none).</li></ul></div>"
  },
  {
    "id": "t55",
    "title": "5.5 Using Derivatives to Analyze Functions at End Behavior",
    "bodyHtml": "<p>End behavior uses limits as \\(x\\to\\pm\\infty\\) and horizontal asymptotes. Dominant terms (highest degree, exponential vs polynomial) usually decide limits.</p>\n    <div class=\"formula-block\">For rational \\(\\dfrac{P(x)}{Q(x)}\\), compare degrees: if \\(\\deg P&lt;\\deg Q\\), limit \\(0\\); if equal, ratio of leading coefficients; if \\(\\deg P&gt;\\deg Q\\), no finite horizontal asymptote (often \\(\\pm\\infty\\)).</div>\n    <div class=\"qa-item\"><div class=\"qa-question\">AP-Style Prompt</div><div class=\"qa-answer\">Find \\(\\lim_{x\\to\\infty}\\dfrac{3x^2+1}{2x^2-x}\\) and describe the end behavior of the graph.</div></div>"
  },
  {
    "id": "t56",
    "title": "5.6 Derivatives and Shapes of Graphs",
    "bodyHtml": "<p>\\(f''\\) describes concavity: \\(f''&gt;0\\) means concave up (tangent lines below graph); \\(f''&lt;0\\) means concave down. Inflection points occur where concavity changes (typically where \\(f''=0\\) or \\(f''\\) DNE, with a sign change).</p>\n    <div class=\"formula-block\">Concave up on intervals where \\(f''&gt;0\\); concave down where \\(f''&lt;0\\).</div>\n    <div class=\"data-table\">\n      <table>\n        <thead><tr><th>Sign of \\(f'\\)</th><th>Sign of \\(f''\\)</th><th>Shape phrase</th></tr></thead>\n        <tbody>\n          <tr><td>\\(+\\)</td><td>\\(+\\)</td><td>Rising, bending up</td></tr>\n          <tr><td>\\(+\\)</td><td>\\(-\\)</td><td>Rising, bending down</td></tr>\n          <tr><td>\\(-\\)</td><td>\\(+\\)</td><td>Falling, bending up</td></tr>\n          <tr><td>\\(-\\)</td><td>\\(-\\)</td><td>Falling, bending down</td></tr>\n        </tbody>\n      </table>\n    </div>"
  },
  {
    "id": "t57",
    "title": "5.7 Using the Second Derivative Test to Determine Extrema",
    "bodyHtml": "<p>If \\(f'(c)=0\\) and \\(f''(c)\\neq 0\\), the second derivative test gives a quick local classification without a sign chart for \\(f'\\).</p>\n    <div class=\"formula-block\">If \\(f'(c)=0\\) and \\(f''(c)&gt;0\\), local min at \\(c\\). If \\(f'(c)=0\\) and \\(f''(c)&lt;0\\), local max at \\(c\\). If \\(f''(c)=0\\), the test is inconclusive—use the first derivative test.</div>\n    <div class=\"mistake-block\"><div class=\"teaching-label\">Common Mistake</div><p>Applying the second derivative test at a critical number where \\(f'\\) is undefined (the test requires differentiability at \\(c\\) for \\(f''(c)\\) to make sense).</p></div>"
  },
  {
    "id": "t58",
    "title": "5.8 Sketching Graphs of Functions and Their Derivatives",
    "bodyHtml": "<p>Where \\(f\\) has a horizontal tangent, \\(f'\\) crosses or touches zero. Where \\(f\\) is steepest, \\(|f'|\\) is largest. Where \\(f\\) has an inflection point, \\(f'\\) has a local extremum.</p>\n    <div class=\"steps-block\"><div class=\"teaching-label\">Graph Translation</div><ul class=\"notes-list\"><li>Zeros of \\(f'\\) ↔ horizontal tangents / extrema candidates of \\(f\\).</li><li>Extrema of \\(f'\\) ↔ inflection points of \\(f\\).</li><li>Sign of \\(f'\\) ↔ increasing/decreasing intervals of \\(f\\).</li></ul></div>"
  },
  {
    "id": "t59",
    "title": "5.9 Connecting a Function, Its First Derivative, and Its Second Derivative",
    "bodyHtml": "<p>AP table problems give selected values of \\(f,f',f''\\). Chain reasoning: \\(f'\\) tells monotonicity; \\(f''\\) refines with concavity and inflection; combine for a plausible sketch.</p>\n    <div class=\"callout example\">If \\(f'(2)=0\\) and \\(f''(2)&gt;0\\), the point at \\(x=2\\) is a local minimum and the curve is concave up there.</div>\n    <div class=\"qa-item\"><div class=\"qa-question\">AP-Style Prompt</div><div class=\"qa-answer\">Given \\(f\\) increasing on \\((1,4)\\) and \\(f''&lt;0\\) on \\((1,4)\\), describe the shape of the graph on that interval in one sentence.</div></div>"
  },
  {
    "id": "t510",
    "title": "5.10 Introduction to Optimization Problems",
    "bodyHtml": "<p>Optimization asks for largest/smallest of a quantity under constraints (fixed perimeter, budget, etc.). The objective function often comes from geometry or a given model.</p>\n    <div class=\"formula-block\">Strategy: express objective \\(Q\\) as a function of one variable using the constraint, then find critical numbers on a physically meaningful domain.</div>\n    <div class=\"mini-diagram\">\n      <svg viewBox=\"0 0 360 100\" xmlns=\"http://www.w3.org/2000/svg\" aria-label=\"Rectangle with sides x and y\">\n        <rect x=\"60\" y=\"25\" width=\"180\" height=\"60\" fill=\"none\" stroke=\"#5b8dee\" stroke-width=\"2\"></rect>\n        <text x=\"140\" y=\"20\" fill=\"#d4daf0\" font-size=\"12\">x</text>\n        <text x=\"250\" y=\"60\" fill=\"#d4daf0\" font-size=\"12\">y</text>\n        <text x=\"20\" y=\"95\" fill=\"#8892b0\" font-size=\"11\">Classic setup: maximize area 2x+2y=P → A(x)=x(P/2-x).</text>\n      </svg>\n    </div>"
  },
  {
    "id": "t511",
    "title": "5.11 Solving Optimization Problems",
    "bodyHtml": "<p>After finding critical numbers, justify the extremum: closed interval → compare endpoints; open interval → use first or second derivative test or show \\(Q'\\) changes sign appropriately.</p>\n    <div class=\"steps-block\"><div class=\"teaching-label\">Optimization Checklist</div><ul class=\"notes-list\"><li>Define variables and domain from the story (lengths positive, etc.).</li><li>Reduce to \\(Q(x)\\) with one independent variable.</li><li>Differentiate, solve \\(Q'=0\\), justify max/min, answer with units.</li></ul></div>\n    <div class=\"mistake-block\"><div class=\"teaching-label\">Common Mistake</div><p>Forgetting to check endpoints of a closed interval or dismissing a boundary solution that is actually optimal.</p></div>"
  },
  {
    "id": "t512",
    "title": "5.12 Exploring Behavior of Implicit Relations",
    "bodyHtml": "<p>For a curve like \\(x^2+xy+y^2=1\\), implicit differentiation finds \\(\\frac{dy}{dx}\\) without solving for \\(y\\). Horizontal tangents occur where \\(\\frac{dy}{dx}=0\\) (and denominator \\(\\neq 0\\)); vertical where denominator is \\(0\\) (and numerator \\(\\neq 0\\)).</p>\n    <div class=\"formula-block\">Differentiate both sides with respect to \\(x\\), treating \\(y=y(x)\\): \\(\\frac{d}{dx}(y^n)=ny^{n-1}\\frac{dy}{dx}\\).</div>\n    <div class=\"callout example\">For \\(x^2+y^2=25\\), \\(2x+2y\\frac{dy}{dx}=0\\Rightarrow \\frac{dy}{dx}=-\\frac{x}{y}\\) (when \\(y\\neq 0\\)).</div>"
  },
  {
    "id": "practice",
    "title": "Mixed Practice and FRQ Strategy",
    "bodyHtml": "<div class=\"steps-block\"><div class=\"teaching-label\">Timed Routine</div><ul class=\"notes-list\"><li>1 MVT or Rolle-style justification with hypotheses.</li><li>2 sign-chart problems (increase/decrease + local extrema).</li><li>1 concavity/inflection from \\(f''\\).</li><li>1 optimization with domain and justification.</li><li>1 implicit tangent or horizontal/vertical tangent hunt.</li></ul></div>"
  }
];
