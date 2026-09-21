---
layout: algo
title: Depth-Limited Search
category: Branch and Bound
attribution_source: Algorithm Visualizer Project
viz_url: https://algorithm-visualizer.org/branch-and-bound/depth-limited-search
---

Depth-Limited search (DLS) is an algorithm for traversing or searching tree or graph data structures. It's actually specific type of DFS where the search is limited to some depth from start node (root). One starts at the root (selecting some arbitrary node as the root in the case of a graph) and explores as far as possible (within some limit) along each branch before backtracking.

## Complexity
* **Time**: worst $O(b^l))$
* **Space**: worst $O(b\cdot\,l))$
* **Notes**:
  * $b$ is branching factor, for example binary tree has branching factor $2$
  * $l$ is limit that we define

## References
* [Colorado State University Lecture Notes](http://www.cs.colostate.edu/~anderson/cs440/index.html/doku.php?id=notes:week2b)

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