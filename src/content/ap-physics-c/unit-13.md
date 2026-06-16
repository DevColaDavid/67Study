---
title: "Unit 13: Electromagnetic Induction"
unit: 13
---

# Unit 13 — Electromagnetic Induction

---

## Faraday's Law

A changing magnetic flux through a circuit induces an EMF:

$$\mathcal{E} = -\frac{d\Phi_B}{dt}$$

For $N$ turns:
$$\mathcal{E} = -N\frac{d\Phi_B}{dt}$$

The minus sign is Lenz's Law (see below). Units: volts (same as potential difference).

**Magnetic flux** through the circuit:
$$\Phi_B = \int\vec{B}\cdot d\vec{A} = BA\cos\theta \quad \text{(uniform field, flat loop)}$$

Flux can change because:
- $B$ changes in magnitude
- The area $A$ changes (loop expands/contracts)
- The angle $\theta$ between $\vec{B}$ and $\vec{A}$ changes (loop rotates)
- Some combination

---

## Lenz's Law

The induced current flows in a direction such that the magnetic field it creates **opposes the change** in flux that caused it.

> [!note] Key Definition
> Lenz's Law is the physical content of the minus sign in Faraday's Law. The induced EMF always acts to **resist the change** — it's electromagnetic inertia.

**How to apply Lenz's Law:**
1. Determine the direction of the original $\vec{B}$ field through the loop
2. Determine if flux is increasing or decreasing
3. The induced $\vec{B}$ must **oppose** the change:
   - Flux increasing → induced $\vec{B}$ opposes original $\vec{B}$
   - Flux decreasing → induced $\vec{B}$ in same direction as original $\vec{B}$
4. Use right-hand rule to find the current direction that creates this induced $\vec{B}$

> [!example] Example: Magnet Approaching a Loop
> A bar magnet with north pole facing a loop approaches the loop. Flux through loop (pointing toward magnet = right) **increases**.
>
> Induced $\vec{B}$ must oppose increase → induced $\vec{B}$ points left (away from magnet).
>
> Right-hand rule: current flows **counterclockwise** as seen from the magnet.
>
> The loop repels the approaching magnet (opposes change → Lenz's Law).

---

## Motional EMF

When a conductor moves through a magnetic field, the free charges experience a magnetic force — this drives an EMF.

For a straight conductor of length $l$ moving with velocity $v$ perpendicular to $\vec{B}$:

$$\mathcal{E} = Blv$$

**Derivation from Faraday**: as the rod moves a distance $dx = v\,dt$ in time $dt$, the area swept = $l\,dx = lv\,dt$, so $d\Phi_B = Bl\,dx$ and:
$$\mathcal{E} = \frac{d\Phi_B}{dt} = Blv$$

Alternatively from force on charges: magnetic force $F = qvB$ on charges in rod drives them to one end, creating potential difference $\mathcal{E} = vBl$.

> [!example] Example: Sliding Rail
> A rod of length $l = 0.5$ m slides along rails at $v = 3$ m/s in field $B = 0.8$ T (perpendicular to the rail plane). The rails have total resistance $R = 2\,\Omega$.
>
> $\mathcal{E} = Blv = (0.8)(0.5)(3) = 1.2$ V
>
> $I = \mathcal{E}/R = 0.6$ A
>
> Force on rod due to induced current (by Lenz, opposing motion):
> $F = BIl = (0.8)(0.6)(0.5) = 0.24$ N (opposing velocity)

---

## General Form of Faraday's Law

In differential (field) form — Faraday's Law as one of Maxwell's equations:

$$\oint\vec{E}\cdot d\vec{l} = -\frac{d\Phi_B}{dt} = -\frac{d}{dt}\int\vec{B}\cdot d\vec{A}$$

A changing magnetic field creates a **non-conservative** electric field — a field with closed-loop circulation. This is fundamentally different from electrostatic fields.

---

## Self-Inductance

An inductor is a coil of wire that stores energy in its magnetic field. When current $I$ through the coil changes, the changing flux through the coil induces a **back-EMF** in itself.

**Self-inductance** $L$ (henries, H):
$$\Phi_B = LI \quad \text{(for N-turn coil: } N\Phi = LI\text{)}$$

**Induced back-EMF:**
$$\mathcal{E}_L = -L\frac{dI}{dt}$$

The minus sign means the inductor opposes changes in current — acts like inertia for current.

### Inductance of a Solenoid

Solenoid with $n$ turns/length, length $\ell$, cross-section area $A$, $N = n\ell$ total turns:

$$\Phi = BA = \mu_0 nIA$$

$$L = \frac{N\Phi}{I} = \frac{(n\ell)(\mu_0 nIA)}{I} = \mu_0 n^2 A\ell = \mu_0 n^2 V$$

where $V = A\ell$ is the solenoid volume.

---

## Energy Stored in an Inductor

Work done to establish current $I$ in inductor $L$ (against back-EMF):

$$dW = \mathcal{E}_L\,dq = L\frac{dI}{dt}\cdot I\,dt = LI\,dI$$

$$U_L = \int_0^I LI'\,dI' = \frac{1}{2}LI^2$$

**Magnetic energy density** (energy per unit volume stored in a magnetic field):

$$u_B = \frac{B^2}{2\mu_0} \quad \text{(J/m}^3\text{)}$$

Compare to electric energy density: $u_E = \frac{1}{2}\epsilon_0 E^2$.

---

## LR Circuits

A resistor $R$ and inductor $L$ in series with battery $\mathcal{E}$.

### Current Build-Up (Switch Closes)

KVL: $\mathcal{E} - IR - L\frac{dI}{dt} = 0$

$$L\frac{dI}{dt} = \mathcal{E} - IR$$

Separating variables and integrating with $I(0) = 0$:

$$\boxed{I(t) = \frac{\mathcal{E}}{R}\left(1 - e^{-Rt/L}\right) = I_{max}\left(1 - e^{-t/\tau_L}\right)}$$

**Time constant:** $\tau_L = L/R$ (seconds)

Voltage across inductor: $V_L = L\frac{dI}{dt} = \mathcal{E}\,e^{-t/\tau_L}$

At $t = 0$: $I = 0$, $V_L = \mathcal{E}$ (inductor acts like open circuit instantly)  
At $t \to \infty$: $I = \mathcal{E}/R$, $V_L = 0$ (inductor acts like a wire in steady state)

### Current Decay (Battery Removed)

With $I(0) = I_0$, battery shorted out, current decays through $R$:

$$L\frac{dI}{dt} + IR = 0 \implies I(t) = I_0 e^{-Rt/L} = I_0 e^{-t/\tau_L}$$

| Time | Charging $I/I_{max}$ | Decaying $I/I_0$ |
|---|---|---|
| $t = 0$ | 0 | 1 |
| $t = \tau_L$ | 0.632 | 0.368 |
| $t = 5\tau_L$ | ≈ 1 | ≈ 0 |

> [!example] Example: LR Circuit
> $L = 2$ H, $R = 10\,\Omega$, $\mathcal{E} = 20$ V.
>
> $\tau_L = L/R = 0.2$ s, $I_{max} = \mathcal{E}/R = 2$ A
>
> At $t = 0.2$ s: $I = 2(1-e^{-1}) = 1.26$ A, $V_L = 20e^{-1} = 7.36$ V

---

## Comparison: RC vs. LR Circuits

| Property | RC Circuit | LR Circuit |
|---|---|---|
| Time constant | $\tau = RC$ | $\tau = L/R$ |
| "Stores" | Charge / $E$ field | Current / $B$ field |
| At $t=0$ (step input) | $V_C = 0$, $I$ max | $I = 0$, $V_L$ max |
| At $t\to\infty$ | $V_C = \mathcal{E}$, $I = 0$ | $I = \mathcal{E}/R$, $V_L = 0$ |
| Steady-state | Open circuit | Short circuit |
| Energy stored | $\frac{1}{2}CV^2$ | $\frac{1}{2}LI^2$ |

---

## Maxwell's Equations (Complete Set)

Together, these four equations describe all of classical electromagnetism:

| Equation | Integral Form | Physical Meaning |
|---|---|---|
| Gauss's Law (E) | $\oint\vec{E}\cdot d\vec{A} = Q_{enc}/\epsilon_0$ | Electric field from charges |
| Gauss's Law (B) | $\oint\vec{B}\cdot d\vec{A} = 0$ | No magnetic monopoles |
| Faraday's Law | $\oint\vec{E}\cdot d\vec{l} = -d\Phi_B/dt$ | Changing $B$ creates $E$ |
| Ampère-Maxwell | $\oint\vec{B}\cdot d\vec{l} = \mu_0 I_{enc} + \mu_0\epsilon_0\frac{d\Phi_E}{dt}$ | Changing $E$ creates $B$ |

Maxwell added the **displacement current** $\epsilon_0 d\Phi_E/dt$ to Ampère's Law — this term predicts electromagnetic waves traveling at:

$$c = \frac{1}{\sqrt{\mu_0\epsilon_0}} = 3\times10^8 \text{ m/s}$$

The discovery that light is an electromagnetic wave.

---

## Key Equations Summary

$$\mathcal{E} = -\frac{d\Phi_B}{dt} = -N\frac{d\Phi}{dt} \quad \text{(Faraday's Law)}$$

$$\mathcal{E} = Blv \quad \text{(motional EMF)}$$

$$\mathcal{E}_L = -L\frac{dI}{dt}, \quad U_L = \frac{1}{2}LI^2$$

$$u_B = \frac{B^2}{2\mu_0}, \quad u_E = \frac{1}{2}\epsilon_0 E^2$$

**Solenoid inductance:** $L = \mu_0 n^2 A\ell$

**LR build-up:** $I(t) = I_{max}(1-e^{-t/\tau_L})$, $\tau_L = L/R$

**LR decay:** $I(t) = I_0 e^{-t/\tau_L}$

$$c = \frac{1}{\sqrt{\mu_0\epsilon_0}} = 3\times10^8 \text{ m/s}$$
