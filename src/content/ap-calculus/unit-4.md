---
title: "Unit 4: Contextual Applications of Differentiation"
unit: 4
---

# Unit 4: Contextual Applications of Differentiation

## Rates of Change in Context

### 4.1 Interpreting the Meaning of the Derivative in Context

The derivative $f'(a)$ is the **instantaneous rate of change** of $f$ at $x = a$. Always interpret with units:

$$\text{units of } f'(x) = \frac{\text{units of } f(x)}{\text{units of } x}$$

> [!example] Interpretation
> If $P(t)$ is population (people) at time $t$ (years), then $P'(5) = 200$ means the population is growing at a rate of 200 people per year at $t = 5$.

### 4.2 Straight-Line Motion: Connecting Position, Velocity, and Acceleration

For a particle with position $s(t)$:

| Quantity | Definition | Sign Meaning |
|---|---|---|
| Position $s(t)$ | Location | — |
| Velocity $v(t) = s'(t)$ | Rate of change of position | $+$ = moving right/up, $-$ = moving left/down |
| Acceleration $a(t) = v'(t) = s''(t)$ | Rate of change of velocity | $+$ = speeding up in positive direction |
| Speed $|v(t)|$ | Magnitude of velocity | Always $\geq 0$ |

> [!tip] Speeding Up vs. Slowing Down
> A particle **speeds up** when $v(t)$ and $a(t)$ have the **same sign**. It **slows down** when they have **opposite signs**.

> [!example] Example
> $s(t) = t^3 - 6t^2 + 9t$. Find when the particle is moving left.
>
> $v(t) = 3t^2 - 12t + 9 = 3(t-1)(t-3)$
>
> $v(t) < 0$ when $1 < t < 3$. The particle moves left on $(1, 3)$.

### 4.3 Rates of Change in Applied Contexts Other Than Motion

The derivative applies to any quantity changing over time:
- Biology: growth rates of populations, bacteria
- Economics: marginal cost $C'(x)$, marginal revenue $R'(x)$
- Chemistry: reaction rates
- Physics: current $I = dQ/dt$ (rate of charge flow)

Always include units in your interpretation.

## Related Rates

### 4.4 Introduction to Related Rates

When two or more quantities are related by an equation, their rates of change (derivatives with respect to time) are also related. Differentiate the equation implicitly with respect to $t$.

**General approach:**
1. Draw a diagram and label variables
2. Write an equation relating the variables
3. Differentiate both sides with respect to $t$
4. Substitute known values and solve for the unknown rate

### 4.5 Solving Related Rates Problems

> [!example] Ladder Problem
> A 10-foot ladder leans against a wall. The base slides away at 2 ft/s. How fast is the top sliding down when the base is 6 ft from the wall?
>
> Equation: $x^2 + y^2 = 100$
>
> Differentiate: $2x\dfrac{dx}{dt} + 2y\dfrac{dy}{dt} = 0$
>
> When $x = 6$: $y = \sqrt{100-36} = 8$
>
> $2(6)(2) + 2(8)\dfrac{dy}{dt} = 0 \implies \dfrac{dy}{dt} = -\dfrac{3}{2}$ ft/s
>
> The top slides down at $\tfrac{3}{2}$ ft/s.

> [!example] Expanding Circle
> The radius of a circle grows at 3 cm/s. How fast is the area growing when $r = 5$ cm?
>
> $A = \pi r^2 \implies \dfrac{dA}{dt} = 2\pi r \dfrac{dr}{dt} = 2\pi(5)(3) = 30\pi$ cm²/s

> [!warning] Substitute After Differentiating
> Never substitute specific values of variables before differentiating. Differentiate first, then substitute.

## Linear Approximation and L'Hôpital's Rule

### 4.6 Approximating Values of a Function Using Local Linearity and Linearization

Near $x = a$, the tangent line closely approximates $f(x)$:

$$L(x) = f(a) + f'(a)(x - a)$$

This is the **linearization** of $f$ at $a$. It gives accurate approximations for $x$ close to $a$.

> [!example] Approximating $\sqrt{4.02}$
> Use $f(x) = \sqrt{x}$, $a = 4$.
>
> $f(4) = 2$, $f'(x) = \frac{1}{2\sqrt{x}}$, $f'(4) = \frac{1}{4}$
>
> $L(x) = 2 + \frac{1}{4}(x - 4)$
>
> $L(4.02) = 2 + \frac{1}{4}(0.02) = 2.005$

### 4.7 Using L'Hôpital's Rule for Determining Limits of Indeterminate Forms

When a limit produces $\dfrac{0}{0}$ or $\dfrac{\infty}{\infty}$, apply **L'Hôpital's Rule**:

$$\lim_{x \to c} \frac{f(x)}{g(x)} = \lim_{x \to c} \frac{f'(x)}{g'(x)}$$

provided the new limit exists and $g'(x) \neq 0$ near $c$.

> [!example] Examples
> $$\lim_{x \to 0} \frac{\sin x}{x} = \lim_{x \to 0} \frac{\cos x}{1} = 1$$
>
> $$\lim_{x \to \infty} \frac{x^2}{e^x} = \lim_{x \to \infty} \frac{2x}{e^x} = \lim_{x \to \infty} \frac{2}{e^x} = 0$$

> [!warning] Only for Indeterminate Forms
> L'Hôpital's Rule only applies to $\frac{0}{0}$ or $\frac{\infty}{\infty}$. Do not apply it to other limit forms. Also, you differentiate numerator and denominator **separately** — this is not the quotient rule.
