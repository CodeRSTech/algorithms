---
layout: algo
title: Shortest Unsorted Continuous Subarray
category: Uncategorized
attribution_source: Algorithm Visualizer Project
viz_url: https://algorithm-visualizer.org/uncategorized/shortest-unsorted-continuous-subarray
---

# Shortest Unsorted Continous Subarray
"Given an integer array, you need to find one continuous subarray that if you only sort this subarray in ascending order, then the whole array will be sorted in ascending order, too.

You need to find the shortest such subarray and output its length."

## Complexity
* **Time**: worst ![](https://latex.codecogs.com/svg.latex?O(N)), 4 loops are used
* **Space**: worst ![](https://latex.codecogs.com/svg.latex?O(1)), to hold min and max values

## References
* [LeetCode](https://leetcode.com/articles/shortest-unsorted-continous-subarray/)

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