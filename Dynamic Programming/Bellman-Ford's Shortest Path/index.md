---
layout: article_algorithm_visualizer
title: Bellman-Ford's Shortest Path
category: Dynamic Programming
viz_url: https://algorithm-visualizer.org/dynamic-programming/bellman-fords-shortest-path
---

The Bellman–Ford algorithm is an algorithm that computes shortest
paths from a single source vertex to all of the other vertices
in a weighted digraph. It is slower than Dijkstra's algorithm
for the same problem, but more versatile, as it is capable of
handling graphs in which some of the edge weights are negative
numbers.

![Bellman-Ford](https://upload.wikimedia.org/wikipedia/commons/2/2e/Shortest_path_Dijkstra_vs_BellmanFord.gif)

## Complexity

Worst-case performance `O(|V||E|)`
Best-case performance	`O(|E|)`
Worst-case space complexity `O(|V|)`

## References

- [trekhleb/javascript-algorithms](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/graph/bellman-ford)
- [Wikipedia](https://en.wikipedia.org/wiki/Bellman%E2%80%93Ford_algorithm)
- [On YouTube by Michael Sambol](https://www.youtube.com/watch?v=obWXjtg0L64&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)


## Implementations

### Python

```python
{% include_relative code.py %}
```

### JavaScript
**code.js**

```javascript
{% include_relative code.js %}
```
