---
layout: algo
title: Affine Cipher
category: Uncategorized
attribution_sources:
  - Algorithm Visualizer Project
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

{% tabs affine-cipher %}

{% tab affine-cipher Python %}
{% highlight python linenos %}
{% include_relative code.py %}
{% endhighlight %}
{% endtab %}

{% tab affine-cipher JavaScript %}
{% highlight javascript linenos %}
{% include_relative code.js %}
{% endhighlight %}
{% endtab %}

{% endtabs %}