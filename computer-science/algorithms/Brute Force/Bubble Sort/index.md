---
layout: algo
title: Bubble Sort
category: Brute Force
attribution_sources:
  - Algorithm Visualizer Project
viz_url: https://algorithm-visualizer.org/brute-force/bubble-sort
---

Bubble sort, sometimes referred to as sinking sort, is a
simple sorting algorithm that repeatedly steps through
the list to be sorted, compares each pair of adjacent
items and swaps them if they are in the wrong order
(ascending or descending arrangement). The pass through
the list is repeated until no swaps are needed, which
indicates that the list is sorted.

![Algorithm Visualization](https://upload.wikimedia.org/wikipedia/commons/c/c8/Bubble-sort-example-300px.gif){: .invert-img}


## Complexity

| Name                  | Best | Average | Worst | Memory | Stable | Comments  |
| --------------------- |:----:|:-------:|:-----:|:------:|:------:| :-------- |
| **Bubble sort**       | $n$  |  $n^2$  | $n^2$ |  $1$   |  Yes   |           |

## References

- [trekhleb/javascript-algorithms](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sorting/bubble-sort)
- [Wikipedia](https://en.wikipedia.org/wiki/Bubble_sort)
- [YouTube](https://www.youtube.com/watch?v=6Gv8vg0kcHc&index=27&t=0s&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)


## Implementations

{% tabs bubble-sort %}
  
{% tab bubble-sort Python %}
{% highlight python linenos %}
{% include_relative code.py %}
{% endhighlight %}
{% endtab %}

{% tab bubble-sort C++ %}
{% highlight cpp linenos %}
{% include_relative code.cpp %}
{% endhighlight %}
{% endtab %}

{% tab bubble-sort Java %}
{% highlight java linenos %}
{% include_relative code.java %}
{% endhighlight %}
{% endtab %}

{% tab bubble-sort JavaScript %}
{% highlight javascript linenos %}
{% include_relative code.js %}
{% endhighlight %}
{% endtab %}

{% endtabs %}