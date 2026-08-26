---
title: "Unit 5: Torque and Rotational Dynamics"
unit: 5
---

# Unit 5 — Torque and Rotational Dynamics

---

## 5.1 — Rotational Kinematics

Rotational motion has exact analogs to linear kinematics — same equations, different symbols.

| Linear | Rotational |
|---|---|
| $x$ (position) | $\theta$ (angle, rad) |
| $v$ (velocity) | $\omega$ (angular velocity, rad/s) |
| $a$ (acceleration) | $\alpha$ (angular acceleration, rad/s²) |

> [!note] Key Definition
> A **rigid system** holds its shape, but different points on it move in different directions during rotation — it cannot be modeled as a single point mass the way linear kinematics models an object. One direction of angular displacement (clockwise or counterclockwise) is defined as positive. The AP exam only assesses the **magnitudes** of angular displacement, velocity, and acceleration, plus their clockwise/counterclockwise sense — not full vector angular kinematics.

### Angular Velocity and Acceleration

$$\omega = \frac{d\theta}{dt}, \quad \alpha = \frac{d\omega}{dt} = \frac{d^2\theta}{dt^2}$$

### Constant Angular Acceleration Equations

Direct analogs of linear kinematics:

| Rotational | Linear Analog |
|---|---|
| $\omega = \omega_0 + \alpha t$ | $v = v_0 + at$ |
| $\theta = \theta_0 + \omega_0 t + \frac{1}{2}\alpha t^2$ | $x = x_0 + v_0 t + \frac{1}{2}at^2$ |
| $\omega^2 = \omega_0^2 + 2\alpha(\theta - \theta_0)$ | $v^2 = v_0^2 + 2a(x - x_0)$ |

These relationships also show up as slopes and areas on $\theta$–$t$, $\omega$–$t$, and $\alpha$–$t$ graphs, exactly like their linear counterparts.

---

## 5.2 — Connecting Linear and Rotational Motion

For a point at radius $r$ from the rotation axis:

$$\Delta s = r\Delta\theta, \quad v_t = r\omega, \quad a_t = r\alpha$$

Centripetal acceleration: $a_c = \dfrac{v_t^2}{r} = r\omega^2$ (directed inward, toward the axis)

Total linear acceleration of the point: $a = \sqrt{a_t^2 + a_c^2}$

> [!tip] Same ω and α Everywhere
> For a rigid system, **every point shares the same angular velocity and angular acceleration** — only the linear (tangential) speed and acceleration change with distance $r$ from the axis. A point twice as far from the axis moves twice as fast, but both points complete a revolution in the same time.

---

## 5.3 — Torque

Torque is the rotational analog of force — it causes angular acceleration. Torque results only from the force component **perpendicular** to the position vector from the axis to the point of application; a force pointing directly toward or away from the axis produces zero torque.

$$\vec{\tau} = \vec{r} \times \vec{F}$$

$$|\tau| = rF\sin\theta = F\cdot d_\perp$$

where $\theta$ is the angle between $\vec{r}$ and $\vec{F}$, and $d_\perp = r\sin\theta$ is the **lever arm** (moment arm) — the perpendicular distance from the axis of rotation to the line of action of the force.

Units: N·m (same as joules, but torque is not energy — don't mix them).

**Sign convention:** counterclockwise torque positive, clockwise negative.

> [!tip] Moment Arm Method
> The lever arm is the perpendicular distance from the pivot to the **line of action** of the force. Extend the force vector as a line; drop a perpendicular from the pivot to that line. That length is $d_\perp$.

> [!tip] Force Diagrams for Torque
> Torque problems can be analyzed with a **force diagram** — like a free-body diagram, but it also shows *where* each force is applied relative to the axis, since that location (and angle) determines the lever arm.

### Torque as a Vector (Cross Product)

$$\vec{\tau} = \vec{r} \times \vec{F}, \qquad \vec{A}\times\vec{B} \text{ has magnitude } AB\sin\theta$$

The cross product's direction is perpendicular to both vectors — normal to the plane they define — found with the **right-hand rule**: point fingers along $\vec{r}$, curl toward $\vec{F}$, thumb gives $\vec{\tau}$.

In 2D with rotation in the $xy$-plane: $\vec{\tau} = \tau\hat{k}$ (out of page = CCW positive).

---

## 5.4 — Rotational Inertia

Rotational inertia (also called **moment of inertia**) is the rotational analog of mass — resistance to angular acceleration. It depends on both an object's mass and how that mass is distributed relative to the axis of rotation.

$$I = mr^2 \quad \text{(point mass at perpendicular distance } r\text{)}$$

$$I_{tot} = \sum_i m_i r_i^2 \quad \text{(discrete system)} \qquad I = \int r^2\,dm \quad \text{(continuous system)}$$

where $r$ is the perpendicular distance from each mass element to the rotation axis.

> [!tip] What Increases Rotational Inertia
> Rotational inertia is larger when more mass sits farther from the axis — a hoop has more rotational inertia than a solid disk of the same mass and radius, because all of the hoop's mass sits at the rim.

### Common Moments of Inertia

| Object | Axis | $I$ |
|---|---|---|
| Point mass | Distance $R$ | $mR^2$ |
| Thin ring/hoop | Through center, perpendicular | $mR^2$ |
| Solid disk/cylinder | Through center, perpendicular | $\frac{1}{2}mR^2$ |
| Solid sphere | Through center | $\frac{2}{5}mR^2$ |
| Thin spherical shell | Through center | $\frac{2}{3}mR^2$ |
| Thin rod | Through center, perpendicular | $\frac{1}{12}mL^2$ |
| Thin rod | Through end, perpendicular | $\frac{1}{3}mL^2$ |

### Parallel Axis Theorem

If you know $I_{cm}$ (about the center of mass), the moment of inertia about a parallel axis at distance $d$ from the CM is:

$$I' = I_{cm} + Md^2$$

A rigid system's rotational inertia in a given plane is **minimum** when the axis passes through the center of mass — any parallel axis gives a larger $I$.

> [!example] Example: Rod About Its End
> Thin rod of mass $M$, length $L$. $I_{cm} = \frac{1}{12}ML^2$. The end is at distance $d = L/2$ from CM:
> $$I_{end} = \frac{1}{12}ML^2 + M\left(\frac{L}{2}\right)^2 = \frac{1}{12}ML^2 + \frac{1}{4}ML^2 = \frac{1}{3}ML^2 \checkmark$$

### Deriving Moment of Inertia by Integration

> [!example] Example: Solid Disk
> Disk of mass $M$, radius $R$, uniform density $\sigma = M/(\pi R^2)$.
> Use thin rings of radius $r$, width $dr$: $dm = \sigma \cdot 2\pi r\,dr$
> $$I = \int_0^R r^2\,dm = \int_0^R r^2 \cdot \sigma 2\pi r\,dr = 2\pi\sigma\int_0^R r^3\,dr = 2\pi\sigma \cdot \frac{R^4}{4} = \frac{1}{2}MR^2 \checkmark$$

> [!note] Scope
> AP Physics C: Mechanics only expects calculus derivations of rotational inertia for thin rods of uniform or nonuniform density (about an axis perpendicular to the rod) and for thin cylindrical shells, disks, or rigid bodies built from coaxial rings/shells about their central axis.

---

## 5.5 — Rotational Equilibrium and Newton's First Law in Rotational Form

An object in **static equilibrium** has no linear or angular acceleration:

$$\sum \vec{F} = 0 \quad \text{(translational equilibrium)}$$
$$\sum \vec{\tau} = 0 \quad \text{(rotational equilibrium)}$$

> [!warning] Two Independent Equilibriums
> Rotational equilibrium (constant $\omega$) and translational equilibrium (constant $v$) are **independent conditions** — a system can have one without the other. A wheel spinning at constant $\omega$ while sliding freely (no friction, no net force) is in rotational equilibrium without necessarily being in translational equilibrium, and vice versa.

The rotational analog of Newton's first law: a system's angular velocity stays constant *only if* the net torque on it is zero. Conversely (a rotational corollary to Newton's second law), if the torques on a rigid system are unbalanced, its angular velocity must be changing.

The torque equation can be taken about **any point** — choose the one that eliminates the most unknowns.

> [!tip] Pivot Point Choice
> Always sum torques about a point where an unknown force acts. That force's torque = 0, eliminating it from the equation.

> [!example] Example: Beam Balance
> A uniform beam (5 m, 20 kg) is supported at both ends. A 30 kg person stands 1.5 m from the left end. Find each support force.
>
> Let left support = $N_L$, right support = $N_R$.
>
> **Torques about left end** (eliminates $N_L$):
> $$N_R(5) - (20)(9.8)(2.5) - (30)(9.8)(1.5) = 0$$
> $$N_R = \frac{490 + 441}{5} = 186.2 \text{ N}$$
>
> **Forces:** $N_L + N_R = (20+30)(9.8) = 490$ N → $N_L = 303.8$ N

> [!note] Scope
> AP Physics C: Mechanics does not expect students to simultaneously analyze rotation in multiple planes.

---

## 5.6 — Newton's Second Law in Rotational Form

$$\sum \tau = I\alpha$$

The rotational analog of $F = ma$: angular velocity changes only when the net torque exerted on the system is nonzero, and the rate of that change is directly proportional to net torque and inversely proportional to rotational inertia.

Also in terms of angular momentum:
$$\sum \tau = \frac{dL}{dt}$$

This is more general than $\tau = I\alpha$ — it applies even when $I$ changes.

### Systems with Both Rotation and Translation

For a rope over a pulley (mass $M$, radius $R$, solid disk) with hanging mass $m$:

**Mass $m$:** $mg - T = ma$

**Pulley:** $TR = I\alpha = \frac{1}{2}MR^2 \cdot \frac{a}{R} = \frac{1}{2}MRa$, so $T = \frac{1}{2}Ma$

**Combined:** $mg = ma + \frac{1}{2}Ma = a(m + \frac{M}{2})$

$$a = \frac{mg}{m + M/2}, \quad T = \frac{mMg/2}{m + M/2}$$

> [!warning] Two Separate Analyses
> To fully describe a rotating rigid system, linear and rotational analyses often need to be performed **independently** — e.g., $F = ma$ for the hanging mass and $\tau = I\alpha$ for the pulley — then linked through a constraint equation like $a = R\alpha$.

---

## Key Equations Summary

$$\omega = \frac{d\theta}{dt}, \quad \alpha = \frac{d\omega}{dt}$$

$$v_t = r\omega, \quad a_t = r\alpha, \quad a_c = r\omega^2$$

$$|\tau| = rF\sin\theta = Fd_\perp$$

$$I = \int r^2\,dm, \quad I' = I_{cm} + Md^2$$

$$\sum\tau = I\alpha, \quad \sum\tau = \frac{dL}{dt}$$

**Equilibrium:** $\sum F = 0$ and $\sum\tau = 0$
