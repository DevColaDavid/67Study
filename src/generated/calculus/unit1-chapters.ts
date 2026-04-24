/* eslint-disable max-len -- generated from ap-calculus/units/unit1.html */
export type CalcChapterChunk = { id: string; title: string; bodyHtml: string };

export const calcUnit1DocTitle = "Unit 1: Limits and Continuity";
export const calcUnit1DocLabel = "AP Calculus (AB + BC)";
export const calcUnit1SidebarHeader = "Calculus Unit 1";
export const calcUnit1SwitcherSummary = "Unit 1: Limits and Continuity";

export const calcUnit1Chapters: CalcChapterChunk[] = [
  {
    "id": "overview",
    "title": "How To Study This Unit",
    "bodyHtml": "<div class=\"learn-block\" id=\"overview\">\n    <div class=\"teaching-label\">How To Study This Unit</div>\n    <p>Unit 1 builds the language of calculus: <strong>limits</strong> describe behavior near a point, and <strong>continuity</strong> describes whether a function has breaks. Every later derivative or integral idea depends on these two foundations.</p>\n    <p>For each subtopic, practice in this order: (1) interpret from graph/table, (2) compute algebraically, (3) justify in words. AP rewards explanations such as “left and right limits match” or “denominator tends to 0 while numerator tends to nonzero.”</p>\n  </div>"
  },
  {
    "id": "t11",
    "title": "1.1 Introducing Calculus: Can Change Occur at an Instant?",
    "bodyHtml": "<p>Average rate of change over an interval is easy: slope between two points. Instantaneous rate asks for slope at one point, which seems impossible until we look at secant lines getting closer and closer to a tangent line.</p>\n    <div class=\"formula-block\">\\(\\text{Average rate on }[a,b]=\\dfrac{f(b)-f(a)}{b-a}\\). Instantaneous rate at \\(x=a\\) is the limit of average rates as \\(b\\to a\\).</div>\n    <div class=\"steps-block\"><div class=\"teaching-label\">Concept Bridge</div><ul class=\"notes-list\"><li>Start with two points and compute a secant slope.</li><li>Shrink the interval so the second point approaches the first.</li><li>Interpret the limiting slope as the tangent slope (derivative idea).</li></ul></div>\n    <div class=\"callout example\">If position is \\(s(t)=t^2\\), average velocity on \\([2,2+h]\\) is \\(\\frac{(2+h)^2-4}{h}=4+h\\). As \\(h\\to0\\), the instantaneous velocity at \\(t=2\\) is \\(4\\).</div>"
  },
  {
    "id": "t12",
    "title": "1.2 Defining Limits and Using Limit Notation",
    "bodyHtml": "<p>\\(\\lim_{x\\to a}f(x)=L\\) means function values can be made as close to \\(L\\) as we want by taking \\(x\\) sufficiently close to \\(a\\) (not necessarily equal to \\(a\\)).</p>\n    <div class=\"formula-block\">\\(\\lim_{x\\to a^-}f(x)=L_1,\\;\\lim_{x\\to a^+}f(x)=L_2\\). A two-sided limit exists only if \\(L_1=L_2\\).</div>\n    <div class=\"mistake-block\"><div class=\"teaching-label\">Common Mistake</div><p>Confusing \\(f(a)\\) with \\(\\lim_{x\\to a}f(x)\\). They can be different, and the limit can exist even when \\(f(a)\\) is undefined.</p></div>\n    <div class=\"qa-item\"><div class=\"qa-question\">AP-Style Prompt</div><div class=\"qa-answer\">Given a graph where both sides approach 3 at \\(x=1\\), but \\(f(1)=5\\), state \\(\\lim_{x\\to1}f(x)\\), \\(f(1)\\), and whether \\(f\\) is continuous at 1.</div></div>"
  },
  {
    "id": "t13",
    "title": "1.3 Estimating Limit Values from Graphs",
    "bodyHtml": "<p>From a graph, read what <em>y-values approach</em> as \\(x\\) approaches a target from the left and right. Ignore whether there is a filled point at that \\(x\\)-value unless asked for \\(f(a)\\).</p>\n    <div class=\"mini-diagram\">\n      <svg viewBox=\"0 0 460 180\" xmlns=\"http://www.w3.org/2000/svg\" aria-label=\"One-sided and two-sided limits\">\n        <line x1=\"20\" y1=\"150\" x2=\"440\" y2=\"150\" stroke=\"#8892b0\"></line>\n        <line x1=\"230\" y1=\"20\" x2=\"230\" y2=\"165\" stroke=\"#8892b0\"></line>\n        <path d=\"M60,130 Q140,80 220,95\" stroke=\"#5b8dee\" fill=\"none\" stroke-width=\"2\"></path>\n        <path d=\"M240,95 Q320,110 400,65\" stroke=\"#5b8dee\" fill=\"none\" stroke-width=\"2\"></path>\n        <circle cx=\"230\" cy=\"95\" r=\"5\" fill=\"none\" stroke=\"#f0a04b\" stroke-width=\"2\"></circle>\n        <circle cx=\"230\" cy=\"50\" r=\"4\" fill=\"#e06c75\"></circle>\n        <text x=\"245\" y=\"52\" fill=\"#d4daf0\" font-size=\"11\">f(a)</text>\n        <text x=\"238\" y=\"108\" fill=\"#d4daf0\" font-size=\"11\">limit value</text>\n      </svg>\n    </div>\n    <div class=\"steps-block\"><div class=\"teaching-label\">Graph Reading Routine</div><ul class=\"notes-list\"><li>Approach from left: record target y-value.</li><li>Approach from right: record target y-value.</li><li>If equal, two-sided limit exists and equals that common value.</li></ul></div>"
  },
  {
    "id": "t14",
    "title": "1.4 Estimating Limit Values from Tables",
    "bodyHtml": "<p>Tables are numerical evidence, not proof. Use values approaching from both sides and look for stabilization or unbounded growth.</p>\n    <table class=\"data-table\">\n      <thead><tr><th>x</th><th>1.9</th><th>1.99</th><th>2.01</th><th>2.1</th></tr></thead>\n      <tbody><tr><td>\\(f(x)\\)</td><td>3.81</td><td>3.9801</td><td>4.0201</td><td>4.41</td></tr></tbody>\n    </table>\n    <p>The values suggest \\(\\lim_{x\\to2}f(x)\\approx4\\), but for exact answers on AP, connect this with algebraic or graphical reasoning when possible.</p>\n    <div class=\"mistake-block\"><div class=\"teaching-label\">Common Mistake</div><p>Using only one side of the table and claiming a two-sided limit.</p></div>"
  },
  {
    "id": "t15",
    "title": "1.5 Determining Limits Using Algebraic Properties of Limits",
    "bodyHtml": "<p>If direct substitution gives a finite number, use limit laws directly (sum, difference, constant multiple, product, quotient).</p>\n    <div class=\"formula-block\">\\(\\lim(f+g)=\\lim f+\\lim g,\\;\\lim(cf)=c\\lim f,\\;\\lim\\frac{f}{g}=\\frac{\\lim f}{\\lim g}\\) if \\(\\lim g\\neq0\\).</div>\n    <div class=\"callout example\">\\(\\lim_{x\\to3}(2x^2-5x+1)=2(9)-15+1=4\\).</div>\n    <div class=\"mistake-block\"><div class=\"teaching-label\">Common Mistake</div><p>Applying quotient law when denominator limit is \\(0\\); this is exactly where extra analysis is needed.</p></div>"
  },
  {
    "id": "t16",
    "title": "1.6 Determining Limits Using Algebraic Manipulation",
    "bodyHtml": "<p>When substitution gives \\(0/0\\), rewrite first: factor, rationalize, combine fractions, or use trig identities. Then take the limit.</p>\n    <div class=\"formula-block\">\\(\\lim_{x\\to2}\\dfrac{x^2-4}{x-2}=\\lim_{x\\to2}\\dfrac{(x-2)(x+2)}{x-2}=\\lim_{x\\to2}(x+2)=4\\).</div>\n    <div class=\"steps-block\"><div class=\"teaching-label\">Manipulation Checklist</div><ul class=\"notes-list\"><li>Try direct substitution first.</li><li>If \\(0/0\\), rewrite algebraically without changing nearby behavior.</li><li>Only cancel factors, never terms inside sums.</li></ul></div>"
  },
  {
    "id": "t17",
    "title": "1.7 Selecting Procedures for Determining Limits",
    "bodyHtml": "<p>This topic is strategy: choose fastest valid method based on the form you get after substitution.</p>\n    <div class=\"steps-block\"><div class=\"teaching-label\">Decision Tree</div><ul class=\"notes-list\"><li>Finite number? done.</li><li>\\(0/0\\)? factor/rationalize/simplify.</li><li>Nonzero over 0? analyze sign and one-sided behavior (infinite limits).</li><li>At infinity? compare dominant growth terms.</li></ul></div>\n    <div class=\"callout example\">\\(\\lim_{x\\to\\infty}\\frac{3x^2+1}{x^2-4}\\): divide by \\(x^2\\), get \\(\\frac{3+1/x^2}{1-4/x^2}\\to3\\).</div>"
  },
  {
    "id": "t18",
    "title": "1.8 Determining Limits Using the Squeeze Theorem",
    "bodyHtml": "<p>If \\(g(x)\\le f(x)\\le h(x)\\) near \\(a\\), and \\(\\lim g=\\lim h=L\\), then \\(\\lim f=L\\). This is useful when direct evaluation is hard but bounding is easy.</p>\n    <div class=\"formula-block\">Classic: \\(-1\\le \\sin(1/x)\\le1 \\Rightarrow -|x|\\le x\\sin(1/x)\\le |x| \\Rightarrow \\lim_{x\\to0}x\\sin(1/x)=0\\).</div>\n    <div class=\"mistake-block\"><div class=\"teaching-label\">Common Mistake</div><p>Forgetting bounds must hold near the point (not necessarily at the point itself).</p></div>"
  },
  {
    "id": "t19",
    "title": "1.9 Connecting Multiple Representations of Limits",
    "bodyHtml": "<p>AP frequently gives graph + table + expression together. Your job is to translate consistently across representations.</p>\n    <div class=\"steps-block\"><div class=\"teaching-label\">Translation Routine</div><ul class=\"notes-list\"><li>From graph/table, hypothesize limit behavior.</li><li>Use expression to confirm exact value or explain nonexistence.</li><li>Write one statement linking all three sources of evidence.</li></ul></div>\n    <div class=\"qa-item\"><div class=\"qa-question\">AP-Style Prompt</div><div class=\"qa-answer\">A table suggests \\(\\lim_{x\\to1}f(x)=2\\), but graph shows left limit 2 and right limit 5. Explain which evidence controls the final conclusion.</div></div>"
  },
  {
    "id": "t110",
    "title": "1.10 Exploring Types of Discontinuities",
    "bodyHtml": "<p>Main types: removable (hole), jump (left and right limits finite but different), infinite (blow-up near vertical asymptote), and oscillatory.</p>\n    <div class=\"mini-diagram\">\n      <svg viewBox=\"0 0 460 120\" xmlns=\"http://www.w3.org/2000/svg\" aria-label=\"Discontinuity types\">\n        <text x=\"20\" y=\"18\" fill=\"#d4daf0\" font-size=\"11\">removable</text>\n        <circle cx=\"80\" cy=\"52\" r=\"4\" fill=\"none\" stroke=\"#f0a04b\" stroke-width=\"2\"></circle>\n        <line x1=\"40\" y1=\"52\" x2=\"120\" y2=\"52\" stroke=\"#5b8dee\"></line>\n        <text x=\"150\" y=\"18\" fill=\"#d4daf0\" font-size=\"11\">jump</text>\n        <line x1=\"150\" y1=\"52\" x2=\"185\" y2=\"52\" stroke=\"#5b8dee\"></line>\n        <line x1=\"185\" y1=\"75\" x2=\"220\" y2=\"75\" stroke=\"#5b8dee\"></line>\n        <text x=\"265\" y=\"18\" fill=\"#d4daf0\" font-size=\"11\">infinite</text>\n        <line x1=\"320\" y1=\"30\" x2=\"320\" y2=\"90\" stroke=\"#8892b0\" stroke-dasharray=\"3 3\"></line>\n        <path d=\"M280,90 Q305,75 315,35\" stroke=\"#5b8dee\" fill=\"none\"></path>\n        <path d=\"M325,35 Q335,75 360,90\" stroke=\"#5b8dee\" fill=\"none\"></path>\n      </svg>\n    </div>"
  },
  {
    "id": "t111",
    "title": "1.11 Defining Continuity at a Point",
    "bodyHtml": "<p>\\(f\\) is continuous at \\(x=a\\) iff all three hold: (1) \\(f(a)\\) exists, (2) \\(\\lim_{x\\to a}f(x)\\) exists, (3) they are equal.</p>\n    <div class=\"formula-block\">\\(\\text{Continuous at }a \\iff \\lim_{x\\to a}f(x)=f(a)\\).</div>\n    <div class=\"callout example\">Piecewise functions are common AP targets: solve for parameter values that make left limit = right limit = function value.</div>"
  },
  {
    "id": "t112",
    "title": "1.12 Confirming Continuity over an Interval",
    "bodyHtml": "<p>For interval continuity, check interior points with the three-condition test and endpoints with one-sided continuity.</p>\n    <div class=\"steps-block\"><div class=\"teaching-label\">Interval Check</div><ul class=\"notes-list\"><li>List potential trouble points: denominator 0, even-root negatives, log arguments \\(\\le0\\), piecewise breakpoints.</li><li>Test each point in interval.</li><li>Use one-sided limits at closed endpoints.</li></ul></div>"
  },
  {
    "id": "t113",
    "title": "1.13 Removing Discontinuities",
    "bodyHtml": "<p>A removable discontinuity can be fixed by redefining \\(f(a)\\) to match the limit. You are not changing nearby behavior, only plugging the hole.</p>\n    <div class=\"formula-block\">If \\(\\lim_{x\\to a}f(x)=L\\) exists but \\(f(a)\\) is missing or not \\(L\\), define \\(f(a)=L\\).</div>\n    <div class=\"qa-item\"><div class=\"qa-question\">AP-Style Prompt</div><div class=\"qa-answer\">Given \\(f(x)=\\frac{x^2-1}{x-1}\\) for \\(x\\neq1\\), choose \\(f(1)\\) to make \\(f\\) continuous.</div></div>"
  },
  {
    "id": "t114",
    "title": "1.14 Connecting Infinite Limits and Vertical Asymptotes",
    "bodyHtml": "<p>If \\(f(x)\\to\\pm\\infty\\) as \\(x\\to a^\\pm\\), then \\(x=a\\) is a vertical asymptote. One-sided sign matters; left and right can be opposite.</p>\n    <div class=\"formula-block\">\\(\\lim_{x\\to a^-}f(x)=+\\infty,\\;\\lim_{x\\to a^+}f(x)=-\\infty\\Rightarrow\\) VA at \\(x=a\\), two-sided limit does not exist.</div>\n    <div class=\"mistake-block\"><div class=\"teaching-label\">Common Mistake</div><p>Saying “limit equals infinity” and “limit exists.” In AP language, \\(\\pm\\infty\\) describes behavior; finite two-sided limit does not exist there.</p></div>"
  },
  {
    "id": "t115",
    "title": "1.15 Connecting Limits at Infinity and Horizontal Asymptotes",
    "bodyHtml": "<p>End behavior asks what happens as \\(x\\to\\pm\\infty\\). Horizontal asymptotes come from those limits, especially for rational functions by dominant terms.</p>\n    <div class=\"formula-block\">\\(\\lim_{x\\to\\infty}\\frac{a_nx^n+\\cdots}{b_mx^m+\\cdots}\\): if \\(n&lt;m\\to0\\); if \\(n=m\\to a_n/b_m\\); if \\(n&gt;m\\), magnitude grows.</div>\n    <div class=\"callout example\">\\(\\lim_{x\\to\\infty}\\frac{4x^3-1}{2x^3+7}=2\\), so \\(y=2\\) is a horizontal asymptote.</div>"
  },
  {
    "id": "t116",
    "title": "1.16 Working with the Intermediate Value Theorem (IVT)",
    "bodyHtml": "<p>IVT is an existence theorem: if \\(f\\) is continuous on \\([a,b]\\), then every value between \\(f(a)\\) and \\(f(b)\\) is achieved somewhere in \\((a,b)\\).</p>\n    <div class=\"formula-block\">If \\(k\\) is between \\(f(a)\\) and \\(f(b)\\), then \\(\\exists c\\in(a,b)\\) such that \\(f(c)=k\\).</div>\n    <div class=\"steps-block\"><div class=\"teaching-label\">How To Use on AP</div><ul class=\"notes-list\"><li>State continuity on closed interval first.</li><li>Show target value lies between endpoint outputs.</li><li>Conclude existence of \\(c\\), not exact value unless asked to approximate.</li></ul></div>\n    <div class=\"qa-item\"><div class=\"qa-question\">AP-Style Prompt</div><div class=\"qa-answer\">Given \\(f(1)=-2\\), \\(f(4)=5\\), and continuity on \\([1,4]\\), explain why \\(f(c)=0\\) for some \\(c\\in(1,4)\\).</div></div>"
  },
  {
    "id": "practice",
    "title": "Mixed Practice and FRQ Strategy",
    "bodyHtml": "<div class=\"steps-block\"><div class=\"teaching-label\">Timed Routine</div><ul class=\"notes-list\"><li>Classify each problem first: graph/table/algebra/asymptote/IVT.</li><li>Write one formal limit statement with correct notation.</li><li>For continuity questions, explicitly check all three conditions.</li><li>For IVT, always state interval continuity before concluding existence.</li></ul></div>\n    <div class=\"callout example\">Best daily set: 2 graph limits, 2 table limits, 3 algebra limits, 1 piecewise continuity, 1 IVT explanation. Then self-check language precision.</div>"
  }
];
