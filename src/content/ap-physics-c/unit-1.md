---
title: "Unit 1: Kinematics"
unit: 1
---

# Unit 1 — Kinematics

---

## Fundamental Quantities

| Quantity | Symbol | SI Unit | Type |
|---|---|---|---|
| Position | $x$, $\vec{r}$ | m | Vector |
| Displacement | $\Delta x$, $\Delta\vec{r}$ | m | Vector |
| Velocity | $v$, $\vec{v}$ | m/s | Vector |
| Speed | $|v|$ | m/s | Scalar |
| Acceleration | $a$, $\vec{a}$ | m/s² | Vector |
| Time | $t$ | s | Scalar |

**Displacement** is change in position — not total distance traveled.

$$\Delta x = x_f - x_i$$

---

## Calculus Definitions (Core of AP Physics C)

The calculus relationships between position, velocity, and acceleration are the foundation of everything in this course.

### Velocity from Position

$$v(t) = \frac{dx}{dt}$$

Velocity is the **derivative** of position with respect to time. Instantaneous velocity at any moment is the slope of the $x$-vs-$t$ graph.

### Acceleration from Velocity

$$a(t) = \frac{dv}{dt} = \frac{d^2x}{dt^2}$$

Acceleration is the **derivative** of velocity — equivalently the second derivative of position.

### Going Backwards — Integration

$$x(t) = x_0 + \int_{t_0}^{t} v(t')\,dt'$$

$$v(t) = v_0 + \int_{t_0}^{t} a(t')\,dt'$$

Position is found by integrating velocity; velocity is found by integrating acceleration. The **constant of integration** is the initial value ($x_0$ or $v_0$).

> [!tip] The Big Picture
> $a(t) \xrightarrow{\int} v(t) \xrightarrow{\int} x(t)$ and $x(t) \xrightarrow{d/dt} v(t) \xrightarrow{d/dt} a(t)$
>
> If you know any one of these functions, you can find the others.

---

## Kinematics in One Dimension

### Constant Acceleration — The Five Equations

When $a$ = constant, the integrals evaluate to clean algebraic equations:

| Equation | Missing Variable |
|---|---|
| $v = v_0 + at$ | $\Delta x$ |
| $\Delta x = v_0 t + \frac{1}{2}at^2$ | $v$ |
| $v^2 = v_0^2 + 2a\Delta x$ | $t$ |
| $\Delta x = \frac{v_0 + v}{2}\cdot t$ | $a$ |
| $\Delta x = vt - \frac{1}{2}at^2$ | $v_0$ |

> [!warning] When NOT to Use These
> These equations only apply when acceleration is **constant**. If $a = a(t)$ (a function of time), you must integrate.

### Deriving the Kinematic Equations from Calculus

Starting from $a = $ const:

$$v(t) = \int a\,dt = at + C_1 = v_0 + at$$

$$x(t) = \int v\,dt = \int(v_0 + at)\,dt = v_0 t + \frac{1}{2}at^2 + C_2 = x_0 + v_0 t + \frac{1}{2}at^2$$

### Non-Constant Acceleration

If $a(t)$ is given as a function, integrate to find $v(t)$, then integrate again to find $x(t)$.

> [!example] Example: Non-Constant Acceleration
> A particle starts from rest at $x = 0$. Its acceleration is $a(t) = 6t - 2$ m/s².
>
> **Find $v(t)$:**
> $$v(t) = \int (6t - 2)\,dt = 3t^2 - 2t + C_1$$
> At $t = 0$, $v = 0$ → $C_1 = 0$. So $v(t) = 3t^2 - 2t$.
>
> **Find $x(t)$:**
> $$x(t) = \int (3t^2 - 2t)\,dt = t^3 - t^2 + C_2$$
> At $t = 0$, $x = 0$ → $C_2 = 0$. So $x(t) = t^3 - t^2$.

---

## Free Fall

Near Earth's surface, all objects accelerate downward at:

$$g = 9.8 \text{ m/s}^2 \approx 10 \text{ m/s}^2$$

(AP exam often allows $g = 10$ m/s²)

Define **up as positive** (convention):
- $a = -g = -9.8$ m/s²
- At maximum height: $v = 0$, but $a = -g$ (still accelerating downward)
- Time up = Time down (symmetric launch and landing at same height)

> [!warning] Common Mistake
> At the peak of a projectile's trajectory, $v = 0$ but acceleration is **not zero** — it's still $-9.8$ m/s². The object is still in free fall.

---

## Kinematics in Two Dimensions

### Vectors

A vector has both **magnitude** and **direction**.

$$\vec{A} = A_x\hat{i} + A_y\hat{j}$$

$$|\vec{A}| = \sqrt{A_x^2 + A_y^2}, \quad \theta = \arctan\!\left(\frac{A_y}{A_x}\right)$$

Vector addition: add components.
$$\vec{A} + \vec{B} = (A_x + B_x)\hat{i} + (A_y + B_y)\hat{j}$$

### Projectile Motion

The key insight: **horizontal and vertical motion are independent.**

| | Horizontal ($x$) | Vertical ($y$) |
|---|---|---|
| Acceleration | $a_x = 0$ | $a_y = -g$ |
| Velocity | $v_x = v_{0x}$ (constant) | $v_y = v_{0y} - gt$ |
| Position | $x = v_{0x}\,t$ | $y = y_0 + v_{0y}\,t - \frac{1}{2}gt^2$ |

**Initial components** (launch angle $\theta$ above horizontal):
$$v_{0x} = v_0\cos\theta, \quad v_{0y} = v_0\sin\theta$$

**Range** (landing at same height):
$$R = \frac{v_0^2 \sin 2\theta}{g}$$

Maximum range at $\theta = 45°$.

> [!example] Example: Projectile
> Ball launched at $v_0 = 20$ m/s, $\theta = 30°$. Find time of flight and range.
>
> $v_{0y} = 20\sin 30° = 10$ m/s, $v_{0x} = 20\cos 30° = 17.3$ m/s
>
> **Time of flight** (set $y = 0$): $0 = 10t - 5t^2$ → $t = 2$ s
>
> **Range:** $R = v_{0x}\cdot t = 17.3 \times 2 = 34.6$ m

### Relative Motion

If object A moves at $\vec{v}_{A/G}$ relative to ground and B moves at $\vec{v}_{B/G}$:

$$\vec{v}_{A/B} = \vec{v}_{A/G} - \vec{v}_{B/G}$$

---

## Graphical Interpretation

| Graph | Slope | Area Under Curve |
|---|---|---|
| $x$ vs $t$ | velocity | — |
| $v$ vs $t$ | acceleration | displacement |
| $a$ vs $t$ | jerk | change in velocity |

> [!tip] Key Skill
> On the AP exam, being able to read and sketch motion graphs is tested frequently. The area under a $v$-$t$ curve equals displacement; a negative area means negative displacement.

---

## Summary of Key Formulas

$$v = \frac{dx}{dt}, \quad a = \frac{dv}{dt}$$

$$v(t) = v_0 + \int_0^t a\,dt', \quad x(t) = x_0 + \int_0^t v\,dt'$$

**Constant $a$ only:**
$$v^2 = v_0^2 + 2a\Delta x, \quad \Delta x = v_0 t + \tfrac{1}{2}at^2$$
