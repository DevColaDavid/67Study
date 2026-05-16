---
title: "Unit 6: Integration and Accumulation of Change"
unit: 6
---

# Unit 6: Integration and Accumulation of Change

## Accumulation and Riemann Sums

### 6.1 Exploring Accumulations of Change

The **definite integral** measures the total accumulation of a rate of change over an interval. If $f'(x)$ is a rate, then $\int_a^b f'(x)\,dx = f(b) - f(a)$ is the net change.

> [!tip] Key Insight
> Area under a rate curve = total accumulated change. For velocity, $\int_a^b v(t)\,dt$ = net displacement.

### 6.2 Approximating Areas with Riemann Sums

Partition $[a,b]$ into $n$ subintervals of width $\Delta x = \dfrac{b-a}{n}$.

| Method | Sample point $x_k^*$ |
|---|---|
| Left Riemann sum | Left endpoint |
| Right Riemann sum | Right endpoint |
| Midpoint Riemann sum | Midpoint |
| Trapezoidal Rule | Average of left and right |

$$\text{Riemann sum} = \sum_{k=1}^{n} f(x_k^*)\,\Delta x$$

> [!note] Over/Underestimate
> - If $f$ is **increasing**: Left underestimates, Right overestimates
> - If $f$ is **decreasing**: Left overestimates, Right underestimates
> - If $f$ is **concave up**: Trapezoid overestimates, Midpoint underestimates
> - If $f$ is **concave down**: Trapezoid underestimates, Midpoint overestimates

### 6.3 Riemann Sums, Summation Notation, and Definite Integral Notation

The **definite integral** is the limit of Riemann sums as $n \to \infty$:

$$\int_a^b f(x)\,dx = \lim_{n \to \infty} \sum_{k=1}^{n} f(x_k^*)\,\Delta x$$

**Properties of definite integrals:**

$$\int_a^a f(x)\,dx = 0 \qquad \int_a^b f(x)\,dx = -\int_b^a f(x)\,dx$$

$$\int_a^b [f(x) \pm g(x)]\,dx = \int_a^b f(x)\,dx \pm \int_a^b g(x)\,dx$$

$$\int_a^b c\,f(x)\,dx = c\int_a^b f(x)\,dx \qquad \int_a^c f\,dx = \int_a^b f\,dx + \int_b^c f\,dx$$

## The Fundamental Theorem of Calculus

### 6.4 The Fundamental Theorem of Calculus and Accumulation Functions

**FTC Part 1:** If $F(x) = \int_a^x f(t)\,dt$, then $F'(x) = f(x)$.

The accumulation function $F(x)$ has the integrand as its derivative.

> [!example] Chain Rule with FTC
> $$\frac{d}{dx}\int_a^{g(x)} f(t)\,dt = f(g(x)) \cdot g'(x)$$
>
> Example: $\dfrac{d}{dx}\int_1^{x^2} \sin t\,dt = \sin(x^2) \cdot 2x$

### 6.5 Interpreting the Behavior of Accumulation Functions Involving Area

For $F(x) = \int_a^x f(t)\,dt$:
- $F$ increases where $f > 0$, decreases where $f < 0$
- $F$ has local max/min where $f$ changes sign
- $F$ is concave up where $f$ is increasing, concave down where $f$ is decreasing
- $F$ has inflection points where $f$ has extrema

### 6.6 Applying Properties of Definite Integrals

Use symmetry to simplify:
- If $f$ is **even** ($f(-x) = f(x)$): $\int_{-a}^{a} f(x)\,dx = 2\int_0^a f(x)\,dx$
- If $f$ is **odd** ($f(-x) = -f(x)$): $\int_{-a}^{a} f(x)\,dx = 0$

### 6.7 The Fundamental Theorem of Calculus and Definite Integrals

**FTC Part 2 (Evaluation Theorem):** If $F$ is any antiderivative of $f$:

$$\int_a^b f(x)\,dx = F(b) - F(a) = \Big[F(x)\Big]_a^b$$

This connects differentiation and integration as inverse operations.

## Antiderivatives and Basic Integration Rules

### 6.8 Finding Antiderivatives and Indefinite Integrals: Basic Rules and Notation

The **indefinite integral** (general antiderivative) includes a constant $C$:

$$\int f(x)\,dx = F(x) + C \quad \text{where } F'(x) = f(x)$$

**Basic rules:**

| Integral | Result |
|---|---|
| $\int x^n\,dx$ | $\dfrac{x^{n+1}}{n+1} + C$, $n \neq -1$ |
| $\int \dfrac{1}{x}\,dx$ | $\ln|x| + C$ |
| $\int e^x\,dx$ | $e^x + C$ |
| $\int \sin x\,dx$ | $-\cos x + C$ |
| $\int \cos x\,dx$ | $\sin x + C$ |
| $\int \sec^2 x\,dx$ | $\tan x + C$ |
| $\int \sec x \tan x\,dx$ | $\sec x + C$ |

### 6.9 Integrating Using Substitution

**$u$-substitution** reverses the chain rule. Let $u = g(x)$, $du = g'(x)\,dx$:

$$\int f(g(x))\,g'(x)\,dx = \int f(u)\,du$$

> [!example] Examples
> - $\int 2x\cos(x^2)\,dx$: let $u = x^2$, $du = 2x\,dx \implies \sin(x^2) + C$
> - $\int \dfrac{3x^2}{x^3+1}\,dx$: let $u = x^3+1$, $du = 3x^2\,dx \implies \ln|x^3+1| + C$

**For definite integrals with $u$-sub:** change the limits to $u$-values, or back-substitute before evaluating.

### 6.10 Integrating Functions Using Long Division and Completing the Square

**Long division:** when degree of numerator $\geq$ degree of denominator, divide first.

$$\int \frac{x^2+1}{x-1}\,dx = \int \left(x+1+\frac{2}{x-1}\right)dx = \frac{x^2}{2}+x+2\ln|x-1|+C$$

**Completing the square:** to get integrals of the form $\dfrac{1}{u^2+a^2}$ (which gives $\arctan$).

> [!bc] 6.11 Integrating Using Integration by Parts
>
> **Integration by parts** reverses the product rule:
>
> $$\int u\,dv = uv - \int v\,du$$
>
> Choose $u$ and $dv$ using the **LIATE** priority: Logarithmic, Inverse trig, Algebraic, Trigonometric, Exponential. Choose $u$ as the first type that appears.
>
> > [!example] Examples
> > - $\int x e^x\,dx$: $u = x$, $dv = e^x\,dx \implies xe^x - e^x + C$
> > - $\int \ln x\,dx$: $u = \ln x$, $dv = dx \implies x\ln x - x + C$
> > - $\int x^2 \sin x\,dx$: requires two applications of integration by parts
>
> **Tabular integration:** efficient for repeated integration by parts when one factor is a polynomial.

> [!bc] 6.12 Using Linear Partial Fractions
>
> **Partial fractions** decomposes a rational function into simpler fractions before integrating.
>
> For distinct linear factors:
> $$\frac{p(x)}{(x-a)(x-b)} = \frac{A}{x-a} + \frac{B}{x-b}$$
>
> > [!example] Example
> > $$\int \frac{1}{x^2-1}\,dx = \int \frac{1}{(x-1)(x+1)}\,dx = \int\left(\frac{1/2}{x-1} - \frac{1/2}{x+1}\right)dx = \frac{1}{2}\ln\left|\frac{x-1}{x+1}\right| + C$$
>
> Degree of numerator must be less than denominator — use long division first if not.

> [!bc] 6.13 Evaluating Improper Integrals
>
> An **improper integral** has an infinite limit of integration or an integrand with a vertical asymptote.
>
> **Infinite limits:** replace with a limit:
> $$\int_a^\infty f(x)\,dx = \lim_{t \to \infty} \int_a^t f(x)\,dx$$
>
> **Convergence:** the limit is finite. **Divergence:** the limit is $\pm\infty$ or does not exist.
>
> > [!example] Examples
> > $$\int_1^\infty \frac{1}{x^2}\,dx = \lim_{t\to\infty}\left[-\frac{1}{x}\right]_1^t = \lim_{t\to\infty}\left(-\frac{1}{t}+1\right) = 1 \quad \text{(converges)}$$
> >
> > $$\int_1^\infty \frac{1}{x}\,dx = \lim_{t\to\infty}[\ln x]_1^t = \infty \quad \text{(diverges)}$$
> >
> > **$p$-integral rule:** $\int_1^\infty \dfrac{1}{x^p}\,dx$ converges iff $p > 1$.

### 6.14 Selecting Techniques for Antidifferentiation

Decision guide for choosing an integration method:

| Form | Technique |
|---|---|
| $\int [f(g(x))]g'(x)\,dx$ | $u$-substitution |
| $\int \text{polynomial} \cdot e^x / \sin / \cos\,dx$ | Integration by parts (BC) |
| $\int \frac{\text{poly}}{\text{linear factors}}\,dx$ | Partial fractions (BC) |
| $\int \frac{p(x)}{q(x)}$ with $\deg p \geq \deg q$ | Long division first |
| $\int \frac{1}{x^2+a^2}\,dx$ | Completing the square → $\arctan$ |
