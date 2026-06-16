---
title: "Unit 11: Electric Circuits"
unit: 11
---

# Unit 11 — Electric Circuits

---

## Current

**Electric current** is the rate of flow of charge:

$$I = \frac{dq}{dt} \quad \text{(amperes, A = C/s)}$$

**Conventional current** direction: direction positive charges would flow (opposite to electron flow).

For charge carriers of density $n$, charge $q$, drift speed $v_d$, cross-section area $A$:
$$I = nqv_d A$$

Electrons drift very slowly ($v_d \sim 10^{-4}$ m/s) but the electric field propagates near $c$.

---

## Resistance and Ohm's Law

**Ohm's Law** (for ohmic materials):
$$V = IR \quad \text{(volts = amperes × ohms)}$$

**Resistance** $R$ (ohms, $\Omega$) depends on geometry and material:

$$R = \rho\frac{L}{A}$$

- $\rho$ = resistivity ($\Omega\cdot$m) — material property
- $L$ = length of conductor
- $A$ = cross-sectional area

**Conductivity:** $\sigma = 1/\rho$ (not to be confused with surface charge density)

Temperature dependence of resistivity:
$$\rho = \rho_0[1 + \alpha(T - T_0)]$$

$\alpha$ = temperature coefficient of resistivity. Metals: $\alpha > 0$ (hotter → more resistance). Semiconductors: $\alpha < 0$.

> [!note] Ohmic vs. Non-Ohmic
> **Ohmic** devices: $R$ is constant regardless of $V$ or $I$ (most resistors). **Non-ohmic**: $R$ varies (diodes, light bulbs, transistors). Ohm's law $V = IR$ always holds as a definition of $R$, but $R$ may not be constant.

---

## Power Dissipation

Power delivered to a resistor (converted to heat):

$$P = IV = I^2 R = \frac{V^2}{R} \quad \text{(watts)}$$

Derivation: $P = \frac{dW}{dt} = \frac{dq}{dt}\cdot V = IV$

---

## EMF and Internal Resistance

An **EMF source** (battery, generator) converts chemical/mechanical energy to electrical energy. EMF $\mathcal{E}$ (volts) is the work per unit charge done by the source.

Real batteries have **internal resistance** $r$:

$$V_{terminal} = \mathcal{E} - Ir \quad \text{(discharging)}$$
$$V_{terminal} = \mathcal{E} + Ir \quad \text{(charging)}$$

Maximum current (short circuit): $I_{max} = \mathcal{E}/r$

---

## Kirchhoff's Laws

These two laws are sufficient to solve any DC circuit.

### Kirchhoff's Current Law (KCL) — Junction Rule

$$\sum I_{in} = \sum I_{out}$$

The sum of currents entering a junction equals the sum leaving. Consequence of charge conservation.

### Kirchhoff's Voltage Law (KVL) — Loop Rule

$$\sum_\text{loop} V = 0$$

The sum of voltage changes around any closed loop is zero. Consequence of energy conservation (electric field is conservative).

**Sign conventions for KVL** (traversing loop in chosen direction):
- Through resistor in direction of current: $-IR$ (voltage drop)
- Through resistor against direction of current: $+IR$ (voltage rise)
- Through battery from $-$ to $+$: $+\mathcal{E}$ (voltage rise)
- Through battery from $+$ to $-$: $-\mathcal{E}$ (voltage drop)

> [!example] Example: Multi-Loop Circuit
> Two batteries ($\mathcal{E}_1 = 12$ V, $\mathcal{E}_2 = 6$ V) and three resistors ($R_1 = 4\,\Omega$, $R_2 = 2\,\Omega$, $R_3 = 3\,\Omega$) in a two-loop circuit.
>
> Assign currents $I_1$, $I_2$, $I_3$. Apply KCL at junction, then KVL to each loop. Solve the system of equations.

---

## Resistors in Circuits

### Series (same $I$, voltages add)

$$R_{eq} = R_1 + R_2 + \cdots$$

$V_i = IR_i$ — voltage divides proportionally to resistance.

### Parallel (same $V$, currents add)

$$\frac{1}{R_{eq}} = \frac{1}{R_1} + \frac{1}{R_2} + \cdots$$

$I_i = V/R_i$ — current divides inversely with resistance.

**Two resistors in parallel:**
$$R_{eq} = \frac{R_1 R_2}{R_1 + R_2}$$

---

## RC Circuits — The Calculus-Based Core

A resistor $R$ and capacitor $C$ in series with a battery $\mathcal{E}$.

### Charging

Apply KVL (current $I = dq/dt$ flows, charging capacitor):

$$\mathcal{E} - IR - \frac{q}{C} = 0 \implies \mathcal{E} - R\frac{dq}{dt} - \frac{q}{C} = 0$$

This is a first-order linear ODE. Rearranging and separating variables:

$$\frac{dq}{dt} = \frac{\mathcal{E}C - q}{RC}$$

Solution with $q(0) = 0$:

$$\boxed{q(t) = C\mathcal{E}\left(1 - e^{-t/RC}\right) = Q_{max}\left(1-e^{-t/\tau}\right)}$$

$$I(t) = \frac{dq}{dt} = \frac{\mathcal{E}}{R}e^{-t/RC} = I_0 e^{-t/\tau}$$

$$V_C(t) = \frac{q}{C} = \mathcal{E}\left(1 - e^{-t/\tau}\right)$$

**Time constant:** $\tau = RC$ (seconds)

At $t = \tau$: capacitor is 63.2% charged, current is 36.8% of initial.

| Time | $q/Q_{max}$ | $I/I_0$ |
|---|---|---|
| $t = 0$ | 0 | 1 (max) |
| $t = \tau$ | 0.632 | 0.368 |
| $t = 2\tau$ | 0.865 | 0.135 |
| $t = 5\tau$ | 0.993 | 0.007 |
| $t \to \infty$ | 1 | 0 |

### Discharging

Battery removed, charged capacitor ($Q_0$) discharges through $R$:

$$-R\frac{dq}{dt} - \frac{q}{C} = 0 \implies \frac{dq}{dt} = -\frac{q}{RC}$$

Solution with $q(0) = Q_0$:

$$q(t) = Q_0 e^{-t/RC} = Q_0 e^{-t/\tau}$$

$$I(t) = -\frac{dq}{dt} = \frac{Q_0}{RC}e^{-t/\tau} = I_0 e^{-t/\tau}$$

$$V_C(t) = \frac{q}{C} = V_0 e^{-t/\tau}$$

Both $q$ and $I$ decay exponentially.

> [!example] Example: RC Circuit
> $R = 10\,\text{k}\Omega$, $C = 100\,\mu$F, $\mathcal{E} = 9$ V.
>
> $\tau = RC = (10^4)(10^{-4}) = 1$ s
>
> $Q_{max} = C\mathcal{E} = (10^{-4})(9) = 9\times10^{-4}$ C = 0.9 mC
>
> At $t = 1$ s: $q = 0.9(1-e^{-1}) = 0.569$ mC, $I = (9/10^4)e^{-1} = 0.331\,\text{mA}$

### Energy in RC Circuit

Energy stored in fully charged capacitor: $U = \frac{1}{2}C\mathcal{E}^2$

Total energy supplied by battery: $U_{battery} = C\mathcal{E}^2$

Energy dissipated in resistor: $U_R = \frac{1}{2}C\mathcal{E}^2$ (half is always lost to heat regardless of $R$!)

---

## Voltmeters and Ammeters

- **Voltmeter**: measures voltage, connected in **parallel**, must have very high resistance ($R_V \to \infty$) to avoid drawing current
- **Ammeter**: measures current, connected in **series**, must have very low resistance ($R_A \to 0$) to avoid affecting circuit

---

## Key Equations Summary

$$I = \frac{dq}{dt}, \quad V = IR, \quad R = \rho\frac{L}{A}$$

$$P = IV = I^2 R = \frac{V^2}{R}$$

$$V_{terminal} = \mathcal{E} - Ir$$

**KCL:** $\sum I_{in} = \sum I_{out}$

**KVL:** $\sum_\text{loop} \Delta V = 0$

**Series:** $R_{eq} = \sum R_i$

**Parallel:** $\dfrac{1}{R_{eq}} = \sum \dfrac{1}{R_i}$

**RC charging:** $q(t) = Q_{max}(1-e^{-t/\tau})$, $I(t) = I_0 e^{-t/\tau}$, $\tau = RC$

**RC discharging:** $q(t) = Q_0 e^{-t/\tau}$
