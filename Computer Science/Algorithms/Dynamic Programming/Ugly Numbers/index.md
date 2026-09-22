---
layout: algo
title: Ugly Numbers
category: Dynamic Programming
attribution_sources:
  - Algorithm Visualizer Project
viz_url: https://algorithm-visualizer.org/dynamic-programming/ugly-numbers
---

Ugly numbers are numbers whose only prime factors are 2, 3 or 5. The sequence (1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 15, …) shows the first 11 ugly numbers. By convention, 1 is included. The given code displays the first N ugly numbers.

## Complexity
* **Time**: ![](https://latex.codecogs.com/svg.latex?O(n))
* **Space**: ![](https://latex.codecogs.com/svg.latex?O(n))

## References
* [Algorithmist](http://www.algorithmist.com/index.php/UVa_136)

## Implementations

{% tabs ugly-numbers %}

{% tab ugly-numbers Python %}
{% highlight python linenos %}
{% include_relative code.py %}
{% endhighlight %}
{% endtab %}

{% tab ugly-numbers JavaScript %}
{% highlight javascript linenos %}
{% include_relative code.js %}
{% endhighlight %}
{% endtab %}

{% endtabs %}