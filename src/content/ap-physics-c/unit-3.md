---
title: "Unit 3: Work, Energy, and Power"
unit: 3
---

# Unit 3 — Work, Energy, and Power

---

## 3.1 — Translational Kinetic Energy

$$K = \frac{1}{2}mv^2$$

Units: joules (J). Always $\geq 0$ — kinetic energy is a **scalar** quantity.

> [!note] Key Definition
> Kinetic energy depends on an object's speed relative to a chosen reference frame — **different observers, in different frames, may measure different values of the same object's translational kinetic energy.**

---

## 3.2 — Work

Work is the transfer of energy by a force acting over a displacement.

### Constant Force

$$W = \vec{F} \cdot \vec{d} = Fd\cos\theta$$

where $\theta$ is the angle between $\vec{F}$ and displacement $\vec{d}$. This is the **dot product** of two vectors: $\vec{A}\cdot\vec{B} = AB\cos\theta$.

- $W > 0$: force has component in direction of motion (energy added to object)
- $W < 0$: force has component opposing motion (energy removed)
- $W = 0$: force perpendicular to motion (e.g., normal force, centripetal force)

Units: $1 \text{ J} = 1 \text{ N·m} = 1 \text{ kg·m}^2/\text{s}^2$

### Variable Force — Integration

$$W = \int_{x_i}^{x_f} F(x)\,dx$$

Geometrically: **area under the $F$-vs-$x$ graph** (more precisely, the component of force parallel to the displacement, $F_\parallel$, vs. displacement).

> [!example] Example: Spring Work
> A spring ($k = 200$ N/m) is compressed 0.3 m from equilibrium. Work done by spring as it returns to equilibrium:
> $$W = \int_0^{-0.3} (-kx)\,dx = \left[\frac{kx^2}{2}\right]_{-0.3}^{0} = 0 - \frac{200(0.09)}{2} = -9 \text{ J}$$
> Wait — work done **on** the block by the spring as it pushes from $x = -0.3$ to $x = 0$:
> $$W_{spring} = \int_{-0.3}^{0} (-kx)\,dx = \frac{1}{2}(200)(0.3)^2 = 9 \text{ J} > 0 ✓$$

### Work by Multiple Forces

$$W_{net} = \sum W_i = W_{F_1} + W_{F_2} + \cdots$$

If the point of application of a force moves the same distance as the system's center of mass, the system can be modeled as a single object — only its kinetic energy can change. A force component *perpendicular* to the center of mass's displacement can change the object's direction without changing its kinetic energy.

### Conservative vs. Nonconservative Work

- Work done by a **conservative force** is **path-independent** — it depends only on the initial and final configurations of the system. If the system returns to its starting configuration, a conservative force does zero net work on it.
- Potential energy can be defined **only** for conservative forces (see 3.3).
- Work done by a **nonconservative force** is **path-dependent**. The most common nonconservative forces are **friction** and **air resistance**.

> [!warning] Energy Dissipated by Friction
> The energy dissipated by friction is typically equated to the friction force times the length of the path over which it acts:
> $$\Delta E_{mech} = F_f\,d\cos\theta$$
> This energy is converted to thermal energy (and sometimes sound) — it is *not* recoverable as mechanical energy.

### Work-Energy Theorem

$$W_{net} = \Delta K = K_f - K_i = \frac{1}{2}mv_f^2 - \frac{1}{2}mv_i^2$$

The net work done on an object equals its change in kinetic energy. This is derived directly from Newton's 2nd law:

$$W_{net} = \int F_{net}\,dx = \int ma\,dx = m\int \frac{dv}{dt}\,dx = m\int v\,dv = \frac{1}{2}mv_f^2 - \frac{1}{2}mv_i^2$$

> [!tip] Powerful Shortcut
> The work-energy theorem often lets you avoid kinematics equations when you don't need to know time or intermediate positions — just initial and final speeds.

---

## 3.3 — Potential Energy

Potential energy is stored energy associated with an object's position within a system. A system has potential energy only if the objects within it interact **exclusively through conservative forces**.

> [!note] Key Definition
> A **conservative force** is one where the work done is **path-independent** (depends only on start and end points). You can define a potential energy for it. Examples: gravity, spring, electrostatic. Non-conservative: friction, air resistance.

- Potential energy is a **scalar** quantity associated with the position of objects within a system.
- The choice of where $U = 0$ (the reference configuration) is arbitrary — pick whatever simplifies the analysis.
- General relationship between a conservative force and potential energy:
$$\Delta U = -\int_a^b \vec{F}_{cf}(r)\cdot d\vec{r}$$
- In one dimension, the conservative force is the negative slope of $U(x)$:
$$F_x = -\frac{dU}{dx}$$
In 3D: $\vec{F} = -\nabla U = -\left(\frac{\partial U}{\partial x}\hat{i} + \frac{\partial U}{\partial y}\hat{j} + \frac{\partial U}{\partial z}\hat{k}\right)$

### Gravitational Potential Energy

$$U_g = mgh$$

(taking $h = 0$ as reference level, near Earth's surface — valid because $g$ is nearly constant over the height range)

More generally (exact, for two spherical mass distributions):
$$U_g = -\frac{Gm_1m_2}{r}$$

(taking $U = 0$ at $r = \infty$)

### Spring (Elastic) Potential Energy

$$U_s = \frac{1}{2}k(\Delta x)^2$$

where $\Delta x$ is the displacement of the spring from its relaxed (equilibrium) length.

> [!note] Systems With More Than Two Objects
> The total potential energy of a system containing more than two objects equals the **sum of the potential energy of each pair** of objects within the system.

### Potential Energy Diagrams and Equilibrium

A plot of $U(x)$ reveals everything about the dynamics.

| Feature | Meaning |
|---|---|
| Slope of $U(x)$ | $F = -dU/dx$: negative slope → positive force (rightward); the force always points toward *decreasing* potential energy |
| Local minimum | **Stable equilibrium** — a small displacement produces a restoring force back toward the equilibrium position |
| Local maximum | **Unstable equilibrium** — a small displacement produces a force accelerating the object further away |
| $U = E_{total}$ | Turning point ($K = 0$, object stops and reverses) |
| $U < E_{total}$ | Allowed region (object can be here) |
| $U > E_{total}$ | Forbidden region (object cannot reach) |

> [!tip] Reading Energy Diagrams
> Draw a horizontal line at the total energy $E$. Where it intersects $U(x)$ are the **turning points**. The "valley" shapes are wells where objects oscillate.

---

## 3.4 — Conservation of Energy

- A system composed of a **single object** can only have kinetic energy.
- A system whose objects interact via conservative forces — or that can change shape reversibly — may have both kinetic and potential energy.
- **Mechanical energy** is the sum of a system's kinetic and potential energies: $E_{mech} = K + U$.
- Energy is conserved in **all** interactions: any change to one type of energy within a system must be balanced by an equivalent change in other energy types, or by a transfer of energy between the system and its surroundings. A system can always be chosen so that its total energy is constant.

### With Only Conservative Forces

$$E_{mech} = K + U = \text{constant}$$

$$K_i + U_i = K_f + U_f$$

$$\frac{1}{2}mv_i^2 + U_i = \frac{1}{2}mv_f^2 + U_f$$

If the work done on a selected system is zero and there are no nonconservative interactions within it, the system's total mechanical energy is constant.

### With Non-Conservative Forces (Friction, etc.)

$$W_{nc} = \Delta E_{mech} = \Delta K + \Delta U$$

If the work done on a selected system is nonzero, energy is being transferred between the system and its environment.

Friction converts mechanical energy to thermal energy:
$$E_{mech,f} = E_{mech,i} - |W_{friction}| = E_{mech,i} - f_k \cdot d$$

### Total Energy Conservation

Energy is always conserved. It just changes form:
$$E_{total} = K + U_{grav} + U_{spring} + E_{thermal} + \cdots = \text{const}$$

> [!example] Example: Block on a Ramp
> A 2 kg block slides from rest down a frictionless ramp of height $h = 5$ m.
>
> $$K_i + U_i = K_f + U_f$$
> $$0 + mgh = \frac{1}{2}mv^2 + 0$$
> $$v = \sqrt{2gh} = \sqrt{2(9.8)(5)} = 9.9 \text{ m/s}$$
>
> Note: the ramp angle doesn't matter — only height!

> [!example] Example: With Friction
> Same ramp but $\mu_k = 0.2$, ramp angle $\theta = 30°$. Find speed at bottom.
>
> Ramp length: $L = h/\sin\theta = 10$ m. Friction force: $f_k = \mu_k mg\cos\theta = 0.2(2)(9.8)\cos 30° = 3.39$ N
>
> $$W_{friction} = -f_k L = -33.9 \text{ J}$$
> $$\frac{1}{2}mv^2 = mgh + W_{friction} = 98 - 33.9 = 64.1 \text{ J}$$
> $$v = \sqrt{\frac{2(64.1)}{2}} = 8.0 \text{ m/s}$$

---

## 3.5 — Power

Power is the rate of energy transfer (rate of doing work) — either into/out of a system, or converted from one form to another within it.

$$P = \frac{dW}{dt} = \frac{d}{dt}\int \vec{F}\cdot d\vec{r} = \vec{F}\cdot\vec{v}$$

Units: $1 \text{ W} = 1 \text{ J/s}$. Also: 1 hp = 746 W.

**Average power:**
$$\bar{P} = \frac{\Delta E}{\Delta t} = \frac{\Delta W}{\Delta t}$$

**Instantaneous power:**
$$P_{inst} = \frac{dW}{dt}, \qquad P_{inst} = \vec{F}\cdot\vec{v} = Fv\cos\theta$$

> [!example] Example: Power of a Car
> A car ($m = 1200$ kg) travels at constant $v = 30$ m/s on a level road with drag force $f = 800$ N. Engine power needed:
>
> Since constant speed, engine force = drag = 800 N.
> $$P = Fv = 800 \times 30 = 24{,}000 \text{ W} = 24 \text{ kW}$$

---

## Key Equations Summary

$$W = \int \vec{F}\cdot d\vec{r}, \quad W = Fd\cos\theta \text{ (constant } F\text{)}$$

$$K = \frac{1}{2}mv^2, \quad W_{net} = \Delta K$$

$$U_g = mgh, \quad U_s = \frac{1}{2}kx^2$$

$$F = -\frac{dU}{dx}$$

$$K_i + U_i = K_f + U_f \quad \text{(conservative forces only)}$$

$$W_{nc} = \Delta K + \Delta U$$

$$P = \frac{dW}{dt} = \vec{F}\cdot\vec{v}$$
