---
title: "Unit 6: Energy and Momentum of Rotating Systems"
unit: 6
---

# Unit 6 — Energy and Momentum of Rotating Systems

---

## Rotational Kinetic Energy

A rotating body has kinetic energy due to the motion of its mass elements.

$$K_{rot} = \frac{1}{2}I\omega^2$$

This is the rotational analog of $K_{trans} = \frac{1}{2}mv^2$.

For an object that both **translates and rotates** (e.g., a rolling ball):

$$K_{total} = K_{trans} + K_{rot} = \frac{1}{2}mv_{cm}^2 + \frac{1}{2}I_{cm}\omega^2$$

---

## Rolling Without Slipping

When an object rolls without slipping, the contact point is instantaneously at rest. This gives a **constraint** between linear and angular quantities:

$$v_{cm} = R\omega, \quad a_{cm} = R\alpha$$

> [!note] Key Definition
> **Rolling without slipping** means the velocity at the contact point is zero. The contact point is the instantaneous center of rotation for the rolling object.

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

---

## Angular Momentum

Angular momentum is the rotational analog of linear momentum.

### For a Particle

$$\vec{L} = \vec{r} \times \vec{p} = \vec{r} \times m\vec{v}$$

$$|\vec{L}| = rmv\sin\theta = rp\sin\theta$$

where $\theta$ is the angle between $\vec{r}$ and $\vec{v}$.

### For a Rigid Body Rotating About a Fixed Axis

$$L = I\omega$$

(Scalar form for rotation about a fixed axis)

### Newton's Second Law for Rotation

$$\vec{\tau}_{net} = \frac{d\vec{L}}{dt}$$

This is more general than $\tau = I\alpha$ — it applies even when $I$ changes.

---

## Conservation of Angular Momentum

When $\vec{\tau}_{net} = 0$:

$$\vec{L} = I\omega = \text{constant}$$

$$I_i\omega_i = I_f\omega_f$$

> [!example] Example: Figure Skater
> A skater spinning at $\omega_i = 2$ rad/s pulls arms in, reducing $I$ from 3 kg·m² to 1 kg·m².
> $$I_i\omega_i = I_f\omega_f \implies \omega_f = \frac{I_i}{I_f}\omega_i = \frac{3}{1}(2) = 6 \text{ rad/s}$$
>
> KE increases: $K_i = \frac{1}{2}(3)(2^2) = 6$ J, $K_f = \frac{1}{2}(1)(6^2) = 18$ J. The extra 12 J comes from the skater's muscles doing work pulling the arms in.

> [!example] Example: Person on a Turntable
> A 60 kg person stands at the edge of a turntable ($I_{table} = 500$ kg·m², $R = 2$ m) at rest. They walk to the center. Final $\omega$ of table?
>
> $L = 0$ always (no external torque). Let table spin at $\omega$, person walks to center.
>
> Initial: $L_i = 0$
> Final: $I_{table}\omega + I_{person}\omega_{person} = 0$
>
> When person reaches center, $I_{person} = 0$, so $I_{table}\omega = 0$ → $\omega = 0$.
>
> More interesting: when person is at radius $r$, $I_{person} = mr^2$. By conservation:
> $$(500 + 60\cdot4)\omega = 0 \implies \omega = 0$$ initially.
> As they walk inward: $(500)\omega_{table} + (60r^2)\omega_{person} = 0$.
> Since person walks (not rotates with table), complex system.

> [!tip] Angular Momentum Analogy Table
> | Linear | Angular |
> |---|---|
> | $\vec{p} = m\vec{v}$ | $\vec{L} = I\vec{\omega}$ |
> | $\vec{F} = d\vec{p}/dt$ | $\vec{\tau} = d\vec{L}/dt$ |
> | $\vec{F}_{ext}=0 \Rightarrow \vec{p}=$ const | $\vec{\tau}_{ext}=0 \Rightarrow \vec{L}=$ const |

---

## Orbits

For a satellite orbiting mass $M$ in a circular orbit of radius $r$:

**Orbital speed:**
$$\frac{GMm}{r^2} = \frac{mv^2}{r} \implies v_{orb} = \sqrt{\frac{GM}{r}}$$

**Orbital period:**
$$T = \frac{2\pi r}{v} = 2\pi r\sqrt{\frac{r}{GM}} = \frac{2\pi r^{3/2}}{\sqrt{GM}}$$

### Kepler's Laws

1. **Elliptical Orbits:** Planets orbit the Sun in ellipses with the Sun at one focus.
2. **Equal Areas:** A line from the Sun to a planet sweeps equal areas in equal times — consequence of angular momentum conservation ($\vec{\tau}_{grav} = 0$).
3. **Period Law:** $T^2 \propto r^3$ (for circular orbits: $T^2 = \frac{4\pi^2}{GM}r^3$)

**Kepler's Third Law:**
$$\frac{T^2}{r^3} = \frac{4\pi^2}{GM} = \text{constant (for all objects orbiting same mass } M\text{)}$$

### Angular Momentum in Orbits

For any orbit (circular or elliptical), angular momentum is conserved since gravity is a central force (always directed toward the center → $\tau = 0$):

$$L = mvr = \text{const} \quad \text{(circular orbit)}$$

For elliptical orbits, at perihelion (closest) and aphelion (farthest):
$$m v_p r_p = m v_a r_a \implies v_p r_p = v_a r_a$$

Faster at perihelion, slower at aphelion.

### Gravitational Potential Energy and Total Energy in Orbit

$$U = -\frac{GMm}{r}$$

$$E_{total} = K + U = \frac{1}{2}mv^2 - \frac{GMm}{r}$$

For circular orbit (substituting $v^2 = GM/r$):
$$E_{total} = -\frac{GMm}{2r}$$

The total energy is negative (bound orbit). As $r$ increases, $E$ becomes less negative (more energy needed to orbit farther away — counterintuitive, but you add energy to move to a higher orbit).

> [!note] Binding Energy
> $|E_{total}| = \dfrac{GMm}{2r}$ is the energy needed to escape from the orbit to infinity ($E = 0$). To raise an orbit, you add energy, which paradoxically slows the satellite (larger orbit, slower speed, but more total energy).

---

## Key Equations Summary

$$K_{rot} = \frac{1}{2}I\omega^2, \quad K_{total} = \frac{1}{2}mv_{cm}^2 + \frac{1}{2}I_{cm}\omega^2$$

**Rolling:** $v_{cm} = R\omega$

$$v_{cm}(\text{roll down}) = \sqrt{\frac{2gh}{1+I/(mR^2)}}$$

$$L = I\omega \quad (\text{rigid body}), \quad \vec{L} = \vec{r}\times\vec{p} \quad (\text{particle})$$

$$\vec{\tau}_{net} = \frac{d\vec{L}}{dt}, \quad I_i\omega_i = I_f\omega_f \text{ if } \tau_{net} = 0$$

**Orbit:** $v_{orb} = \sqrt{GM/r}$, $T^2 = \frac{4\pi^2}{GM}r^3$, $E_{total} = -\frac{GMm}{2r}$
