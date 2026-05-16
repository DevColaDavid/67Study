---
title: "Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions"
unit: 9
bcOnly: true
---

# Unit 9: Parametric Equations, Polar Coordinates, and Vector-Valued Functions

> [!note] BC Only
> This entire unit appears only on the AP Calculus BC exam.

## Parametric Equations

### 9.1 Defining and Differentiating Parametric Equations

A **parametric curve** defines $x$ and $y$ as separate functions of a parameter $t$:

$$x = x(t), \qquad y = y(t)$$

**First derivative** (slope of tangent line):

$$\frac{dy}{dx} = \frac{dy/dt}{dx/dt}$$

provided $dx/dt \neq 0$.

> [!example] Example
> $x = t^2$, $y = t^3 - 3t$. Find $\dfrac{dy}{dx}$ at $t = 1$.
>
> $\dfrac{dx}{dt} = 2t$, $\dfrac{dy}{dt} = 3t^2 - 3$
>
> $\dfrac{dy}{dx} = \dfrac{3t^2-3}{2t}$. At $t=1$: $\dfrac{0}{2} = 0$ (horizontal tangent).

### 9.2 Second Derivatives of Parametric Equations

$$\frac{d^2y}{dx^2} = \frac{d}{dx}\!\left(\frac{dy}{dx}\right) = \frac{\dfrac{d}{dt}\!\left(\dfrac{dy}{dx}\right)}{\dfrac{dx}{dt}}$$

> [!example] Example (continued from 9.1)
> $\dfrac{dy}{dx} = \dfrac{3t^2-3}{2t}$. Differentiate with respect to $t$:
>
> $\dfrac{d}{dt}\!\left(\dfrac{dy}{dx}\right) = \dfrac{6t \cdot 2t - (3t^2-3) \cdot 2}{4t^2} = \dfrac{6t^2+6}{4t^2}$
>
> $\dfrac{d^2y}{dx^2} = \dfrac{(6t^2+6)/(4t^2)}{2t} = \dfrac{6t^2+6}{8t^3} = \dfrac{3(t^2+1)}{4t^3}$

### 9.3 Finding Arc Lengths of Curves Given by Parametric Equations

For a parametric curve from $t = a$ to $t = b$:

$$L = \int_a^b \sqrt{\left(\frac{dx}{dt}\right)^2 + \left(\frac{dy}{dt}\right)^2}\,dt$$

> [!example] Circumference of Circle
> $x = r\cos t$, $y = r\sin t$, $t \in [0, 2\pi]$:
>
> $L = \int_0^{2\pi}\sqrt{r^2\sin^2 t + r^2\cos^2 t}\,dt = \int_0^{2\pi} r\,dt = 2\pi r$ ✓

## Vector-Valued Functions

### 9.4 Defining and Differentiating Vector-Valued Functions

A **vector-valued function** in 2D: $\vec{r}(t) = \langle x(t),\, y(t) \rangle$

**Derivative (velocity vector):**

$$\vec{r}'(t) = \langle x'(t),\, y'(t) \rangle$$

The magnitude $|\vec{r}'(t)| = \sqrt{[x'(t)]^2 + [y'(t)]^2}$ is the **speed**.

The direction of $\vec{r}'(t)$ gives the direction of motion.

### 9.5 Integrating Vector-Valued Functions

Integrate component-wise:

$$\int \vec{r}(t)\,dt = \left\langle \int x(t)\,dt,\; \int y(t)\,dt \right\rangle + \vec{C}$$

Use initial conditions to find the constant vector $\vec{C}$.

### 9.6 Solving Motion Problems Using Parametric and Vector-Valued Functions

| Quantity | Formula |
|---|---|
| Position | $\vec{r}(t) = \langle x(t), y(t) \rangle$ |
| Velocity | $\vec{v}(t) = \vec{r}'(t) = \langle x'(t), y'(t) \rangle$ |
| Acceleration | $\vec{a}(t) = \vec{v}'(t) = \langle x''(t), y''(t) \rangle$ |
| Speed | $|\vec{v}(t)| = \sqrt{[x'(t)]^2+[y'(t)]^2}$ |
| Distance traveled | $\int_{t_1}^{t_2}|\vec{v}(t)|\,dt$ |

> [!example] Finding Position from Acceleration
> $\vec{a}(t) = \langle 2, -32 \rangle$, $\vec{v}(0) = \langle 5, 10 \rangle$, $\vec{r}(0) = \langle 0, 0 \rangle$.
>
> $\vec{v}(t) = \langle 2t+5,\, -32t+10 \rangle$
>
> $\vec{r}(t) = \langle t^2+5t,\, -16t^2+10t \rangle$

## Polar Coordinates

### 9.7 Defining Polar Coordinates and Differentiating in Polar Form

**Polar coordinates:** a point $(r, \theta)$ where $r$ is the distance from the origin and $\theta$ is the angle from the positive $x$-axis.

**Conversions:**

$$x = r\cos\theta, \quad y = r\sin\theta, \quad r^2 = x^2+y^2, \quad \theta = \arctan\!\left(\frac{y}{x}\right)$$

**Slope of tangent to polar curve** $r = f(\theta)$:

$$\frac{dy}{dx} = \frac{dy/d\theta}{dx/d\theta} = \frac{r'\sin\theta + r\cos\theta}{r'\cos\theta - r\sin\theta}$$

where $r' = dr/d\theta$.

> [!example] Common Polar Curves
> - Circle: $r = a$ (centered at origin)
> - Rose: $r = a\cos(n\theta)$ or $r = a\sin(n\theta)$ — has $n$ petals if $n$ is odd, $2n$ if $n$ is even
> - Cardioid: $r = a(1 + \cos\theta)$
> - Limaçon: $r = a + b\cos\theta$
> - Lemniscate: $r^2 = a^2\cos(2\theta)$

### 9.8 Find the Area of a Polar Region or the Area Bounded by a Single Polar Curve

Area of polar region swept by $r = f(\theta)$ from $\theta = \alpha$ to $\theta = \beta$:

$$A = \frac{1}{2}\int_\alpha^\beta [f(\theta)]^2\,d\theta = \frac{1}{2}\int_\alpha^\beta r^2\,d\theta$$

> [!example] Area of One Petal
> $r = \cos(2\theta)$: petals occur where $r \geq 0$, e.g., $-\pi/4 \leq \theta \leq \pi/4$ for the right petal.
>
> $$A = \frac{1}{2}\int_{-\pi/4}^{\pi/4}\cos^2(2\theta)\,d\theta = \frac{\pi}{8}$$

### 9.9 Finding the Area of the Region Bounded by Two Polar Curves

Area between outer curve $r = f(\theta)$ and inner curve $r = g(\theta)$ where $f \geq g$:

$$A = \frac{1}{2}\int_\alpha^\beta \left([f(\theta)]^2 - [g(\theta)]^2\right)d\theta$$

Find intersection points by setting $f(\theta) = g(\theta)$.

> [!example] Example
> Area inside $r = 3\sin\theta$ and outside $r = 1 + \sin\theta$:
>
> Intersect at $3\sin\theta = 1+\sin\theta \implies \sin\theta = 1/2 \implies \theta = \pi/6, 5\pi/6$
>
> $$A = \frac{1}{2}\int_{\pi/6}^{5\pi/6}\left[(3\sin\theta)^2 - (1+\sin\theta)^2\right]d\theta$$
