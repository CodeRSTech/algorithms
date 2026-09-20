---
layout: article_algorithm_visualizer
title: Insertion Sort
category: Brute Force
viz_url: https://algorithm-visualizer.org/brute-force/insertion-sort
---

Insertion sort is a simple sorting algorithm that builds
the final sorted array (or list) one item at a time.
It is much less efficient on large lists than more
advanced algorithms such as quicksort, heapsort, or merge
sort.

![Algorithm Visualization](https://upload.wikimedia.org/wikipedia/commons/4/42/Insertion_sort.gif)

![Algorithm Visualization](https://upload.wikimedia.org/wikipedia/commons/0/0f/Insertion-sort-example-300px.gif)

## Complexity

| Name                  | Best            | Average             | Worst               | Memory    | Stable    | Comments  |
| --------------------- | :-------------: | :-----------------: | :-----------------: | :-------: | :-------: | :-------- |
| **Insertion sort**    | n               | n<sup>2</sup>       | n<sup>2</sup>       | 1         | Yes       |           |

## References

- [trekhleb/javascript-algorithms](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sorting/insertion-sort)
- [Wikipedia](https://en.wikipedia.org/wiki/Insertion_sort)


## Implementations

### Python

```python
{% include_relative code.py %}
```

### Java
**Code.java**

```java
{% include_relative Code.java %}
```

### JavaScript
**code.js**

```javascript
{% include_relative code.js %}
```
