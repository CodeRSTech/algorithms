---
layout: default
title: Knuth-Morris-Pratt's String Search
category: Dynamic Programming
---

# Knuth-Morris-Pratt's String Search

The Knuth–Morris–Pratt string searching algorithm (or
KMP algorithm) searches for occurrences of a "word" `W`
within a main "text string" `T` by employing the
observation that when a mismatch occurs, the word itself
embodies sufficient information to determine where the
next match could begin, thus bypassing re-examination
of previously matched characters.

## Complexity

- **Time:** `O(|W| + |T|)` (much faster comparing to trivial `O(|W| * |T|)`)
- **Space:** `O(|W|)`

## References

- [trekhleb/javascript-algorithms](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/string/knuth-morris-pratt)
- [Wikipedia](https://en.wikipedia.org/wiki/Knuth%E2%80%93Morris%E2%80%93Pratt_algorithm)
- [YouTube](https://www.youtube.com/watch?v=GTJr8OvyEVQ&list=PLLXdhg_r2hKA7DPDsunoDZ-Z769jWn4R8)


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
