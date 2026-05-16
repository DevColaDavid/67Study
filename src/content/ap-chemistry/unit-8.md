---
title: "Unit 8: Acids and Bases"
unit: 8
---

# Unit 8: Acids and Bases

## 8.1 pH, pOH, and Kw

> [!note] Learning Objective
> Calculate pH and pOH values based on Kw and ion concentrations in aqueous solutions. (8.1.A)

- **Kw** = water dissociation constant: $K_w = [\text{H}_3\text{O}^+][\text{OH}^-] = 1.0 \times 10^{-14}$ at 25°C
- **pH** = $-\log[\text{H}_3\text{O}^+]$; **pOH** = $-\log[\text{OH}^-]$
- At 25°C: $\text{pH} + \text{pOH} = 14$
- Neutral: pH = pOH = 7.0; Acidic: pH < 7; Basic: pH > 7

### Water Autoionization

$$2\text{H}_2\text{O} \rightleftharpoons \text{H}_3\text{O}^+ + \text{OH}^-$$

Pure water always self-ionizes to a small extent. At 25°C, [H₃O⁺] = [OH⁻] = $1.0 \times 10^{-7}$ M.

### Conversion Formulas

$$[\text{H}_3\text{O}^+] = 10^{-\text{pH}} \qquad [\text{OH}^-] = 10^{-\text{pOH}}$$

> [!example] Worked Example
> Find pH given [OH⁻] = $3.2 \times 10^{-5}$ mol/L:
>
> $\text{pOH} = -\log(3.2 \times 10^{-5}) = 4.49$
>
> $\text{pH} = 14 - 4.49 = 9.51$ (basic)

> [!tip] Exam Tip
> Neutral means [H₃O⁺] = [OH⁻], not necessarily pH = 7 (that's only at 25°C — Kw changes with temperature). Each pH unit represents a 10× change in [H₃O⁺].

---

## 8.2 pH and pOH of Strong Acids and Bases

> [!note] Learning Objective
> Calculate pH and pOH based on concentrations of all species in a solution of a strong acid or strong base. (8.2.A)

- Strong acids and bases **completely dissociate** in water
- For strong acids: [H₃O⁺] = initial acid concentration
- For strong bases: [OH⁻] = initial base concentration × number of OH⁻ per formula unit

### Strong Acid and Base Lists

| Strong Acids | Strong Bases |
|---|---|
| HCl, HBr, HI | NaOH, KOH, LiOH (Group 1) |
| HNO₃, HClO₄ | Ca(OH)₂, Ba(OH)₂ (Group 2) |
| H₂SO₄ (1st ionization) | Sr(OH)₂ |

> [!example] Worked Examples
> **0.010 M HCl**: [H₃O⁺] = 0.010 M → pH = −log(0.010) = **2.00**
>
> **0.0050 M NaOH**: [OH⁻] = 0.0050 M → pOH = 2.30 → pH = **11.70**
>
> **0.0050 M Ba(OH)₂**: [OH⁻] = 2 × 0.0050 = 0.010 M → pOH = 2.00 → pH = **12.00**

> [!tip] Exam Tip
> Check whether a base provides 1 or 2 OH⁻ per formula unit before calculating [OH⁻]. Group 2 hydroxides give 2 OH⁻ each. For strong acids/bases, skip ICE tables — use direct concentration.

---

## 8.3 Weak Acid and Base Equilibria

> [!note] Learning Objective
> Explain the relationship among pH, pOH, and concentrations of all species in a solution of a monoprotic weak acid or weak base. (8.3.A)

- Weak acids/bases only **partially ionize** — set up an ICE table and solve for [H₃O⁺] or [OH⁻]

$$K_a = \frac{[\text{H}_3\text{O}^+][\text{A}^-]}{[\text{HA}]} \qquad K_b = \frac{[\text{BH}^+][\text{OH}^-]}{[\text{B}]}$$

- $\text{p}K_a = -\log K_a$; larger $K_a$ = stronger acid
- Conjugate acid-base pairs: $K_a \times K_b = K_w = 1.0 \times 10^{-14}$, so $\text{p}K_a + \text{p}K_b = 14$

### Weak Acid ICE Table

For HA ⇌ H⁺ + A⁻ with initial [HA] = $C$:

| | HA | H⁺ | A⁻ |
|---|---|---|---|
| I | $C$ | 0 | 0 |
| C | $-x$ | $+x$ | $+x$ |
| E | $C - x$ | $x$ | $x$ |

$K_a = x^2 / (C - x)$; if $C \gg x$, approximate: $x \approx \sqrt{K_a \times C}$

### Percent Ionization

$$\% \text{ ionization} = \frac{[\text{H}_3\text{O}^+]_\text{eq}}{C_\text{initial}} \times 100\%$$

> [!tip] Exam Tip
> [H⁺] and [H₃O⁺] are used interchangeably. Use the small-$x$ approximation (drop $x$ in denominator) when $K_a \ll C$, then verify $x < 5\%$ of $C$. If not, use the quadratic formula.

---

## 8.4 Acid–Base Reactions and Buffers

> [!note] Learning Objective
> Explain the relationship among the concentrations of major species in a mixture of weak and strong acids and bases. (8.4.A)

- Strong acid + strong base → complete neutralization → salt + water; pH near 7 at equivalence
- Weak acid + strong base → forms conjugate base; buffer possible if weak acid in excess
- Weak base + strong acid → forms conjugate acid; buffer possible if weak base in excess

### Buffer Conditions

A **buffer** requires significant amounts of **both** a weak acid (HA) and its conjugate base (A⁻). It resists pH change because:
- Added H⁺ is absorbed by A⁻: A⁻ + H⁺ → HA
- Added OH⁻ is absorbed by HA: HA + OH⁻ → A⁻ + H₂O

### Key Reaction Types Summary

| Reaction type | At equivalence point | Buffer? |
|---|---|---|
| Strong acid + strong base | pH ≈ 7 (neutral salt) | No |
| Weak acid + strong base | pH > 7 (basic — conjugate base) | If weak acid in excess |
| Weak base + strong acid | pH < 7 (acidic — conjugate acid) | If weak base in excess |

> [!tip] Exam Tip
> After a strong base is added to a weak acid, think about what remains: if weak acid > base added, you have a buffer; if base > weak acid, you have excess strong base.

---

## 8.5 Acid–Base Titrations

> [!note] Learning Objective
> Explain results from the titration of a mono- or polyprotic acid or base solution. (8.5.A)

- At the **equivalence point**: moles of acid = moles of base (in stoichiometric ratio)
- At the **half-equivalence point** (weak acid titration): [HA] = [A⁻] → pH = pKa
- Titration curve shape reveals acid/base strength

### Titration Curve Characteristics

| Titration type | pH at equivalence | Curve features |
|---|---|---|
| Strong acid + strong base | ≈ 7.0 | Sharp vertical jump |
| Weak acid + strong base | > 7 (basic) | Buffer region; gradual rise then sharp jump |
| Weak base + strong acid | < 7 (acidic) | Buffer region; gradual drop then sharp fall |

### Indicator Selection

| Titration type | Indicator | Color change range |
|---|---|---|
| Strong acid + strong base | Phenolphthalein or methyl orange | Either works |
| Weak acid + strong base | Phenolphthalein | pH 8.3–10.0 |
| Strong acid + weak base | Methyl orange | pH 3.1–4.4 |

At the half-equivalence point: $\text{pH} = \text{p}K_a$ (use this to find $K_a$ from a titration curve)

### Polyprotic Acids

Multiple equivalence points appear — one per ionizable proton (e.g., H₃PO₄ shows three equivalence points). Between them, the half-equivalence point gives each successive pKa.

> [!tip] Exam Tip
> Reading a titration curve: the half-equivalence point (halfway to equivalence) gives pH = pKa. The equivalence point for weak acid + strong base is above pH 7. Count the equivalence points to determine how many acidic protons the acid has.

---

## 8.6 Molecular Structure of Acids and Bases

> [!note] Learning Objective
> Explain the relationship between the strength of an acid or base and the structure of the molecule or ion. (8.6.A)

- Acid strength correlates with the stability of the conjugate base (weaker conjugate base = stronger acid)
- Four structural factors: **electronegativity**, **resonance**, **inductive effects**, **bond strength**

### Factors Increasing Acid Strength

**Electronegativity of atom bonded to H**: more electronegative → better stabilizes negative charge on conjugate base → stronger acid
- HF < HCl < HBr < HI (going down the group — bond strength dominates)
- H₂O < H₂S < H₂Se (bond strength down the group)

**Resonance delocalization**: spreading negative charge over multiple atoms stabilizes the conjugate base
- Carboxylic acids (–COOH) are stronger than alcohols (–OH) because the acetate anion delocalizes charge over two oxygens

**Inductive effects**: nearby electronegative atoms withdraw electron density, making the proton easier to remove
- Cl₃CCOOH (trichloroacetic) is much stronger than CH₃COOH (acetic acid)

**Bond strength (H–X bond)**: weaker bond = easier to break = stronger acid
- Going down a group: HI > HBr > HCl > HF (bond strength dominates over electronegativity)

### Conjugate Pair Strength Relationship

| Acid strength | Conjugate base strength |
|---|---|
| Strong acid (HCl) | Very weak conjugate base (Cl⁻) |
| Weak acid (CH₃COOH) | Moderately weak conjugate base |
| Very weak acid (H₂O) | Moderately strong conjugate base (OH⁻) |

> [!tip] Exam Tip
> Strong acid → weak conjugate base. If you know which acid is stronger, its conjugate base is weaker. Use this to rank without memorizing every pKa.

---

## 8.7 pH and pKa

> [!note] Learning Objective
> Explain the relationship between the predominant form of a weak acid or base at a given pH and the pKa. (8.7.A)

- pH vs. pKa tells you which form (protonated HA or deprotonated A⁻) predominates

| Condition | Dominant form |
|---|---|
| pH < pKa | Protonated form (HA) |
| pH = pKa | Equal amounts of HA and A⁻ |
| pH > pKa | Deprotonated form (A⁻) |

### Indicators as Weak Acids

Indicators (HInd) have their own pKa:

$$\text{HInd} \rightleftharpoons \text{H}^+ + \text{Ind}^-$$

- At pH < pKa(Ind): HInd form dominates (color 1)
- At pH > pKa(Ind): Ind⁻ form dominates (color 2)
- Best indicator for a titration: choose one whose pKa ≈ pH at the equivalence point

> [!example] Worked Example
> Acetic acid has pKa = 4.76. At pH 5.76:
>
> pH > pKa → the conjugate base (acetate, CH₃COO⁻) predominates — more deprotonated form than protonated.

> [!tip] Exam Tip
> Think of it as: high pH = basic conditions = acid loses its proton. Low pH = acidic conditions = acid keeps its proton. This applies to any weak acid, including biological molecules and indicators.

---

## 8.8 Properties of Buffers

> [!note] Learning Objective
> Explain the relationship between the ability of a buffer to stabilize pH and the reactions that occur when acid or base is added. (8.8.A)

- A buffer resists pH changes when small amounts of strong acid or base are added
- Requires both a **weak acid (HA)** and its **conjugate base (A⁻)** in significant concentrations
- Works in both directions:
  - Add acid (H⁺): A⁻ + H⁺ → HA (conjugate base absorbs it)
  - Add base (OH⁻): HA + OH⁻ → A⁻ + H₂O (weak acid absorbs it)

### Henderson–Hasselbalch Equation

$$\text{pH} = \text{p}K_a + \log\frac{[\text{A}^-]}{[\text{HA}]}$$

When [A⁻] = [HA]: pH = pKa (optimal buffering, also the half-equivalence point in titrations).

> [!tip] Exam Tip
> When strong acid is added to a buffer: moles of HA increase, moles of A⁻ decrease by the same amount. When strong base is added: moles of HA decrease, moles of A⁻ increase. Recalculate the ratio, then use Henderson–Hasselbalch.

---

## 8.9 Henderson–Hasselbalch Equation

> [!note] Learning Objective
> Identify the pH of a buffer solution based on the identity and concentrations of the conjugate acid–base pair. (8.9.A)

$$\text{pH} = \text{p}K_a + \log\frac{[\text{A}^-]}{[\text{HA}]}$$

| Condition | pH relative to pKa |
|---|---|
| [A⁻] = [HA] | pH = pKa |
| [A⁻] > [HA] | pH > pKa (more basic) |
| [A⁻] < [HA] | pH < pKa (more acidic) |

> [!example] Worked Example
> Buffer: 0.20 M CH₃COOH + 0.10 M CH₃COO⁻, pKa = 4.76
>
> $\text{pH} = 4.76 + \log\left(\dfrac{0.10}{0.20}\right) = 4.76 + \log(0.50) = 4.76 - 0.30 = \mathbf{4.46}$

> [!tip] Exam Tip
> You can use moles instead of molarity in the Henderson–Hasselbalch ratio (since they're in the same volume, it cancels). This saves a step when the problem gives you moles directly.

---

## 8.10 Buffer Capacity

> [!note] Learning Objective
> Explain the relationship between buffer capacity and the relative concentrations of the conjugate acid and conjugate base components. (8.10.A)

- **Buffer capacity**: the amount of strong acid or base a buffer can absorb before significant pH change occurs
- Determined by **both** the ratio [A⁻]/[HA] **and** the total concentration of buffer components

### Two Ways to Increase Buffer Capacity

1. **Increase total concentration** of both HA and A⁻ (same ratio, more "reservoir")
2. **Keep ratio near 1:1** (equal amounts of both) — provides balanced protection against both acid and base

### Ratio Effects

| [A⁻]/[HA] ratio | Better at neutralizing |
|---|---|
| > 1 (more conjugate base) | Added acid |
| < 1 (more weak acid) | Added base |
| ≈ 1 (equal) | Both equally |

> [!tip] Exam Tip
> A buffer with 1.0 M HA and 1.0 M A⁻ has much greater capacity than 0.01 M HA and 0.01 M A⁻, even though both have pH = pKa. Capacity depends on concentration, not just the ratio.
