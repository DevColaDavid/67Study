---
title: "Unit 7: Oscillations"
unit: 7
---

# Unit 7 — Oscillations

---

## Simple Harmonic Motion (SHM)

An object undergoes **simple harmonic motion** when the net restoring force is **proportional to and opposite the displacement** from equilibrium:

$$F_{net} = -kx$$

This leads to sinusoidal motion. SHM is the most important type of periodic motion in physics.

### Equation of Motion

Newton's 2nd Law applied to $F = -kx$:

$$m\ddot{x} = -kx \implies \ddot{x} = -\frac{k}{m}x = -\omega^2 x$$

where $\omega = \sqrt{k/m}$ is the **angular frequency** (rad/s).

The general solution to this differential equation:

$$x(t) = A\cos(\omega t + \phi)$$

where:
- $A$ = amplitude (maximum displacement, m)
- $\omega$ = angular frequency (rad/s)
- $\phi$ = phase constant (initial phase, rad) — determined by initial conditions

### Velocity and Acceleration in SHM

$$v(t) = \frac{dx}{dt} = -A\omega\sin(\omega t + \phi)$$

$$a(t) = \frac{dv}{dt} = -A\omega^2\cos(\omega t + \phi) = -\omega^2 x(t)$$

Key values:

| Position | Velocity | Acceleration | PE | KE |
|---|---|---|---|---|
| $x = A$ (extreme) | $v = 0$ | $|a|$ max | max | 0 |
| $x = 0$ (equilibrium) | $|v|$ max $= A\omega$ | $a = 0$ | 0 | max |
| $x = -A$ (extreme) | $v = 0$ | $|a|$ max | max | 0 |

### Period and Frequency

$$T = \frac{2\pi}{\omega}, \quad f = \frac{\omega}{2\pi}, \quad \omega = 2\pi f$$

---

## The Mass-Spring System

A mass $m$ on a spring with constant $k$:

$$\omega = \sqrt{\frac{k}{m}}, \quad T = 2\pi\sqrt{\frac{m}{k}}, \quad f = \frac{1}{2\pi}\sqrt{\frac{k}{m}}$$

> [!note] Key Facts
> - Period depends on $m$ and $k$ only — **not on amplitude** (hallmark of SHM)
> - Larger mass → slower oscillation
> - Stiffer spring → faster oscillation
> - Vertical spring: equilibrium shifts by $mg/k$, but $T$ is unchanged (gravity just redefines equilibrium)

### Energy in the Mass-Spring System

$$E = K + U = \frac{1}{2}mv^2 + \frac{1}{2}kx^2 = \frac{1}{2}kA^2 = \text{constant}$$

From energy conservation:
$$v(x) = \omega\sqrt{A^2 - x^2}$$

Maximum speed (at $x = 0$): $v_{max} = A\omega = A\sqrt{k/m}$

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

### Initial Conditions

Given $x(0) = x_0$ and $v(0) = v_0$:

$$A = \sqrt{x_0^2 + \left(\frac{v_0}{\omega}\right)^2}$$

$$\tan\phi = -\frac{v_0}{\omega x_0}$$

---

## The Simple Pendulum

A point mass $m$ on a massless string of length $L$, small angle $\theta \ll 1$ rad.

For small angles: $\sin\theta \approx \theta$ (in radians), so the restoring torque is:

$$\tau = -mgL\sin\theta \approx -mgL\theta$$

This gives SHM in $\theta$:

$$\ddot{\theta} = -\frac{g}{L}\theta = -\omega^2\theta$$

$$\omega = \sqrt{\frac{g}{L}}, \quad T = 2\pi\sqrt{\frac{L}{g}}$$

> [!note] Simple Pendulum Facts
> - Period depends on $L$ and $g$ only — **not on mass or amplitude** (for small angles)
> - Longer pendulum → slower
> - Stronger gravity → faster
> - "Small angle" means $\theta \lesssim 15°$ for accuracy better than 1%

> [!warning] Common Mistake
> The simple pendulum formula $T = 2\pi\sqrt{L/g}$ only holds for **small angles**. At large amplitudes, the period increases above this value.

### Using Pendulum to Measure $g$

$$g = \frac{4\pi^2 L}{T^2}$$

Measure $T$ and $L$ → calculate $g$.

---

## The Physical Pendulum

Any rigid body pivoting about a point that is **not** its center of mass.

Restoring torque about the pivot:
$$\tau = -mgd\sin\theta \approx -mgd\theta \quad \text{(small angles)}$$

where $d$ = distance from pivot to center of mass.

Equation of motion: $I\ddot{\theta} = -mgd\theta$

$$\omega = \sqrt{\frac{mgd}{I}}, \quad T = 2\pi\sqrt{\frac{I}{mgd}}$$

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

---

## Putting It Together: SHM Differential Equation

Any system where the equation of motion has the form:

$$\ddot{q} = -\omega^2 q$$

(where $q$ is any generalized coordinate) undergoes SHM with angular frequency $\omega$. To find $\omega$, just identify the coefficient.

| System | Restoring Equation | $\omega$ |
|---|---|---|
| Mass-spring | $ma = -kx$ | $\sqrt{k/m}$ |
| Simple pendulum (small $\theta$) | $mL\ddot{\theta} = -mg\theta$ | $\sqrt{g/L}$ |
| Physical pendulum | $I\ddot{\theta} = -mgd\theta$ | $\sqrt{mgd/I}$ |
| LC circuit (E&M) | $L\ddot{q} = -q/C$ | $\sqrt{1/(LC)}$ |

---

## Energy in SHM (General)

$$E = \frac{1}{2}kA^2 \quad \text{(spring)}$$

$$E = \frac{1}{2}m\omega^2 A^2 \quad \text{(general)}$$

Time averages over one full cycle:
$$\langle K \rangle = \langle U \rangle = \frac{E}{2} = \frac{1}{4}kA^2$$

---

## Damped Oscillations (Qualitative)

Real oscillators lose energy to friction/air resistance. The amplitude decays over time.

- **Underdamped:** oscillates with decreasing amplitude (spring in air)
- **Critically damped:** returns to equilibrium as fast as possible without oscillating (car shock absorber ideal)
- **Overdamped:** returns to equilibrium slowly without oscillating

For underdamped: $x(t) = Ae^{-bt/(2m)}\cos(\omega' t + \phi)$, where $\omega' < \omega_0$.

---

## Key Equations Summary

$$F = -kx \implies x(t) = A\cos(\omega t + \phi)$$

$$v(t) = -A\omega\sin(\omega t + \phi), \quad v_{max} = A\omega$$

$$a(t) = -A\omega^2\cos(\omega t + \phi) = -\omega^2 x$$

$$E = \frac{1}{2}kA^2, \quad v(x) = \omega\sqrt{A^2 - x^2}$$

**Mass-spring:** $\omega = \sqrt{k/m}$, $T = 2\pi\sqrt{m/k}$

**Simple pendulum:** $\omega = \sqrt{g/L}$, $T = 2\pi\sqrt{L/g}$

**Physical pendulum:** $\omega = \sqrt{mgd/I}$, $T = 2\pi\sqrt{I/(mgd)}$

$$T = \frac{2\pi}{\omega}, \quad f = \frac{1}{T}, \quad \omega = 2\pi f$$
