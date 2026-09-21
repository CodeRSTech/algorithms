---
layout: algo
title: Pancake Sort
category: Brute Force
attribution_source: Algorithm Visualizer Project
viz_url: https://algorithm-visualizer.org/brute-force/pancake-sort
---

Pancake Sort,inspired from sorting a stack of pancake using spatula, is a simple sorting algorithm that only have 1 operation called flip. </br> flip (i) : Reverse array from i to N where N is length of array 

## Complexity
* **Time**: worst ![](https://latex.codecogs.com/svg.latex?O(n^2))
* **Space**: worst ![](https://latex.codecogs.com/svg.latex?O(1)) auxiliary

## References
* [Wikipedia](https://en.wikipedia.org/wiki/Pancake_sorting)
* [Geeksforgeeks](http://www.geeksforgeeks.org/pancake-sorting/)

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