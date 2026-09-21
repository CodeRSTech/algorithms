---
layout: algo
title: Bucket Sort
category: Divide and Conquer
attribution_source: Algorithm Visualizer Project
viz_url: https://algorithm-visualizer.org/divide-and-conquer/bucket-sort
---

Bucket sort, or bin sort, is a sorting algorithm that works by distributing the elements of an array into a number of buckets. Each bucket is then sorted individually, either using a different sorting algorithm, or by recursively applying the bucket sorting algorithm.

## Complexity
* **Time**: worst $O(n^2)$, best $O(n+k)$, average $O(n+k)$ 
where $n$ is the number of buckets and $k$ is the range of the input
* **Space**: worst $O(n\cdot\,k)$

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

## References
* [Wikipedia](https://en.wikipedia.org/wiki/Bucket_sort)