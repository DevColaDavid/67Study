---
title: "Unit 1: Limits and Continuity"
unit: 1
---

# Unit 1: Limits and Continuity

## Introduction to Limits

### 1.1 Introducing Calculus: Can Change Occur at an Instant?

Calculus is built on two foundational questions: *How fast is something changing at a specific instant?* (differential calculus) and *How much does something accumulate over an interval?* (integral calculus). Both questions require the concept of a **limit** — examining what happens as you get arbitrarily close to a value without necessarily reaching it.

> [!tip] Big Idea
> A limit describes the value a function *approaches*, not necessarily the value it *equals* at a point.

### 1.2 Defining Limits and Using Limit Notation

The **limit** of $f(x)$ as $x$ approaches $c$ equals $L$ means that $f(x)$ gets arbitrarily close to $L$ as $x$ gets close to $c$ (from either side), regardless of what $f(c)$ equals.

**Notation:**

$$\lim_{x \to c} f(x) = L$$

For the limit to exist, the left-hand and right-hand limits must both exist and be equal:

$$\lim_{x \to c^-} f(x) = \lim_{x \to c^+} f(x) = L$$

> [!example] Example
> For $f(x) = \dfrac{x^2 - 1}{x - 1}$, find $\lim_{x \to 1} f(x)$.
>
> Factor: $\dfrac{(x-1)(x+1)}{x-1} = x + 1$ for $x \neq 1$.
>
> As $x \to 1$, $x + 1 \to 2$, so $\lim_{x \to 1} f(x) = 2$ even though $f(1)$ is undefined.

### 1.3 Estimating Limit Values from Graphs

From a graph you can estimate limits by tracing the curve from the left and from the right toward $x = c$:
- If both sides approach the same $y$-value, that is the limit.
- If they approach different values, the limit **does not exist (DNE)**.
- An open circle at $(c, L)$ means $f(c) \neq L$, but the limit can still equal $L$.

### 1.4 Estimating Limit Values from Tables

Build a table of $f(x)$ for $x$-values approaching $c$ from both sides. The pattern in the output values suggests the limit.

| $x$ | 0.9 | 0.99 | 0.999 | → 1 ← | 1.001 | 1.01 | 1.1 |
|---|---|---|---|---|---|---|---|
| $f(x)$ | 1.9 | 1.99 | 1.999 | ? | 2.001 | 2.01 | 2.1 |

The table suggests $\lim_{x \to 1} f(x) = 2$.

## Limit Laws and Algebraic Techniques

### 1.5 Determining Limits Using Algebraic Properties of Limits

If $\lim_{x \to c} f(x) = L$ and $\lim_{x \to c} g(x) = M$, then:

| Property | Formula |
|---|---|
| Sum | $\lim_{x\to c}[f(x)+g(x)] = L + M$ |
| Difference | $\lim_{x\to c}[f(x)-g(x)] = L - M$ |
| Product | $\lim_{x\to c}[f(x) \cdot g(x)] = L \cdot M$ |
| Quotient | $\lim_{x\to c}\dfrac{f(x)}{g(x)} = \dfrac{L}{M}$, provided $M \neq 0$ |
| Constant multiple | $\lim_{x\to c}[k \cdot f(x)] = k \cdot L$ |
| Power | $\lim_{x\to c}[f(x)]^n = L^n$ |

For **polynomial functions**: $\lim_{x \to c} p(x) = p(c)$ (direct substitution works).

### 1.6 Determining Limits Using Algebraic Manipulation

When direct substitution gives $\dfrac{0}{0}$ (indeterminate form), try:

1. **Factor and cancel** — factor numerator/denominator, cancel common factors.
2. **Rationalize** — multiply by conjugate (useful with square roots).
3. **Combine fractions** — get a common denominator first.

> [!example] Rationalization
> $$\lim_{x \to 0} \frac{\sqrt{x+4} - 2}{x} = \lim_{x \to 0} \frac{(\sqrt{x+4}-2)(\sqrt{x+4}+2)}{x(\sqrt{x+4}+2)} = \lim_{x \to 0} \frac{x}{x(\sqrt{x+4}+2)} = \frac{1}{4}$$

### 1.7 Selecting Procedures for Determining Limits

| Situation | Strategy |
|---|---|
| No indeterminate form | Direct substitution |
| $\frac{0}{0}$ with polynomials | Factor and cancel |
| $\frac{0}{0}$ with radicals | Rationalize the conjugate |
| $\frac{0}{0}$ with trig | Use known trig limits |
| One-sided behavior differs | Check left/right limits separately |

### 1.8 Determining Limits Using the Squeeze Theorem

If $g(x) \leq f(x) \leq h(x)$ near $c$, and $\lim_{x \to c} g(x) = \lim_{x \to c} h(x) = L$, then:

$$\lim_{x \to c} f(x) = L$$

> [!example] Classic Application
> Since $-1 \leq \sin\!\left(\tfrac{1}{x}\right) \leq 1$, we have $-x^2 \leq x^2 \sin\!\left(\tfrac{1}{x}\right) \leq x^2$.
>
> Because $\lim_{x \to 0}(\pm x^2) = 0$, the Squeeze Theorem gives $\lim_{x \to 0} x^2 \sin\!\left(\tfrac{1}{x}\right) = 0$.

### 1.9 Connecting Multiple Representations of Limits

Limits can be understood graphically (tracing the curve), numerically (table of values), and analytically (algebraic manipulation). On the AP exam, you may need to switch fluently between all three.

## Continuity

### 1.10 Exploring Types of Discontinuities

A function is **discontinuous** at $x = c$ if the limit doesn't exist, the function isn't defined there, or the limit doesn't match the function value. Three main types:

| Type | What happens |
|---|---|
| **Removable** | $\lim_{x\to c} f(x)$ exists but $\neq f(c)$ — a "hole" in the graph |
| **Jump** | Left and right limits exist but are unequal |
| **Infinite** | $f(x) \to \pm\infty$ as $x \to c$ — a vertical asymptote |

### 1.11 Defining Continuity at a Point

$f$ is **continuous at $x = c$** if and only if all three conditions hold:

1. $f(c)$ is defined
2. $\lim_{x \to c} f(x)$ exists
3. $\lim_{x \to c} f(x) = f(c)$

Failing any one condition → discontinuity at $c$.

### 1.12 Confirming Continuity over an Interval

- **Open interval $(a, b)$**: $f$ is continuous at every point in the interval.
- **Closed interval $[a, b]$**: $f$ is continuous on $(a, b)$, and additionally $\lim_{x \to a^+} f(x) = f(a)$ and $\lim_{x \to b^-} f(x) = f(b)$ (one-sided continuity at endpoints).

Common function types that are continuous everywhere on their domains: polynomials, rationals, radicals, trig, exponentials, logarithms.

### 1.13 Removing Discontinuities

A **removable discontinuity** can be "patched" by redefining $f(c) = \lim_{x\to c} f(x)$.

> [!example] Example
> $f(x) = \dfrac{x^2 - 4}{x - 2}$ has a hole at $x = 2$. Redefine $f(2) = 4$ to make it continuous.

## Limits Involving Infinity

### 1.14 Connecting Infinite Limits and Vertical Asymptotes

If $\lim_{x \to c} f(x) = \pm\infty$, then $x = c$ is a **vertical asymptote**.

This occurs when the denominator → 0 and the numerator → nonzero.

$$\lim_{x \to 0^+} \frac{1}{x} = +\infty \qquad \lim_{x \to 0^-} \frac{1}{x} = -\infty$$

> [!tip] Sign Analysis
> To determine whether the one-sided limit is $+\infty$ or $-\infty$, check the sign of the numerator and denominator separately as $x$ approaches from each side.

### 1.15 Connecting Limits at Infinity and Horizontal Asymptotes

$\lim_{x \to \pm\infty} f(x) = L$ means $y = L$ is a **horizontal asymptote**.

For rational functions $\dfrac{p(x)}{q(x)}$ (compare leading-term degrees $n$ and $m$):

| Condition | Limit at $\pm\infty$ |
|---|---|
| $n < m$ | $0$ |
| $n = m$ | Ratio of leading coefficients |
| $n > m$ | $\pm\infty$ (no horizontal asymptote) |

> [!example] Example
> $\lim_{x\to\infty} \dfrac{3x^2 - 1}{5x^2 + 2} = \dfrac{3}{5}$ (equal degrees → ratio of leading coefficients)

### 1.16 Working with the Intermediate Value Theorem

**Intermediate Value Theorem (IVT):** If $f$ is continuous on $[a, b]$ and $k$ is any value strictly between $f(a)$ and $f(b)$, then there exists at least one $c \in (a, b)$ such that $f(c) = k$.

> [!tip] Key Use
> The IVT guarantees the *existence* of a zero or a specific output, but does not find it. To apply IVT for a zero, show $f(a)$ and $f(b)$ have opposite signs and that $f$ is continuous on $[a,b]$.

> [!example] Applying IVT
> Show $f(x) = x^3 - x - 1$ has a root on $(1, 2)$.
>
> $f(1) = -1 < 0$ and $f(2) = 5 > 0$. Since $f$ is continuous (polynomial) and $0$ is between $-1$ and $5$, by IVT there exists $c \in (1, 2)$ with $f(c) = 0$.
