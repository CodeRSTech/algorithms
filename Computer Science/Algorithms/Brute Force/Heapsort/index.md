---
layout: algo
title: Heapsort
category: Brute Force
attribution_source: Algorithm Visualizer Project
viz_url: https://algorithm-visualizer.org/brute-force/heapsort
---

# Heap Sort

Heapsort is a comparison-based sorting algorithm.
Heapsort can be thought of as an improved selection
sort: like that algorithm, it divides its input into
a sorted and an unsorted region, and it iteratively
shrinks the unsorted region by extracting the largest
element and moving that to the sorted region. The
improvement consists of the use of a heap data structure
rather than a linear-time search to find the maximum.

![Algorithm Visualization](https://upload.wikimedia.org/wikipedia/commons/1/1b/Sorting_heapsort_anim.gif)

![Algorithm Visualization](https://upload.wikimedia.org/wikipedia/commons/4/4d/Heapsort-example.gif)

## Complexity

| Name                  | Best            | Average             | Worst               | Memory    | Stable    | Comments  |
| --------------------- | :-------------: | :-----------------: | :-----------------: | :-------: | :-------: | :-------- |
| **Heap sort**         | n&nbsp;log(n)   | n&nbsp;log(n)       | n&nbsp;log(n)       | 1         | No        |           |

## References

- [trekhleb/javascript-algorithms](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sorting/heap-sort)
- [Wikipedia](https://en.wikipedia.org/wiki/Heapsort)


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