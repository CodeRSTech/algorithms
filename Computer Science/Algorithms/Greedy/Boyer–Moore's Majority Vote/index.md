---
layout: algo
title: Boyer–Moore's Majority Vote
category: Greedy
attribution_sources:
  - Algorithm Visualizer Project
viz_url: https://algorithm-visualizer.org/greedy/boyer-moores-majority-vote
---

The majority vote problem is to determine in any given sequence of choices whether there is a choice with more occurrences than half of the total number of choices in the sequence and if so, to determine this choice.

## Complexity
* **Time**:  ![](https://latex.codecogs.com/svg.latex?O(N))
* **Space**: ![](https://latex.codecogs.com/svg.latex?O(logN))

## References
* [Wikipedia](https://en.wikipedia.org/wiki/Boyer%E2%80%93Moore_majority_vote_algorithm)


## Implementations

{% tabs boyermoores-majority-vote %}

{% tab boyermoores-majority-vote Python %}
{% highlight python linenos %}
{% include_relative code.py %}
{% endhighlight %}
{% endtab %}

{% tab boyermoores-majority-vote JavaScript %}
{% highlight javascript linenos %}
{% include_relative code.js %}
{% endhighlight %}
{% endtab %}

{% endtabs %}