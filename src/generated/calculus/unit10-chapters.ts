/* eslint-disable max-len -- generated from ap-calculus/units/unit10.html */
export type CalcChapterChunk = { id: string; title: string; bodyHtml: string };

export const calcUnit10DocTitle = "Unit 10: Infinite Sequences and Series";
export const calcUnit10DocLabel = "BC only";
export const calcUnit10SidebarHeader = "Calculus Unit 10";
export const calcUnit10SwitcherSummary = "Unit 10: Infinite Sequences and Series";

export const calcUnit10Chapters: CalcChapterChunk[] = [
  {
    "id": "overview",
    "title": "How To Study This Unit",
    "bodyHtml": "<div class=\"learn-block\" id=\"overview\">\n    <div class=\"teaching-label\">How To Study This Unit</div>\n    <p><strong>BC only.</strong> Series questions are decision trees: first try the nth-term test; recognize geometric and \\(p\\)-series; then choose comparison, integral, alternating, or ratio tests based on term shape. Power series add endpoint analysis and Taylor remainders.</p>\n    <p>Keep a one-page “test menu” with hypotheses (positive terms? decreasing? alternating?). Practice writing Taylor polynomials to order \\(n\\) and stating Lagrange error as an inequality.</p>\n  </div>"
  },
  {
    "id": "t101",
    "title": "10.1 Defining Convergent and Divergent Infinite Series (BC)",
    "bodyHtml": "<p>A series \\(\\sum_{n=1}^\\infty a_n\\) converges if the sequence of partial sums \\(S_N=\\sum_{n=1}^N a_n\\) has a finite limit. Otherwise it diverges.</p>\n    <div class=\"formula-block\">If \\(\\lim_{N\\to\\infty}S_N=S\\), then \\(\\sum a_n=S\\).</div>\n    <div class=\"mistake-block\"><div class=\"teaching-label\">Common Mistake</div><p>Confusing \\(\\lim_{n\\to\\infty}a_n=0\\) with convergence of \\(\\sum a_n\\) (harmonic series is the counterexample).</p></div>"
  },
  {
    "id": "t102",
    "title": "10.2 Working with Geometric Series (BC)",
    "bodyHtml": "<p>\\(\\sum_{n=0}^\\infty ar^n\\) converges if and only if \\(|r|&lt;1\\), with sum \\(\\frac{a}{1-r}\\) (first term over one minus ratio when indexed from \\(n=0\\)).</p>\n    <div class=\"formula-block\">Sum (starting at \\(n=0\\)): \\(\\displaystyle \\sum_{n=0}^\\infty ar^n=\\frac{a}{1-r}\\) for \\(|r|&lt;1\\).</div>\n    <div class=\"callout example\">\\(\\sum_{n=2}^\\infty \\frac{3}{4^n}= \\frac{3/16}{1-1/4}=\\frac{1}{4}\\) after factoring \\(r=\\frac14\\).</div>"
  },
  {
    "id": "t103",
    "title": "10.3 The nth Term Test for Divergence (BC)",
    "bodyHtml": "<p>If \\(\\lim_{n\\to\\infty}a_n\\neq 0\\) (including “limit does not exist”), then \\(\\sum a_n\\) diverges. If the limit is \\(0\\), the test is inconclusive.</p>\n    <div class=\"formula-block\">Divergence: \\(\\lim_{n\\to\\infty}a_n\\neq 0 \\Rightarrow \\sum a_n\\) diverges.</div>"
  },
  {
    "id": "t104",
    "title": "10.4 Integral Test for Convergence (BC)",
    "bodyHtml": "<p>For positive, continuous, eventually decreasing \\(a_n=f(n)\\), \\(\\sum_{n=N}^\\infty a_n\\) and \\(\\int_N^\\infty f(x)\\,dx\\) share convergence behavior.</p>\n    <div class=\"formula-block\">If \\(\\int_N^\\infty f(x)\\,dx\\) converges, so does \\(\\sum a_n\\) (from index \\(N\\) onward); if the integral diverges, so does the series.</div>\n    <div class=\"steps-block\"><div class=\"teaching-label\">Integral Test Checklist</div><ul class=\"notes-list\"><li>Verify \\(f(x)&gt;0\\) and decreasing for large \\(x\\).</li><li>Match series index to lower integral limit.</li><li>Evaluate improper integral or bound it.</li></ul></div>"
  },
  {
    "id": "t105",
    "title": "10.5 Harmonic Series and p-Series (BC)",
    "bodyHtml": "<p>\\(\\sum \\frac{1}{n^p}\\) converges if \\(p&gt;1\\) and diverges if \\(p\\leq 1\\). The case \\(p=1\\) is the harmonic series.</p>\n    <div class=\"formula-block\">\\(p\\)-series: \\(\\displaystyle\\sum_{n=1}^\\infty \\frac{1}{n^p}\\) converges \\(\\Leftrightarrow p&gt;1\\).</div>"
  },
  {
    "id": "t106",
    "title": "10.6 Comparison Tests for Convergence (BC)",
    "bodyHtml": "<p>Direct comparison: if \\(0\\leq a_n\\leq b_n\\) and \\(\\sum b_n\\) converges, then \\(\\sum a_n\\) converges. Limit comparison: if \\(\\lim a_n/b_n=L\\) with \\(0&lt;L&lt;\\infty\\), both series share fate (for positive terms).</p>\n    <div class=\"formula-block\">Limit comparison: \\(\\displaystyle\\lim_{n\\to\\infty}\\frac{a_n}{b_n}=L\\in(0,\\infty)\\Rightarrow\\) same convergence/divergence.</div>\n    <div class=\"mistake-block\"><div class=\"teaching-label\">Common Mistake</div><p>Using a divergent comparison series to try to prove convergence (inequalities must go the right direction).</p></div>"
  },
  {
    "id": "t107",
    "title": "10.7 Alternating Series Test for Convergence (BC)",
    "bodyHtml": "<p>For \\(\\sum(-1)^{n+1}b_n\\) with \\(b_n&gt;0\\), if \\(b_n\\) decreases to \\(0\\), the series converges (at least conditionally).</p>\n    <div class=\"formula-block\">AST hypotheses: \\(b_{n+1}\\leq b_n\\) for large \\(n\\) and \\(\\lim b_n=0\\).</div>"
  },
  {
    "id": "t108",
    "title": "10.8 Ratio Test for Convergence (BC)",
    "bodyHtml": "<p>Let \\(L=\\lim_{n\\to\\infty}|a_{n+1}/a_n|\\). If \\(L&lt;1\\), absolute convergence; if \\(L&gt;1\\) or \\(L=\\infty\\), divergence; if \\(L=1\\), inconclusive.</p>\n    <div class=\"formula-block\">Ratio: \\(\\displaystyle L=\\lim_{n\\to\\infty}\\left|\\frac{a_{n+1}}{a_n}\\right|\\).</div>\n    <div class=\"callout example\">For \\(\\sum \\frac{n^2}{2^n}\\), \\(L=\\lim \\frac{(n+1)^2/2^{n+1}}{n^2/2^n}=\\frac12&lt;1\\) ⇒ converges absolutely.</div>"
  },
  {
    "id": "t109",
    "title": "10.9 Determining Absolute or Conditional Convergence (BC)",
    "bodyHtml": "<p>If \\(\\sum |a_n|\\) converges, \\(\\sum a_n\\) converges absolutely (hence converges). If \\(\\sum a_n\\) converges but \\(\\sum|a_n|\\) diverges, convergence is conditional.</p>\n    <div class=\"formula-block\">Absolute convergence \\(\\Rightarrow\\) convergence; converse fails (alternating harmonic).</div>\n    <div class=\"data-table\">\n      <table>\n        <thead><tr><th>Outcome</th><th>Name</th></tr></thead>\n        <tbody>\n          <tr><td>\\(\\sum |a_n|\\) converges</td><td>Absolutely convergent</td></tr>\n          <tr><td>\\(\\sum |a_n|\\) diverges but \\(\\sum a_n\\) converges</td><td>Conditionally convergent</td></tr>\n          <tr><td>\\(\\sum a_n\\) diverges</td><td>Divergent</td></tr>\n        </tbody>\n      </table>\n    </div>"
  },
  {
    "id": "t1010",
    "title": "10.10 Alternating Series Error Bound (BC)",
    "bodyHtml": "<p>For an alternating series satisfying AST, the remainder after the \\(n\\)th partial sum is bounded by the magnitude of the first omitted term: \\(|R_n|\\leq b_{n+1}\\).</p>\n    <div class=\"formula-block\">\\(|S-S_n|\\leq b_{n+1}\\) when hypotheses of AST hold.</div>\n    <div class=\"qa-item\"><div class=\"qa-question\">AP-Style Prompt</div><div class=\"qa-answer\">How many terms of \\(\\sum_{k=1}^\\infty (-1)^{k+1}/k^2\\) are needed so partial sum error is at most \\(0.001\\)?</div></div>"
  },
  {
    "id": "t1011",
    "title": "10.11 Finding Taylor Polynomial Approximations of Functions (BC)",
    "bodyHtml": "<p>The Taylor polynomial of degree \\(n\\) for \\(f\\) about \\(a\\): \\(P_n(x)=\\sum_{k=0}^n \\frac{f^{(k)}(a)}{k!}(x-a)^k\\). Maclaurin means \\(a=0\\).</p>\n    <div class=\"formula-block\">\\(P_n(x)=f(a)+f'(a)(x-a)+\\cdots+\\frac{f^{(n)}(a)}{n!}(x-a)^n\\).</div>\n    <div class=\"steps-block\"><div class=\"teaching-label\">Coefficient Routine</div><ul class=\"notes-list\"><li>Compute derivatives symbolically until a pattern or needed order.</li><li>Evaluate each at \\(x=a\\).</li><li>Divide by \\(k!\\) for the \\(k\\)th term.</li></ul></div>"
  },
  {
    "id": "t1012",
    "title": "10.12 Lagrange Error Bound (BC)",
    "bodyHtml": "<p>If \\(|f^{(n+1)}(x)|\\leq M\\) on an interval containing \\(a\\) and \\(x\\), then \\(|R_n(x)|\\leq \\dfrac{M}{(n+1)!}|x-a|^{n+1}\\).</p>\n    <div class=\"formula-block\">Lagrange remainder: \\(\\displaystyle |f(x)-P_n(x)|\\leq \\frac{M}{(n+1)!}|x-a|^{n+1}\\).</div>\n    <div class=\"mistake-block\"><div class=\"teaching-label\">Common Mistake</div><p>Using the wrong derivative order \\((n+1)\\) or forgetting factorial in the denominator.</p></div>"
  },
  {
    "id": "t1013",
    "title": "10.13 Radius and Interval of Convergence of Power Series (BC)",
    "bodyHtml": "<p>For \\(\\sum c_n(x-a)^n\\), the ratio (or root) test on coefficients typically yields radius \\(R\\). Convergence is absolute for \\(|x-a|&lt;R\\); check endpoints \\(x=a\\pm R\\) separately.</p>\n    <div class=\"formula-block\">Often: \\(\\displaystyle \\frac{1}{R}=\\lim_{n\\to\\infty}\\left|\\frac{c_{n+1}}{c_n}\\right|\\) when this limit exists (also test \\(0\\) and \\(\\infty\\) cases for \\(R\\)).</div>"
  },
  {
    "id": "t1014",
    "title": "10.14 Finding Taylor or Maclaurin Series for a Function (BC)",
    "bodyHtml": "<p>Build \\(\\sum \\frac{f^{(n)}(a)}{n!}(x-a)^n\\) by differentiation, or substitute into known series (e.g. \\(e^u\\), \\(\\frac{1}{1-u}\\), \\(\\ln(1+u)\\)) with algebra on \\(u\\).</p>\n    <div class=\"formula-block\">Geometric seed: \\(\\displaystyle\\frac{1}{1-x}=\\sum_{n=0}^\\infty x^n\\) for \\(|x|&lt;1\\); replace \\(x\\) by \\(-x^2\\) to expand \\(\\frac{1}{1+x^2}\\).</div>"
  },
  {
    "id": "t1015",
    "title": "10.15 Representing Functions as Power Series (BC)",
    "bodyHtml": "<p>Inside the interval of convergence, power series may be differentiated and integrated term-by-term, producing new series for related functions.</p>\n    <div class=\"formula-block\">If \\(f(x)=\\sum c_n(x-a)^n\\) with radius \\(R\\), then \\(f'(x)=\\sum n c_n(x-a)^{n-1}\\) with the same \\(R\\) (endpoints need recheck).</div>\n    <div class=\"callout example\">From \\(\\frac{1}{1-x}=\\sum x^n\\), integrate termwise: \\(-\\ln(1-x)=\\sum_{n=1}^\\infty \\frac{x^n}{n}\\) for \\(|x|&lt;1\\) (endpoint \\(x=-1\\) by AST).</div>"
  },
  {
    "id": "practice",
    "title": "Mixed Practice and FRQ Strategy",
    "bodyHtml": "<div class=\"data-table\">\n      <table>\n        <thead><tr><th>Terms look like…</th><th>Try first…</th></tr></thead>\n        <tbody>\n          <tr><td>Geometric/rational of \\(r^n\\)</td><td>Geometric formula or algebra</td></tr>\n          <tr><td>\\(1/n^p\\)</td><td>\\(p\\)-series</td></tr>\n          <tr><td>Rational or algebraic of \\(n\\)</td><td>Limit comparison to \\(p\\)-series</td></tr>\n          <tr><td>Factorials and exponentials</td><td>Ratio test</td></tr>\n          <tr><td>Alternating sign with decreasing magnitude</td><td>AST + absolute check</td></tr>\n        </tbody>\n      </table>\n    </div>\n    <div class=\"steps-block\"><div class=\"teaching-label\">Timed Routine</div><ul class=\"notes-list\"><li>3 convergence classifications with full justification.</li><li>1 power series radius + endpoint check.</li><li>1 Taylor/Maclaurin to order 3 or 4.</li><li>1 Lagrange error bound setup with explicit \\(M\\).</li></ul></div>"
  }
];
