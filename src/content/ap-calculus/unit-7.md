---
title: "Unit 7: Differential Equations"
unit: 7
---

# Unit 7: Differential Equations

## Introduction to Differential Equations

### 7.1 Modeling Situations with Differential Equations

A **differential equation (DE)** is an equation involving a function and its derivatives. It models how a quantity changes over time or space.

**General form:** $\dfrac{dy}{dx} = f(x, y)$

Common models:
- **Exponential growth/decay:** $\dfrac{dy}{dt} = ky$ (population, radioactive decay)
- **Newton's Law of Cooling:** $\dfrac{dT}{dt} = k(T - T_{\text{ambient}})$
- **Logistic growth:** $\dfrac{dP}{dt} = kP\!\left(1 - \dfrac{P}{M}\right)$ (BC only)

### 7.2 Verifying Solutions for Differential Equations

To verify that $y = f(x)$ is a solution to a DE: differentiate $y$, substitute into the DE, and confirm both sides are equal.

> [!example] Example
> Verify $y = Ce^{2x}$ solves $\dfrac{dy}{dx} = 2y$.
>
> $\dfrac{dy}{dx} = 2Ce^{2x}$ and $2y = 2Ce^{2x}$. ✓

## Slope Fields

### 7.3 Sketching Slope Fields

A **slope field** (or direction field) is a graphical representation of a differential equation. At each point $(x, y)$, draw a short segment with slope $= f(x, y)$.

To sketch: evaluate $\dfrac{dy}{dx}$ at several $(x,y)$ points and draw segments accordingly.

> [!tip] Reading Slope Fields
> Solution curves follow the slope field like streams following terrain. If $dy/dx$ depends only on $y$, all segments on the same horizontal line have the same slope.

### 7.4 Reasoning Using Slope Fields

From a slope field, you can:
- Sketch particular solution curves through given initial conditions
- Identify equilibrium solutions (where $dy/dx = 0$ for all $x$)
- Determine long-run behavior of solutions

> [!example] Equilibrium Solutions
> For $\dfrac{dy}{dx} = y(y-2)$: equilibria at $y = 0$ and $y = 2$. Analyze stability by checking sign of $dy/dx$ near each equilibrium.

## Solving Differential Equations

> [!bc] 7.5 Approximating Solutions Using Euler's Method
>
> **Euler's Method** numerically approximates a solution to $\dfrac{dy}{dx} = f(x,y)$ with initial condition $y(x_0) = y_0$ using step size $h$:
>
> $$x_{n+1} = x_n + h$$
> $$y_{n+1} = y_n + h \cdot f(x_n, y_n)$$
>
> > [!example] Example
> > Approximate $y(1.2)$ for $\dfrac{dy}{dx} = x + y$, $y(1) = 2$, step size $h = 0.1$.
> >
> > Step 1: $x_1 = 1.1$, $y_1 = 2 + 0.1(1+2) = 2.3$
> >
> > Step 2: $x_2 = 1.2$, $y_2 = 2.3 + 0.1(1.1+2.3) = 2.64$
> >
> > Smaller step size $h$ gives more accurate approximation.
>
> > [!warning] Accuracy
> > Euler's Method accumulates error with each step. It is an approximation, not an exact solution.

### 7.6 Finding General Solutions Using Separation of Variables

**Separable DEs** can be written as $g(y)\,dy = f(x)\,dx$. Integrate both sides.

$$\frac{dy}{dx} = \frac{f(x)}{g(y)} \implies \int g(y)\,dy = \int f(x)\,dx$$

> [!example] Example
> Solve $\dfrac{dy}{dx} = xy$.
>
> $\dfrac{1}{y}\,dy = x\,dx$
>
> $\int \dfrac{1}{y}\,dy = \int x\,dx$
>
> $\ln|y| = \dfrac{x^2}{2} + C$
>
> $|y| = e^{x^2/2 + C} = Ae^{x^2/2}$ (where $A = e^C$)
>
> General solution: $y = Ce^{x^2/2}$ (absorbing the $\pm$ into $C$)

### 7.7 Finding Particular Solutions Using Initial Conditions and Separation of Variables

Use the initial condition $y(x_0) = y_0$ to solve for the constant $C$ after separating variables.

> [!example] Example
> Solve $\dfrac{dy}{dx} = -2y$, $y(0) = 5$.
>
> Separate: $\dfrac{dy}{y} = -2\,dx \implies \ln|y| = -2x + C \implies y = Ce^{-2x}$
>
> Initial condition: $5 = Ce^0 = C$
>
> Particular solution: $y = 5e^{-2x}$

### 7.8 Exponential Models with Differential Equations

**Exponential growth/decay equation:** $\dfrac{dy}{dt} = ky$ has the solution:

$$y(t) = y_0 e^{kt}$$

- $k > 0$: exponential **growth**
- $k < 0$: exponential **decay**

**Half-life:** time for the quantity to halve. Set $y_0/2 = y_0 e^{kt}$, solve for $t$:

$$t_{1/2} = -\frac{\ln 2}{k}$$

> [!example] Radioactive Decay
> A substance decays at 3% per year. How long until half remains?
>
> $k = -0.03$. $t_{1/2} = \dfrac{\ln 2}{0.03} \approx 23.1$ years.

> [!bc] 7.9 Logistic Models with Differential Equations
>
> The **logistic model** accounts for a carrying capacity $M$ (maximum sustainable population):
>
> $$\frac{dP}{dt} = kP\!\left(1 - \frac{P}{M}\right)$$
>
> **Solution:**
> $$P(t) = \frac{M}{1 + Ae^{-kt}}, \quad A = \frac{M - P_0}{P_0}$$
>
> **Key properties:**
> - Equilibria at $P = 0$ (unstable) and $P = M$ (stable)
> - Fastest growth at $P = M/2$ (inflection point of the $P$ vs. $t$ curve)
> - As $t \to \infty$: $P \to M$
>
> > [!example] Identifying $P = M/2$ as Fastest Growth
> > The inflection point of the logistic curve occurs where $\dfrac{d^2P}{dt^2} = 0$, which is at $P = M/2$. At this point $dP/dt$ is maximized.
