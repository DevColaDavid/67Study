---
title: "Unit 6: Energy and Momentum of Rotating Systems"
unit: 6
---

# Unit 6 — Energy and Momentum of Rotating Systems

---

## 6.1 — Rotational Kinetic Energy

A rotating body has kinetic energy due to the motion of its mass elements.

$$K_{rot} = \frac{1}{2}I\omega^2$$

This is the rotational analog of $K_{trans} = \frac{1}{2}mv^2$, and it's a **scalar** quantity — a system can have rotational kinetic energy even while its center of mass is at rest (e.g., a wheel spinning in place on a fixed axle).

For an object that both **translates and rotates** (e.g., a rolling ball):

$$K_{total} = K_{trans} + K_{rot} = \frac{1}{2}mv_{cm}^2 + \frac{1}{2}I_{cm}\omega^2$$

> [!note] Key Definition
> For an object rotating about a fixed axis, its rotational kinetic energy **is** its total kinetic energy — every point in the object moves only because of the rotation, so $K_{rot}$ already accounts for all of it.

---

## 6.2 — Torque and Work

A torque transfers energy into or out of a system when it's exerted over an angular displacement — the rotational analog of $W = \int F\,dx$.

$$W = \int_{\theta_1}^{\theta_2} \tau\,d\theta$$

For a constant torque: $W = \tau\Delta\theta$.

> [!tip] Reading a Torque Graph
> Work done by a torque equals the **area under a $\tau$ vs. $\theta$ graph** between the initial and final angular positions — the rotational counterpart of reading work off an $F$ vs. $x$ graph.

Combined with the work-energy theorem, the net work done by all torques on a system equals its change in rotational kinetic energy:

$$W_{net} = \Delta K_{rot} = \frac{1}{2}I\omega_f^2 - \frac{1}{2}I\omega_i^2$$

---

## 6.3 — Angular Momentum and Angular Impulse

Angular momentum is the rotational analog of linear momentum.

### For a Particle

$$\vec{L} = \vec{r} \times \vec{p} = \vec{r} \times m\vec{v}$$

$$|\vec{L}| = rmv\sin\theta = rp\sin\theta$$

where $\theta$ is the angle between $\vec{r}$ and $\vec{v}$. The axis or point chosen to measure $\vec{L}$ about affects its value — for an object traveling in a straight line, $L$ depends on the reference point, the object's mass and speed, and the angle between the radial line and the velocity.

### For a Rigid Body Rotating About a Fixed Axis

$$L = I\omega$$

(Scalar form for rotation about a fixed axis)

### Angular Impulse

The rotational analog of linear impulse — the product of torque and the time interval it acts over:

$$\text{angular impulse} = \int \tau\,dt$$

Angular impulse points in the same direction as the torque producing it, and equals the **area under a $\tau$ vs. $t$ graph**.

### Rotational Impulse–Momentum Theorem

$$\Delta L = L - L_0 = \int \tau\,dt$$

$$\tau_{net} = \frac{dL}{dt} = I\frac{d\omega}{dt} = I\alpha \quad (\text{when } I \text{ is constant})$$

This is more general than $\tau = I\alpha$ — it applies even when $I$ changes. Net torque also equals the **slope of an $L$ vs. $t$ graph**, and angular impulse equals the **area under a net torque vs. $t$ graph**.

---

## 6.4 — Conservation of Angular Momentum

The total angular momentum of a system about an axis is the sum of the angular momenta of its constituent parts about that axis. Any change to a system's $L$ is due to an interaction between the system and its surroundings — by Newton's third law, the angular impulse one object exerts on another is equal and opposite to the angular impulse exerted back.

When $\tau_{net} = 0$:

$$L = I\omega = \text{constant}$$

$$I_i\omega_i = I_f\omega_f$$

> [!tip] Shape Change ≠ Momentum Change
> A **nonrigid** system's angular speed can change without its angular momentum changing, if the system changes shape — moving mass closer to or farther from the axis changes $I$, so $\omega$ must change to keep $L = I\omega$ constant. This is exactly what a figure skater is doing.

> [!example] Example: Figure Skater
> A skater spinning at $\omega_i = 2$ rad/s pulls arms in, reducing $I$ from 3 kg·m² to 1 kg·m².
> $$I_i\omega_i = I_f\omega_f \implies \omega_f = \frac{I_i}{I_f}\omega_i = \frac{3}{1}(2) = 6 \text{ rad/s}$$
>
> KE increases: $K_i = \frac{1}{2}(3)(2^2) = 6$ J, $K_f = \frac{1}{2}(1)(6^2) = 18$ J. The extra 12 J comes from the skater's muscles doing work pulling the arms in.

> [!example] Example: Person on a Turntable
> A 60 kg person stands at the edge of a turntable ($I_{table} = 500$ kg·m², $R = 2$ m) at rest. They walk to the center. Final $\omega$ of table?
>
> $L = 0$ always (no external torque). Let table spin at $\omega$, person walks toward the center.
>
> Initial: $L_i = 0$
> Final: $I_{table}\omega + I_{person}\omega_{person} = 0$
>
> When the person reaches the center, $I_{person} = 0$, so $I_{table}\omega = 0$ → $\omega = 0$.
>
> More generally, when the person is at radius $r$: $I_{person} = mr^2$, and $(500)\omega_{table} + (60r^2)\omega_{person} = 0$. Since the person walks radially rather than co-rotating with the table, the full dependence of $\omega_{table}$ on $r$ requires tracking the system as it evolves.

> [!tip] Angular Momentum Analogy Table
> | Linear | Angular |
> |---|---|
> | $\vec{p} = m\vec{v}$ | $\vec{L} = I\vec{\omega}$ |
> | $\vec{F} = d\vec{p}/dt$ | $\vec{\tau} = d\vec{L}/dt$ |
> | $\vec{F}_{ext}=0 \Rightarrow \vec{p}=$ const | $\vec{\tau}_{ext}=0 \Rightarrow \vec{L}=$ const |

---

## 6.5 — Rolling

When an object rolls without slipping, the contact point is instantaneously at rest. This gives a **constraint** between linear and angular quantities:

$$v_{cm} = R\omega, \quad a_{cm} = R\alpha$$

> [!note] Key Definition
> **Rolling without slipping** means the velocity at the contact point is zero. The contact point is the instantaneous center of rotation for the rolling object. For ideal rolling without slipping, friction does not dissipate any energy from the system.

### Rolling Down an Incline

Using energy conservation (height $h$, slope angle $\theta$):

$$mgh = \frac{1}{2}mv_{cm}^2 + \frac{1}{2}I_{cm}\omega^2$$

Substituting $\omega = v_{cm}/R$:

$$mgh = \frac{1}{2}mv_{cm}^2\left(1 + \frac{I_{cm}}{mR^2}\right)$$

$$v_{cm} = \sqrt{\frac{2gh}{1 + I_{cm}/(mR^2)}}$$

| Object | $I_{cm}/(mR^2)$ | Factor | $v_{cm}$ |
|---|---|---|---|
| Thin ring/hoop | 1 | $\frac{1}{1+1}=\frac{1}{2}$ | $\sqrt{gh}$ |
| Solid cylinder | $\frac{1}{2}$ | $\frac{1}{1+\frac{1}{2}}=\frac{2}{3}$ | $\sqrt{\frac{4gh}{3}}$ |
| Solid sphere | $\frac{2}{5}$ | $\frac{1}{1+\frac{2}{5}}=\frac{5}{7}$ | $\sqrt{\frac{10gh}{7}}$ |
| Thin spherical shell | $\frac{2}{3}$ | $\frac{1}{1+\frac{2}{3}}=\frac{3}{5}$ | $\sqrt{\frac{6gh}{5}}$ |

> [!tip] Race Down a Ramp
> The object with the **smallest $I/(mR^2)$** wins (fastest $v_{cm}$). A solid sphere beats a solid cylinder beats a hollow sphere beats a hoop. An object that slides (no rotation, $I_{rot}=0$) beats all rollers.

### Acceleration of Rolling Object Down Incline

Using Newton's 2nd law (translational + rotational):

$$ma = mg\sin\theta - f_s \quad \text{(translation)}$$
$$f_s R = I_{cm}\alpha = I_{cm}\frac{a}{R} \implies f_s = \frac{I_{cm}a}{R^2} \quad \text{(rotation)}$$

Solving:
$$a = \frac{g\sin\theta}{1 + I_{cm}/(mR^2)}$$

The static friction force is what causes the object to rotate — it acts backward along the incline.

> [!warning] Common Mistake
> For rolling without slipping, friction does **no work** (contact point has zero velocity → $P = \vec{f}\cdot\vec{v}_{contact} = 0$). But it does exert a torque and force. Use energy methods OR Newton's law + torque equation, not both.

### Rolling While Slipping

When a system slips, the center-of-mass motion and the rotational motion are **not directly related** — you cannot use $v_{cm} = R\omega$. Kinetic friction acts at the slipping contact point and, unlike in ideal rolling without slipping, **does** dissipate energy from the system.

> [!note] Scope
> Rolling friction (energy loss during ideal rolling without slipping, distinct from kinetic friction during slipping) is beyond the scope of AP Physics C: Mechanics.

---

## 6.6 — Motion of Orbiting Satellites

For a system consisting only of a massive central object and an orbiting satellite whose mass is negligible in comparison, the motion of the central object itself is negligible — only the satellite's motion matters.

**Orbital speed** (circular orbit of radius $r$):
$$\frac{GMm}{r^2} = \frac{mv^2}{r} \implies v_{orb} = \sqrt{\frac{GM}{r}}$$

**Orbital period:**
$$T = \frac{2\pi r}{v} = 2\pi r\sqrt{\frac{r}{GM}} = \frac{2\pi r^{3/2}}{\sqrt{GM}}$$

### Kepler's Laws

1. **Elliptical Orbits:** Planets orbit the Sun in ellipses with the Sun at one focus.
2. **Equal Areas:** A line from the Sun to a planet sweeps equal areas in equal times — a consequence of angular momentum conservation ($\vec{\tau}_{grav} = 0$, since gravity is a central force).
3. **Period Law:** $T^2 \propto r^3$ (for circular orbits: $T^2 = \frac{4\pi^2}{GM}r^3$)

### Angular Momentum in Orbits

The motion of satellites in orbit is constrained by conservation laws. Since gravity is a central force (always directed toward the center → $\tau = 0$), angular momentum is conserved for any orbit, circular or elliptical:

$$L = mvr = \text{const} \quad \text{(circular orbit)}$$

For elliptical orbits, at perihelion (closest) and aphelion (farthest):
$$m v_p r_p = m v_a r_a \implies v_p r_p = v_a r_a$$

Faster at perihelion, slower at aphelion.

> [!note] What Stays Constant
> **Circular orbit:** total mechanical energy, gravitational PE, and the satellite's angular momentum and kinetic energy are each individually constant.
> **Elliptical orbit:** total mechanical energy and angular momentum stay constant, but $U_g$ and $K$ each change individually as $r$ changes between perihelion and aphelion.

### Gravitational Potential Energy and Total Energy in Orbit

Gravitational PE is defined to be zero when the satellite is an infinite distance from the central object:

$$U = -\frac{GMm}{r}$$

$$E_{total} = K + U = \frac{1}{2}mv^2 - \frac{GMm}{r}$$

For a circular orbit (substituting $v^2 = GM/r$):

$$K = -\frac{1}{2}U, \qquad E_{total} = \frac{1}{2}U = -\frac{GMm}{2r}$$

The total energy is negative (bound orbit). As $r$ increases, $E$ becomes less negative (more energy needed to orbit farther away — counterintuitive, but you add energy to move to a higher orbit).

> [!note] Binding Energy
> $|E_{total}| = \dfrac{GMm}{2r}$ is the energy needed to escape from the orbit to infinity ($E = 0$). To raise an orbit, you add energy, which paradoxically slows the satellite (larger orbit, slower speed, but more total energy).

### Escape Velocity

Escape velocity is the speed at which a satellite's total mechanical energy equals zero — it can reach infinite distance from the central object with speed approaching zero, never to return.

$$E_{total} = \frac{1}{2}mv_{esc}^2 - \frac{GMm}{r} = 0 \implies v_{esc} = \sqrt{\frac{2GM}{r}}$$

---

## Key Equations Summary

$$K_{rot} = \frac{1}{2}I\omega^2, \quad K_{total} = \frac{1}{2}mv_{cm}^2 + \frac{1}{2}I_{cm}\omega^2$$

$$W = \int_{\theta_1}^{\theta_2}\tau\,d\theta$$

$$L = I\omega \quad (\text{rigid body}), \quad \vec{L} = \vec{r}\times\vec{p} \quad (\text{particle})$$

$$\text{angular impulse} = \int\tau\,dt = \Delta L, \quad \tau_{net} = \frac{d\vec{L}}{dt}, \quad I_i\omega_i = I_f\omega_f \text{ if } \tau_{net} = 0$$

**Rolling:** $v_{cm} = R\omega$

$$v_{cm}(\text{roll down}) = \sqrt{\frac{2gh}{1+I/(mR^2)}}$$

**Orbit:** $v_{orb} = \sqrt{GM/r}$, $T^2 = \frac{4\pi^2}{GM}r^3$, $E_{total} = -\frac{GMm}{2r}$, $v_{esc} = \sqrt{2GM/r}$
