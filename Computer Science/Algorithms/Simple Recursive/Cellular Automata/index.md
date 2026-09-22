---
layout: algo
title: Cellular Automata
category: Simple Recursive
attribution_sources:
  - Algorithm Visualizer Project
viz_url: https://algorithm-visualizer.org/simple-recursive/cellular-automata
---

Uses a grid of cells and looks at each cell and the state (ex: on/off) of each of the surrounding neighbor cells and changes the state of the current cell according to a set of rules based on the neighbor cells' states.

## References
* [Wikipedia](https://en.wikipedia.org/wiki/Cellular_automaton)

## Implementations

{% tabs cellular-automata %}

{% tab cellular-automata Python %}
{% highlight python linenos %}
{% include_relative code.py %}
{% endhighlight %}
{% endtab %}

{% tab cellular-automata JavaScript %}
{% highlight javascript linenos %}
{% include_relative code.js %}
{% endhighlight %}
{% endtab %}

{% endtabs %}