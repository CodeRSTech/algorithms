---
layout: algo
title: Freivalds' Matrix-Multiplication Verification
category: Uncategorized
attribution_source: Algorithm Visualizer Project
viz_url: https://algorithm-visualizer.org/uncategorized/freivalds-matrix-multiplication-verification
---

# Freivalds Algorithm
Freivalds' algorithm is a probabilistic randomized algorithm used to verify matrix multiplication. Given three n × n matrices A, B, and C, a general problem is to verify whether A*B=C

## Complexity
* **Time**: ![](https://latex.codecogs.com/svg.latex?O(n^2))

## References
* [Wikipedia](https://www.wikiwand.com/en/Freivalds%27_algorithm)

## Implementations

{% tabs code %}

{% tab code Python %}
{% highlight python linenos %}
{% include_relative code.py %}
{% endhighlight %}
{% endtab %}

{% tab code JavaScript %}
{% highlight javascript linenos %}
{% include_relative code.js %}
{% endhighlight %}
{% endtab %}

{% endtabs %}