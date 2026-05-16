---
title: "Unit 7: Equilibrium"
unit: 7
---

# Unit 7: Equilibrium

## 7.1 Introduction to Dynamic Equilibrium

> [!note] Learning Objective
> Explain the relationship between the occurrence of a reversible process and the establishment of equilibrium with reference to experimental observations. (7.1.A)

- **Dynamic equilibrium**: forward reaction rate = reverse reaction rate in a closed system
- Macroscopic properties (color, pressure, concentration) remain constant — but reactions still occur in both directions
- Requires a **closed system** (no matter exchange with surroundings)
- Reachable from either direction (starting from pure reactants or pure products)

### Characteristics of Equilibrium

- Concentrations of reactants and products are constant but not necessarily equal
- Rates of forward and reverse reactions are equal — not concentrations
- "Dynamic" means reactions are still occurring; it is not static

### Graphical Signs of Equilibrium

| Graph type | Pattern at equilibrium |
|---|---|
| Concentration vs. time | Both flatten to constant horizontal values |
| Reaction rate vs. time | Forward and reverse rates converge and become equal |
| Partial pressure vs. time | All pressures flatten to constants |

> [!tip] Exam Tip
> Equilibrium means equal **rates**, not equal **concentrations**. Saying "concentrations are equal" is a common mistake. The system is still active — both forward and reverse reactions continue at the same rate.

---

## 7.3 Reaction Quotient and Equilibrium Constant

> [!note] Learning Objective
> Represent the reaction quotient $Q_c$ or $Q_p$ for a reversible reaction and the corresponding equilibrium expressions $K_c$ or $K_p$. (7.3.A)

- **Q** (reaction quotient): calculated at **any point** in a reaction using current concentrations/pressures
- **K** (equilibrium constant): calculated using **equilibrium** concentrations/pressures only
- Pure solids and pure liquids are **excluded** from both Q and K expressions

### Writing K Expressions

For $a\text{A} + b\text{B} \rightleftharpoons c\text{C} + d\text{D}$:

$$K_c = \frac{[\text{C}]^c[\text{D}]^d}{[\text{A}]^a[\text{B}]^b} \qquad K_p = \frac{(P_C)^c(P_D)^d}{(P_A)^a(P_B)^b}$$

Stoichiometric coefficients become exponents. Only gases and aqueous species appear.

### Using Q to Predict Direction

| Comparison | Reaction shifts |
|---|---|
| $Q < K$ | Right (toward products) |
| $Q > K$ | Left (toward reactants) |
| $Q = K$ | At equilibrium; no net change |

> [!example] Worked Example
> N₂(g) + 3H₂(g) ⇌ 2NH₃(g), $K = 0.50$
>
> Given: [N₂] = 0.20 M, [H₂] = 0.60 M, [NH₃] = 0.10 M
>
> $Q = \dfrac{(0.10)^2}{(0.20)(0.60)^3} = \dfrac{0.010}{0.0432} \approx 0.23$
>
> $Q < K$ → shifts right toward more NH₃

> [!tip] Exam Tip
> Write K from the balanced equation — products over reactants, coefficients as exponents. Pure solids and liquids contribute a value of 1, so they're omitted.

---

## 7.4 Calculating the Equilibrium Constant

> [!note] Learning Objective
> Calculate $K_c$ or $K_p$ from experimental equilibrium concentrations or partial pressures. (7.4.A)

- Use **equilibrium** concentrations/pressures (not initial values) in the K expression
- If only initial concentrations are given, use an ICE table to find equilibrium values

### ICE Table Method

| | Reactant A | Reactant B | Product C |
|---|---|---|---|
| **I**nitial | given | given | given |
| **C**hange | $-ax$ | $-bx$ | $+cx$ |
| **E**quilibrium | I − ax | I − bx | I + cx |

Substitute equilibrium row into the K expression and solve for $x$.

> [!example] Worked Example
> $K_c = 4.0$ for A + B ⇌ 2C. Equilibrium: [A] = 0.20 M, [B] = 0.20 M, [C] = 0.40 M.
>
> $K_c = \dfrac{(0.40)^2}{(0.20)(0.20)} = \dfrac{0.16}{0.04} = 4.0$ ✓

> [!tip] Exam Tip
> All concentrations in the K expression must be equilibrium values. Use the small-x approximation (drop $x$ from $I \pm x$ when $K \ll 1$) to simplify algebra, then verify the approximation holds ($x < 5\%$ of initial).

---

## 7.5 Magnitude of the Equilibrium Constant

> [!note] Learning Objective
> Explain how very large or very small values of K relate to the relative concentrations of species at equilibrium. (7.5.A)

- $K \gg 1$ (e.g., $K > 10^4$): products strongly favored; reaction goes nearly to completion
- $K \ll 1$ (e.g., $K < 10^{-4}$): reactants strongly favored; very little product forms
- $K \approx 1$: comparable amounts of reactants and products at equilibrium

### Examples

| $K$ value | Interpretation |
|---|---|
| $K = 1.8 \times 10^5$ | Nearly complete product formation (e.g., strong acid dissociation) |
| $K = 1.3 \times 10^{-13}$ | Minimal product (e.g., weak acid, mostly remains undissociated) |
| $K \approx 1$ | Roughly equal reactants and products |

> [!tip] Exam Tip
> K magnitude tells you WHERE the equilibrium lies, not HOW FAST it gets there. A large K doesn't mean the reaction is fast — kinetics and thermodynamics are separate.

---

## 7.6 Properties of the Equilibrium Constant

> [!note] Learning Objective
> Represent a multistep process with an overall equilibrium expression using the constituent K expressions. (7.6.A)

- **Reversing** a reaction: $K_\text{reverse} = \dfrac{1}{K}$
- **Multiplying** coefficients by $n$: $K_\text{new} = K^n$
- **Adding** reactions: $K_\text{overall} = K_1 \times K_2 \times K_3 \times \cdots$

These same rules apply to Q.

> [!example] Worked Example
> Given: (1) A ⇌ B, $K_1 = 2.0$; (2) B ⇌ C, $K_2 = 5.0$
>
> Overall A ⇌ C: $K = K_1 \times K_2 = 2.0 \times 5.0 = 10.0$

> [!tip] Exam Tip
> Think of K manipulation like Hess's Law but with multiplication instead of addition. Always match how each given reaction relates to the target — reversed? multiplied? — before applying the rules.

---

## 7.7 Calculating Equilibrium Concentrations

> [!note] Learning Objective
> Identify concentrations or partial pressures of chemical species at equilibrium using initial conditions and the equilibrium constant. (7.7.A)

- Use an ICE (Initial, Change, Equilibrium) table to set up the algebra
- The variable $x$ represents the amount the reaction shifts to reach equilibrium

### ICE Table Procedure

1. Write the balanced equation
2. Set up the ICE table (let $x$ = change per mole of some reference species)
3. Write K expression in terms of equilibrium values
4. Solve for $x$ (may require quadratic formula; use small-$x$ approximation when $K \ll 1$)
5. Substitute back to find actual equilibrium concentrations

> [!example] Worked Example
> H₂(g) + I₂(g) ⇌ 2HI(g), $K_c = 50.0$. Initial: [H₂] = [I₂] = 1.00 M, [HI] = 0.
>
> ICE: H₂: 1.00 − x; I₂: 1.00 − x; HI: 2x
>
> $K_c = \dfrac{(2x)^2}{(1.00 - x)^2} = 50.0$
>
> $\dfrac{2x}{1.00 - x} = \sqrt{50.0} = 7.07$
>
> $x = 0.780$ M → [HI] = 1.56 M; [H₂] = [I₂] = 0.22 M

> [!tip] Exam Tip
> Before solving, check Q to determine which direction the shift occurs — this tells you the sign of $x$ in the change row. For K values much less than 1, the small-$x$ approximation significantly simplifies the algebra.

---

## 7.9 Le Châtelier's Principle

> [!note] Learning Objective
> Identify the response of a system at equilibrium to an external stress using Le Châtelier's principle. (7.9.A)

- **Le Châtelier's Principle**: when a system at equilibrium is stressed, it shifts to counteract the stress and restore equilibrium
- The value of K only changes with **temperature**

### Stresses and Responses

**Concentration changes:**
- Add reactant → shifts right (more product forms)
- Add product → shifts left (more reactant forms)
- Remove reactant → shifts left
- Remove product → shifts right

**Temperature changes:**
- Treat heat like a reactant (endothermic) or product (exothermic)
- Increase temperature → favors endothermic direction; **K changes**
- Decrease temperature → favors exothermic direction; **K changes**

**Pressure/volume changes (gases only):**
- Increase pressure (decrease volume) → shifts toward fewer moles of gas
- Decrease pressure (increase volume) → shifts toward more moles of gas
- Equal moles of gas on both sides → no shift

**Adding a catalyst:** no effect on equilibrium position or K — only speeds up reaching equilibrium.

> [!tip] Exam Tip
> Only temperature changes K. Concentration, pressure, and volume changes shift the position but keep K constant. Adding an inert gas at constant volume has no effect (no change in partial pressures).

---

## 7.10 Q and Le Châtelier's Principle

> [!note] Learning Objective
> Explain the relationships between Q, K, and the direction in which a reversible reaction will proceed. (7.10.A)

- Q provides the mathematical link between a disturbance and the direction of shift
- Any disturbance makes $Q \neq K$; the system shifts until $Q = K$ again

### Summary Table

| Disturbance | Effect on Q | Direction |
|---|---|---|
| Add reactant | Q decreases | Shifts right |
| Add product | Q increases | Shifts left |
| Remove reactant | Q increases | Shifts left |
| Remove product | Q decreases | Shifts right |
| Increase T (endothermic rxn) | K increases; Q < K | Shifts right |
| Increase T (exothermic rxn) | K decreases; Q > K | Shifts left |

> [!tip] Exam Tip
> When a stress is applied, calculate (or reason about) how Q changes relative to K. The system always shifts to make Q → K. Temperature is the only stress that actually changes K.

---

## 7.11 Solubility Equilibria and Ksp

> [!note] Learning Objective
> Calculate the solubility of a salt based on the value of $K_{sp}$ for the salt. (7.11.A)

- $K_{sp}$ = **solubility product constant**: equilibrium constant for dissolving a slightly soluble ionic compound
- Higher $K_{sp}$ = more soluble; lower $K_{sp}$ = less soluble
- Solid is not included in the $K_{sp}$ expression

### Writing Ksp Expressions

For AB(s) ⇌ A⁺(aq) + B⁻(aq): $K_{sp} = [\text{A}^+][\text{B}^-]$

For CaF₂(s) ⇌ Ca²⁺(aq) + 2F⁻(aq): $K_{sp} = [\text{Ca}^{2+}][\text{F}^-]^2$

### Calculating Molar Solubility

Let $s$ = moles of salt dissolving per liter. Use stoichiometry to express all ion concentrations in terms of $s$, then substitute into $K_{sp}$.

> [!example] Worked Example
> PbCl₂(s) ⇌ Pb²⁺(aq) + 2Cl⁻(aq); $K_{sp} = 1.6 \times 10^{-5}$
>
> ICE: [Pb²⁺] = s; [Cl⁻] = 2s
>
> $K_{sp} = (s)(2s)^2 = 4s^3 = 1.6 \times 10^{-5}$
>
> $s = \sqrt[3]{4.0 \times 10^{-6}} \approx 1.6 \times 10^{-2}$ M

> [!tip] Exam Tip
> To compare solubilities: if the stoichiometries match (same ion ratio), compare Ksp directly. If different (e.g., AB vs. AB₂), calculate actual molar solubility $s$ for each — don't compare Ksp values directly.

---

## 7.12 Common-Ion Effect

> [!note] Learning Objective
> Identify the solubility of a salt based on the concentration of a common ion already present in solution. (7.12.A)

- **Common-ion effect**: solubility of a salt decreases when one of its ions is already present in solution
- Explained by Le Châtelier's Principle: adding a product shifts equilibrium left → less dissolving
- Ksp doesn't change — but actual solubility decreases

### Calculation with Common Ion

Use an ICE table where the initial concentration of the common ion equals its concentration from the separate source.

> [!example] Worked Example
> Solubility of CaF₂ in 0.10 M NaF. $K_{sp} = 3.9 \times 10^{-11}$
>
> CaF₂(s) ⇌ Ca²⁺(aq) + 2F⁻(aq)
>
> ICE: [Ca²⁺] = x; [F⁻] = 0.10 + 2x ≈ 0.10 (small-x approximation)
>
> $K_{sp} = x(0.10)^2 = 0.010x = 3.9 \times 10^{-11}$
>
> $x = 3.9 \times 10^{-9}$ M (vs. $2.1 \times 10^{-4}$ M in pure water)

The common ion reduces solubility by a factor of over 50,000.

> [!tip] Exam Tip
> Set the initial [F⁻] to the common ion's concentration, not zero. The small-x approximation almost always works here because $K_{sp}$ is tiny. Always verify: is the approximation valid ($x \ll$ common ion concentration)?
