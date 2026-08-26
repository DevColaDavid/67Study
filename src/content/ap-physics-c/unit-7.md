---
title: "Unit 7: Oscillations"
unit: 7
---

# Unit 7 — Oscillations

---

## 7.1 — Defining Simple Harmonic Motion (SHM)

An object undergoes **simple harmonic motion (SHM)** when the net restoring force is **proportional to and opposite the displacement** from equilibrium. SHM is a special case of periodic motion, and it is the most important type of periodic motion in physics.

$$F_{net} = -k\Delta x$$

- **Restoring force:** a force exerted on an object in the direction *opposite* its displacement from equilibrium — it always pushes/pulls the object back toward equilibrium.
- **Equilibrium position:** the location at which the net force exerted on the object or system is zero.

> [!note] Key Idea
> Any system whose restoring force (or torque) is proportional to displacement (or angular displacement) from equilibrium will oscillate in SHM — this is true whether the "spring constant" is a literal spring, gravity acting on a pendulum, or a torsion wire.

---

## 7.2 — Frequency and Period of SHM

The period of SHM is related to the angular frequency, $\omega$, of the object's motion:

$$T = \frac{2\pi}{\omega} = \frac{1}{f}, \qquad \omega = 2\pi f$$

### The Mass-Spring System

A mass $m$ on a spring with constant $k$ is the canonical object–ideal-spring oscillator:

$$\omega = \sqrt{\frac{k}{m}}, \quad T_s = 2\pi\sqrt{\frac{m}{k}}, \quad f = \frac{1}{2\pi}\sqrt{\frac{k}{m}}$$

> [!note] Key Facts
> - Period depends on $m$ and $k$ only — **not on amplitude** (hallmark of SHM)
> - Larger mass → slower oscillation
> - Stiffer spring → faster oscillation
> - Vertical spring: equilibrium shifts by $mg/k$, but $T$ is unchanged (gravity just redefines equilibrium)

### The Simple Pendulum (Period Formula)

A pendulum displaced by a small angle also exhibits SHM, with period:

$$T_p = 2\pi\sqrt{\frac{l}{g}}$$

See **7.5** below for the full dynamics derivation of this formula from Newton's second law in rotational form.

> [!example] Example: Mass-Spring
> A 0.5 kg mass on a spring ($k = 50$ N/m) is pulled 0.1 m from equilibrium and released.
>
> $\omega = \sqrt{50/0.5} = 10$ rad/s, $T = 2\pi/10 = 0.628$ s
>
> $A = 0.1$ m, $v_{max} = 0.1 \times 10 = 1$ m/s
>
> $E = \frac{1}{2}(50)(0.1)^2 = 0.25$ J
>
> $x(t) = 0.1\cos(10t)$ (released from rest at $x = +A$, so $\phi = 0$)

---

## 7.3 — Representing and Analyzing SHM

### The SHM Differential Equation

Newton's 2nd Law applied to $F = -kx$:

$$m\ddot{x} = -kx \implies \ddot{x} = -\frac{k}{m}x = -\omega^2 x$$

More generally, for an object exhibiting SHM, the position as a function of time is a solution of the second-order differential equation derived from Newton's second law:

$$\frac{d^2x}{dt^2} = -\omega^2 x$$

> [!note] Boundary Statement
> AP Physics C: Mechanics only expects students to know the **solution** to this second-order differential equation and to be able to **identify** SHM from it — you are not expected to mathematically prove that the solution is correct.

The general solution:

$$x(t) = A\cos(\omega t + \phi) \quad \text{(equivalently } x = A\sin(2\pi ft)\text{)}$$

where:
- $A$ = amplitude (maximum displacement, m)
- $\omega$ = angular frequency (rad/s)
- $\phi$ = phase constant (initial phase, rad) — determined by initial conditions

### Velocity and Acceleration in SHM

$$v(t) = \frac{dx}{dt} = -A\omega\sin(\omega t + \phi)$$

$$a(t) = \frac{dv}{dt} = -A\omega^2\cos(\omega t + \phi) = -\omega^2 x(t)$$

$$v_{max} = A\omega, \qquad a_{max} = A\omega^2$$

Minima, maxima, and zeros of displacement, velocity, and acceleration are all features that help qualitatively describe SHM:

| Position | Velocity | Acceleration | PE | KE |
|---|---|---|---|---|
| $x = A$ (extreme) | $v = 0$ | $|a|$ max | max | 0 |
| $x = 0$ (equilibrium) | $|v|$ max $= A\omega$ | $a = 0$ | 0 | max |
| $x = -A$ (extreme) | $v = 0$ | $|a|$ max | max | 0 |

> [!tip] Key Fact
> Changing the amplitude of a system exhibiting SHM will **not** change its period — only the extremes of $x$, $v$, and $a$ scale with $A$.

### Determining Amplitude and Phase from Initial Conditions

Given $x(0) = x_0$ and $v(0) = v_0$:

$$A = \sqrt{x_0^2 + \left(\frac{v_0}{\omega}\right)^2}$$

$$\tan\phi = -\frac{v_0}{\omega x_0}$$

### Identifying $\omega$ from the Differential Equation

Any system where the equation of motion has the form $\ddot{q} = -\omega^2 q$ (where $q$ is any generalized coordinate) undergoes SHM with angular frequency $\omega$ — just identify the coefficient.

| System | Restoring Equation | $\omega$ |
|---|---|---|
| Mass-spring | $m\ddot{x} = -kx$ | $\sqrt{k/m}$ |
| Simple pendulum (small $\theta$) | $mL\ddot{\theta} = -mg\theta$ | $\sqrt{g/L}$ |
| Physical pendulum | $I\ddot{\theta} = -mgd\theta$ | $\sqrt{mgd/I}$ |
| Torsion pendulum | $I\ddot{\theta} = -k\Delta\theta$ | $\sqrt{k/I}$ |
| LC circuit (E&M) | $L\ddot{q} = -q/C$ | $\sqrt{1/(LC)}$ |

### Resonance

- **Resonance** occurs when a sinusoidal external force is exerted on a system at that system's **natural frequency**.
- The **natural frequency** of a system is the frequency at which it will oscillate when displaced from equilibrium and left alone.
- Driving a system at resonance **increases the amplitude** of its oscillating motion.

### Graphical Analysis

Properties of SHM (period, amplitude, phase) can be determined and analyzed directly from graphs of $x(t)$, $v(t)$, or $a(t)$ — e.g., reading amplitude off the peak of an $x$–$t$ graph, or period off the spacing between successive peaks.

### Beyond Ideal SHM: Damped Oscillations (Enrichment)

Real oscillators lose energy to friction/air resistance, so amplitude decays over time. This is outside the AP Physics C: Mechanics required scope, but useful for building intuition:

- **Underdamped:** oscillates with decreasing amplitude (e.g., a spring in air)
- **Critically damped:** returns to equilibrium as fast as possible without oscillating (ideal car shock absorber)
- **Overdamped:** returns to equilibrium slowly without oscillating

For underdamped motion: $x(t) = Ae^{-bt/(2m)}\cos(\omega' t + \phi)$, where $\omega' < \omega_0$.

---

## 7.4 — Energy of Simple Harmonic Oscillators

The total mechanical energy of a system exhibiting SHM is the sum of its kinetic and potential energies:

$$E_{total} = U + K$$

- Conservation of energy → $E_{total}$ is **constant** for a system exhibiting SHM.
- KE is maximum when PE is minimum, and PE is maximum when KE is minimum (the minimum KE of an SHM system is zero).
- Changing the amplitude changes the maximum PE and therefore the total energy of the system.

For a spring–object system:

$$E_{total} = \frac{1}{2}kA^2 = \text{constant}$$

More generally, for any SHM system:

$$E = \frac{1}{2}m\omega^2 A^2$$

From energy conservation, the speed at any position:
$$v(x) = \omega\sqrt{A^2 - x^2}$$

Maximum speed (at $x = 0$): $v_{max} = A\omega = A\sqrt{k/m}$

Time averages over one full cycle:
$$\langle K \rangle = \langle U \rangle = \frac{E}{2} = \frac{1}{4}kA^2$$

> [!example] Example: Energy in a Mass-Spring System
> A 0.5 kg mass on a spring ($k = 50$ N/m) oscillates with amplitude $A = 0.1$ m.
>
> $E_{total} = \frac{1}{2}(50)(0.1)^2 = 0.25$ J
>
> At $x = 0.05$ m: $v = \omega\sqrt{A^2 - x^2} = 10\sqrt{0.1^2 - 0.05^2} \approx 0.87$ m/s

---

## 7.5 — Simple and Physical Pendulums

### The Simple Pendulum

A point mass $m$ on a massless string of length $L$, small angle $\theta \ll 1$ rad. A simple pendulum is a special case of a physical pendulum in which the hanging object can be modeled as a point mass at distance $l$ from the pivot.

For small angles: $\sin\theta \approx \theta$ (in radians), so the restoring torque is:

$$\tau = -mgL\sin\theta \approx -mgL\theta$$

This small-angle approximation combined with Newton's second law in rotational form yields a second-order differential equation that describes SHM:

$$\ddot{\theta} = -\frac{g}{L}\theta = -\omega^2\theta$$

$$\omega = \sqrt{\frac{g}{L}}, \quad T_p = 2\pi\sqrt{\frac{L}{g}}$$

> [!note] Simple Pendulum Facts
> - Period depends on $L$ and $g$ only — **not on mass or amplitude** (for small angles)
> - Longer pendulum → slower
> - Stronger gravity → faster
> - "Small angle" means $\theta \lesssim 15°$ for accuracy better than 1%

> [!warning] Common Mistake
> The simple pendulum formula $T = 2\pi\sqrt{L/g}$ only holds for **small angles**. At large amplitudes, the period increases above this value.

#### Using Pendulum to Measure $g$

$$g = \frac{4\pi^2 L}{T^2}$$

Measure $T$ and $L$ → calculate $g$.

### The Physical Pendulum

A **physical pendulum** is a rigid body that undergoes oscillation about a fixed axis that is **not** its center of mass.

For small amplitudes, the restoring torque about the pivot is:
$$\tau = -mgd\sin\theta \approx -mgd\theta \quad \text{(small angles)}$$

where $d$ = distance from pivot to center of mass.

Equation of motion (Newton's 2nd law in rotational form): $I\ddot{\theta} = -mgd\theta$

$$\omega = \sqrt{\frac{mgd}{I}}, \quad T_{phys} = 2\pi\sqrt{\frac{I}{mgd}}$$

where $I$ is the moment of inertia about the **pivot axis**.

> [!example] Example: Rod as Physical Pendulum
> A uniform rod (mass $M$, length $L$) pivots about one end.
>
> $I_{end} = \frac{1}{3}ML^2$, $d = L/2$ (CM is at center)
>
> $$T = 2\pi\sqrt{\frac{\frac{1}{3}ML^2}{Mg\cdot\frac{L}{2}}} = 2\pi\sqrt{\frac{2L}{3g}}$$
>
> Compare to simple pendulum of same length: $T_{simple} = 2\pi\sqrt{L/g}$. The rod is faster since $\sqrt{2/3} < 1$.

> [!example] Example: Disk as Physical Pendulum
> Solid disk (mass $M$, radius $R$) pivots about a point on its rim.
>
> $I_{rim} = I_{cm} + MR^2 = \frac{1}{2}MR^2 + MR^2 = \frac{3}{2}MR^2$, $d = R$
>
> $$T = 2\pi\sqrt{\frac{\frac{3}{2}MR^2}{MgR}} = 2\pi\sqrt{\frac{3R}{2g}}$$

### The Torsion Pendulum

A **torsion pendulum** is a case of SHM where the restoring torque is proportional to the angular displacement of a rotating system — for example, a horizontal disk suspended from a wire attached to its center of mass, undergoing rotational oscillations about the wire in the horizontal plane.

$$I\ddot{\theta} = -k\Delta\theta \implies \omega = \sqrt{\frac{k}{I}}$$

where $k$ here is the wire's torsional constant (not a spring constant).

---

## Key Equations Summary

$$F = -kx \implies x(t) = A\cos(\omega t + \phi)$$

$$v(t) = -A\omega\sin(\omega t + \phi), \quad v_{max} = A\omega$$

$$a(t) = -A\omega^2\cos(\omega t + \phi) = -\omega^2 x$$

$$E = \frac{1}{2}kA^2, \quad v(x) = \omega\sqrt{A^2 - x^2}$$

**Mass-spring:** $\omega = \sqrt{k/m}$, $T = 2\pi\sqrt{m/k}$

**Simple pendulum:** $\omega = \sqrt{g/L}$, $T = 2\pi\sqrt{L/g}$

**Physical pendulum:** $\omega = \sqrt{mgd/I}$, $T = 2\pi\sqrt{I/(mgd)}$

**Torsion pendulum:** $\omega = \sqrt{k/I}$

$$T = \frac{2\pi}{\omega}, \quad f = \frac{1}{T}, \quad \omega = 2\pi f$$
