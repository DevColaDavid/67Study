---
title: "Unit 5: Torque and Rotational Dynamics"
unit: 5
---

# Unit 5 — Torque and Rotational Dynamics

---

## Rotational Kinematics

Rotation has exact analogs to linear kinematics. Just swap variables:

| Linear | Rotational | Relation |
|---|---|---|
| $x$ (position) | $\theta$ (angle, rad) | $x = r\theta$ |
| $v$ (velocity) | $\omega$ (angular velocity, rad/s) | $v = r\omega$ |
| $a$ (acceleration) | $\alpha$ (angular acceleration, rad/s²) | $a_t = r\alpha$ |

### Angular Velocity and Acceleration

$$\omega = \frac{d\theta}{dt}, \quad \alpha = \frac{d\omega}{dt} = \frac{d^2\theta}{dt^2}$$

Direction by **right-hand rule**: curl fingers in direction of rotation, thumb points along $\vec{\omega}$.

### Constant Angular Acceleration Equations

Direct analogs of linear kinematics:

| Rotational | Linear Analog |
|---|---|
| $\omega = \omega_0 + \alpha t$ | $v = v_0 + at$ |
| $\theta = \omega_0 t + \frac{1}{2}\alpha t^2$ | $x = v_0 t + \frac{1}{2}at^2$ |
| $\omega^2 = \omega_0^2 + 2\alpha\theta$ | $v^2 = v_0^2 + 2ax$ |

### Connection Between Linear and Rotational

For a point at radius $r$ from the rotation axis:

$$s = r\theta, \quad v_t = r\omega, \quad a_t = r\alpha$$

Centripetal acceleration: $a_c = \dfrac{v_t^2}{r} = r\omega^2$ (directed inward)

Total linear acceleration: $a = \sqrt{a_t^2 + a_c^2}$

---

## Torque

Torque is the rotational analog of force — it causes angular acceleration.

$$\vec{\tau} = \vec{r} \times \vec{F}$$

$$|\tau| = rF\sin\theta = F\cdot d_\perp$$

where $\theta$ is the angle between $\vec{r}$ and $\vec{F}$, and $d_\perp = r\sin\theta$ is the **moment arm** (perpendicular distance from the rotation axis to the line of action of the force).

Units: N·m (same as joules, but torque is not energy — don't mix them).

**Sign convention:** counterclockwise torque positive, clockwise negative.

> [!tip] Moment Arm Method
> The moment arm is the perpendicular distance from the pivot to the **line of action** of the force. Extend the force vector as a line; drop a perpendicular from the pivot to that line. That length is $d_\perp$.

---

## Rotational Statics (Equilibrium)

An object in **static equilibrium** has no linear or angular acceleration:

$$\sum \vec{F} = 0 \quad \text{(translational equilibrium)}$$
$$\sum \vec{\tau} = 0 \quad \text{(rotational equilibrium)}$$

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

---

## Moment of Inertia

Moment of inertia is the rotational analog of mass — resistance to angular acceleration.

$$I = \sum m_i r_i^2 \quad \text{(discrete)} \qquad I = \int r^2\,dm \quad \text{(continuous)}$$

where $r$ is the perpendicular distance from each mass element to the rotation axis.

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

$$I = I_{cm} + md^2$$

$I$ is always larger when rotating about any axis other than the CM axis.

> [!example] Example: Rod About Its End
> Thin rod of mass $M$, length $L$. $I_{cm} = \frac{1}{12}ML^2$. The end is at distance $d = L/2$ from CM:
> $$I_{end} = \frac{1}{12}ML^2 + M\left(\frac{L}{2}\right)^2 = \frac{1}{12}ML^2 + \frac{1}{4}ML^2 = \frac{1}{3}ML^2 \checkmark$$

### Deriving Moment of Inertia by Integration

> [!example] Example: Solid Disk
> Disk of mass $M$, radius $R$, uniform density $\sigma = M/(\pi R^2)$.
> Use thin rings of radius $r$, width $dr$: $dm = \sigma \cdot 2\pi r\,dr$
> $$I = \int_0^R r^2\,dm = \int_0^R r^2 \cdot \sigma 2\pi r\,dr = 2\pi\sigma\int_0^R r^3\,dr = 2\pi\sigma \cdot \frac{R^4}{4} = \frac{1}{2}MR^2 \checkmark$$

---

## Newton's Second Law for Rotation

$$\sum \tau = I\alpha$$

The rotational analog of $F = ma$.

Also in terms of angular momentum:
$$\sum \tau = \frac{dL}{dt}$$

### Systems with Both Rotation and Translation

For a rope over a pulley (mass $M$, radius $R$, solid disk) with hanging mass $m$:

**Mass $m$:** $mg - T = ma$

**Pulley:** $TR = I\alpha = \frac{1}{2}MR^2 \cdot \frac{a}{R} = \frac{1}{2}MRa$, so $T = \frac{1}{2}Ma$

**Combined:** $mg = ma + \frac{1}{2}Ma = a(m + \frac{M}{2})$

$$a = \frac{mg}{m + M/2}, \quad T = \frac{mMg/2}{m + M/2}$$

---

## Torque as a Vector (Cross Product)

$$\vec{\tau} = \vec{r} \times \vec{F}$$

Direction by right-hand rule: point fingers along $\vec{r}$, curl toward $\vec{F}$, thumb gives $\vec{\tau}$.

In 2D with rotation in the $xy$-plane: $\vec{\tau} = \tau\hat{k}$ (out of page = CCW positive).

---

## Key Equations Summary

$$\omega = \frac{d\theta}{dt}, \quad \alpha = \frac{d\omega}{dt}$$

$$v_t = r\omega, \quad a_t = r\alpha, \quad a_c = r\omega^2$$

$$|\tau| = rF\sin\theta = Fd_\perp$$

$$I = \int r^2\,dm, \quad I = I_{cm} + md^2$$

$$\sum\tau = I\alpha$$

**Equilibrium:** $\sum F = 0$ and $\sum\tau = 0$
