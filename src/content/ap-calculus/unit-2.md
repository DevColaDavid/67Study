---
title: "Unit 2: Differentiation: Definition and Basic Derivative Rules"
unit: 2
---

# Unit 2: Differentiation: Definition and Basic Derivative Rules

## Average and Instantaneous Rates of Change

### 2.1 Defining Average and Instantaneous Rates of Change at a Point

The **average rate of change** of $f$ over $[a, b]$ is the slope of the secant line:

$$\text{Average rate of change} = \frac{f(b) - f(a)}{b - a}$$

The **instantaneous rate of change** at $x = a$ is the limit of the average rate as the interval shrinks:

$$f'(a) = \lim_{h \to 0} \frac{f(a + h) - f(a)}{h}$$

This is also the slope of the **tangent line** at $(a, f(a))$.

> [!example] Example
> For $f(x) = x^2$, find the instantaneous rate of change at $x = 3$.
>
> $$f'(3) = \lim_{h \to 0} \frac{(3+h)^2 - 9}{h} = \lim_{h \to 0} \frac{6h + h^2}{h} = \lim_{h \to 0}(6 + h) = 6$$

### 2.2 Defining the Derivative of a Function and Using Derivative Notation

The **derivative** of $f$ is itself a function:

$$f'(x) = \lim_{h \to 0} \frac{f(x+h) - f(x)}{h}$$

**Equivalent notations:**

$$f'(x) = \frac{dy}{dx} = \frac{d}{dx}[f(x)] = y'$$

The derivative gives the slope of the tangent line at every point in its domain.

> [!tip] Differentiability Implies Continuity
> If $f'(a)$ exists, then $f$ is continuous at $x = a$. The converse is **not** true — continuity does not guarantee differentiability.

### 2.3 Estimating Derivatives of a Function at a Point

From a graph, estimate $f'(a)$ by drawing or imagining the tangent line at $(a, f(a))$ and estimating its slope.

From a table, use the **symmetric difference quotient** for the best estimate:

$$f'(a) \approx \frac{f(a+h) - f(a-h)}{2h}$$

## Derivative Rules

### 2.4 Connecting Differentiability and Continuity

A function is **not differentiable** at $x = c$ if:
- It is discontinuous at $c$
- It has a **corner** or **cusp** (sharp point)
- It has a **vertical tangent** (slope $\to \pm\infty$)

> [!warning] Common Mistake
> $f(x) = |x|$ is continuous everywhere but **not differentiable** at $x = 0$ due to the corner.

### 2.5 Applying the Power Rule

For $f(x) = x^n$ where $n$ is any real number:

$$\frac{d}{dx}[x^n] = n x^{n-1}$$

| Function | Derivative |
|---|---|
| $x^5$ | $5x^4$ |
| $\sqrt{x} = x^{1/2}$ | $\frac{1}{2}x^{-1/2}$ |
| $x^{-3}$ | $-3x^{-4}$ |
| $7$ (constant) | $0$ |

### 2.6 Derivative Rules: Constant, Sum, Difference, and Constant Multiple

| Rule | Formula |
|---|---|
| Constant | $\dfrac{d}{dx}[c] = 0$ |
| Constant multiple | $\dfrac{d}{dx}[c \cdot f(x)] = c \cdot f'(x)$ |
| Sum | $\dfrac{d}{dx}[f+g] = f'+g'$ |
| Difference | $\dfrac{d}{dx}[f-g] = f'-g'$ |

> [!example] Example
> $\dfrac{d}{dx}[4x^3 - 7x + 2] = 12x^2 - 7$

### 2.7 Derivatives of cos x, sin x, eˣ, and ln x

$$\frac{d}{dx}[\sin x] = \cos x \qquad \frac{d}{dx}[\cos x] = -\sin x$$

$$\frac{d}{dx}[e^x] = e^x \qquad \frac{d}{dx}[\ln x] = \frac{1}{x}$$

> [!tip] Pattern
> Co-functions (cos, cot, csc) gain a **negative sign** when differentiated. $e^x$ is its own derivative.

### 2.8 The Product Rule

If $h(x) = f(x) \cdot g(x)$:

$$h'(x) = f'(x) \cdot g(x) + f(x) \cdot g'(x)$$

> [!example] Example
> $h(x) = x^2 \sin x \implies h'(x) = 2x \sin x + x^2 \cos x$

### 2.9 The Quotient Rule

If $h(x) = \dfrac{f(x)}{g(x)}$:

$$h'(x) = \frac{f'(x) \cdot g(x) - f(x) \cdot g'(x)}{[g(x)]^2}$$

"Low dee-high minus high dee-low, over low squared."

> [!example] Example
> $h(x) = \dfrac{x^2}{x+1} \implies h'(x) = \dfrac{2x(x+1) - x^2}{(x+1)^2} = \dfrac{x^2+2x}{(x+1)^2}$

> [!warning] Common Mistake
> Order matters — $f'g - fg'$, never $fg' - f'g$ in the numerator.

### 2.10 Finding the Derivatives of Tangent, Cotangent, Secant, and Cosecant Functions

$$\frac{d}{dx}[\tan x] = \sec^2 x \qquad \frac{d}{dx}[\cot x] = -\csc^2 x$$

$$\frac{d}{dx}[\sec x] = \sec x \tan x \qquad \frac{d}{dx}[\csc x] = -\csc x \cot x$$

> [!note] Tangent Line Equation
> The tangent line to $f$ at $x = a$ is:
> $$y - f(a) = f'(a)(x - a)$$
