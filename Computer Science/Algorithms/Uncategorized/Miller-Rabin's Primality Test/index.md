---
layout: algo
title: Miller-Rabin's Primality Test
category: Uncategorized
attribution_sources:
  - Algorithm Visualizer Project
viz_url: https://algorithm-visualizer.org/uncategorized/miller-rabins-primality-test
---

The Miller–Rabin primality test or Rabin–Miller primality test is a primality test: an algorithm which determines whether a given number is prime, similar to the Fermat primality test and the Solovay–Strassen primality test.

## Complexity
* **Time**: ![](https://latex.codecogs.com/svg.latex?O(klog^{3}(n))))
* **Probability**: ![](https://latex.codecogs.com/svg.latex?1-(1/(4^{k})))

## References

- [Wikipedia](https://en.wikipedia.org/wiki/Miller%E2%80%93Rabin_primality_test)


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