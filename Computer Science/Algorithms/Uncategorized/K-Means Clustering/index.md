---
layout: algo
title: K-Means Clustering
category: Uncategorized
attribution_source: Algorithm Visualizer Project
viz_url: https://algorithm-visualizer.org/uncategorized/k-means-clustering
---

K-means clustering is a method to partition _n_ observations into _k_ clusters in which each observation belongs to 
the cluster with the nearest mean (cluster centers or cluster centroid).

Given a set of observations, where each observation is a d-dimensional real vector, _k-means_ clustering aims to 
partition the _n_ observations into _k(≤ n)_ sets so as to minimize the within-cluster sum of squares (i.e. variance).

## Complexity
* **Time**: ![$O(n^{2k+1})$](https://latex.codecogs.com/svg.latex?O(n^{2k+1})) for 2-dimensional real vector

## References
* [Wikipedia](https://en.wikipedia.org/wiki/K-means_clustering)
* [Inspired by kmeans.js.org](https://kmeans.js.org/)


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