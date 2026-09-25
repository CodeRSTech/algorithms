---
layout: algo
title: Merge Sort
category: Divide and Conquer
attribution_sources:
  - Algorithm Visualizer Project
viz_url: https://algorithm-visualizer.org/divide-and-conquer/merge-sort
---

In computer science, merge sort (also commonly spelled
mergesort) is an efficient, general-purpose,
comparison-based sorting algorithm. Most implementations
produce a stable sort, which means that the implementation
preserves the input order of equal elements in the sorted
output. Mergesort is a divide and conquer algorithm that
was invented by John von Neumann in 1945.

An example of merge sort. First divide the list into
the smallest unit (1 element), then compare each
element with the adjacent list to sort and merge the
two adjacent lists. Finally all the elements are sorted
and merged.

![Merge Sort](https://upload.wikimedia.org/wikipedia/commons/c/cc/Merge-sort-example-300px.gif){: .invert-img}


A recursive merge sort algorithm used to sort an array of 7
integer values. These are the steps a human would take to
emulate merge sort (top-down).

![Merge Sort](https://upload.wikimedia.org/wikipedia/commons/e/e6/Merge_sort_algorithm_diagram.svg){: .invert-img}


## Complexity

| Name           |    Best    |  Average   |   Worst    | Memory | Stable | Comments |
|----------------|:----------:|:----------:|:----------:|:------:|:------:|:---------|
| **Merge sort** | $n log(n)$ | $n log(n)$ | $n log(n)$ |  $n$   |  Yes   |          |


## Implementations

{% tabs merge-sort %}

{% tab merge-sort Python %}
{% highlight python linenos %}
{% include_relative code.py %}
{% endhighlight %}
{% endtab %}

{% endtabs %}

### JavaScript
{% tabs js %}

{% tab js bottomUp %}
{% highlight javascript linenos %}
{% include_relative bottomUp.js %}
{% endhighlight %}
{% endtab %}

{% tab js topDown %}
{% highlight javascript linenos %}
{% include_relative topDown.js %}
{% endhighlight %}
{% endtab %}

{% endtabs %}

## References

- [trekhleb/javascript-algorithms](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sorting/merge-sort)
- [Wikipedia](https://en.wikipedia.org/wiki/Merge_sort)
- [YouTube](https://www.youtube.com/watch?v=KF2j-9iSf4Q&index=27&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)
