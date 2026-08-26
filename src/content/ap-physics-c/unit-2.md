---
title: "Unit 2: Force and Translational Dynamics"
unit: 2
---

# Unit 2 — Force and Translational Dynamics

---

## 2.1 — Systems and Center of Mass

System properties are determined by the interactions between objects within the system. If the properties or interactions of the constituent objects within a system aren't important to modeling the macroscopic behavior, the system can be treated as a single object. Individual objects within a chosen system may behave differently from each other and from the system as a whole — the internal structure of a system affects how it must be analyzed.

### Center of Mass (CoM)

The center of mass is the average position of mass in a system, weighted by mass. For symmetric mass distributions, the CoM lies on lines of symmetry.

**Discrete masses:**
$$x_{cm} = \frac{\sum m_i x_i}{\sum m_i} = \frac{m_1 x_1 + m_2 x_2 + \cdots}{M_{total}}$$

Similarly for $y_{cm}$ and $z_{cm}$.

**Continuous mass distributions** — for a nonuniform solid modeled as a collection of differential masses $dm$:

$$\vec{r}_{cm} = \frac{\int \vec{r}\,dm}{\int dm}$$

where $dm = \lambda\,d\ell$ (linear density, $\lambda = \frac{d}{d\ell}m(\ell)$), $dm = \sigma\,dA$ (surface), or $dm = \rho\,dV$ (volume). If the density function is known, total mass is found by integrating it over the solid's length, area, or volume: $M_{total} = \int \rho(r)\,dV$.

> [!example] Example: CoM of a Rod
> A uniform rod of mass $M$ and length $L$ lies along the $x$-axis from $0$ to $L$.
> $$x_{cm} = \frac{1}{M}\int_0^L x\cdot\frac{M}{L}\,dx = \frac{1}{L}\cdot\frac{L^2}{2} = \frac{L}{2}$$
> As expected — the center of a uniform rod is at its midpoint.

### CoM Motion

A system can be modeled as a singular object located at its center of mass. The center of mass accelerates according to the **net external force** on the entire system:

$$\vec{F}_{net,ext} = M_{total}\,\vec{a}_{cm}$$

Internal forces (between parts of the system) cancel by Newton's 3rd law and do not affect CoM motion — only forces external to the system change the system's velocity.

> [!example] Example: System vs. Isolated Object
> Block $A$ (3 kg) pulls block $B$ (5 kg) on a frictionless surface via a rope. Applied force $F = 16$ N.
>
> **Treat as one system** to find acceleration: $a = \dfrac{F}{m_A + m_B} = \dfrac{16}{8} = 2$ m/s²
>
> **Isolate block $B$** to find the internal force (tension): $T = m_B \cdot a = 5 \times 2 = 10$ N
>
> This two-step approach — system first, then isolate — is the standard method for multi-object problems.

---

## 2.2 — Forces and Free-Body Diagrams

Forces are vector quantities that describe the interactions between objects or systems. A force exerted on an object is always due to interaction with another object or system — **an object or system cannot exert a net force on itself.** Contact forces describe the interaction of an object touching another object and are macroscopic effects of interatomic electric forces.

### Free-Body Diagrams (FBDs)

A free-body diagram shows each force exerted **on** a single object or system by the environment — forces are drawn as vectors originating from the object's center of mass (represented as a dot).

> [!tip] FBD Strategy
> 1. Isolate the object of interest
> 2. Draw **all** forces acting **on** that object (not forces it exerts on others)
> 3. Choose a coordinate system with one axis parallel to the direction of acceleration (e.g., along an incline's surface) — this simplifies translating the diagram into algebra
> 4. Write $\sum F_x = ma_x$ and $\sum F_y = ma_y$
> 5. Solve the system of equations

> [!warning] AP Exam Convention
> Individual forces represented on a free-body diagram must be drawn as individual straight arrows originating on the dot. Forces in the same direction must be drawn side by side, not overlapping — and not as components.

### Normal Force

Perpendicular contact force from a surface. Adjusts to prevent objects from passing through surfaces. **Not always equal to $mg$.**

On a flat surface with no vertical acceleration: $N = mg$.

On an incline (angle $\theta$): $N = mg\cos\theta$.

### Tension (Practical Use)

Force transmitted through a rope, string, or cable. A rope can only pull, not push. (See 2.3 for the underlying Newton's-third-law justification of tension.)

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

## 2.3 — Newton's Third Law

> For every force exerted by A on B, there is an equal and opposite force exerted by B on A.

$$\vec{F}_{A\text{ on }B} = -\vec{F}_{B\text{ on }A}$$

Interactions between objects *within* a system (internal forces) do not influence the motion of that system's center of mass.

> [!warning] Common Mistake
> Action-reaction pairs act on **different objects** — they never cancel each other. Only forces on the **same object** can cancel.

### Tension, Formally

Tension is the macroscopic net result of forces that infinitesimal segments of a string, cable, or chain exert on each other (via Newton's third law) in response to an external force.

- An **ideal string** has negligible mass and does not stretch when under tension.
- The tension in an ideal string is the **same at all points** within the string.
- In a string with nonnegligible mass, tension may **not** be the same at all points.
- An **ideal pulley** has negligible mass and rotates about an axle through its center of mass with negligible friction.

---

## 2.4 — Newton's First Law

> An object at rest stays at rest, and an object in motion stays in motion with constant velocity, unless acted upon by a **net external force**.

The net force on a system is the vector sum of all forces exerted on it. **Translational equilibrium** is the configuration of forces such that the net force on a system is zero:

$$\sum \vec{F}_i = 0 \implies \vec{a} = 0$$

If the net force on a system is zero, Newton's first law states its velocity remains constant. Forces may be balanced in one dimension but unbalanced in another — the system's velocity changes only in the direction of the unbalanced force.

**Inertia** is the tendency of an object to resist changes in its state of motion; mass is the measure of inertia. An **inertial reference frame** is one from which an observer would verify Newton's first law.

---

## 2.5 — Newton's Second Law

Unbalanced forces are a configuration of forces such that the net force on a system is not equal to zero. Newton's second law states that the acceleration of a system's center of mass has a magnitude proportional to the net force exerted on it, in the same direction as that net force:

$$\vec{a}_{sys} = \frac{\sum \vec{F}}{m_{sys}} = \frac{\vec{F}_{net}}{m_{sys}} \quad \Longleftrightarrow \quad \vec{F}_{net} = m\vec{a} = \frac{d\vec{p}}{dt}$$

Component form:
$$\sum F_x = ma_x, \quad \sum F_y = ma_y$$

The velocity of a system's center of mass changes **only** if a nonzero net external force is exerted on it.

---

## 2.6 — Gravitational Force

### Weight

Near Earth's surface:
$$\text{Weight} = F_g = mg, \quad g \approx 10 \text{ N/kg}$$

directed downward.

### Newton's Law of Universal Gravitation

Between any two masses/systems, directly proportional to each mass and inversely proportional to the square of the distance between their centers of mass:

$$|\vec{F}_g| = G\frac{m_1 m_2}{r^2}$$

$G = 6.674 \times 10^{-11}$ N·m²/kg². The force is **attractive** and acts along the line connecting the two centers of mass.

### Gravitational Field

A field models the effect of this noncontact force at various positions in space. The field created by mass $M$ at distance $r$:

$$|\vec{g}| = \frac{|\vec{F}_g|}{m} = \frac{GM}{r^2}$$

If gravity is the only force on an object, its observed acceleration (m/s²) is numerically equal to the local field strength (N/kg). If the relative distance between two systems changes negligibly, $F_g$ can be treated as constant over that range.

**Orbital speed** (circular orbit at radius $r$):
$$\frac{GMm}{r^2} = \frac{mv^2}{r} \implies v_{orb} = \sqrt{\frac{GM}{r}}$$

**Escape speed** from the surface of mass $M$, radius $R$:
$$v_{esc} = \sqrt{\frac{2GM}{R}}$$

### Apparent Weight

The magnitude of a system's apparent weight is the magnitude of the normal force exerted on it. If the system is accelerating, apparent weight is **not** equal to the gravitational force on it. A system appears weightless when gravity is the only force acting on it (e.g., free fall).

> [!note] Equivalence Principle
> An observer in a noninertial reference frame cannot distinguish between an object's apparent weight and the gravitational force exerted on it by a gravitational field.

### Inertial vs. Gravitational Mass

Objects have **inertial mass** — a property determining how much an object's motion resists changes when interacting with another object — and **gravitational mass**, related to the force of attraction between two masses. These have been experimentally verified to be equivalent.

### Shell Theorem

> [!note] Shell Theorem
> - The net gravitational force exerted on an object **inside** a thin uniform spherical shell is zero.
> - The net force on an object **outside** a thin uniform shell can be found by treating the shell as a point mass at its center.
> - An object **inside** a uniform solid sphere experiences a net force from only the partial mass located closer to the center than the object ($m_{partial} = \rho\frac{4}{3}\pi r_{partial}^3$); this force is proportional to the object's distance from the center: $F_{g,partial} = -kr_{partial}$.
>
> AP Physics C: Mechanics does not expect students to prove or derive the shell theorem.

---

## 2.7 — Kinetic and Static Friction

### Kinetic Friction

Occurs when two surfaces in contact move relative to each other. The force is exerted opposite the direction of relative motion, and does **not** depend on the contact area:

$$\left|\vec{F}_{f,k}\right| = \mu_k\left|\vec{F}_N\right|$$

The coefficient of kinetic friction depends on the material properties of the surfaces in contact. Normal force is the perpendicular component of the contact force, directed away from the surface.

### Static Friction

Occurs between surfaces that are **not** moving relative to each other. Static friction adopts whatever value and direction is needed to prevent slipping, up to a maximum:

$$\left|\vec{F}_{f,s}\right| \leq \mu_s\left|\vec{F}_N\right|, \qquad F_{f,s,max} = \mu_s F_N$$

> [!tip] Key Fact
> $\mu_s$ is typically **greater** than $\mu_k$ for a given pair of surfaces — it takes more force to start sliding than to keep sliding.

Friction direction always **opposes relative motion** (kinetic) or **tendency of motion** (static).

---

## 2.8 — Spring Forces

### Hooke's Law

An ideal spring has negligible mass and exerts a force proportional to the change in its length from its relaxed length. (A nonideal spring either has nonnegligible mass or is not proportional to its displacement.)

$$\vec{F}_s = -k\Delta\vec{x}$$

$k$ = spring constant (N/m). The force is always directed toward the equilibrium position of the object–spring system.

### Combinations of Springs

A collection of springs may behave as a single spring with an equivalent spring constant $k_{eq}$.

**Series:** the inverse of the equivalent constant is the sum of the inverses of the individual constants (and is smaller than the smallest constituent):
$$\frac{1}{k_{eq,\,series}} = \sum_i \frac{1}{k_i} = \frac{1}{k_1} + \frac{1}{k_2} + \cdots$$

**Parallel:** the equivalent constant is the sum of the individual constants:
$$k_{eq,\,parallel} = \sum_i k_i = k_1 + k_2 + \cdots$$

> [!note] Boundary Statement
> AP Physics C: Mechanics only expects students to find the effective spring constant of systems arranged purely in series or purely in parallel — not combinations of both.

---

## 2.9 — Resistive Forces

A resistive force is a velocity-dependent force directed opposite an object's velocity, for example:

$$\vec{F}_r = -k\vec{v}$$

Applying Newton's second law to an object subject to a resistive force produces a **differential equation** for velocity. Using separation of variables, the velocity can be found by integrating over the proper limits; position and acceleration can then be determined via calculus using the object's initial conditions.

> [!example] Behavior of $F_r = -kv$
> The position, velocity, and acceleration of an object under a resistive force of this form are **exponential** functions of time, with asymptotes set by the object's initial conditions and the forces acting on it.

### Terminal Velocity

The maximum speed reached by an object moving under a constant applied force and an opposing resistive force. Terminal velocity occurs when the net force on the object becomes zero (the resistive force grows with speed until it balances the constant force).

---

## 2.10 — Circular Motion

For an object moving in a circle of radius $r$ at speed $v$:

**Centripetal acceleration** — the component of acceleration directed toward the center of the circular path, equal to the ratio of tangential speed squared to radius:
$$a_c = \frac{v^2}{r} = \omega^2 r$$

**Centripetal force** (net force toward center — not a new type of force; it may come from a single force, several forces, or components of forces):
$$F_c = \frac{mv^2}{r}$$

> [!warning] "Centrifugal Force" is Fictitious
> There is no outward centrifugal force in an inertial reference frame. The net force **always points inward** (toward center) for circular motion. What you "feel" outward is inertia.

### Tangential Acceleration

Tangential acceleration is the rate at which an object's *speed* changes, directed tangent to its circular path. The net acceleration of an object moving in a circle is the vector sum of centripetal and tangential acceleration.

### Period and Frequency

For uniform circular motion (constant speed):

$$T = \frac{2\pi r}{v}, \quad f = \frac{1}{T}, \quad \omega = \frac{2\pi}{T} = 2\pi f$$

### Vertical Circle

At the **top** of a loop (speed $v$, radius $r$): gravity and normal force both point down (toward center):
$$mg + N = \frac{mv^2}{r}$$

Minimum speed at top (when $N = 0$, gravity alone provides centripetal force): $v_{min} = \sqrt{gr}$

At the **bottom**: $N - mg = \dfrac{mv^2}{r}$ → $N = mg + \dfrac{mv^2}{r}$ (you feel heavier)

> [!note] Other Sources of Centripetal Force
> On a **banked surface**, components of the normal force and static friction can contribute to centripetal force. In a **conical pendulum**, a component of tension contributes to centripetal force.

### Circular Orbits — Kepler's Third Law

For a satellite in circular orbit around a central body of mass $M$, centripetal acceleration is caused only by gravitational attraction, which relates the orbit's period and radius:

$$T^2 = \frac{4\pi^2}{GM}R^3$$

> [!note] Boundary Statement
> AP Physics C: Mechanics does not expect students to know Kepler's first or second laws of planetary motion.

---

## Key Equations Summary

$$\vec{F}_{net} = m\vec{a} \quad \text{(Newton's 2nd Law)}$$

$$x_{cm} = \frac{\sum m_i x_i}{M}, \quad x_{cm} = \frac{1}{M}\int x\,dm$$

$$F_g = \frac{Gm_1 m_2}{r^2}, \quad g = \frac{GM}{r^2}, \quad T^2 = \frac{4\pi^2}{GM}R^3$$

$$a_c = \frac{v^2}{r}, \quad F_c = \frac{mv^2}{r}$$

$$f_s \leq \mu_s N, \quad f_k = \mu_k N$$

$$F_s = -k\Delta x, \quad F_r = -kv$$
