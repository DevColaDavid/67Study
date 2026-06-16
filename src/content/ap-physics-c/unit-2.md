---
title: "Unit 2: Force and Translational Dynamics"
unit: 2
---

# Unit 2 — Force and Translational Dynamics

---

## Newton's Laws of Motion

### First Law — Law of Inertia

> An object at rest stays at rest, and an object in motion stays in motion with constant velocity, unless acted upon by a **net external force**.

$$\vec{F}_{net} = 0 \implies \vec{a} = 0$$

**Inertia** is the tendency of an object to resist changes in its state of motion. Mass is the measure of inertia.

### Second Law

$$\vec{F}_{net} = m\vec{a} = \frac{d\vec{p}}{dt} = m\frac{d\vec{v}}{dt}$$

- $\vec{F}_{net}$ = sum of all forces on the object (N)
- $m$ = mass (kg)
- $\vec{a}$ = acceleration (m/s²)

Component form:
$$\sum F_x = ma_x, \quad \sum F_y = ma_y$$

### Third Law — Action-Reaction

> For every force exerted by A on B, there is an equal and opposite force exerted by B on A.

$$\vec{F}_{A\text{ on }B} = -\vec{F}_{B\text{ on }A}$$

> [!warning] Common Mistake
> Action-reaction pairs act on **different objects** — they never cancel each other. Only forces on the **same object** can cancel.

---

## Center of Mass

The center of mass (CoM) is the average position of mass in a system, weighted by mass.

### Discrete Masses

$$x_{cm} = \frac{\sum m_i x_i}{\sum m_i} = \frac{m_1 x_1 + m_2 x_2 + \cdots}{M_{total}}$$

Similarly for $y_{cm}$ and $z_{cm}$.

### Continuous Mass Distributions

$$x_{cm} = \frac{1}{M}\int x\,dm$$

where $dm = \lambda\,dx$ (linear), $dm = \sigma\,dA$ (surface), or $dm = \rho\,dV$ (volume).

> [!example] Example: CoM of a Rod
> A uniform rod of mass $M$ and length $L$ lies along the $x$-axis from $0$ to $L$.
> $$x_{cm} = \frac{1}{M}\int_0^L x\cdot\frac{M}{L}\,dx = \frac{1}{L}\cdot\frac{L^2}{2} = \frac{L}{2}$$
> As expected — center of a uniform rod is at its midpoint.

### CoM Motion

The center of mass of a system accelerates according to the **net external force** on the entire system:

$$\vec{F}_{net,ext} = M_{total}\,\vec{a}_{cm}$$

Internal forces (between parts of the system) cancel by Newton's 3rd law and do not affect CoM motion.

---

## Common Forces

### Gravity (Weight)

Near Earth's surface:
$$\vec{W} = m\vec{g}, \quad |\vec{W}| = mg$$

directed downward. $g = 9.8$ m/s².

Newton's Law of Universal Gravitation (between any two masses):
$$F_g = \frac{Gm_1 m_2}{r^2}$$

$G = 6.674 \times 10^{-11}$ N·m²/kg²

### Normal Force

Perpendicular contact force from a surface. Adjusts to prevent objects from passing through surfaces. **Not always equal to $mg$.**

On a flat surface with no vertical acceleration: $N = mg$.

On an incline (angle $\theta$): $N = mg\cos\theta$.

### Friction

**Static friction** (object at rest, opposes tendency to slide):
$$f_s \leq \mu_s N$$

Maximum static friction: $f_{s,max} = \mu_s N$

**Kinetic friction** (object sliding):
$$f_k = \mu_k N$$

Always: $\mu_k < \mu_s$ — it takes more force to start sliding than to keep sliding.

Friction direction always **opposes relative motion** (kinetic) or **tendency of motion** (static).

### Tension

Force transmitted through a rope, string, or cable. In an ideal (massless, inextensible) rope:
- Tension is the same throughout the rope
- Rope can only pull, not push

### Spring Force (Hooke's Law)

$$\vec{F}_{spring} = -k\vec{x}$$

$k$ = spring constant (N/m), $x$ = displacement from equilibrium. The minus sign means the force restores toward equilibrium.

---

## Free Body Diagrams (FBDs)

> [!tip] FBD Strategy
> 1. Isolate the object of interest
> 2. Draw **all** forces acting **on** that object (not forces it exerts on others)
> 3. Choose a coordinate system aligned with the motion
> 4. Write $\sum F_x = ma_x$ and $\sum F_y = ma_y$
> 5. Solve the system of equations

### Atwood Machine

Two masses $m_1$ and $m_2$ over a frictionless pulley.

For $m_2 > m_1$: $m_2$ falls, $m_1$ rises. Take down as positive for $m_2$, up as positive for $m_1$:

$$m_2 g - T = m_2 a$$
$$T - m_1 g = m_1 a$$

Adding: $a = \dfrac{(m_2 - m_1)g}{m_1 + m_2}$, $T = \dfrac{2m_1 m_2 g}{m_1 + m_2}$

### Inclined Plane

Object on a ramp at angle $\theta$. Axes: parallel and perpendicular to ramp.

| Direction | Equation |
|---|---|
| Along ramp | $mg\sin\theta - f = ma$ |
| Perpendicular | $N - mg\cos\theta = 0$ |

Frictionless: $a = g\sin\theta$

---

## Circular Motion

For an object moving in a circle of radius $r$ at speed $v$:

**Centripetal acceleration** (directed toward center):
$$a_c = \frac{v^2}{r} = \omega^2 r$$

**Centripetal force** (net force toward center, not a new type of force):
$$F_c = \frac{mv^2}{r}$$

> [!warning] "Centrifugal Force" is Fictitious
> There is no outward centrifugal force in an inertial reference frame. The net force **always points inward** (toward center) for circular motion. What you "feel" outward is inertia.

### Period and Frequency

$$T = \frac{2\pi r}{v}, \quad f = \frac{1}{T}, \quad \omega = \frac{2\pi}{T} = 2\pi f$$

### Vertical Circle

At the top of a loop (speed $v$, radius $r$): gravity and normal force both point down (toward center):
$$mg + N = \frac{mv^2}{r}$$

Minimum speed at top (when $N = 0$): $v_{min} = \sqrt{gr}$

At the bottom: $N - mg = \dfrac{mv^2}{r}$ → $N = mg + \dfrac{mv^2}{r}$ (you feel heavier)

---

## Newton's Law of Gravitation

$$F_g = \frac{Gm_1 m_2}{r^2}$$

- Attractive, acts along the line connecting the masses
- Inverse-square law: double the distance → quarter the force

**Gravitational field** at distance $r$ from mass $M$:
$$g = \frac{GM}{r^2}$$

Near Earth's surface ($r \approx R_E$): $g \approx 9.8$ m/s²

**Orbital speed** (circular orbit at radius $r$):
$$\frac{GMm}{r^2} = \frac{mv^2}{r} \implies v_{orb} = \sqrt{\frac{GM}{r}}$$

**Escape speed** from surface of mass $M$, radius $R$:
$$v_{esc} = \sqrt{\frac{2GM}{R}}$$

> [!note] Shell Theorem
> A uniform spherical shell exerts no gravitational force on objects inside it. A uniform solid sphere exerts gravitational force as if all its mass were concentrated at its center (for external objects).

---

## Systems of Objects

When multiple objects are connected (e.g., by a rope), treat the entire system to find acceleration, then isolate individual objects to find internal forces.

> [!example] Example: Two Blocks
> Block $A$ (3 kg) pulls block $B$ (5 kg) on a frictionless surface via a rope. Applied force $F = 16$ N.
>
> **System:** $a = \dfrac{F}{m_A + m_B} = \dfrac{16}{8} = 2$ m/s²
>
> **Tension in rope** (isolate $B$): $T = m_B \cdot a = 5 \times 2 = 10$ N

---

## Key Equations Summary

$$\vec{F}_{net} = m\vec{a} \quad \text{(Newton's 2nd Law)}$$

$$x_{cm} = \frac{\sum m_i x_i}{M}, \quad x_{cm} = \frac{1}{M}\int x\,dm$$

$$F_g = \frac{Gm_1 m_2}{r^2}, \quad g = \frac{GM}{r^2}$$

$$a_c = \frac{v^2}{r}, \quad F_c = \frac{mv^2}{r}$$

$$f_s \leq \mu_s N, \quad f_k = \mu_k N$$
