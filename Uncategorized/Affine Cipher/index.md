---
layout: article_algorithm_visualizer
title: Affine Cipher
category: Uncategorized
viz_url: https://algorithm-visualizer.org/uncategorized/affine-cipher
---

The affine cipher is a type of monoalphabetic substitution cipher, wherein each letter in an alphabet is mapped to its numeric equivalent, encrypted using a simple mathematical function, and converted back to a letter.

## Applications
* Cryptanalysis
* More complex Variations of Affine Cipher are used in practical cryptography

## Complexity
* **Time**: worst ![](https://latex.codecogs.com/svg.latex?O(N)), ![](https://latex.codecogs.com/svg.latex?N) = length of plain/cipher text
* **Space**: worst ![](https://latex.codecogs.com/svg.latex?O(N)), to create the new mapping (plain->cipher, cipher->plain)

## References
* [Practicalcryptography](http://practicalcryptography.com/ciphers/affine-cipher/)

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
