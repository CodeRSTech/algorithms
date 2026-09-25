---
layout: algo
title: Depth-First Search
category: Brute Force
attribution_sources:
  - Algorithm Visualizer Project
viz_url: https://algorithm-visualizer.org/brute-force/depth-first-search
---

Depth-first search (DFS) is an algorithm for traversing or
searching tree or graph data structures. One starts at
the root (selecting some arbitrary node as the root in
the case of a graph) and explores as far as possible
along each branch before backtracking.

![Algorithm Visualization](https://upload.wikimedia.org/wikipedia/commons/7/7f/Depth-First-Search.gif){: .invert-img}


## Applications
* Finding connected components.
* Topological sorting.
* Finding 2-(edge or vertex)-connected components.
* Finding 3-(edge or vertex)-connected components.
* Finding the bridges of a graph.
* Generating words in order to plot the Limit Set of a Group.
* Finding strongly connected components.
* Planarity testing
* Solving puzzles with only one solution, such as mazes. (DFS can be adapted to find all solutions to a maze by only including nodes on the current path in the visited set.)
* Maze generation may use a randomized depth-first search.
* Finding biconnectivity in graphs.

## References

- [trekhleb/javascript-algorithms](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/tree/depth-first-search)
- [Wikipedia](https://en.wikipedia.org/wiki/Depth-first_search)
- [Tree Traversals (Inorder, Preorder and Postorder)](https://www.geeksforgeeks.org/tree-traversals-inorder-preorder-and-postorder/)
- [BFS vs DFS](https://www.geeksforgeeks.org/bfs-vs-dfs-binary-tree/)


## Implementations

{% tabs python %}

{% tab python Python %}
{% highlight python linenos %}
{% include_relative code.py %}
{% endhighlight %}
{% endtab %}

{% endtabs %}

### JavaScript

{% tabs js %}

{% tab js Graph %}
{% highlight javascript linenos %}
{% include_relative graph.js %}
{% endhighlight %}
{% endtab %}

{% tab js Shortest Path %}
{% highlight javascript linenos %}
{% include_relative shortestPath.js %}
{% endhighlight %}
{% endtab %}

{% tab js Tree %}
{% highlight javascript linenos %}
{% include_relative tree.js %}
{% endhighlight %}
{% endtab %}

{% tab js Weighted Graph %}
{% highlight javascript linenos %}
{% include_relative weightedGraph.js %}
{% endhighlight %}
{% endtab %}

{% endtabs %}