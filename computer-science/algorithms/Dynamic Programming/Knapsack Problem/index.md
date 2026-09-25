---
layout: algo
title: Knapsack Problem
category: Dynamic Programming
attribution_sources:
  - Algorithm Visualizer Project
viz_url: https://algorithm-visualizer.org/dynamic-programming/knapsack-problem
---

The knapsack problem or rucksack problem is a problem in
combinatorial optimization: Given a set of items, each with
a weight and a value, determine the number of each item to
include in a collection so that the total weight is less
than or equal to a given limit and the total value is as
large as possible.

It derives its name from the problem faced by someone who is
constrained by a fixed-size knapsack and must fill it with the
most valuable items.

Example of a one-dimensional (constraint) knapsack problem:
which boxes should be chosen to maximize the amount of money
while still keeping the overall weight under or equal to 15 kg?

![knapsack problem](https://upload.wikimedia.org/wikipedia/commons/f/fd/Knapsack.svg){: .invert-img}


## Definition

### 0/1 knapsack problem

The most common problem being solved is the **0/1 knapsack problem**,
which restricts the number $x_i$ of copies of each kind of item to zero or one.

Given a set of n items numbered from $1$ up to $n$, each with a
weight $w_i$ and a value $v_i$, along with a maximum weight
capacity $W$,

maximize $$\sum_{i=1}^{n} v_i x_i$$

subject to $$\sum_{i=1}^{n} w_i x_i \leq W$$
and $x_i \in \{0, 1\}$ for all $i = 1, 2, \ldots, n$.

Here $x_i$ represents the number of instances of item $i$ to
include in the knapsack. Informally, the problem is to maximize
the sum of the values of the items in the knapsack so that the
sum of the weights is less than or equal to the knapsack's
capacity.

### Bounded knapsack problem (BKP)

The **bounded knapsack problem (BKP)** removes the restriction
that there is only one of each item, but restricts the number
$x_i$ of copies of each kind of item to a maximum non-negative
integer value $c$:

maximize $$\sum_{i=1}^{n} v_i x_i$$

subject to $$\sum_{i=1}^{n} w_i x_i \leq W$$
and $0 \leq x_i \leq c$ for all $i = 1, 2, \ldots, n$.

### Unbounded knapsack problem (UKP)

The **unbounded knapsack problem (UKP)** places no upper bound
on the number of copies of each kind of item and can be
formulated as above except for that the only restriction
on $x_i$ is that it is a non-negative integer.

maximize $\sum_{i=1}^{n} v_i x_i$

subject to $\sum_{i=1}^{n} w_i x_i \leq W$
and $x_i \geq 0$ for all $i = 1, 2, \ldots, n$.

## References

- [trekhleb/javascript-algorithms](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sets/knapsack-problem)
- [Wikipedia](https://en.wikipedia.org/wiki/Knapsack_problem)
- [0/1 Knapsack Problem on YouTube](https://www.youtube.com/watch?v=8LusJS5-AGo&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)


## Implementations

{% tabs knapsack-problem %}
  
{% tab knapsack-problem Python %}
{% highlight python linenos %}
{% include_relative code.py %}
{% endhighlight %}
{% endtab %}

{% tab knapsack-problem JavaScript %}
{% highlight javascript linenos %}
{% include_relative code.js %}
{% endhighlight %}
{% endtab %}

{% endtabs %}