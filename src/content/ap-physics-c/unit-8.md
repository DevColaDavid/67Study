---
title: "Unit 8: Electric Charges, Fields, and Gauss's Law"
unit: 8
---

# Unit 8 — Electric Charges, Fields, and Gauss's Law

---

## Electric Charge

- Two types: **positive** and **negative**
- Like charges repel, opposite charges attract
- Charge is **conserved** — total charge in a closed system is constant
- Charge is **quantized** — comes in multiples of $e = 1.602\times10^{-19}$ C (elementary charge)

| Particle | Charge | Mass |
|---|---|---|
| Proton | $+e$ | $1.673\times10^{-27}$ kg |
| Electron | $-e$ | $9.109\times10^{-31}$ kg |
| Neutron | $0$ | $1.675\times10^{-27}$ kg |

**Conductors**: charges move freely (metals — free electrons).  
**Insulators**: charges do not move (rubber, glass, plastic).  
**Semiconductors**: between conductors and insulators (silicon).

---

## Coulomb's Law

The electrostatic force between two point charges $q_1$ and $q_2$ separated by distance $r$:

$$\vec{F}_{12} = k_e\frac{q_1 q_2}{r^2}\hat{r}_{12}$$

$$k_e = \frac{1}{4\pi\epsilon_0} = 8.99\times10^9 \text{ N·m}^2/\text{C}^2$$

$$\epsilon_0 = 8.854\times10^{-12} \text{ C}^2/(\text{N·m}^2) \quad \text{(permittivity of free space)}$$

- $\hat{r}_{12}$ points from $q_1$ toward $q_2$
- $F > 0$ (repulsive) if $q_1 q_2 > 0$; $F < 0$ (attractive) if $q_1 q_2 < 0$
- Same inverse-square form as gravity, but can be repulsive

**Superposition**: total force on a charge = vector sum of forces from all other charges:
$$\vec{F}_{total} = \sum_i \vec{F}_i$$

---

## Electric Field

The electric field at a point is the force per unit (positive test) charge:

$$\vec{E} = \frac{\vec{F}}{q_0} \quad \text{(N/C or V/m)}$$

### Field of a Point Charge

$$\vec{E} = k_e\frac{q}{r^2}\hat{r}$$

- Points **away** from positive charges
- Points **toward** negative charges

### Superposition of Fields

$$\vec{E}_{total} = \sum_i \vec{E}_i = \sum_i k_e\frac{q_i}{r_i^2}\hat{r}_i$$

### Electric Field Lines

- Direction: tangent to line = direction of $\vec{E}$
- Density: more lines per area = stronger field
- Start on $+$ charges, end on $-$ charges
- Never cross

---

## Electric Field of Continuous Charge Distributions

Replace the sum with an integral over the charge distribution:

$$\vec{E} = \int k_e\frac{dq}{r^2}\hat{r} = \frac{1}{4\pi\epsilon_0}\int\frac{dq}{r^2}\hat{r}$$

Charge element $dq$:
- Linear charge density $\lambda$ (C/m): $dq = \lambda\,dl$
- Surface charge density $\sigma$ (C/m²): $dq = \sigma\,dA$
- Volume charge density $\rho$ (C/m³): $dq = \rho\,dV$

> [!example] Example: Finite Line of Charge
> A rod of length $L$, total charge $Q$, lies along the $x$-axis from $-L/2$ to $L/2$. Find $E$ at a point $P$ on the perpendicular bisector at distance $d$.
>
> By symmetry, $x$-components cancel. Only $y$-component survives:
>
> $$dE_y = k_e\frac{dq}{r^2}\cos\theta, \quad r = \sqrt{x^2+d^2}, \quad \cos\theta = \frac{d}{\sqrt{x^2+d^2}}$$
>
> $$E = k_e\lambda\int_{-L/2}^{L/2}\frac{d\,dx}{(x^2+d^2)^{3/2}} = \frac{k_e Q}{d\sqrt{d^2+(L/2)^2}}$$
>
> As $L\to\infty$: $E = \frac{\lambda}{2\pi\epsilon_0 d}$ (infinite line of charge)

> [!example] Example: Ring of Charge
> Ring of radius $R$, total charge $Q$. Find $E$ on the axis at distance $x$ from center.
>
> By symmetry, only axial ($x$) component survives:
>
> $$dE_x = k_e\frac{dq}{r^2}\cdot\frac{x}{r} = k_e\frac{dq\cdot x}{(R^2+x^2)^{3/2}}$$
>
> $$E = \frac{k_e Qx}{(R^2+x^2)^{3/2}}$$
>
> Maximum at $x = R/\sqrt{2}$. At $x\gg R$: $E\approx k_eQ/x^2$ (looks like point charge).

> [!example] Example: Disk of Charge
> Disk of radius $R$, surface charge density $\sigma$. Find $E$ on axis.
>
> Treat as rings of radius $r$, width $dr$: $dq = \sigma(2\pi r\,dr)$
>
> $$E = \frac{\sigma}{2\epsilon_0}\left(1 - \frac{x}{\sqrt{x^2+R^2}}\right)$$
>
> As $R\to\infty$ (infinite plane): $E = \frac{\sigma}{2\epsilon_0}$ (uniform, independent of distance!)

---

## Electric Flux

Electric flux measures how much field passes through a surface:

$$\Phi_E = \int\vec{E}\cdot d\vec{A} = \int E\cos\theta\,dA$$

$d\vec{A}$ is the area element vector — magnitude = $dA$, direction = outward normal.

Units: N·m²/C

For uniform field through flat surface:
$$\Phi_E = \vec{E}\cdot\vec{A} = EA\cos\theta$$

---

## Gauss's Law

The total electric flux through any **closed** surface equals the enclosed charge divided by $\epsilon_0$:

$$\oint \vec{E}\cdot d\vec{A} = \frac{Q_{enc}}{\epsilon_0}$$

This is one of **Maxwell's four equations**. Equivalent to Coulomb's law for static charges, but much more powerful for symmetric charge distributions.

### Strategy for Applying Gauss's Law

1. **Identify symmetry** (spherical, cylindrical, or planar)
2. **Choose a Gaussian surface** that matches the symmetry — $\vec{E}$ must be constant and parallel to $d\vec{A}$ everywhere on the surface (or perpendicular, so $\vec{E}\cdot d\vec{A}=0$)
3. **Factor out $E$** from the integral: $\oint E\,dA = E \cdot A_{surface}$
4. **Find $Q_{enc}$** — only charge inside the Gaussian surface matters
5. **Solve for $E$**

### Spherical Symmetry — Point Charge or Uniform Sphere

Gaussian surface: sphere of radius $r$. $E$ is constant on surface, $\vec{E}\parallel d\vec{A}$:

$$E(4\pi r^2) = \frac{Q_{enc}}{\epsilon_0} \implies E = \frac{Q_{enc}}{4\pi\epsilon_0 r^2} = k_e\frac{Q_{enc}}{r^2}$$

**Solid insulating sphere** (uniform $\rho$, total charge $Q$, radius $R$):

- Outside ($r > R$): $Q_{enc} = Q$ → $E = k_eQ/r^2$ (same as point charge)
- Inside ($r < R$): $Q_{enc} = Q(r/R)^3$ → $E = k_eQr/R^3$ (linear in $r$)

**Spherical conductor** (charge on surface):
- Outside: $E = k_eQ/r^2$
- Inside: $E = 0$ (always, for any conductor in electrostatic equilibrium)

### Cylindrical Symmetry — Infinite Line/Cylinder

Gaussian surface: cylinder of radius $r$, length $L$. Flux through end caps = 0 ($\vec{E}\perp\hat{n}$ on end caps):

$$E(2\pi r L) = \frac{\lambda L}{\epsilon_0} \implies E = \frac{\lambda}{2\pi\epsilon_0 r}$$

Direction: radially outward from positive line charge.

### Planar Symmetry — Infinite Sheet

Gaussian surface: pillbox (cylinder) straddling the sheet, cross-section area $A$:

Flux through curved side = 0; both end caps contribute:

$$2EA = \frac{\sigma A}{\epsilon_0} \implies E = \frac{\sigma}{2\epsilon_0}$$

Field points away from positive sheet on both sides, magnitude **constant** (no $r$ dependence).

**Two parallel plates** (equal and opposite charge $\pm\sigma$):
- Between plates: $E = \sigma/\epsilon_0$ (fields add)
- Outside: $E = 0$ (fields cancel)

> [!tip] Gauss's Law Summary
> | Geometry | Gaussian Surface | $E$ field |
> |---|---|---|
> | Point charge / sphere | Sphere radius $r$ | $kQ/r^2$ |
> | Infinite line / cylinder | Cylinder radius $r$ | $\lambda/(2\pi\epsilon_0 r)$ |
> | Infinite plane / slab | Pillbox | $\sigma/(2\epsilon_0)$ |

---

## Key Equations Summary

$$F = k_e\frac{q_1 q_2}{r^2}, \quad k_e = \frac{1}{4\pi\epsilon_0}$$

$$\vec{E} = k_e\frac{q}{r^2}\hat{r}, \quad \vec{E} = \int k_e\frac{dq}{r^2}\hat{r}$$

$$\Phi_E = \oint\vec{E}\cdot d\vec{A}$$

$$\oint\vec{E}\cdot d\vec{A} = \frac{Q_{enc}}{\epsilon_0} \quad \text{(Gauss's Law)}$$

**Infinite line:** $E = \dfrac{\lambda}{2\pi\epsilon_0 r}$

**Infinite plane:** $E = \dfrac{\sigma}{2\epsilon_0}$
