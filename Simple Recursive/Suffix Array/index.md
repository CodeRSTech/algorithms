---
layout: main
title: Suffix Array
category: Simple Recursive
---

# Suffix Array
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

### Python
```python
{% include_relative code.py %}
```

### JavaScript
**code.js**
```javascript
{% include_relative code.js %}
```
