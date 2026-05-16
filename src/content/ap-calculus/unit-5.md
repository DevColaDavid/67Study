---
title: "Unit 5: Analytical Applications of Differentiation"
unit: 5
---

# Unit 5: Analytical Applications of Differentiation

## Key Theorems

### 5.1 Using the Mean Value Theorem

**Mean Value Theorem (MVT):** If $f$ is continuous on $[a, b]$ and differentiable on $(a, b)$, then there exists at least one $c \in (a, b)$ such that:

$$f'(c) = \frac{f(b) - f(a)}{b - a}$$

The instantaneous rate of change equals the average rate of change at some interior point.

> [!tip] Geometric Meaning
> There is at least one point where the tangent line is parallel to the secant line connecting $(a, f(a))$ and $(b, f(b))$.

**Rolle's Theorem** (special case): If additionally $f(a) = f(b)$, then $\exists\, c$ with $f'(c) = 0$.

## Extreme Values

### 5.2 Extreme Value Theorem, Global Versus Local Extrema, and Critical Points

**Extreme Value Theorem (EVT):** If $f$ is continuous on $[a, b]$, then $f$ attains both an absolute maximum and an absolute minimum on $[a, b]$.

**Critical points:** $x = c$ is a critical point if $f'(c) = 0$ or $f'(c)$ does not exist.

> [!note] Key Distinction
> - **Local (relative) extremum**: $f(c)$ is the largest/smallest value in some open interval around $c$
> - **Global (absolute) extremum**: $f(c)$ is the largest/smallest value on the entire domain

All local extrema occur at critical points, but not all critical points are local extrema.

### 5.3 Determining Intervals on Which a Function Is Increasing or Decreasing

- $f'(x) > 0$ on an interval $\implies$ $f$ is **increasing** on that interval
- $f'(x) < 0$ on an interval $\implies$ $f$ is **decreasing** on that interval
- $f'(x) = 0$ at isolated points $\implies$ possible local extremum

**Procedure:** Find critical points, build a sign chart for $f'(x)$ on each interval.

> [!example] Example
> $f(x) = x^3 - 3x$. Find where $f$ increases/decreases.
>
> $f'(x) = 3x^2 - 3 = 3(x-1)(x+1)$. Critical points: $x = \pm 1$.
>
> | Interval | Sign of $f'$ | Behavior |
> |---|---|---|
> | $x < -1$ | $+$ | Increasing |
> | $-1 < x < 1$ | $-$ | Decreasing |
> | $x > 1$ | $+$ | Increasing |

### 5.4 Using the First Derivative Test to Determine Relative (Local) Extrema

At a critical point $x = c$:
- $f'$ changes **$+$ to $-$** $\implies$ local **maximum**
- $f'$ changes **$-$ to $+$** $\implies$ local **minimum**
- $f'$ does not change sign $\implies$ neither (e.g., inflection point with horizontal tangent)

### 5.5 Using the Candidates Test to Determine Absolute (Global) Extrema

On a **closed interval** $[a, b]$:
1. Find all critical points of $f$ in $(a, b)$
2. Evaluate $f$ at each critical point and at the endpoints $a$ and $b$
3. The largest value is the absolute maximum; the smallest is the absolute minimum

> [!tip] Closed Interval Method
> This works only on closed intervals. On open intervals, absolute extrema may not exist.

## Concavity and Inflection Points

### 5.6 Determining Concavity of Functions over Their Domains

- $f''(x) > 0$ on an interval $\implies$ $f$ is **concave up** (curves upward, like a bowl)
- $f''(x) < 0$ on an interval $\implies$ $f$ is **concave down** (curves downward, like a hill)

> [!note] Visual Interpretation
> Concave up: tangent lines lie **below** the graph. Concave down: tangent lines lie **above** the graph.

### 5.7 Using the Second Derivative Test to Determine Extrema

At a critical point $c$ where $f'(c) = 0$:
- $f''(c) > 0 \implies$ local **minimum** (concave up at $c$)
- $f''(c) < 0 \implies$ local **maximum** (concave down at $c$)
- $f''(c) = 0 \implies$ inconclusive (use First Derivative Test instead)

### 5.8 Sketching Graphs of Functions and Their Derivatives

To sketch $f$ from $f'$:
- Where $f' > 0$: $f$ increases
- Where $f' < 0$: $f$ decreases
- Where $f' = 0$: possible extremum
- Where $f'$ increases: $f$ concave up
- Where $f'$ decreases: $f$ concave down

To sketch $f'$ from $f$:
- Extrema of $f$ → zeros of $f'$
- Increasing $f$ → positive $f'$
- Decreasing $f$ → negative $f'$

### 5.9 Connecting a Function, Its First Derivative, and Its Second Derivative

**Inflection point:** where $f''$ changes sign (concavity changes). Must verify sign change, not just $f''(c) = 0$.

| Property of $f$ | Corresponding derivative fact |
|---|---|
| Increasing | $f' > 0$ |
| Decreasing | $f' < 0$ |
| Local max | $f'$ changes $+ \to -$ |
| Local min | $f'$ changes $- \to +$ |
| Concave up | $f'' > 0$ |
| Concave down | $f'' < 0$ |
| Inflection point | $f''$ changes sign |

## Optimization

### 5.10 Introduction to Optimization Problems

Optimization finds the maximum or minimum value of a quantity subject to constraints. Steps:

1. Identify the quantity to optimize (write the **objective function**)
2. Identify the constraint; use it to reduce to one variable
3. Determine the domain
4. Find critical points; use the Candidates Test or First/Second Derivative Test
5. Verify the answer makes physical sense

### 5.11 Solving Optimization Problems

> [!example] Classic Rectangle Problem
> A farmer has 400 m of fence to enclose a rectangular field. Maximize the area.
>
> Constraint: $2l + 2w = 400 \implies l = 200 - w$
>
> Objective: $A = lw = (200-w)w = 200w - w^2$
>
> $A' = 200 - 2w = 0 \implies w = 100$, $l = 100$
>
> Maximum area: $100 \times 100 = 10{,}000$ m² (a square)

> [!example] Box Volume
> An open box is made from a 12×12 cm sheet by cutting equal squares of side $x$ from each corner. Maximize volume.
>
> $V(x) = x(12-2x)^2$, domain $0 < x < 6$
>
> $V'(x) = (12-2x)^2 + x \cdot 2(12-2x)(-2) = (12-2x)(12-6x)$
>
> $V' = 0$ at $x = 6$ (endpoint) or $x = 2$. Maximum at $x = 2$.

### 5.12 Exploring Behaviors of Implicit Relations

For implicitly defined curves, use implicit differentiation to find:
- Slope of tangent line at a point
- Where horizontal tangents occur ($dy/dx = 0$)
- Where vertical tangents occur ($dx/dy = 0$, i.e., denominator = 0)

> [!example] Example
> $x^2 + xy + y^2 = 7$. Find horizontal tangents.
>
> Differentiate: $2x + y + x\dfrac{dy}{dx} + 2y\dfrac{dy}{dx} = 0$
>
> $\dfrac{dy}{dx} = \dfrac{-(2x+y)}{x+2y}$
>
> Horizontal tangent when $2x + y = 0 \implies y = -2x$. Substitute back: $x^2 - 2x^2 + 4x^2 = 7 \implies x = \pm\sqrt{\tfrac{7}{3}}$.
