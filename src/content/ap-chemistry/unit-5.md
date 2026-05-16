---
title: "Unit 5: Kinetics"
unit: 5
---

# Unit 5: Kinetics

## 5.1 Reaction Rates

> [!note] Learning Objective
> Explain the relationship between the rate of a chemical reaction and experimental parameters. (5.1.A)

- Reaction rate = how quickly concentration changes over time; units: mol·L⁻¹·s⁻¹
- Rate = Δ[product] / Δt = −Δ[reactant] / Δt (negative sign: reactants decrease)
- Five factors affect rate: **concentration**, **temperature**, **surface area**, **catalysts**, **nature of reactants**

### Stoichiometry and Rates

For aA + bB → cC, rates are related by stoichiometric coefficients:

$$\text{rate} = -\frac{1}{a}\frac{\Delta[\text{A}]}{\Delta t} = -\frac{1}{b}\frac{\Delta[\text{B}]}{\Delta t} = +\frac{1}{c}\frac{\Delta[\text{C}]}{\Delta t}$$

### Factors Affecting Rate

**Temperature**: higher temperature → more kinetic energy → more collisions exceed activation energy → exponentially faster reaction.

**Concentration**: more particles per unit volume → more frequent collisions → faster reaction.

**Surface area**: finely divided solids expose more particles to collide; powdered Mg reacts faster than Mg strips.

**Catalysts**: provide an alternative pathway with lower activation energy; not consumed.

**Nature of reactants**: ionic solutions react rapidly; reactions requiring strong covalent bond breaking are slow. Physical state matters — gases and aqueous solutions react faster than solids.

> [!tip] Exam Tip
> Frame rate explanations in terms of (1) collision frequency and (2) fraction of collisions with sufficient energy and correct orientation. Always address both factors for full credit.

---

## 5.2 Rate Laws

> [!note] Learning Objective
> Represent experimental data with a consistent rate law expression. (5.2.A)

- Rate law: $\text{rate} = k[\text{A}]^m[\text{B}]^n$ where $m$ and $n$ are **experimentally determined** (never from the balanced equation)
- $k$ = rate constant (temperature-dependent)
- Overall reaction order = $m + n$

### Finding Reaction Orders from Experiments

Compare experiments where one concentration is held constant:
- If doubling [A] doubles rate → first order in A ($m = 1$)
- If doubling [A] quadruples rate → second order in A ($m = 2$)
- If doubling [A] has no effect → zero order in A ($m = 0$)

### Rate Constant Units by Order

| Order | Rate law | Units of $k$ |
|---|---|---|
| Zero | rate = $k$ | mol·L⁻¹·s⁻¹ |
| First | rate = $k[\text{A}]$ | s⁻¹ |
| Second | rate = $k[\text{A}]^2$ | L·mol⁻¹·s⁻¹ |

### Identifying Order from Graphs

| Graph | Linear if… |
|---|---|
| [A] vs. time | Zero order |
| ln[A] vs. time | First order |
| 1/[A] vs. time | Second order |

$$t_{1/2} = \frac{0.693}{k} \quad \text{(first order only)}$$

> [!tip] Exam Tip
> Never determine rate law exponents from the balanced equation — only from experimental data. The exponents reflect mechanism, not stoichiometry.

---

## 5.3 Concentration Changes Over Time

> [!note] Learning Objective
> Identify the rate law expression of a chemical reaction using data that show how concentrations change over time. (5.3.A)

- Integrated rate laws connect concentration to time for different reaction orders
- Plotting the appropriate function of [A] vs. time gives a straight line — the slope gives $k$

### Integrated Rate Laws

| Order | Integrated rate law | Linear plot | Slope |
|---|---|---|---|
| Zero | $[\text{A}]_t = [\text{A}]_0 - kt$ | [A] vs. $t$ | $-k$ |
| First | $\ln[\text{A}]_t = \ln[\text{A}]_0 - kt$ | ln[A] vs. $t$ | $-k$ |
| Second | $\dfrac{1}{[\text{A}]_t} = \dfrac{1}{[\text{A}]_0} + kt$ | 1/[A] vs. $t$ | $+k$ |

### Half-Life

For **first-order** reactions only:

$$t_{1/2} = \frac{0.693}{k}$$

The half-life is **constant** — every equal time interval, the concentration halves. This applies to radioactive decay and many first-order processes.

> [!example] Worked Example
> A first-order reaction has $k = 0.0250$ s⁻¹. What is the half-life?
>
> $t_{1/2} = 0.693 / 0.0250 = 27.7$ s

> [!tip] Exam Tip
> To determine order from data: try plotting ln[A] and 1/[A] vs. time. Whichever gives a straight line reveals the order. If [A] itself is linear, it's zero order.

---

## 5.4 Elementary Reactions

> [!note] Learning Objective
> Represent an elementary reaction as a rate law expression using stoichiometry. (5.4.A)

- An **elementary reaction** is a single-step process where reactants form products in one collision event
- For elementary steps **only**, the rate law can be written directly from stoichiometric coefficients
- This does NOT apply to overall reactions

### Types of Elementary Reactions

| Type | Example | Rate law | Order |
|---|---|---|---|
| Unimolecular | A → products | rate = $k[\text{A}]$ | First |
| Bimolecular | A + B → products | rate = $k[\text{A}][\text{B}]$ | Second |
| Termolecular | A + B + C → products | rate = $k[\text{A}][\text{B}][\text{C}]$ | Third |

Termolecular steps are **rare** — three-body simultaneous collisions with correct orientation have very low probability. Complex reactions instead proceed through multiple bimolecular steps.

> [!tip] Exam Tip
> If a problem states a step is elementary, you may write the rate law from the coefficients. Never do this for an overall multi-step reaction — that requires experimental data.

---

## 5.5 Collision Model

> [!note] Learning Objective
> Explain the relationship between the rate of an elementary reaction and the frequency, energy, and orientation of particle collisions. (5.5.A)

- For a reaction to occur: particles must collide with **sufficient energy** ≥ activation energy ($E_a$) AND with **correct orientation**
- Most collisions fail because most particles have insufficient energy
- Only a small fraction of all collisions are successful

### Maxwell–Boltzmann Distribution and Temperature

At a given temperature, particle energies follow a Maxwell–Boltzmann distribution. Only particles with energy ≥ $E_a$ can react.

**Effect of increasing temperature:**
- Distribution curve shifts right and flattens
- More particles exceed $E_a$
- Fraction of successful collisions increases significantly
- Rate increases (roughly doubles per 10°C rise)

### Orientation Requirement

Complex molecules must collide in a specific geometry for bonds to break and form correctly. An incorrect angle of approach fails even if energy is sufficient.

> [!tip] Exam Tip
> When explaining why temperature increases rate: (1) more particles have energy ≥ $E_a$, (2) collision frequency also increases slightly, but the energy effect dominates. Show understanding of the Maxwell–Boltzmann shift.

---

## 5.6 Reaction Energy Profile

> [!note] Learning Objective
> Represent the activation energy and overall energy change in an elementary reaction using a reaction energy profile. (5.6.A)

- A reaction energy profile (energy diagram) shows how potential energy changes as reactants convert to products
- X-axis: **reaction coordinate** (progress of reaction); Y-axis: **potential energy**
- The peak = **transition state** (highest energy, most unstable point; cannot be isolated)

### Reading an Energy Profile

| Feature | Meaning |
|---|---|
| Height of reactants | Starting potential energy |
| Peak height | Transition state energy |
| $E_a$ | Peak − reactants; energy needed to react |
| Products height | Final potential energy |
| $\Delta E$ | Products − reactants; overall energy change |

- $\Delta E < 0$: exothermic (products lower than reactants)
- $\Delta E > 0$: endothermic (products higher than reactants)

### Arrhenius Equation

$$k = A e^{-E_a / RT}$$

| Symbol | Meaning |
|---|---|
| $A$ | Frequency factor (collision frequency and orientation) |
| $E_a$ | Activation energy (J·mol⁻¹) |
| $R$ | Gas constant (8.314 J·mol⁻¹·K⁻¹) |
| $T$ | Temperature (K) |

Lower $E_a$ or higher $T$ → larger $k$ → faster reaction.

> [!tip] Exam Tip
> For a reversible reaction, the energy profile reads in both directions. For the reverse reaction, $E_a$ (reverse) = transition state energy − product energy. A catalyst lowers $E_a$ but does not change $\Delta E$.

---

## 5.7 Introduction to Reaction Mechanisms

> [!note] Learning Objective
> Identify the components of a reaction mechanism. (5.7.A)

- A **reaction mechanism** is the sequence of elementary steps by which reactants convert to products
- All elementary steps must sum to give the overall balanced equation
- **Intermediates**: formed in one step, consumed in a later step; not in overall equation
- **Catalysts**: consumed in one step, regenerated in a later step; not in overall equation

### Components of a Mechanism

| Component | Characteristic |
|---|---|
| Reactants | Starting materials |
| Products | Final substances |
| Intermediates | Appear and disappear during mechanism; absent from overall equation |
| Catalysts | Used then regenerated; absent from overall equation |

### Validating a Mechanism

A proposed mechanism is consistent with experiment if:
1. All elementary steps sum to the overall balanced equation
2. The mechanism predicts the observed rate law

> [!tip] Exam Tip
> Intermediates are formed and used up (never in overall equation). Catalysts are used and reformed (also not in overall equation). If a species cancels completely when you add all steps, it's one of these two.

---

## 5.8 Reaction Mechanism and Rate Law

> [!note] Learning Objective
> Identify the rate law for a reaction from a mechanism in which the first step is rate limiting. (5.8.A)

- The **rate-determining step** (slow step) is the bottleneck — the overall reaction cannot go faster than this step
- When the first step is slow and irreversible, the rate law comes directly from that step's molecularity
- Intermediates must **not** appear in the final rate law — substitute using earlier equilibria if needed

### Rules for Rate-Determining Step

- Write the rate law for the slow step using its reactants
- If the slow step involves an intermediate, express that intermediate in terms of original reactants using the fast equilibrium before it
- Confirm the resulting rate law matches experimental data

> [!example] Worked Example
> Mechanism: Step 1 (slow): NO₂ + NO₂ → NO₃ + NO; Step 2 (fast): NO₃ + CO → NO₂ + CO₂
>
> Overall: NO₂ + CO → NO + CO₂
>
> Rate law from slow step: rate = $k[\text{NO}_2]^2$ (bimolecular, both reactants are NO₂)

### Energy Profile for Multistep Reactions

- Multiple peaks = multiple transition states
- Valleys between peaks = **intermediates**
- Highest peak = rate-determining step (largest $E_a$)

> [!tip] Exam Tip
> "If the first step is slow and irreversible, write the rate law using just the reactants from that first step." Never include intermediates in the final rate law.

---

## 5.10 Multistep Reaction Energy Profiles

> [!note] Learning Objective
> Represent the activation energy and overall energy change in a multistep reaction with a reaction energy profile. (5.10.A)

- Multistep mechanisms show **multiple peaks** (transition states) and **valleys** (intermediates) on the energy profile
- Number of peaks = number of elementary steps
- Tallest peak = rate-determining step (highest $E_a$)
- Overall $\Delta E$ = energy of products − energy of reactants (independent of mechanism)

### Reading a Multistep Profile

| Feature | What it means |
|---|---|
| Each peak | A transition state (one per elementary step) |
| Each valley | A reaction intermediate |
| Highest peak | Rate-determining step |
| Reactant-to-product gap | Overall $\Delta E$ (or $\Delta H$) |

The mechanism only affects the pathway (peaks and valleys), not the overall thermodynamics ($\Delta E$ is fixed by reactants and products).

> [!tip] Exam Tip
> Count peaks to count steps. The intermediate sits in a valley — it's a real, temporary species. A catalyst lowers the highest peak without changing the reactant or product energies.

---

## 5.11 Catalysis

> [!note] Learning Objective
> Explain the relationship between the effect of a catalyst on a reaction and changes in the reaction mechanism. (5.11.A)

- A **catalyst** increases reaction rate by providing an alternative reaction pathway with **lower activation energy**
- Catalysts are not consumed overall: they appear as a reactant in one step and are regenerated as a product in a later step
- Catalysts do NOT change $\Delta E$ (overall energy change) — only $E_a$

### Types of Catalysts

| Type | Description | Example |
|---|---|---|
| Homogeneous | Same phase as reactants | H⁺ in aqueous reaction |
| Heterogeneous | Different phase (usually solid + gas/liquid) | Pt surface for H₂ + O₂ |
| Enzyme | Biological catalyst; active-site binding | Amylase breaking starch |

### Mechanistic Effect

A catalyst introduces new elementary steps with a lower-energy pathway. For example, acid-base catalysis: reactant gains H⁺ forming a new intermediate that reacts more easily, then H⁺ is released and recovered.

**Example — H₂O₂ decomposition with H⁺ catalyst:**
- Step 1: H⁺ + H₂O₂ → H₃O₂⁺
- Step 2: H₃O₂⁺ → H₂O + O (intermediate decomposes)
- Step 3: 2O → O₂; H⁺ regenerated

**Example — V₂O₅ catalyzing SO₂ → SO₃:**
- V₂O₅ + SO₂ → V₂O₄ + SO₃
- V₂O₄ + ½O₂ → V₂O₅ (catalyst regenerated)

### Energy Profile with Catalyst

The catalyzed pathway shows a lower peak (or multiple lower peaks) compared to the uncatalyzed pathway, but the same reactant and product energy levels.

> [!tip] Exam Tip
> On an energy diagram, a catalyst lowers the activation energy (peak height) but doesn't change the energies of reactants or products ($\Delta E$ unchanged). Identify a catalyst in a mechanism: it appears as a reactant early and as a product later — it cancels out in the overall equation.
