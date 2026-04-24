import fs from "fs";
import path from "path";

const root = "c:/Users/David Si/Documents/GitHub/APStudy";
const unitsDir = path.join(root, "ap-calculus", "units");

const unitMeta = {
  2: { title: "Differentiation: Definition and Fundamental Properties", label: "AP Calculus (AB + BC)", weight: "AB/BC Exam Weight: 10%-12%" },
  3: { title: "Differentiation: Composite, Implicit, and Inverse Functions", label: "AP Calculus (AB + BC)", weight: "AB/BC Exam Weight: 9%-13%" },
  4: { title: "Contextual Applications of Differentiation", label: "AP Calculus (AB + BC)", weight: "AB/BC Exam Weight: 10%-15%" },
  5: { title: "Analytical Applications of Differentiation", label: "AP Calculus (AB + BC)", weight: "AB/BC Exam Weight: 15%-18%" },
  6: { title: "Integration and Accumulation of Change", label: "AP Calculus (AB + BC)", weight: "AB/BC Exam Weight: 17%-20%" },
  7: { title: "Differential Equations", label: "AP Calculus (AB + BC)", weight: "AB/BC Exam Weight: 6%-12%" },
  8: { title: "Applications of Integration", label: "AP Calculus (AB + BC)", weight: "AB/BC Exam Weight: 10%-15%" },
  9: { title: "Parametric, Polar, and Vector-Valued Functions", label: "BC only", weight: "BC Exam Weight: 11%-12% (BC only unit)" },
  10: { title: "Infinite Sequences and Series", label: "BC only", weight: "BC Exam Weight: 17%-18% (BC only unit)" },
};

const topics = {
  2: [
    ["t21", "2.1 Defining Average and Instantaneous Rates of Change at a Point"],
    ["t22", "2.2 Defining the Derivative of a Function and Using Derivative Notation"],
    ["t23", "2.3 Estimating Derivatives of a Function at a Point"],
    ["t24", "2.4 Connecting Differentiability and Continuity: Determining When Derivatives Do and Do Not Exist"],
    ["t25", "2.5 Applying the Power Rule"],
    ["t26", "2.6 Derivative Rules: Constant, Sum, Difference, and Constant Multiple"],
    ["t27", "2.7 The Product Rule"],
    ["t28", "2.8 The Quotient Rule"],
    ["t29", "2.9 Finding Derivatives of Trigonometric Functions"],
    ["t210", "2.10 Finding the Derivatives of Exponential Functions"],
    ["t211", "2.11 Finding the Derivative of Inverse Functions"],
    ["t212", "2.12 Finding Derivatives of Logarithmic Functions"],
    ["t213", "2.13 Applying Differentiation Rules"],
  ],
  3: [
    ["t31", "3.1 The Chain Rule"],
    ["t32", "3.2 Differentiating Composite Functions"],
    ["t33", "3.3 Differentiating Implicitly"],
    ["t34", "3.4 Differentiating Inverse Functions"],
    ["t35", "3.5 Selecting Procedures for Calculating Derivatives"],
    ["t36", "3.6 Calculating Higher-Order Derivatives"],
    ["t37", "3.7 Derivatives of ln and e With Chain Rule Context"],
    ["t38", "3.8 Multiple Representations of Derivatives"],
  ],
  4: [
    ["t41", "4.1 Interpreting the Meaning of the Derivative in Context"],
    ["t42", "4.2 Straight-Line Motion: Connecting Position, Velocity, and Acceleration"],
    ["t43", "4.3 Rates of Change in Applied Contexts Other Than Motion"],
    ["t44", "4.4 Introduction to Related Rates"],
    ["t45", "4.5 Solving Related Rates Problems"],
    ["t46", "4.6 Local Linearity and Linearization"],
    ["t47", "4.7 Using L'Hospital's Rule for Determining Limits of Indeterminate Forms (BC)"],
    ["t48", "4.8 Interpreting Differentiability and Continuity in Context"],
  ],
  5: [
    ["t51", "5.1 Using the Mean Value Theorem"],
    ["t52", "5.2 Extreme Value Theorem and Global Extrema"],
    ["t53", "5.3 Determining Intervals of Increase and Decrease"],
    ["t54", "5.4 Using the First Derivative Test to Determine Relative (Local) Extrema"],
    ["t55", "5.5 Using Derivatives to Analyze Functions at End Behavior"],
    ["t56", "5.6 Derivatives and Shapes of Graphs"],
    ["t57", "5.7 Using the Second Derivative Test to Determine Extrema"],
    ["t58", "5.8 Sketching Graphs of Functions and Their Derivatives"],
    ["t59", "5.9 Connecting a Function, Its First Derivative, and Its Second Derivative"],
    ["t510", "5.10 Introduction to Optimization Problems"],
    ["t511", "5.11 Solving Optimization Problems"],
    ["t512", "5.12 Exploring Behavior of Implicit Relations"],
  ],
  6: [
    ["t61", "6.1 Exploring Accumulations of Change"],
    ["t62", "6.2 Approximating Areas with Riemann Sums"],
    ["t63", "6.3 Riemann Sums, Summation Notation, and Definite Integrals"],
    ["t64", "6.4 The Fundamental Theorem of Calculus and Definite Integrals"],
    ["t65", "6.5 Interpreting the Behavior of Accumulation Functions Involving Area"],
    ["t66", "6.6 Applying Properties of Definite Integrals"],
    ["t67", "6.7 The Fundamental Theorem of Calculus and Antidifferentiation"],
    ["t68", "6.8 Finding Antiderivatives and Indefinite Integrals: Basic Rules and Notation"],
    ["t69", "6.9 Integrating Using Substitution"],
    ["t610", "6.10 Integrating Functions Using Long Division and Completing the Square (BC)"],
    ["t611", "6.11 Integrating Using Integration by Parts (BC)"],
    ["t612", "6.12 Integrating Using Linear Partial Fractions (BC)"],
  ],
  7: [
    ["t71", "7.1 Modeling Situations with Differential Equations"],
    ["t72", "7.2 Verifying Solutions for Differential Equations"],
    ["t73", "7.3 Sketching Slope Fields"],
    ["t74", "7.4 Reasoning Using Slope Fields"],
    ["t75", "7.5 Approximating Solutions Using Euler's Method"],
    ["t76", "7.6 Finding General Solutions Using Separation of Variables"],
    ["t77", "7.7 Finding Particular Solutions Using Initial Conditions and Separation of Variables"],
    ["t78", "7.8 Exponential Models with Differential Equations"],
    ["t79", "7.9 Logistic Models with Differential Equations"],
  ],
  8: [
    ["t81", "8.1 Finding the Average Value of a Function on an Interval"],
    ["t82", "8.2 Connecting Position, Velocity, and Acceleration of Functions Using Integrals"],
    ["t83", "8.3 Using Definite Integrals to Find the Area Between Curves"],
    ["t84", "8.4 Finding Volumes of Solids with Cross Sections"],
    ["t85", "8.5 Finding Volume with Disc Method"],
    ["t86", "8.6 Finding Volume with Washer Method"],
    ["t87", "8.7 Finding Volume with Cylindrical Shell Method (BC)"],
    ["t88", "8.8 Finding Arc Length of Curves Defined by Functions"],
  ],
  9: [
    ["t91", "9.1 Defining and Differentiating Parametric Equations (BC)"],
    ["t92", "9.2 Second Derivatives of Parametric Equations (BC)"],
    ["t93", "9.3 Finding Arc Lengths of Curves Given by Parametric Equations (BC)"],
    ["t94", "9.4 Defining and Differentiating Vector-Valued Functions (BC)"],
    ["t95", "9.5 Integrating Vector-Valued Functions (BC)"],
    ["t96", "9.6 Solving Motion Problems Using Parametric and Vector-Valued Functions (BC)"],
    ["t97", "9.7 Defining Polar Coordinates and Differentiating in Polar Form (BC)"],
    ["t98", "9.8 Finding Area of a Polar Region or Area Bounded by a Single Polar Curve (BC)"],
    ["t99", "9.9 Finding the Area of the Region Bounded by Two Polar Curves (BC)"],
  ],
  10: [
    ["t101", "10.1 Defining Convergent and Divergent Infinite Series (BC)"],
    ["t102", "10.2 Working with Geometric Series (BC)"],
    ["t103", "10.3 The nth Term Test for Divergence (BC)"],
    ["t104", "10.4 Integral Test for Convergence (BC)"],
    ["t105", "10.5 Harmonic Series and p-Series (BC)"],
    ["t106", "10.6 Comparison Tests for Convergence (BC)"],
    ["t107", "10.7 Alternating Series Test for Convergence (BC)"],
    ["t108", "10.8 Ratio Test for Convergence (BC)"],
    ["t109", "10.9 Determining Absolute or Conditional Convergence (BC)"],
    ["t1010", "10.10 Alternating Series Error Bound (BC)"],
    ["t1011", "10.11 Finding Taylor Polynomial Approximations of Functions (BC)"],
    ["t1012", "10.12 Lagrange Error Bound (BC)"],
    ["t1013", "10.13 Radius and Interval of Convergence of Power Series (BC)"],
    ["t1014", "10.14 Finding Taylor or Maclaurin Series for a Function (BC)"],
    ["t1015", "10.15 Representing Functions as Power Series (BC)"],
  ],
};

function formulaFor(title) {
  const t = title.toLowerCase();
  if (t.includes("power rule")) return String.raw`\(\frac{d}{dx}(x^n)=nx^{n-1}\), valid for integer/rational powers on appropriate domains.`;
  if (t.includes("product rule")) return String.raw`\((fg)'=f'g+fg'\).`;
  if (t.includes("quotient rule")) return String.raw`\(\left(\frac{f}{g}\right)'=\frac{f'g-fg'}{g^2}\), with \(g\neq0\).`;
  if (t.includes("chain rule") || t.includes("composite")) return String.raw`\(\frac{d}{dx}f(g(x))=f'(g(x))g'(x)\).`;
  if (t.includes("implicit")) return String.raw`Differentiate both sides with respect to \(x\), then solve for \(\frac{dy}{dx}\).`;
  if (t.includes("inverse")) return String.raw`\(\frac{d}{dx}\left(f^{-1}(x)\right)=\frac{1}{f'(f^{-1}(x))}\).`;
  if (t.includes("l'hospital")) return String.raw`If a limit is \(0/0\) or \(\infty/\infty\), then \(\lim\frac{f}{g}=\lim\frac{f'}{g'}\) when conditions are met.`;
  if (t.includes("mean value theorem")) return String.raw`\(\exists c\in(a,b): f'(c)=\frac{f(b)-f(a)}{b-a}\), if \(f\) is continuous on \([a,b]\), differentiable on \((a,b)\).`;
  if (t.includes("riemann")) return String.raw`\(\int_a^b f(x)\,dx=\lim_{n\to\infty}\sum_{i=1}^{n}f(x_i^*)\Delta x\).`;
  if (t.includes("fundamental theorem")) return String.raw`\(\frac{d}{dx}\int_a^x f(t)\,dt=f(x)\), and \(\int_a^b f(x)\,dx=F(b)-F(a)\).`;
  if (t.includes("substitution")) return String.raw`If \(u=g(x)\), then \(\int f(g(x))g'(x)\,dx=\int f(u)\,du\).`;
  if (t.includes("integration by parts")) return String.raw`\(\int u\,dv=uv-\int v\,du\).`;
  if (t.includes("partial fractions")) return String.raw`Decompose rational expressions into simpler fractions, then integrate term by term.`;
  if (t.includes("slope field")) return String.raw`Slope at each point is given by \(\frac{dy}{dx}=f(x,y)\).`;
  if (t.includes("euler")) return String.raw`Euler: \(y_{n+1}=y_n+f(x_n,y_n)\Delta x\).`;
  if (t.includes("separation")) return String.raw`For separable ODEs: \(\frac{dy}{dx}=g(x)h(y)\Rightarrow \int \frac{1}{h(y)}dy=\int g(x)dx\).`;
  if (t.includes("logistic")) return String.raw`Logistic model: \(\frac{dP}{dt}=kP\left(1-\frac{P}{M}\right)\), with carrying capacity \(M\).`;
  if (t.includes("average value")) return String.raw`\(\text{Average value on }[a,b]=\frac{1}{b-a}\int_a^b f(x)\,dx\).`;
  if (t.includes("area")) return String.raw`Area between curves: \(\int_a^b(\text{top}-\text{bottom})\,dx\).`;
  if (t.includes("disc") || t.includes("washer")) return String.raw`Washer/disc volume: \(V=\pi\int_a^b\big(R(x)^2-r(x)^2\big)\,dx\).`;
  if (t.includes("shell")) return String.raw`Shell volume: \(V=2\pi\int_a^b(\text{radius})(\text{height})\,dx\).`;
  if (t.includes("arc length")) return String.raw`For \(y=f(x)\): \(L=\int_a^b \sqrt{1+\left(f'(x)\right)^2}\,dx\).`;
  if (t.includes("parametric")) return String.raw`If \(x=x(t), y=y(t)\), then \(\frac{dy}{dx}=\frac{dy/dt}{dx/dt}\).`;
  if (t.includes("vector-valued")) return String.raw`\(\vec r(t)=\langle x(t),y(t)\rangle,\ \vec v=\vec r\,'(t),\ \vec a=\vec r\,''(t)\).`;
  if (t.includes("polar")) return String.raw`If \(r=f(\theta)\), then \(x=r\cos\theta,\ y=r\sin\theta\), and area \(=\frac12\int r^2\,d\theta\).`;
  if (t.includes("geometric series")) return String.raw`\(\sum_{n=0}^{\infty}ar^n\) converges when \(|r|<1\), sum \(=\frac{a}{1-r}\).`;
  if (t.includes("nth term")) return String.raw`If \(\lim_{n\to\infty}a_n\neq0\), then \(\sum a_n\) diverges.`;
  if (t.includes("integral test")) return String.raw`For positive decreasing \(f(n)=a_n\): \(\sum a_n\) and \(\int f(x)\,dx\) share convergence behavior.`;
  if (t.includes("ratio test")) return String.raw`If \(L=\lim\left|\frac{a_{n+1}}{a_n}\right|\): \(L<1\) converge, \(L>1\) diverge, \(L=1\) inconclusive.`;
  if (t.includes("taylor polynomial")) return String.raw`Taylor polynomial at \(a\): \(T_n(x)=\sum_{k=0}^{n}\frac{f^{(k)}(a)}{k!}(x-a)^k\).`;
  if (t.includes("lagrange")) return String.raw`\(|R_n(x)|\le \frac{M|x-a|^{n+1}}{(n+1)!}\), where \(M\) bounds \(|f^{(n+1)}|\).`;
  if (t.includes("power series")) return String.raw`Power series centered at \(a\): \(\sum c_n(x-a)^n\), with radius \(R\) and interval from endpoint testing.`;
  return String.raw`Use clear setup, a valid theorem/rule, and a one-sentence interpretation to earn AP communication points.`;
}

function explainFor(title, unit) {
  return `This subtopic in Unit ${unit} focuses on ${title.replace(/^\d+\.\d+\s*/, "").replace(/\s+\(BC\)$/, "").toLowerCase()}. Build your notes around meaning first, then mechanics: what quantity is being measured, why the procedure works, and how to interpret the result in context.`;
}

function stepsFor(title) {
  const t = title.toLowerCase();
  if (t.includes("selecting procedures")) return ["Classify the form quickly (composition, quotient, context, or series test).", "Choose the shortest valid method.", "Check assumptions (domain, differentiability, positivity/decreasing, etc.)."];
  if (t.includes("graph") || t.includes("sketch")) return ["List critical points and undefined points.", "Use sign of derivatives for monotonicity/concavity.", "Match behavior to the graph with labels."];
  if (t.includes("related rates")) return ["Draw and label a diagram with variables and units.", "Differentiate with respect to time.", "Substitute known values only after differentiating."];
  if (t.includes("series") || t.includes("convergence") || t.includes("test")) return ["Classify the series family first.", "Apply a justified convergence test.", "State final classification clearly (absolute, conditional, divergent)."];
  return ["Identify knowns, unknown, and units.", "Apply the core rule/theorem for this topic.", "Write a one-sentence interpretation or conclusion."];
}

function mistakeFor(title) {
  const t = title.toLowerCase();
  if (t.includes("chain")) return "Forgetting to multiply by the derivative of the inner function.";
  if (t.includes("implicit")) return "Treating y as a constant; remember y depends on x, so derivatives produce y'.";
  if (t.includes("quotient")) return "Sign errors in \(f'g-fg'\) or forgetting to square the denominator.";
  if (t.includes("riemann")) return "Confusing left/right/midpoint definitions or dropping \(\Delta x\).";
  if (t.includes("euler")) return "Updating x without updating y (or vice versa) each step.";
  if (t.includes("area") || t.includes("volume")) return "Using wrong top/bottom or outer/inner function in setup.";
  if (t.includes("series") || t.includes("test")) return "Using a test mechanically without checking its hypotheses.";
  return "Skipping explanation language; AP scoring rewards justified method and interpretation, not just numeric output.";
}

function promptFor(title) {
  const t = title.toLowerCase();
  if (t.includes("optimization")) return "Optimize a contextual quantity (cost/area/volume) and justify why the critical point gives the requested extremum.";
  if (t.includes("related rates")) return "Given changing dimensions of a geometric figure, find the requested rate and include units.";
  if (t.includes("riemann")) return "Compute left and midpoint Riemann approximations and compare to the exact definite integral.";
  if (t.includes("fundamental theorem")) return "Differentiate an accumulation function and evaluate a related definite integral using antiderivatives.";
  if (t.includes("slope field")) return "Use a slope field to estimate behavior and justify whether solutions increase/decrease near a point.";
  if (t.includes("parametric") || t.includes("polar")) return "Find slope and one geometric quantity (area/arc length/speed) in non-Cartesian form.";
  if (t.includes("series") || t.includes("taylor")) return "Choose a convergence or approximation method, justify it, and bound error when asked.";
  return "Solve one AP-style problem and include one sentence explaining what your result means.";
}

function chapterHtml(id, title, unit) {
  const steps = stepsFor(title).map((s) => `<li>${s}</li>`).join("");
  return `  <div class="chapter" id="${id}"><div class="chapter-header" onclick="toggle(this)"><h2>${title}</h2><span class="chevron">▼</span></div><div class="chapter-content">
    <p>${explainFor(title, unit)}</p>
    <div class="formula-block">${formulaFor(title)}</div>
    <div class="steps-block"><div class="teaching-label">How To Solve</div><ul class="notes-list">${steps}</ul></div>
    <div class="mistake-block"><div class="teaching-label">Common Mistake</div><p>${mistakeFor(title)}</p></div>
    <div class="qa-item"><div class="qa-question">AP-Style Prompt</div><div class="qa-answer">${promptFor(title)}</div></div>
  </div></div>`;
}

function visualByUnit(unit) {
  if (unit === 4) {
    return `<div class="mini-diagram">
      <svg viewBox="0 0 420 120" xmlns="http://www.w3.org/2000/svg" aria-label="Position velocity acceleration relationships">
        <rect x="20" y="30" width="100" height="56" stroke="#8892b0" fill="none"/><text x="42" y="63" fill="#d4daf0" font-size="12">position</text>
        <rect x="160" y="30" width="100" height="56" stroke="#8892b0" fill="none"/><text x="188" y="63" fill="#d4daf0" font-size="12">velocity</text>
        <rect x="300" y="30" width="100" height="56" stroke="#8892b0" fill="none"/><text x="322" y="63" fill="#d4daf0" font-size="12">accel.</text>
        <line x1="120" y1="58" x2="160" y2="58" stroke="#5b8dee"/><text x="126" y="50" fill="#5b8dee" font-size="11">d/dt</text>
        <line x1="260" y1="58" x2="300" y2="58" stroke="#5b8dee"/><text x="266" y="50" fill="#5b8dee" font-size="11">d/dt</text>
      </svg>
    </div>`;
  }
  if (unit === 7) {
    return `<div class="mini-diagram"><p><strong>Slope-field intuition:</strong> if many short line segments tilt upward to the right, nearby solutions increase; if they flatten near a line, that line may be an equilibrium solution.</p></div>`;
  }
  if (unit === 10) {
    return `<div class="mini-diagram"><p><strong>Series test workflow:</strong> nth-term check first, then structure-based test (geometric/p-series), then comparison/ratio/alternating, and endpoint checks for power series.</p></div>`;
  }
  return "";
}

for (const unit of Object.keys(unitMeta).map(Number)) {
  const m = unitMeta[unit];
  const list = topics[unit];
  const switchLinks = Array.from({ length: 10 }, (_, i) => i + 1)
    .map((n) => `    <div class="toc-section"><a href="unit${n}.html">Unit ${n}: ${unitMeta[n]?.title || ""}</a></div>`)
    .join("\n");
  const tocLinks = list.map(([id, title]) => `  <div class="toc-section"><a href="#${id}">${title}</a></div>`).join("\n");
  const chapters = list.map(([id, title]) => chapterHtml(id, title, unit)).join("\n\n");
  const overviewVisual = visualByUnit(unit);

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>AP Calculus Unit ${unit}</title>
<link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,600;0,700;1,400&family=DM+Mono:wght@400;500&family=Outfit:wght@300;400;600;700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="../../styles.css">
</head>
<body>
<nav id="sidebar">
  <div class="sidebar-header">Calculus Unit ${unit}</div>
  <div class="sidebar-owner"><a class="sidebar-back-link" href="../index.html">Home</a></div>
  <details class="unit-switcher">
    <summary>Unit ${unit}: ${m.title}</summary>
${switchLinks}
  </details>
  <div class="toc-section"><a href="#overview">Overview</a></div>
${tocLinks}
  <div class="toc-section"><a href="#practice">Mixed Practice and FRQ Strategy</a></div>
</nav>
<main id="main">
  <div class="doc-title-block">
    <div class="doc-label">${m.label}</div>
    <h1 class="doc-title">Unit ${unit}: ${m.title}</h1>
    <div class="doc-meta"><span><a class="all-subjects-link" href="../index.html">← AP Calculus</a></span><span>${m.weight}</span></div>
  </div>

  <div class="learn-block" id="overview">
    <div class="teaching-label">How To Study This Unit</div>
    <p>This unit should be studied through three layers: conceptual meaning, symbolic methods, and AP-style communication. Don’t memorize formulas in isolation; connect each tool to the type of question where it is strongest.</p>
    <p>Practice short sets by subtopic first, then mixed sets that force method selection. In FRQ-style responses, write one brief sentence that interprets your result in context.</p>
    ${overviewVisual}
  </div>

${chapters}

  <div class="chapter" id="practice"><div class="chapter-header" onclick="toggle(this)"><h2>Mixed Practice and FRQ Strategy</h2><span class="chevron">▼</span></div><div class="chapter-content">
    <div class="steps-block"><div class="teaching-label">Timed Routine</div><ul class="notes-list"><li>Classify prompt type in first 15-20 seconds.</li><li>Choose method before doing algebra-heavy work.</li><li>Show symbolic setup clearly so partial credit is preserved.</li><li>End with interpretation sentence and units when context is present.</li></ul></div>
    <div class="callout example">Use one daily mixed set from this unit: 3 conceptual prompts, 3 computational prompts, and 1 full explanation response.</div>
  </div></div>
</main>
<script src="../../main.js"></script>
<script>window.MathJax={tex:{inlineMath:[["\\\\(","\\\\)"],["$","$"]]},svg:{fontCache:"global"}};</script>
<script id="MathJax-script" async src="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-svg.js"></script>
</body>
</html>`;

  fs.writeFileSync(path.join(unitsDir, `unit${unit}.html`), html, "utf8");
}

console.log("Polished AP Calculus units 2-10.");
