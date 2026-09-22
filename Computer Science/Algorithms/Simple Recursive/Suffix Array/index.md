---
layout: algo
title: Suffix Array
category: Simple Recursive
attribution_sources:
  - Algorithm Visualizer Project
viz_url: https://algorithm-visualizer.org/simple-recursive/suffix-array
---

a suffix array is just a sorted array of all the suffixes of a given string. The main algorithms include (efficient & inefficient) construction of Suffix Array and how we can use it for substring search & other purposes

## Applications
* Substring Search
* Bioinformatics
* Data Compression

## Complexity
* **Time**:  ![](https://latex.codecogs.com/svg.latex?O(N^2\cdot\,log(N))) for Naive construction
* **Space**: ![](https://latex.codecogs.com/svg.latex?O(N^2))

## References
* [Codechef](https://discuss.codechef.com/questions/21385/a-tutorial-on-suffix-arrays)

## Implementations

{% tabs suffix-array %}

{% tab suffix-array Python %}
{% highlight python linenos %}
{% include_relative code.py %}
{% endhighlight %}
{% endtab %}

{% tab suffix-array JavaScript %}
{% highlight javascript linenos %}
{% include_relative code.js %}
{% endhighlight %}
{% endtab %}

{% endtabs %}