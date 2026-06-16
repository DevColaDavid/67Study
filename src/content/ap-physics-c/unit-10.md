---
title: "Unit 10: Conductors and Capacitors"
unit: 10
---

# Unit 10 — Conductors and Capacitors

---

## Conductors in Electrostatic Equilibrium

When charges stop moving (electrostatic equilibrium), for **any conductor**:

1. $\vec{E} = 0$ everywhere inside
2. $V = $ constant throughout (interior + surface)
3. Net charge resides entirely on the **surface**
4. $\vec{E}$ just outside the surface is perpendicular to the surface and equals $\sigma/\epsilon_0$
5. Surface charge density $\sigma$ is highest at points of greatest curvature

**Why $E = 0$ inside?** If there were a field inside, free electrons would accelerate until they rearranged to cancel it — equilibrium requires $E = 0$.

**Cavity inside a conductor**: if no charge inside the cavity, $E = 0$ and $V = $ const inside. Charge on outer surface is unaffected by what's in the cavity. This is the **Faraday cage** — the interior is shielded from external fields.

If charge $+q$ is placed inside the cavity, it induces $-q$ on the inner surface and $+q$ on the outer surface.

---

## Capacitance

A **capacitor** is two conductors (plates) separated by an insulator (gap or dielectric), designed to store charge and energy.

When charge $+Q$ is placed on one plate and $-Q$ on the other, a potential difference $V$ develops. **Capacitance** is the ratio:

$$C = \frac{Q}{V} \quad \text{(farads, F = C/V)}$$

$C$ depends only on **geometry** — not on $Q$ or $V$.

---

## Parallel Plate Capacitor

Two plates of area $A$, separation $d$, charge $\pm Q$:

$$\sigma = \frac{Q}{A}, \quad E = \frac{\sigma}{\epsilon_0} = \frac{Q}{\epsilon_0 A}, \quad V = Ed = \frac{Qd}{\epsilon_0 A}$$

$$\boxed{C = \frac{\epsilon_0 A}{d}}$$

Larger area → more charge for same voltage → larger $C$.  
Smaller gap → stronger field per volt → larger $C$.

---

## Spherical Capacitor

Inner sphere radius $a$, outer sphere radius $b$, charge $+Q$ on inner, $-Q$ on outer:

$$E = k_e\frac{Q}{r^2} \quad (a < r < b)$$

$$V = k_e Q\left(\frac{1}{a} - \frac{1}{b}\right)$$

$$C = \frac{4\pi\epsilon_0 ab}{b-a}$$

As $b\to\infty$ (isolated sphere): $C = 4\pi\epsilon_0 a = a/k_e$

---

## Cylindrical Capacitor

Inner radius $a$, outer radius $b$, length $L$, charge per length $\lambda = Q/L$:

$$E = \frac{\lambda}{2\pi\epsilon_0 r} \quad (a < r < b)$$

$$V = \frac{\lambda}{2\pi\epsilon_0}\ln\!\left(\frac{b}{a}\right)$$

$$C = \frac{2\pi\epsilon_0 L}{\ln(b/a)}$$

---

## Capacitors in Circuits

### Series (same $Q$, voltages add)

$$\frac{1}{C_{eq}} = \frac{1}{C_1} + \frac{1}{C_2} + \cdots$$

$C_{eq} < $ each individual capacitor. Voltage splits: $V = V_1 + V_2$.

### Parallel (same $V$, charges add)

$$C_{eq} = C_1 + C_2 + \cdots$$

$C_{eq} > $ each individual capacitor. Charge splits: $Q = Q_1 + Q_2$.

> [!tip] Memory Aid
> Capacitors combine **opposite** to resistors:
> - Parallel capacitors add (like series resistors)
> - Series capacitors use the reciprocal rule (like parallel resistors)

---

## Energy Stored in a Capacitor

Work done charging a capacitor from $0$ to $Q$:

$$dW = V\,dq = \frac{q}{C}\,dq$$

$$U = \int_0^Q \frac{q}{C}\,dq = \frac{Q^2}{2C} = \frac{1}{2}CV^2 = \frac{1}{2}QV$$

**Energy density** (energy per unit volume) in the electric field:

$$u_E = \frac{1}{2}\epsilon_0 E^2 \quad \text{(J/m}^3\text{)}$$

This is a universal result — the energy is stored in the **field**, not the charges.

> [!example] Example: Energy in a Capacitor
> A $10\,\mu$F capacitor is charged to 12 V.
>
> $$U = \frac{1}{2}CV^2 = \frac{1}{2}(10\times10^{-6})(144) = 7.2\times10^{-4}\text{ J} = 0.72\text{ mJ}$$
>
> $Q = CV = (10\times10^{-6})(12) = 1.2\times10^{-4}$ C = 0.12 mC

---

## Dielectrics

A **dielectric** is an insulating material placed between capacitor plates.

When inserted, the dielectric becomes **polarized** — induced dipoles inside partially cancel the applied field, reducing $E$ and $V$ while $Q$ remains the same (for isolated capacitor).

$$C_{dielectric} = \kappa C_0 = \kappa\frac{\epsilon_0 A}{d} = \frac{\epsilon A}{d}$$

where $\kappa \geq 1$ is the **dielectric constant** (relative permittivity), and $\epsilon = \kappa\epsilon_0$.

**Effect of inserting dielectric** (isolated capacitor, constant $Q$):

| Quantity | Change |
|---|---|
| $C$ | Increases by $\kappa$ |
| $V$ | Decreases by $\kappa$ |
| $E$ | Decreases by $\kappa$ |
| $U$ | Decreases by $\kappa$ |

**Effect with constant $V$ (connected to battery)**:

| Quantity | Change |
|---|---|
| $C$ | Increases by $\kappa$ |
| $Q$ | Increases by $\kappa$ |
| $E$ | Unchanged |
| $U$ | Increases by $\kappa$ |

> [!note] Dielectric Constant Values
> | Material | $\kappa$ |
> |---|---|
> | Vacuum | 1 (exact) |
> | Air | ≈ 1.0006 |
> | Glass | 5–10 |
> | Water | ~80 |
> | Barium titanate | ~1200 |

**Gauss's Law with dielectric:**
$$\oint \kappa\epsilon_0\vec{E}\cdot d\vec{A} = Q_{free,enc}$$

or equivalently using displacement field $\vec{D} = \epsilon\vec{E}$:
$$\oint\vec{D}\cdot d\vec{A} = Q_{free,enc}$$

---

## Dielectric Breakdown

Every dielectric has a **dielectric strength** — maximum $E$ field before it becomes conducting (breakdown, sparking). For air: $E_{max} \approx 3\times10^6$ V/m.

---

## Key Equations Summary

$$C = \frac{Q}{V}$$

**Parallel plate:** $C = \dfrac{\epsilon_0 A}{d}$, $E = \dfrac{\sigma}{\epsilon_0} = \dfrac{V}{d}$

**Spherical:** $C = \dfrac{4\pi\epsilon_0 ab}{b-a}$

**Cylindrical:** $C = \dfrac{2\pi\epsilon_0 L}{\ln(b/a)}$

**Series:** $\dfrac{1}{C_{eq}} = \sum \dfrac{1}{C_i}$

**Parallel:** $C_{eq} = \sum C_i$

$$U = \frac{Q^2}{2C} = \frac{1}{2}CV^2, \quad u_E = \frac{1}{2}\epsilon_0 E^2$$

**With dielectric:** $C = \kappa C_0$, $\epsilon = \kappa\epsilon_0$
