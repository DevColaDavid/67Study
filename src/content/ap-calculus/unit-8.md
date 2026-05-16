---
title: "Unit 8: Applications of Integration"
unit: 8
---

# Unit 8: Applications of Integration

## Average Value and Motion

### 8.1 Finding the Average Value of a Function on an Interval

The **average value** of $f$ on $[a,b]$:

$$f_{\text{avg}} = \frac{1}{b-a}\int_a^b f(x)\,dx$$

**Mean Value Theorem for Integrals:** There exists $c \in [a,b]$ where $f(c) = f_{\text{avg}}$.

> [!example] Example
> Average value of $f(x) = x^2$ on $[0, 3]$:
> $$\frac{1}{3}\int_0^3 x^2\,dx = \frac{1}{3}\cdot\frac{27}{3} = 3$$

### 8.2 Connecting Position, Velocity, and Acceleration of Functions Using Integrals

For a particle with velocity $v(t)$:

| Quantity | Formula |
|---|---|
| **Net displacement** | $\displaystyle\int_{t_1}^{t_2} v(t)\,dt$ |
| **Total distance** | $\displaystyle\int_{t_1}^{t_2} |v(t)|\,dt$ |
| Position | $s(t_2) = s(t_1) + \displaystyle\int_{t_1}^{t_2} v(t)\,dt$ |
| Velocity from acceleration | $v(t_2) = v(t_1) + \displaystyle\int_{t_1}^{t_2} a(t)\,dt$ |

> [!warning] Net vs. Total Distance
> Net displacement = total right movement minus total left movement (can be 0 or negative).
> Total distance is always non-negative — split the integral at sign changes of $v(t)$.

### 8.3 Using Accumulation Functions and Definite Integrals in Applied Contexts

Many applied problems involve $\int_a^b \text{(rate)}\,dt = \text{net change}$:
- Water flowing into a tank: $\int_a^b r(t)\,dt$ = net change in volume
- Cars entering a highway: integral of rate = net change in cars
- Heating/cooling: integral of rate of temperature change

## Area Between Curves

### 8.4 Finding the Area Between Curves Expressed as Functions of x

For two curves $f(x)$ and $g(x)$ where $f(x) \geq g(x)$ on $[a,b]$:

$$A = \int_a^b [f(x) - g(x)]\,dx$$

If the curves intersect, split at intersection points and handle each piece separately.

> [!example] Example
> Area between $y = x^2$ and $y = x$ on $[0,1]$ (where $x \geq x^2$):
> $$A = \int_0^1 (x - x^2)\,dx = \left[\frac{x^2}{2} - \frac{x^3}{3}\right]_0^1 = \frac{1}{2} - \frac{1}{3} = \frac{1}{6}$$

### 8.5 Finding the Area Between Curves Expressed as Functions of y

When boundaries are given as $x = f(y)$ and $x = g(y)$, integrate with respect to $y$:

$$A = \int_c^d [f(y) - g(y)]\,dy \quad \text{where } f(y) \geq g(y)$$

> [!tip] When to Integrate with Respect to y
> Use this method when curves are more naturally expressed as functions of $y$, or when integrating with respect to $x$ would require splitting into multiple integrals.

### 8.6 Finding the Area Between Curves That Intersect at More Than Two Points

Find all intersection points, determine which function is on top in each subinterval, and sum the integrals.

$$A = \sum_i \int_{a_i}^{b_i} |f(x) - g(x)|\,dx$$

## Volumes of Solids

### 8.7 Volumes with Cross Sections: Squares and Rectangles

For a solid with known cross-sectional area $A(x)$ perpendicular to the $x$-axis:

$$V = \int_a^b A(x)\,dx$$

**Squares perpendicular to $x$-axis:** $A(x) = [s(x)]^2$ where $s(x)$ is the side length.

**Rectangles:** $A(x) = \text{base}(x) \times \text{height}(x)$

> [!example] Example
> Region bounded by $y = \sqrt{x}$ and $x$-axis on $[0,4]$, cross sections are squares perpendicular to $x$-axis.
> $$V = \int_0^4 (\sqrt{x})^2\,dx = \int_0^4 x\,dx = 8$$

### 8.8 Volumes with Cross Sections: Triangles and Semicircles

**Equilateral triangles** with side $s$: $A = \dfrac{\sqrt{3}}{4}s^2$

**Isoceles right triangles** with leg $s$: $A = \dfrac{1}{2}s^2$

**Semicircles** with diameter $d$: $A = \dfrac{\pi}{8}d^2$

### 8.9 Volume with Disc Method: Revolving Around the x- or y-Axis

Revolve $y = f(x) \geq 0$ around the **$x$-axis**:

$$V = \pi\int_a^b [f(x)]^2\,dx$$

Revolve $x = g(y) \geq 0$ around the **$y$-axis**:

$$V = \pi\int_c^d [g(y)]^2\,dy$$

> [!example] Sphere
> Revolve $y = \sqrt{r^2 - x^2}$ around the $x$-axis:
> $$V = \pi\int_{-r}^{r}(r^2-x^2)\,dx = \pi\left[r^2 x - \frac{x^3}{3}\right]_{-r}^{r} = \frac{4\pi r^3}{3}$$

### 8.10 Volume with Disc Method: Revolving Around Other Axes

Revolve $y = f(x)$ around $y = k$ (horizontal axis):

$$V = \pi\int_a^b [f(x) - k]^2\,dx$$

Revolve $x = g(y)$ around $x = h$ (vertical axis):

$$V = \pi\int_c^d [g(y) - h]^2\,dy$$

### 8.11 Volume with Washer Method: Revolving Around the x- or y-Axis

When the solid has a hole (two boundary curves), use washers:

$$V = \pi\int_a^b \left([f(x)]^2 - [g(x)]^2\right)dx$$

where $f(x)$ is the outer radius and $g(x)$ is the inner radius (both measured from the axis).

> [!example] Example
> Region between $y = \sqrt{x}$ and $y = x$ revolved around the $x$-axis on $[0,1]$:
> $$V = \pi\int_0^1 \left[(\sqrt{x})^2 - x^2\right]dx = \pi\int_0^1(x - x^2)\,dx = \pi\cdot\frac{1}{6} = \frac{\pi}{6}$$

### 8.12 Volume with Washer Method: Revolving Around Other Axes

Revolve region between $f(x)$ and $g(x)$ (where $f \geq g$) around $y = k$:

$$V = \pi\int_a^b\left[(f(x)-k)^2 - (g(x)-k)^2\right]dx$$

> [!warning] Identify Outer and Inner Radius
> The outer radius is the distance from the axis of rotation to the farther curve; the inner radius is the distance to the nearer curve. Always subtract inner² from outer².

> [!bc] 8.13 The Arc Length of a Smooth, Planar Curve and Distance Traveled
>
> **Arc length** of $y = f(x)$ on $[a,b]$ (where $f'$ is continuous):
>
> $$L = \int_a^b \sqrt{1 + [f'(x)]^2}\,dx$$
>
> **Arc length** of $x = g(y)$ on $[c,d]$:
>
> $$L = \int_c^d \sqrt{1 + [g'(y)]^2}\,dy$$
>
> **Distance traveled** by a particle with position $(x(t), y(t))$:
>
> $$L = \int_{t_1}^{t_2}\sqrt{[x'(t)]^2 + [y'(t)]^2}\,dt$$
>
> > [!example] Example
> > Arc length of $y = \frac{2}{3}x^{3/2}$ on $[0,3]$:
> >
> > $f'(x) = x^{1/2}$, so $1 + [f'(x)]^2 = 1 + x$
> >
> > $L = \int_0^3\sqrt{1+x}\,dx = \left[\frac{2}{3}(1+x)^{3/2}\right]_0^3 = \frac{2}{3}(8-1) = \frac{14}{3}$
