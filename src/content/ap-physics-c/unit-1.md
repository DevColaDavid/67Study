---
title: "Unit 1: Kinematics"
unit: 1
---

# Unit 1 — Kinematics

---

## 1.1 — Scalars and Vectors

| Quantity | Symbol | SI Unit | Type |
|---|---|---|---|
| Position | $x$, $\vec{r}$ | m | Vector |
| Displacement | $\Delta x$, $\Delta\vec{r}$ | m | Vector |
| Velocity | $v$, $\vec{v}$ | m/s | Vector |
| Speed | $|v|$ | m/s | Scalar |
| Acceleration | $a$, $\vec{a}$ | m/s² | Vector |
| Time | $t$ | s | Scalar |
| Distance | — | m | Scalar |

**Scalars** are described by magnitude only (e.g., distance, speed). **Vectors** are described by magnitude *and* direction (e.g., position, displacement, velocity, acceleration).

Vectors can be visually modeled as arrows — direction matches the vector's direction, length is proportional to magnitude.

### Unit Vector Notation

A vector can be expressed as the sum of its components along the $x$-, $y$-, and $z$-axes, using unit vectors $\hat{i}$, $\hat{j}$, $\hat{k}$:

$$\vec{r} = A\hat{i} + B\hat{j} + C\hat{k}$$

The **position vector** of a point is $\vec{r}$; the unit vector in the direction of $\vec{r}$ is denoted $\hat{r}$.

$$|\vec{A}| = \sqrt{A_x^2 + A_y^2}, \quad \theta = \arctan\!\left(\frac{A_y}{A_x}\right)$$

### Vector Addition

A resultant vector is the vector sum of the addend vectors' components:

$$\vec{C} = \vec{A} + \vec{B}$$
$$\vec{C} = (A_x + B_x)\hat{i} + (A_y + B_y)\hat{j}$$

> [!tip] Sign Convention
> In a one-dimensional coordinate system, opposite directions are denoted by opposite signs. Always define a positive direction before starting a problem.

---

## 1.2 — Displacement, Velocity, and Acceleration

**Displacement** is the change in an object's position — not total distance traveled.

$$\Delta x = x - x_0$$

### Average Values

Averages of velocity and acceleration are calculated using the initial and final states of an object over a time interval.

$$\bar{v}_{avg} = \frac{\Delta x}{\Delta t}, \qquad \bar{a}_{avg} = \frac{\Delta \bar{v}}{\Delta t}$$

An object is **accelerating** if either the magnitude and/or the direction of its velocity is changing.

> [!tip] Averages Approach Instantaneous Values
> Calculating average velocity or average acceleration over a very small time interval yields a value very close to the instantaneous velocity or instantaneous acceleration at that moment.

### Instantaneous Values — The Calculus Core of AP Physics C

As the time interval used to calculate an average value approaches zero, that average approaches the **instantaneous** value at that instant. This is the foundation of everything in this course.

**Velocity is the derivative of position:**

$$\vec{v} = \frac{d\vec{r}}{dt}, \qquad v_x = \frac{dx}{dt}$$

**Acceleration is the derivative of velocity:**

$$\vec{a} = \frac{d\vec{v}}{dt}, \qquad a_x = \frac{dv_x}{dt} = \frac{d^2x}{dt^2}$$

### Going Backwards — Integration

Time-dependent functions and instantaneous values of position, velocity, and acceleration can be determined using differentiation *and* integration.

$$x(t) = x_0 + \int_{t_0}^{t} v(t')\,dt'$$

$$v(t) = v_0 + \int_{t_0}^{t} a(t')\,dt'$$

Position is found by integrating velocity; velocity is found by integrating acceleration. The **constant of integration** is the initial value ($x_0$ or $v_0$).

> [!tip] The Big Picture
> $a(t) \xrightarrow{\int} v(t) \xrightarrow{\int} x(t)$ and $x(t) \xrightarrow{d/dt} v(t) \xrightarrow{d/dt} a(t)$
>
> If you know any one of these functions, you can find the others.

---

## 1.3 — Representing Motion

Motion can be represented with motion diagrams, figures, graphs, equations, and narrative descriptions.

### Constant Acceleration — The Kinematic Equations

For constant acceleration, three kinematic equations describe instantaneous linear motion in one dimension:

| Equation | Missing Variable |
|---|---|
| $v_x = v_{x0} + a_x t$ | $\Delta x$ |
| $x = x_0 + v_{x0}t + \frac{1}{2}a_x t^2$ | $v_x$ |
| $v_x^2 = v_{x0}^2 + 2a_x(x - x_0)$ | $t$ |
| $\Delta x = \frac{v_0 + v}{2}\cdot t$ | $a$ |

*Note: these are written for the $x$-direction, but apply in any single dimension.*

> [!warning] When NOT to Use These
> These equations only apply when acceleration is **constant**. If $a = a(t)$ (a function of time), you must integrate instead.

### Deriving the Kinematic Equations from Calculus

Starting from $a = $ const:

$$v(t) = \int a\,dt = at + C_1 = v_0 + at$$

$$x(t) = \int v\,dt = \int(v_0 + at)\,dt = v_0 t + \frac{1}{2}at^2 + C_2 = x_0 + v_0 t + \frac{1}{2}at^2$$

An object's instantaneous velocity is the slope of a line tangent to a point on its position-vs-time graph; instantaneous acceleration is the slope of a line tangent to a point on its velocity-vs-time graph. Displacement over an interval equals the **area under the velocity curve**; change in velocity equals the **area under the acceleration curve**:

$$\Delta x = \int_{t_1}^{t_2} v_x(t)\,dt, \qquad \Delta v_x = \int_{t_1}^{t_2} a_x(t)\,dt$$

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

### Free Fall

Near Earth's surface, all objects accelerate downward at a constant value:

$$a_g = g \approx 10 \text{ m/s}^2 \quad (g = 9.8 \text{ m/s}^2 \text{ is also accepted})$$

Define **up as positive** (convention):
- $a = -g = -9.8$ m/s²
- At maximum height: $v = 0$, but $a = -g$ (still accelerating downward)
- Time up = Time down (symmetric launch and landing at same height)

> [!warning] Common Mistake
> At the peak of a projectile's trajectory, $v = 0$ but acceleration is **not zero** — it's still $-g$. The object is still in free fall.

### Graphical Interpretation

| Graph | Slope | Area Under Curve |
|---|---|---|
| $x$ vs $t$ | velocity | — |
| $v$ vs $t$ | acceleration | displacement |
| $a$ vs $t$ | jerk | change in velocity |

> [!tip] Key Skill
> On the AP exam, being able to read and sketch motion graphs is tested frequently. The area under a $v$-$t$ curve equals displacement; a negative area means negative displacement.

---

## 1.4 — Reference Frames and Relative Motion

The choice of reference frame determines the direction and magnitude of quantities measured by an observer in that frame.

> [!note] Boundary Statement
> Unless otherwise stated, the frame of reference of any problem may be assumed to be **inertial**.

### Converting Between Reference Frames

Measurements from a given reference frame may be converted to measurements from another reference frame. The observed velocity of an object results from the combination of the object's velocity and the velocity of the observer's reference frame.

If object A moves at $\vec{v}_{A/G}$ relative to the ground and observer B moves at $\vec{v}_{B/G}$ relative to the ground:

$$\vec{v}_{A/B} = \vec{v}_{A/G} - \vec{v}_{B/G}$$

Combining the motion of an object and the motion of an observer in a given reference frame involves the addition or subtraction of vectors.

> [!tip] Acceleration Is Frame-Independent
> The acceleration of any object is the same as measured from **all inertial reference frames** — even though position and velocity are not.

---

## 1.5 — Motion in Two or Three Dimensions

Motion in two or three dimensions can be analyzed using one-dimensional kinematic relationships if the motion is separated into components. Velocity and acceleration may be different in each dimension and may be nonuniform — **motion in one dimension may be changed without causing a change in a perpendicular dimension.**

### Projectile Motion

Projectile motion is a special case of two-dimensional motion: zero acceleration in one dimension, constant nonzero acceleration in the other. The key insight: **horizontal and vertical motion are independent.**

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

> [!note] Boundary Statement
> AP Physics C: Mechanics only expects students to quantitatively analyze motion of an object in **two** dimensions.

---

## Summary of Key Formulas

$$v = \frac{dx}{dt}, \quad a = \frac{dv}{dt}$$

$$v(t) = v_0 + \int_0^t a\,dt', \quad x(t) = x_0 + \int_0^t v\,dt'$$

**Constant $a$ only:**
$$v^2 = v_0^2 + 2a\Delta x, \quad \Delta x = v_0 t + \tfrac{1}{2}at^2$$
