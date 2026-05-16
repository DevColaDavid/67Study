---
title: "Unit 10: Infinite Sequences and Series"
unit: 10
bcOnly: true
---

# Unit 10: Infinite Sequences and Series

> [!note] BC Only
> This entire unit appears only on the AP Calculus BC exam.

## Convergence of Series

### 10.1 Defining Convergent and Divergent Infinite Series

An **infinite series** is the sum of infinitely many terms: $\displaystyle\sum_{n=1}^\infty a_n$.

**Partial sums:** $S_n = a_1 + a_2 + \cdots + a_n$

The series **converges** to $S$ if $\lim_{n\to\infty} S_n = S$. Otherwise it **diverges**.

> [!tip] Key Idea
> A series converges if its partial sums approach a finite limit. Convergence depends on the *tail* of the series, not the beginning.

### 10.2 Working with Geometric Series

A **geometric series** has the form $\displaystyle\sum_{n=0}^\infty ar^n = a + ar + ar^2 + \cdots$

$$\text{Converges to } \frac{a}{1-r} \text{ if } |r| < 1$$
$$\text{Diverges if } |r| \geq 1$$

> [!example] Examples
> - $\sum_{n=0}^\infty \left(\dfrac{1}{2}\right)^n = \dfrac{1}{1-1/2} = 2$
> - $\sum_{n=0}^\infty 2^n$ diverges (ratio $r = 2 > 1$)

### 10.3 The $n$th Term Test for Divergence

If $\lim_{n \to \infty} a_n \neq 0$ (or the limit does not exist), then $\displaystyle\sum a_n$ **diverges**.

> [!warning] The $n$th Term Test Cannot Prove Convergence
> If $\lim_{n\to\infty} a_n = 0$, the series **may or may not converge** — the harmonic series $\sum 1/n$ diverges despite $1/n \to 0$.

## Convergence Tests

### 10.4 Integral Test for Convergence

If $f(x)$ is continuous, positive, and decreasing for $x \geq 1$, and $a_n = f(n)$, then:

$$\sum_{n=1}^\infty a_n \text{ and } \int_1^\infty f(x)\,dx \quad \text{both converge or both diverge}$$

> [!example] $p$-Series
> $\displaystyle\sum_{n=1}^\infty \frac{1}{n^p}$ converges if $p > 1$, diverges if $p \leq 1$.
>
> (Proven via the integral test applied to $\int_1^\infty x^{-p}\,dx$.)

### 10.5 Harmonic Series and $p$-Series

The **harmonic series** $\displaystyle\sum_{n=1}^\infty \frac{1}{n}$ diverges ($p = 1$).

| Series | $p$ | Converges? |
|---|---|---|
| $\sum 1/n^{1/2}$ | $1/2$ | No |
| $\sum 1/n$ | $1$ | No (harmonic) |
| $\sum 1/n^2$ | $2$ | Yes |
| $\sum 1/n^3$ | $3$ | Yes |

### 10.6 Comparison Tests for Convergence

**Direct Comparison Test:** For $0 \leq a_n \leq b_n$:
- If $\sum b_n$ converges → $\sum a_n$ converges
- If $\sum a_n$ diverges → $\sum b_n$ diverges

**Limit Comparison Test:** If $\lim_{n\to\infty}\dfrac{a_n}{b_n} = L > 0$ (finite, nonzero), then $\sum a_n$ and $\sum b_n$ both converge or both diverge.

> [!example] Limit Comparison
> Test $\sum \dfrac{1}{n^2+1}$. Compare with $\sum \dfrac{1}{n^2}$ ($p$-series, $p=2$, converges).
>
> $\lim_{n\to\infty}\dfrac{n^2}{n^2+1} = 1 > 0$, so $\sum \dfrac{1}{n^2+1}$ **converges**.

### 10.7 Alternating Series Test for Convergence

An **alternating series** $\displaystyle\sum_{n=1}^\infty (-1)^{n-1} b_n$ (with $b_n > 0$) converges if:
1. $b_n$ is **eventually decreasing** ($b_{n+1} \leq b_n$)
2. $\lim_{n\to\infty} b_n = 0$

> [!example] Alternating Harmonic Series
> $\displaystyle\sum_{n=1}^\infty \frac{(-1)^{n-1}}{n} = 1 - \frac{1}{2} + \frac{1}{3} - \cdots = \ln 2$ (converges).

### 10.8 Ratio Test for Convergence

For $\displaystyle\sum a_n$, compute $L = \lim_{n\to\infty}\left|\dfrac{a_{n+1}}{a_n}\right|$:

| $L$ | Conclusion |
|---|---|
| $L < 1$ | Converges absolutely |
| $L > 1$ | Diverges |
| $L = 1$ | Inconclusive |

> [!tip] Best For
> The Ratio Test works well for series involving factorials, exponentials, or $n$ in an exponent.

> [!example] Example
> $\sum \dfrac{n!}{n^n}$: $\dfrac{a_{n+1}}{a_n} = \dfrac{(n+1)!}{(n+1)^{n+1}} \cdot \dfrac{n^n}{n!} = \left(\dfrac{n}{n+1}\right)^n \to \dfrac{1}{e} < 1$. Converges.

### 10.9 Determining Absolute or Conditional Convergence

- **Absolutely convergent:** $\sum |a_n|$ converges. Absolute convergence implies convergence.
- **Conditionally convergent:** $\sum a_n$ converges but $\sum |a_n|$ diverges.

The alternating harmonic series is **conditionally** convergent. A $p$-series with $p > 1$ is **absolutely** convergent.

### 10.10 Alternating Series Error Bound

For a convergent alternating series, the error in truncating after $n$ terms satisfies:

$$|S - S_n| \leq b_{n+1}$$

The error is bounded by the **absolute value of the first omitted term**.

> [!example] Example
> Approximate $\sum_{n=1}^\infty \dfrac{(-1)^{n-1}}{n}$ with 4 terms. Error $\leq b_5 = \dfrac{1}{5} = 0.2$.

## Power Series and Taylor/Maclaurin Series

### 10.11 Finding Taylor Polynomial Approximations of Functions

The **$n$th-degree Taylor polynomial** for $f$ centered at $x = a$:

$$P_n(x) = \sum_{k=0}^{n} \frac{f^{(k)}(a)}{k!}(x-a)^k$$

$$= f(a) + f'(a)(x-a) + \frac{f''(a)}{2!}(x-a)^2 + \frac{f'''(a)}{3!}(x-a)^3 + \cdots$$

> [!example] Maclaurin Polynomial for $e^x$ (centered at $a=0$)
> $P_n(x) = 1 + x + \dfrac{x^2}{2!} + \dfrac{x^3}{3!} + \cdots + \dfrac{x^n}{n!}$

### 10.12 Lagrange Error Bound

The error in using $P_n(x)$ to approximate $f(x)$:

$$|f(x) - P_n(x)| \leq \frac{M}{(n+1)!}|x-a|^{n+1}$$

where $M$ is the maximum value of $|f^{(n+1)}|$ on the interval between $a$ and $x$.

> [!example] Example
> Approximate $e^{0.1}$ using the 3rd-degree Maclaurin polynomial.
>
> $P_3(0.1) = 1 + 0.1 + \dfrac{0.01}{2} + \dfrac{0.001}{6} \approx 1.1052$
>
> Error bound: $M = e^{0.1} < 2$, so $|E| \leq \dfrac{2}{4!}(0.1)^4 = \dfrac{2}{24}(0.0001) < 0.000009$

### 10.13 Radius and Interval of Convergence of Power Series

A **power series** centered at $a$:

$$\sum_{n=0}^\infty c_n(x-a)^n$$

converges for $x$ values within the **radius of convergence** $R$. Find $R$ using the Ratio Test on $|c_n(x-a)^n|$.

**Interval of convergence:** $(a-R,\, a+R)$, but check endpoints separately.

| Endpoint behavior | Include or exclude |
|---|---|
| Series converges | Include (closed bracket) |
| Series diverges | Exclude (open bracket) |

> [!example] Example
> $\sum_{n=0}^\infty \dfrac{x^n}{n}$: Ratio test gives $|x| < 1$, so $R = 1$.
>
> At $x=1$: harmonic series → diverges. At $x=-1$: alternating harmonic → converges.
>
> Interval of convergence: $[-1, 1)$

### 10.14 Finding Taylor or Maclaurin Series for a Function

**Key Maclaurin series** (memorize these):

$$e^x = \sum_{n=0}^\infty \frac{x^n}{n!} = 1 + x + \frac{x^2}{2!} + \frac{x^3}{3!} + \cdots \quad \text{(all } x\text{)}$$

$$\sin x = \sum_{n=0}^\infty \frac{(-1)^n x^{2n+1}}{(2n+1)!} = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \cdots \quad \text{(all } x\text{)}$$

$$\cos x = \sum_{n=0}^\infty \frac{(-1)^n x^{2n}}{(2n)!} = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \cdots \quad \text{(all } x\text{)}$$

$$\frac{1}{1-x} = \sum_{n=0}^\infty x^n = 1 + x + x^2 + \cdots \quad (|x| < 1)$$

$$\ln(1+x) = \sum_{n=1}^\infty \frac{(-1)^{n-1}x^n}{n} = x - \frac{x^2}{2} + \frac{x^3}{3} - \cdots \quad (-1 < x \leq 1)$$

> [!tip] Build New Series from Known Ones
> Substitute, multiply, differentiate, or integrate known series to get new ones.
>
> Example: $\cos x = (\sin x)'$ — differentiate the $\sin x$ series term-by-term.

### 10.15 Representing Functions as Power Series

**Differentiation and integration of power series** (valid within the radius of convergence):

$$\frac{d}{dx}\sum_{n=0}^\infty c_n x^n = \sum_{n=1}^\infty n c_n x^{n-1}$$

$$\int \sum_{n=0}^\infty c_n x^n\,dx = \sum_{n=0}^\infty \frac{c_n x^{n+1}}{n+1} + C$$

> [!example] Series for $\arctan x$
> $\dfrac{1}{1+x^2} = \dfrac{1}{1-(-x^2)} = \sum_{n=0}^\infty (-x^2)^n = \sum_{n=0}^\infty (-1)^n x^{2n}$
>
> Integrate: $\arctan x = \sum_{n=0}^\infty \dfrac{(-1)^n x^{2n+1}}{2n+1} = x - \dfrac{x^3}{3} + \dfrac{x^5}{5} - \cdots \quad (|x| \leq 1)$
