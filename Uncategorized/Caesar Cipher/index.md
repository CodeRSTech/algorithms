---
layout: article_algorithm_visualizer
title: Caesar Cipher
category: Uncategorized
viz_url: https://algorithm-visualizer.org/uncategorized/caesar-cipher
---

In cryptography, a Caesar cipher, also known as Caesar's cipher, the shift cipher, Caesar's code or Caesar shift, is one of the simplest and most widely known encryption techniques. It is a type of substitution cipher in which each letter in the plaintext is replaced by a letter some fixed number of positions down the alphabet. For example, with a left shift of 3, D would be replaced by A, E would become B, and so on. The method is named after Julius Caesar, who used it in his private correspondence.

## Applications
* Often incorporated as part of more complex schemes, such as the Vigenère cipher

## Complexity
* **Time**: best O(N * #ofRotations), worst O(N * #ofRotations * alphabetSize)
* **Space**: best O(1), worst O(alphabetSize)

## References
* [Wikipedia](https://en.wikipedia.org/wiki/Caesar_cipher)

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
