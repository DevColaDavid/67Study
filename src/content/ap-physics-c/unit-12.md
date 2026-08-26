---
title: "Unit 12: Magnetic Fields and Electromagnetism"
unit: 12
---

# Unit 12 — Magnetic Fields and Electromagnetism

---

## 12.1 — Magnetic Forces

### Magnetic Force on a Moving Charge

The **Lorentz force** on a charge $q$ moving with velocity $\vec{v}$ in magnetic field $\vec{B}$:

$$\vec{F} = q\vec{v}\times\vec{B}$$

$$|\vec{F}| = qvB\sin\theta$$

where $\theta$ is the angle between $\vec{v}$ and $\vec{B}$.

Units of $\vec{B}$: tesla (T = kg/(A·s²) = N/(A·m))

Key properties:
- $\vec{F}$ is always **perpendicular** to both $\vec{v}$ and $\vec{B}$ (right-hand rule)
- Magnetic force does **no work** ($\vec{F}\perp\vec{v}$ → $P = \vec{F}\cdot\vec{v} = 0$)
- Magnetic force cannot change speed, only direction

> [!tip] Right-Hand Rule
> Point fingers in direction of $\vec{v}$, curl toward $\vec{B}$, thumb points in direction of $\vec{F}$ for positive charge. For negative charge, reverse.

### Motion of Charges in Magnetic Fields

Since $\vec{F}\perp\vec{v}$, a charge in a uniform magnetic field moves in a **circle** (if $\vec{v}\perp\vec{B}$):

$$qvB = \frac{mv^2}{r} \implies r = \frac{mv}{qB}$$

**Cyclotron radius**: $r = mv/(qB)$. Larger mass or speed → larger circle. Larger charge or field → smaller circle.

**Angular frequency (cyclotron frequency):**
$$\omega_c = \frac{qB}{m}, \quad T = \frac{2\pi m}{qB}$$

Period is **independent of speed** (key to cyclotron operation).

**General case** ($\vec{v}$ not perpendicular to $\vec{B}$): component parallel to $\vec{B}$ is unaffected → helical motion.

**Crossed Fields (Velocity Selector)**

Electric and magnetic forces balance for a specific speed:
$$qE = qvB \implies v = \frac{E}{B}$$

Only particles with this speed pass through undeflected — used in mass spectrometers.

### Magnetic Force on Current-Carrying Wire

A wire carries current $I$ in magnetic field $\vec{B}$. For a straight wire of length $L$:

$$\vec{F} = I\vec{L}\times\vec{B}$$

$$|\vec{F}| = BIL\sin\theta$$

For a curved wire:

$$d\vec{F} = I\,d\vec{l}\times\vec{B}, \quad \vec{F} = I\int d\vec{l}\times\vec{B}$$

Direction: right-hand rule on $\vec{L}$ (in direction of current) crossed with $\vec{B}$.

> [!example] Example: Force Between Parallel Wires
> Two parallel wires carry currents $I_1$ and $I_2$, separated by distance $d$.
>
> Wire 2 creates field $B_2 = \mu_0 I_2/(2\pi d)$ at wire 1. Force per unit length on wire 1:
>
> $$\frac{F}{L} = I_1 B_2 = \frac{\mu_0 I_1 I_2}{2\pi d}$$
>
> **Parallel currents attract; antiparallel currents repel** (this is used to define the ampere).

---

## 12.2 — Magnetic Fields and Dipoles

### Torque on a Current Loop

A rectangular loop (area $A = ab$, $N$ turns) carrying current $I$ in uniform field $\vec{B}$:

$$\vec{\tau} = \vec{\mu}\times\vec{B}, \quad |\tau| = NIAB\sin\theta$$

**Magnetic dipole moment**: $\vec{\mu} = NIA\hat{n}$ (direction by right-hand rule around loop)

- $\theta = 0$ (loop perpendicular to $\vec{B}$): $\tau = 0$, stable equilibrium
- $\theta = 90°$: maximum torque $\tau = NIAB$

Potential energy of dipole: $U = -\vec{\mu}\cdot\vec{B} = -\mu B\cos\theta$

This is the operating principle of **DC motors** and **galvanometers**.

### Magnetic Flux and Gauss's Law for Magnetism

$$\Phi_B = \int\vec{B}\cdot d\vec{A} \quad \text{(webers, Wb = T·m}^2\text{)}$$

For uniform field through flat surface: $\Phi_B = BA\cos\theta$

**Gauss's Law for Magnetism** (no magnetic monopoles):

$$\oint\vec{B}\cdot d\vec{A} = 0$$

All magnetic field lines form closed loops — every field line that enters a closed surface must also leave it, since isolated north or south "magnetic charges" have never been observed. This is the magnetic analog of Gauss's Law for electric fields (Unit 8), except the right side is always zero.

> [!note] Contrast with Electric Field Lines
> Electric field lines start/end on charges ($+$/$-$). Magnetic field lines never start or end — a bar magnet's field lines loop continuously from the north pole, around through space, into the south pole, and back through the magnet's interior to north again.

---

## 12.3 — Biot-Savart Law

The magnetic field produced by a current element $Id\vec{l}$:

$$d\vec{B} = \frac{\mu_0}{4\pi}\frac{I\,d\vec{l}\times\hat{r}}{r^2}$$

$$\vec{B} = \frac{\mu_0 I}{4\pi}\int\frac{d\vec{l}\times\hat{r}}{r^2}$$

$\mu_0 = 4\pi\times10^{-7}$ T·m/A (permeability of free space)

> [!example] Example: Field at Center of Circular Loop
> Loop of radius $R$, current $I$. Every $dl$ is perpendicular to $\hat{r}$ (which points from $dl$ to center), and all contributions point in same direction (out of page for CCW current):
>
> $$B = \frac{\mu_0 I}{4\pi}\int\frac{dl}{R^2} = \frac{\mu_0 I}{4\pi R^2}(2\pi R) = \frac{\mu_0 I}{2R}$$

> [!example] Example: Field on Axis of Circular Loop
> At distance $x$ from center:
> $$B = \frac{\mu_0 IR^2}{2(R^2+x^2)^{3/2}}$$
> At center ($x=0$): $B = \mu_0 I/(2R)$ ✓. At $x\gg R$: $B\approx \mu_0 IR^2/(2x^3)$ (magnetic dipole).

> [!example] Example: Infinite Straight Wire
> Using Biot-Savart:
> $$B = \frac{\mu_0 I}{2\pi r}$$
> Field circles around the wire (right-hand rule: thumb in current direction, fingers curl in $\vec{B}$ direction).

---

## 12.4 — Ampère's Law

For any closed path (Amperian loop), the line integral of $\vec{B}$ equals $\mu_0$ times the total current enclosed:

$$\oint\vec{B}\cdot d\vec{l} = \mu_0 I_{enc}$$

The magnetic analog of Gauss's Law. Use when there's sufficient symmetry.

### Strategy for Ampère's Law

1. Identify symmetry ($\vec{B}$ must be constant and parallel or perpendicular to $d\vec{l}$ everywhere on the loop)
2. Choose Amperian loop matching the symmetry
3. Factor out $B$: $B\oint dl = B \cdot (\text{path length})$
4. Find $I_{enc}$ through the surface bounded by the loop
5. Solve for $B$

### Infinite Straight Wire

Circular Amperian loop of radius $r$:

$$B(2\pi r) = \mu_0 I \implies B = \frac{\mu_0 I}{2\pi r} \checkmark$$

### Solenoid

A solenoid: $n$ turns per unit length, current $I$. Rectangular Amperian loop (length $l$, with one side inside and one outside):

$$Bl = \mu_0 nIl \implies B = \mu_0 nI$$

Inside: uniform field $B = \mu_0 nI$, parallel to axis.  
Outside: $B \approx 0$.

### Toroid

$N$ total turns, mean radius $r$:

$$B = \frac{\mu_0 NI}{2\pi r} \quad \text{(inside)}$$

$B = 0$ outside the toroid.

### Summary of Field Configurations

| Source | Field | Formula |
|---|---|---|
| Long straight wire | Circles around wire | $B = \mu_0 I/(2\pi r)$ |
| Center of circular loop | Along axis | $B = \mu_0 I/(2R)$ |
| Inside solenoid | Uniform, parallel | $B = \mu_0 nI$ |
| Inside toroid | Circles along torus | $B = \mu_0 NI/(2\pi r)$ |

---

## Key Equations Summary

$$\vec{F} = q\vec{v}\times\vec{B}, \quad \vec{F} = I\vec{L}\times\vec{B}$$

**Circular orbit:** $r = mv/(qB)$, $\omega_c = qB/m$

$$\vec{\tau} = \vec{\mu}\times\vec{B}, \quad \mu = NIA$$

$$\Phi_B = \int\vec{B}\cdot d\vec{A}, \quad \oint\vec{B}\cdot d\vec{A} = 0$$

**Biot-Savart:** $d\vec{B} = \dfrac{\mu_0}{4\pi}\dfrac{I\,d\vec{l}\times\hat{r}}{r^2}$

$$\oint\vec{B}\cdot d\vec{l} = \mu_0 I_{enc} \quad \text{(Ampère's Law)}$$

**Long wire:** $B = \dfrac{\mu_0 I}{2\pi r}$

**Solenoid:** $B = \mu_0 nI$

**Loop center:** $B = \dfrac{\mu_0 I}{2R}$
