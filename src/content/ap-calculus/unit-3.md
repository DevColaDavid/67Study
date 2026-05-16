---
title: "Unit 3: Differentiation: Composite, Implicit, and Inverse Functions"
unit: 3
---

# Unit 3: Differentiation: Composite, Implicit, and Inverse Functions

## The Chain Rule

### 3.1 The Chain Rule

The **chain rule** differentiates composite functions $h(x) = f(g(x))$:

$$h'(x) = f'(g(x)) \cdot g'(x)$$

"Derivative of the outside (leave inside alone), times derivative of the inside."

> [!example] Examples
> - $h(x) = \sin(x^2) \implies h'(x) = \cos(x^2) \cdot 2x$
> - $h(x) = e^{3x} \implies h'(x) = e^{3x} \cdot 3$
> - $h(x) = (4x^3 - 1)^5 \implies h'(x) = 5(4x^3-1)^4 \cdot 12x^2$

**Extended chain rule** (multiple compositions): work from the outermost function inward.

$$\frac{d}{dx}[f(g(h(x)))] = f'(g(h(x))) \cdot g'(h(x)) \cdot h'(x)$$

> [!tip] Identify the Layers
> For complex compositions, label the outer and inner functions explicitly before differentiating.

## Implicit Differentiation

### 3.2 Implicit Differentiation

When $y$ is defined implicitly (not solved for), differentiate both sides with respect to $x$, treating $y$ as a function of $x$ and applying the chain rule to any $y$-term.

$$\frac{d}{dx}[y^n] = n y^{n-1} \cdot \frac{dy}{dx}$$

Then solve for $\dfrac{dy}{dx}$.

> [!example] Example
> Find $\dfrac{dy}{dx}$ for $x^2 + y^2 = 25$.
>
> Differentiate: $2x + 2y\dfrac{dy}{dx} = 0$
>
> Solve: $\dfrac{dy}{dx} = -\dfrac{x}{y}$

> [!example] Product and Chain Together
> $x^2 y + y^3 = 7$
>
> $2xy + x^2\dfrac{dy}{dx} + 3y^2\dfrac{dy}{dx} = 0$
>
> $\dfrac{dy}{dx}(x^2 + 3y^2) = -2xy$
>
> $\dfrac{dy}{dx} = \dfrac{-2xy}{x^2 + 3y^2}$

## Inverse Functions

### 3.3 Differentiating Inverse Functions

If $g$ is the inverse of $f$ (i.e., $g = f^{-1}$), then:

$$g'(x) = \frac{1}{f'(g(x))}$$

Equivalently: if $(a, b)$ is on $f$, then $(b, a)$ is on $f^{-1}$, and:

$$(f^{-1})'(b) = \frac{1}{f'(a)}$$

> [!example] Example
> If $f(3) = 5$ and $f'(3) = 4$, find $(f^{-1})'(5)$.
>
> $(f^{-1})'(5) = \dfrac{1}{f'(3)} = \dfrac{1}{4}$

> [!bc] 3.4 Differentiating Inverse Trigonometric Functions
>
> $$\frac{d}{dx}[\arcsin x] = \frac{1}{\sqrt{1-x^2}} \qquad \frac{d}{dx}[\arccos x] = -\frac{1}{\sqrt{1-x^2}}$$
>
> $$\frac{d}{dx}[\arctan x] = \frac{1}{1+x^2} \qquad \frac{d}{dx}[\text{arccot}\, x] = -\frac{1}{1+x^2}$$
>
> $$\frac{d}{dx}[\text{arcsec}\, x] = \frac{1}{|x|\sqrt{x^2-1}} \qquad \frac{d}{dx}[\text{arccsc}\, x] = -\frac{1}{|x|\sqrt{x^2-1}}$$
>
> The most tested: $\arcsin$, $\arccos$, $\arctan$.
>
> > [!example] Example
> > $\dfrac{d}{dx}[\arctan(3x)] = \dfrac{1}{1+(3x)^2} \cdot 3 = \dfrac{3}{1+9x^2}$

## Higher-Order Derivatives and Selecting Procedures

### 3.5 Selecting Procedures for Calculating Derivatives

The strategy for differentiating any function:

1. Identify the outermost operation (sum, product, quotient, composition)
2. Apply the corresponding rule
3. Work inward layer by layer using the chain rule
4. Simplify

| Structure | Rule to apply first |
|---|---|
| $f \pm g$ | Sum/difference rule |
| $f \cdot g$ | Product rule |
| $f / g$ | Quotient rule |
| $f(g(x))$ | Chain rule |
| Implicit equation | Implicit differentiation |

### 3.6 Calculating Higher-Order Derivatives

The **second derivative** $f''(x) = \dfrac{d}{dx}[f'(x)]$ measures the rate of change of the slope.

$$f''(x) = \frac{d^2 y}{dx^2} \qquad f'''(x) = \frac{d^3 y}{dx^3}$$

> [!note] Physical Interpretation
> - $f'(t)$ = velocity (rate of change of position)
> - $f''(t)$ = acceleration (rate of change of velocity)

> [!example] Example
> $f(x) = x^4 - 3x^2$
>
> $f'(x) = 4x^3 - 6x$
>
> $f''(x) = 12x^2 - 6$
>
> $f'''(x) = 24x$
