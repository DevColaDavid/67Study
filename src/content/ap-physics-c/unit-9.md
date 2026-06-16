---
title: "Unit 9: Electric Potential"
unit: 9
---

# Unit 9 — Electric Potential

---

## Electric Potential Energy

The electric potential energy $U$ is the work done by an external agent moving a charge from infinity to a point, against the electric force (or equivalently, the negative work done by the electric force).

For two point charges $q$ and $Q$ separated by distance $r$:

$$U = k_e\frac{qQ}{r} = \frac{qQ}{4\pi\epsilon_0 r}$$

- $U > 0$: like charges (repulsive — takes work to push them together)
- $U < 0$: unlike charges (attractive — system releases energy as they approach)
- $U = 0$ at $r = \infty$

For a system of multiple charges, $U = $ sum over all unique pairs.

---

## Electric Potential

Electric potential $V$ is the electric potential energy per unit positive charge:

$$V = \frac{U}{q_0} \quad \text{(volts, V = J/C)}$$

### Potential Due to a Point Charge

$$V = k_e\frac{q}{r} = \frac{q}{4\pi\epsilon_0 r}$$

- Scalar quantity (no direction!)
- Positive for positive charges, negative for negative charges
- $V = 0$ at $r = \infty$

### Superposition of Potentials

$$V_{total} = \sum_i k_e\frac{q_i}{r_i}$$

Much easier than superposition of fields (scalar addition, no vector components).

> [!tip] Scalar vs. Vector
> $V$ is scalar — just add numbers. $\vec{E}$ is a vector — must add components. When possible, use potential instead of field calculations.

---

## Relationship Between $E$ and $V$

Electric field is the **negative gradient** of potential:

$$\vec{E} = -\nabla V = -\left(\frac{\partial V}{\partial x}\hat{i} + \frac{\partial V}{\partial y}\hat{j} + \frac{\partial V}{\partial z}\hat{k}\right)$$

In one dimension:
$$E_x = -\frac{dV}{dx}$$

Work done by the electric field moving charge $q$ from $A$ to $B$:

$$W_{E} = q(V_A - V_B) = -\Delta U = q\,\Delta V_{A\to B}$$

Potential difference (voltage):
$$V_B - V_A = -\int_A^B \vec{E}\cdot d\vec{l}$$

> [!note] Key Definition
> **Voltage** ($\Delta V$) is the potential difference between two points. Current flows from high to low potential (conventional current). Potential is defined up to a constant — only differences matter physically.

> [!example] Example: Uniform Field
> Parallel plates with $E = 1000$ V/m, separation $d = 0.02$ m.
>
> $\Delta V = -E\cdot d = -1000(0.02) = -20$ V (potential drops in direction of $\vec{E}$)
>
> Taking the positive plate as $V = 0$: negative plate at $V = -20$ V.
>
> Work done by field moving $q = 2\,\mu$C from + to − plate:
> $W = q(V_+ - V_-) = (2\times10^{-6})(0-(-20)) = 4\times10^{-5}$ J

---

## Equipotential Surfaces

Surfaces of constant $V$. Key properties:

- $\vec{E}$ is always **perpendicular** to equipotential surfaces
- No work done moving a charge along an equipotential ($\Delta V = 0$ → $W = 0$)
- Field lines point from high-V to low-V equipotentials
- Equipotentials for a point charge are concentric spheres
- Equipotentials for a uniform field are parallel planes perpendicular to $\vec{E}$
- Conductor surfaces are always equipotentials (in electrostatic equilibrium)

---

## Potential of Continuous Charge Distributions

$$V = \int k_e\frac{dq}{r}$$

> [!example] Example: Ring of Charge
> Ring radius $R$, total charge $Q$. Find $V$ on the axis at distance $x$.
>
> Every $dq$ is the same distance $r = \sqrt{R^2+x^2}$ from point $P$:
> $$V = \int k_e\frac{dq}{\sqrt{R^2+x^2}} = \frac{k_eQ}{\sqrt{R^2+x^2}}$$
>
> From this, find $E_x$:
> $$E_x = -\frac{dV}{dx} = \frac{k_eQx}{(R^2+x^2)^{3/2}} \checkmark$$
> (matches the direct field calculation from Unit 8)

> [!example] Example: Uniformly Charged Disk
> Disk radius $R$, surface charge density $\sigma$. Treat as rings:
>
> $$V = \int_0^R \frac{k_e\sigma(2\pi r\,dr)}{\sqrt{r^2+x^2}} = \frac{\sigma}{2\epsilon_0}\left(\sqrt{R^2+x^2}-x\right)$$

---

## Energy Conservation with Moving Charges

For a charge $q$ moving between points where potential changes by $\Delta V$:

$$\Delta K + \Delta U = 0 \quad \text{(no friction)}$$

$$\Delta K = -q\Delta V = q(V_i - V_f)$$

$$\frac{1}{2}mv_f^2 - \frac{1}{2}mv_i^2 = q(V_i - V_f)$$

### Electron Volt (eV)

The kinetic energy gained by an elementary charge moving through 1 volt:

$$1 \text{ eV} = 1.602\times10^{-19} \text{ J}$$

> [!example] Example: Proton Accelerated
> A proton ($q = e$, $m = 1.67\times10^{-27}$ kg) is accelerated from rest through $\Delta V = 5000$ V.
>
> $$\Delta K = q\Delta V = (1.6\times10^{-19})(5000) = 8\times10^{-16} \text{ J}$$
>
> $$v = \sqrt{\frac{2\Delta K}{m}} = \sqrt{\frac{2(8\times10^{-16})}{1.67\times10^{-27}}} = 9.79\times10^5 \text{ m/s}$$

---

## Potential Inside and Outside Conductors

For a conductor in electrostatic equilibrium:

1. $\vec{E} = 0$ inside the conductor → $V = $ constant inside (and on surface)
2. $\vec{E}$ is perpendicular to the surface just outside
3. Excess charge resides on the surface
4. Surface charge density (and $E$ just outside) is greatest where curvature is greatest (sharp points → lightning rods)

**Hollow conductor**: $E = 0$ and $V = $ const inside the cavity (no charges inside) — **Faraday cage**.

### Potential of a Charged Sphere (radius $R$, charge $Q$)

$$V = \begin{cases} \dfrac{k_eQ}{r} & r \geq R \text{ (outside: same as point charge)} \\[8pt] \dfrac{k_eQ}{R} & r \leq R \text{ (inside/surface: constant)} \end{cases}$$

---

## Potential Due to Multiple Configurations

**Two point charges** ($+q$ and $-q$ separated by $2a$) — electric dipole:

$$V = k_e\frac{q}{r_+} + k_e\frac{(-q)}{r_-}$$

At large distances ($r \gg a$): $V = k_e\frac{p\cos\theta}{r^2}$ where $p = 2qa$ is the dipole moment.

---

## Key Equations Summary

$$U = k_e\frac{q_1 q_2}{r}$$

$$V = k_e\frac{q}{r}, \quad V = \int k_e\frac{dq}{r}$$

$$V_{total} = \sum_i k_e\frac{q_i}{r_i}$$

$$\vec{E} = -\nabla V, \quad E_x = -\frac{dV}{dx}$$

$$V_B - V_A = -\int_A^B \vec{E}\cdot d\vec{l}$$

$$W = q(V_A - V_B) = -\Delta U$$

$$\Delta K = q(V_i - V_f), \quad 1\text{ eV} = 1.6\times10^{-19}\text{ J}$$
