---
title: "Unit 4: Linear Momentum"
unit: 4
---

# Unit 4 — Linear Momentum

---

## Momentum

Linear momentum is the product of mass and velocity:

$$\vec{p} = m\vec{v}$$

Units: kg·m/s. Vector quantity — direction same as velocity.

For a system of particles:
$$\vec{p}_{total} = \sum m_i \vec{v}_i = M\vec{v}_{cm}$$

The total momentum equals the total mass times the velocity of the center of mass.

---

## Newton's Second Law — Momentum Form

$$\vec{F}_{net} = \frac{d\vec{p}}{dt} = m\frac{d\vec{v}}{dt} = m\vec{a}$$

This is actually Newton's original formulation — more general than $F = ma$ because it handles variable-mass systems.

---

## Impulse

**Impulse** is the change in momentum, caused by a force acting over time.

$$\vec{J} = \Delta\vec{p} = \vec{p}_f - \vec{p}_i$$

### Impulse-Momentum Theorem

$$\vec{J} = \int_{t_i}^{t_f} \vec{F}(t)\,dt = \Delta\vec{p}$$

For constant force: $\vec{J} = \vec{F}\,\Delta t$

**Average force during a collision:**
$$\vec{F}_{avg} = \frac{\Delta\vec{p}}{\Delta t}$$

Geometrically: impulse = **area under the $F$-vs-$t$ graph**.

> [!example] Example: Impulse in a Collision
> A 0.5 kg ball hits a wall at 10 m/s and bounces back at 8 m/s. Collision lasts 0.02 s.
>
> Taking toward wall as positive:
> $$\Delta p = m(v_f - v_i) = 0.5(-8 - 10) = -9 \text{ kg·m/s}$$
> $$F_{avg} = \frac{\Delta p}{\Delta t} = \frac{-9}{0.02} = -450 \text{ N}$$
>
> Wall exerts 450 N on ball (away from wall). By Newton's 3rd law, ball exerts 450 N on wall (toward wall).

---

## Conservation of Linear Momentum

When the **net external force** on a system is zero:

$$\frac{d\vec{p}_{total}}{dt} = 0 \implies \vec{p}_{total} = \text{constant}$$

$$\vec{p}_{i,total} = \vec{p}_{f,total}$$

$$m_1\vec{v}_{1i} + m_2\vec{v}_{2i} = m_1\vec{v}_{1f} + m_2\vec{v}_{2f}$$

> [!note] Key Definition
> Momentum is conserved when $\vec{F}_{ext} = 0$. During collisions, even if friction exists, the collision forces (internal) are so large and brief that external impulse is negligible — so momentum is approximately conserved during the collision.

---

## Types of Collisions

| Type | Momentum | Kinetic Energy | Defining Feature |
|---|---|---|---|
| Elastic | Conserved | Conserved | Objects bounce; no energy lost |
| Inelastic | Conserved | **Not** conserved | Some KE → heat/deformation |
| Perfectly Inelastic | Conserved | **Not** conserved (maximum loss) | Objects stick together |

### Elastic Collisions (1D)

Both $p$ and $KE$ conserved → two equations, two unknowns:

$$m_1 v_{1i} + m_2 v_{2i} = m_1 v_{1f} + m_2 v_{2f}$$
$$\frac{1}{2}m_1 v_{1i}^2 + \frac{1}{2}m_2 v_{2i}^2 = \frac{1}{2}m_1 v_{1f}^2 + \frac{1}{2}m_2 v_{2f}^2$$

Solution formulas (1D elastic, object 2 initially at rest):
$$v_{1f} = \frac{m_1 - m_2}{m_1 + m_2}v_{1i}, \quad v_{2f} = \frac{2m_1}{m_1 + m_2}v_{1i}$$

Special cases:
- $m_1 = m_2$: $v_{1f} = 0$, $v_{2f} = v_{1i}$ — objects swap velocities
- $m_1 \gg m_2$: $v_{1f} \approx v_{1i}$, $v_{2f} \approx 2v_{1i}$ — heavy hits light, light flies off fast
- $m_1 \ll m_2$: $v_{1f} \approx -v_{1i}$, $v_{2f} \approx 0$ — light bounces off heavy

> [!tip] Elastic Shortcut
> For elastic collisions, the **relative velocity reverses**:
> $$v_{1f} - v_{2f} = -(v_{1i} - v_{2i})$$
> Use this with momentum conservation to avoid quadratic equations.

### Perfectly Inelastic Collisions

Objects stick together → final velocity $v_f$:

$$m_1 v_{1i} + m_2 v_{2i} = (m_1 + m_2)v_f$$

$$v_f = \frac{m_1 v_{1i} + m_2 v_{2i}}{m_1 + m_2}$$

Energy lost:
$$\Delta KE = KE_i - KE_f = \frac{1}{2}\frac{m_1 m_2}{m_1+m_2}(v_{1i}-v_{2i})^2$$

> [!example] Example: Ballistic Pendulum
> A bullet ($m = 0.01$ kg, $v = 400$ m/s) embeds in a block ($M = 2$ kg) hanging from a string. How high does the block rise?
>
> **Collision** (momentum conserved):
> $$v_f = \frac{mv}{m+M} = \frac{0.01(400)}{2.01} = 1.99 \text{ m/s}$$
>
> **After collision** (energy conserved):
> $$\frac{1}{2}(m+M)v_f^2 = (m+M)gh$$
> $$h = \frac{v_f^2}{2g} = \frac{(1.99)^2}{19.6} = 0.202 \text{ m}$$

---

## 2D Collisions

Momentum is conserved independently in each direction:

$$m_1 v_{1ix} + m_2 v_{2ix} = m_1 v_{1fx} + m_2 v_{2fx}$$
$$m_1 v_{1iy} + m_2 v_{2iy} = m_1 v_{1fy} + m_2 v_{2fy}$$

> [!example] Example: 2D Perfectly Inelastic
> Car A (1000 kg) moving east at 20 m/s collides with Car B (1500 kg) moving north at 15 m/s. They stick together. Find final velocity.
>
> $$p_x: \quad 1000(20) = 2500\,v_{fx} \implies v_{fx} = 8 \text{ m/s (east)}$$
> $$p_y: \quad 1500(15) = 2500\,v_{fy} \implies v_{fy} = 9 \text{ m/s (north)}$$
> $$|\vec{v}_f| = \sqrt{8^2 + 9^2} = 12.0 \text{ m/s}, \quad \theta = \arctan(9/8) = 48.4° \text{ N of E}$$

---

## Center of Mass Motion

The CM moves at constant velocity when $\vec{F}_{ext} = 0$, regardless of what happens internally.

$$\vec{v}_{cm} = \frac{\sum m_i \vec{v}_i}{M_{total}} = \frac{\vec{p}_{total}}{M_{total}}$$

If no external forces: $\vec{v}_{cm}$ = constant throughout any collision.

**CM reference frame:** frame where $\vec{p}_{total} = 0$. In elastic collisions, speeds are unchanged but directions reverse in this frame.

---

## Explosions

A "reverse collision" — one object breaks into pieces. Momentum is still conserved.

> [!example] Example: Explosion
> A 5 kg firecracker at rest explodes into two pieces: 2 kg and 3 kg.
> $$0 = 2v_1 + 3v_2 \implies v_1 = -\frac{3}{2}v_2$$
>
> If $v_2 = 4$ m/s (right), then $v_1 = -6$ m/s (left). KE is created from chemical energy.

---

## Key Equations Summary

$$\vec{p} = m\vec{v}, \quad \vec{F}_{net} = \frac{d\vec{p}}{dt}$$

$$\vec{J} = \Delta\vec{p} = \int \vec{F}\,dt$$

$$\vec{p}_{total,i} = \vec{p}_{total,f} \quad (\vec{F}_{ext} = 0)$$

**Elastic** (2 objects, #2 at rest):
$$v_{1f} = \frac{m_1-m_2}{m_1+m_2}v_{1i}, \quad v_{2f} = \frac{2m_1}{m_1+m_2}v_{1i}$$

**Perfectly inelastic:**
$$v_f = \frac{m_1 v_{1i} + m_2 v_{2i}}{m_1 + m_2}$$
