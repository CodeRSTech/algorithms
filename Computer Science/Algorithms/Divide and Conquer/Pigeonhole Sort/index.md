---
layout: algo
title: Pigeonhole Sort
category: Divide and Conquer
attribution_source: Algorithm Visualizer Project
viz_url: https://algorithm-visualizer.org/divide-and-conquer/pigeonhole-sort
---

Pigeonhole sorting is a sorting algorithm that is suitable for sorting lists of elements where the number of elements (n) and the number of possible key values (N) are approximately the same.

## Complexity
* **Time**:  ![](https://latex.codecogs.com/svg.latex?O(n+N))
* **Space**: ![](https://latex.codecogs.com/svg.latex?O(n))

## References
* [Wikipedia](https://en.wikipedia.org/wiki/Pigeonhole_sort)

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