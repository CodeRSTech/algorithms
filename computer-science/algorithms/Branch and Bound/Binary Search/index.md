---
layout: algo
title: Binary Search
category: Branch and Bound
attribution_sources:
  - Algorithm Visualizer Project
viz_url: https://algorithm-visualizer.org/branch-and-bound/binary-search
---

In computer science, binary search, also known as half-interval
search, logarithmic search, or binary chop, is a search algorithm
that finds the position of a target value within a sorted
array. Binary search compares the target value to the middle
element of the array; if they are unequal, the half in which
the target cannot lie is eliminated and the search continues
on the remaining half until it is successful. If the search
ends with the remaining half being empty, the target is not
in the array.

![Binary Search](https://upload.wikimedia.org/wikipedia/commons/8/83/Binary_Search_Depiction.svg){: .invert-img}


## Complexity

**Time Complexity**: `O(log(n))` - since we split search area by two for every
next iteration.

## References

- [trekhleb/javascript-algorithms](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/search/binary-search)
- [Wikipedia](https://en.wikipedia.org/wiki/Binary_search_algorithm)
- [YouTube](https://www.youtube.com/watch?v=P3YID7liBug&index=29&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)


## Implementations

{% tabs binary-search %}

{% tab binary-search Python %}
{% highlight python linenos %}
{% include_relative code.py %}
{% endhighlight %}
{% endtab %}

{% tab binary-search JS (Iterative) %}
{% highlight javascript linenos %}
{% include_relative iterative.js %}
{% endhighlight %}
{% endtab %}

{% tab binary-search JS (Recursive) %}
{% highlight javascript linenos %}
{% include_relative recursive.js %}
{% endhighlight %}
{% endtab %}

{% endtabs %}