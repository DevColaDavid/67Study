---
title: "Unit 9: Thermodynamics and Electrochemistry"
unit: 9
---

# Unit 9: Thermodynamics and Electrochemistry

## 9.1 Introduction to Entropy

> [!note] Learning Objective
> Identify the sign and relative magnitude of the entropy change associated with chemical or physical processes. (9.1.A)

- **Entropy (S)**: measure of the disorder or dispersal of matter and energy in a system
- $\Delta S > 0$: system becomes more disordered; $\Delta S < 0$: system becomes more ordered

### Predicting the Sign of ΔS

| Process | Sign of ΔS |
|---|---|
| Solid → liquid → gas | + (more freedom of motion) |
| Gas → liquid → solid | − (less freedom) |
| Dissolution of most solids | + (ions become dispersed) |
| Reaction produces more moles of gas | + |
| Reaction produces fewer moles of gas | − |
| Increase in temperature | + (energy more dispersed) |
| Mixing two pure substances | + |

**Key rule for reactions**: count moles of gas on each side. If Δ(moles of gas) > 0 → $\Delta S > 0$.

> [!tip] Exam Tip
> Focus on gas mole changes first — they dominate $\Delta S$. If gas moles don't change, consider dissolution or phase changes. More particles, more freedom, more disorder = more positive $\Delta S$.

---

## 9.2 Absolute Entropy and Entropy Change

> [!note] Learning Objective
> Calculate entropy change for chemical or physical processes using absolute entropies of involved species. (9.2.A)

- Every substance has an **absolute (standard) entropy** $S°$ (J/mol·K) based on the third law: a perfect crystal at 0 K has $S = 0$
- Entropy is a **state function**: $\Delta S°$ depends only on initial and final states

$$\Delta S° = \sum S°(\text{products}) - \sum S°(\text{reactants})$$

Multiply each $S°$ value by its stoichiometric coefficient before summing.

> [!example] Worked Example
> C₂H₆(g) + 3.5 O₂(g) → 2 CO₂(g) + 3 H₂O(g)
>
> Using standard entropy values: $\Delta S° = +47.1$ J/mol·K (entropy increases — more product gas particles)

> [!tip] Exam Tip
> Unlike $\Delta H_f°$, elements in standard states do NOT have $S° = 0$ — they have positive absolute entropy values. Always use the correct state (g, l, s, aq) when looking up $S°$ values.

---

## 9.3 Gibbs Free Energy and Thermodynamic Favorability

> [!note] Learning Objective
> Explain whether a physical or chemical process is thermodynamically favored based on evaluating $\Delta G°$. (9.3.A)

- **Gibbs free energy**: $\Delta G° = \Delta H° - T\Delta S°$
- $\Delta G° < 0$: thermodynamically **favored** (spontaneous under standard conditions)
- $\Delta G° > 0$: thermodynamically **not favored**
- $\Delta G° = 0$: at equilibrium

### Two Methods to Calculate ΔG°

**Method 1 — Formation values:**
$$\Delta G° = \sum \Delta G_f°(\text{products}) - \sum \Delta G_f°(\text{reactants})$$

**Method 2 — Enthalpy and entropy:**
$$\Delta G° = \Delta H° - T\Delta S°$$

Note: convert $\Delta S°$ from J/mol·K to kJ/mol·K (divide by 1000) before using with $\Delta H°$ in kJ.

### Temperature and Favorability

| $\Delta H°$ | $\Delta S°$ | $\Delta G°$ | Favored when? |
|---|---|---|---|
| − | + | Always − | Always favored |
| − | − | Depends on T | Low temperature |
| + | + | Depends on T | High temperature |
| + | − | Always + | Never favored |

> [!example] Worked Example
> $\Delta H° = +5.0$ kJ/mol, $\Delta S° = +100$ J/mol·K = +0.100 kJ/mol·K, T = 298 K
>
> $\Delta G° = 5.0 - (298)(0.100) = 5.0 - 29.8 = -24.8$ kJ/mol → thermodynamically favored

> [!tip] Exam Tip
> Don't forget unit conversion: $\Delta S°$ is usually given in J, but $\Delta H°$ is in kJ. Divide $\Delta S°$ by 1000 before plugging into $\Delta G° = \Delta H° - T\Delta S°$.

---

## 9.4 Thermodynamic vs. Kinetic Control

> [!note] Learning Objective
> Explain, in terms of kinetics, why a thermodynamically favored reaction might not occur at a measurable rate. (9.4.A)

- **Thermodynamic favorability** ($\Delta G° < 0$): tells us IF a process CAN occur
- **Kinetics**: tells us HOW FAST it occurs
- A thermodynamically favored reaction may not proceed measurably if the **activation energy** is too high → **kinetic control**

### Diamond vs. Graphite Example

$\Delta G° = -2.9$ kJ/mol for diamond → graphite conversion: thermodynamically favored.

Yet diamond is stable at room temperature because the activation energy for carbon bond rearrangement is enormously high. The reaction is kinetically controlled — it essentially doesn't happen on any human timescale.

### Key Distinction

| Factor | Controls |
|---|---|
| $\Delta G°$ | Thermodynamic favorability (will it happen?) |
| $E_a$ | Rate of reaction (how fast?) |
| Catalyst | Lowers $E_a$, increases rate; does not change $\Delta G°$ |

> [!tip] Exam Tip
> "Thermodynamically favored" ≠ "fast." A large negative $\Delta G°$ does not guarantee rapid reaction. When asked why a spontaneous reaction doesn't occur at room temperature, the answer is usually high activation energy (kinetic barrier).

---

## 9.5 Free Energy and Equilibrium

> [!note] Learning Objective
> Explain whether a process is thermodynamically favored using the relationships between K, $\Delta G°$, and T. (9.5.A)

$$\Delta G° = -RT\ln K \qquad K = e^{-\Delta G°/RT}$$

| $R$ | $8.314$ J/mol·K |
|---|---|
| $T$ | Temperature in K |
| $K$ | Equilibrium constant |

### Relationship Between ΔG° and K

| $\Delta G°$ | K | Meaning |
|---|---|---|
| Large negative | $K \gg 1$ | Products strongly favored |
| ≈ 0 | $K \approx 1$ | Roughly equal amounts |
| Large positive | $K \ll 1$ | Reactants strongly favored |

At equilibrium: $\Delta G = 0$ (note: not $\Delta G°$, which is the standard state value)

> [!tip] Exam Tip
> $\Delta G°$ and K are connected: large negative $\Delta G°$ → large K → products dominate. Remember: $\Delta G°$ uses standard conditions; actual $\Delta G$ at non-standard conditions uses $\Delta G = \Delta G° + RT\ln Q$.

---

## 9.7 Coupled Reactions

> [!note] Learning Objective
> Explain the relationship between external energy sources or coupled reactions and their ability to drive thermodynamically unfavorable processes. (9.7.A)

- Reactions with $\Delta G° > 0$ can be made to occur by:
  1. **External energy input** (electrolysis, light)
  2. **Coupling** with a thermodynamically favorable reaction (shared intermediate)

$$\Delta G°_\text{total} = \Delta G°_1 + \Delta G°_2 + \cdots$$

If the sum is negative, the overall coupled process is thermodynamically favored.

### Examples

**Electrolysis**: electrical energy drives the unfavorable decomposition of molten NaCl → Na(l) + Cl₂(g)

**Photosynthesis**: solar energy drives 6CO₂ + 6H₂O → C₆H₁₂O₆ + 6O₂ ($\Delta G° > 0$)

**ATP coupling (biology)**: ATP hydrolysis ($\Delta G° \approx -30.5$ kJ/mol) is coupled to unfavorable biosynthesis reactions; the sum $\Delta G°_\text{total}$ is made negative.

> [!tip] Exam Tip
> Add $\Delta G°$ values like Hess's Law: if the sum is negative, the overall coupled process goes. When the problem asks how an unfavorable reaction is driven, answer: either external energy OR coupling with a favorable reaction.

---

## 9.8 Galvanic and Electrolytic Cells

> [!note] Learning Objective
> Explain the relationship between the physical components of an electrochemical cell and its operational principles. (9.8.A)

- **Galvanic (voltaic) cell**: spontaneous redox reaction generates electricity ($\Delta G < 0$, $E° > 0$)
- **Electrolytic cell**: external electrical energy drives a non-spontaneous reaction ($\Delta G > 0$, $E° < 0$)
- In ALL cells: **oxidation at anode; reduction at cathode** (OAR/CAR — always)

### Galvanic Cell Components

| Component | Function |
|---|---|
| Anode (−) | Where oxidation occurs; metal dissolves |
| Cathode (+) | Where reduction occurs; metal deposits |
| Salt bridge | Allows ion flow to maintain charge balance |
| External wire | Carries electrons from anode → cathode |

**Example — Zinc/Copper cell:**
- Anode: Zn(s) → Zn²⁺(aq) + 2e⁻
- Cathode: Cu²⁺(aq) + 2e⁻ → Cu(s)
- Electrons flow: Zn → external wire → Cu electrode

### Electrolytic Cell

External power source forces non-spontaneous reactions. Electrode charge is reversed from galvanic cells (anode is +, cathode is −), but oxidation/reduction assignments stay the same.

**Molten NaCl electrolysis:**
- Cathode: Na⁺ + e⁻ → Na(l)
- Anode: 2Cl⁻ → Cl₂(g) + 2e⁻

**Aqueous NaCl electrolysis:** Water competes at electrodes.
- Cathode: 2H₂O + 2e⁻ → H₂(g) + 2OH⁻ (water reduced, not Na⁺)
- Anode: 2Cl⁻ → Cl₂(g) + 2e⁻ (Cl⁻ preferentially oxidized)

> [!tip] Exam Tip
> Don't memorize which electrode is + or − based on cell type — it switches between galvanic and electrolytic cells. Instead, always remember: **anode = oxidation**, **cathode = reduction**. Then figure out the charge from context.

---

## 9.9 Cell Potential and Free Energy

> [!note] Learning Objective
> Determine electrochemical cell thermodynamic favorability using standard cell potential and half-reactions. (9.9.A)

$$E°_\text{cell} = E°_\text{cathode} - E°_\text{anode}$$

$$\Delta G° = -nFE°_\text{cell}$$

| Symbol | Meaning | Value |
|---|---|---|
| $E°_\text{cell}$ | Standard cell potential | V |
| $n$ | Moles of electrons transferred | mol |
| $F$ | Faraday's constant | 96,485 C/mol |

- $E°_\text{cell} > 0$ → $\Delta G° < 0$ → spontaneous (galvanic)
- $E°_\text{cell} < 0$ → $\Delta G° > 0$ → non-spontaneous (electrolytic)

### Standard Reduction Potentials

Look up $E°$ values in a table (always given as reduction potentials). The species with a **more positive** $E°$ is reduced (cathode); the one with a **more negative** $E°$ is oxidized (anode).

> [!example] Worked Example
> Zn + Cu²⁺ → Zn²⁺ + Cu
>
> $E°_\text{cathode}(\text{Cu}) = +0.34$ V; $E°_\text{anode}(\text{Zn}) = -0.76$ V
>
> $E°_\text{cell} = 0.34 - (-0.76) = +1.10$ V
>
> $\Delta G° = -(2)(96{,}485)(1.10) = -212{,}300$ J = $-212.3$ kJ/mol (spontaneous)

> [!tip] Exam Tip
> When calculating $E°_\text{cell}$, do NOT multiply $E°$ values by stoichiometric coefficients — reduction potentials are intensive properties. Only multiply when calculating $\Delta G°$ (multiply by $n$).

---

## 9.10 Cell Potential Under Nonstandard Conditions

> [!note] Learning Objective
> Explain the relationship between deviations from standard cell conditions and changes in the cell potential. (9.10.A)

$$E = E° - \frac{RT}{nF}\ln Q$$

This is the **Nernst equation** — it calculates the actual cell potential at non-standard concentrations/pressures.

| Symbol | Meaning |
|---|---|
| $E$ | Actual cell potential |
| $E°$ | Standard cell potential |
| $R$ | 8.314 J/mol·K |
| $T$ | Temperature (K) |
| $n$ | Moles of electrons |
| $F$ | 96,485 C/mol |
| $Q$ | Reaction quotient |

### Effect of Q on Cell Potential

| Q vs. K | E vs. E° | Meaning |
|---|---|---|
| $Q < 1$ (excess reactants) | $E > E°$ | More driving force |
| $Q > 1$ (excess products) | $E < E°$ | Less driving force |
| $Q = K$ | $E = 0$ | Battery dead; equilibrium |

### Concentration Cells

Two half-cells with the same species but different concentrations: $E° = 0$ but $E \neq 0$. The cell runs until concentrations equalize.

> [!tip] Exam Tip
> At equilibrium, $Q = K$ and $E = 0$ — the cell is discharged. As the reaction proceeds toward equilibrium, Q increases and cell potential decreases. The Nernst equation quantifies this relationship.
