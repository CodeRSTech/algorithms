---
layout: algo
title: Shortest Common Supersequence
category: Dynamic Programming
attribution_sources:
  - Algorithm Visualizer Project
viz_url: https://algorithm-visualizer.org/dynamic-programming/shortest-common-supersequence
---

The shortest common supersequence (SCS) of two sequences $X$ and $Y$
is the shortest sequence which has $X$ and $Y$ as subsequences.

In other words assume we're given two strings str1 and str2, find
the shortest string that has both str1 and str2 as subsequences.

This is a problem closely related to the longest common
subsequence problem.

## Example

```
Input:   str1 = "geek",  str2 = "eke"
Output: "geeke"

Input:   str1 = "AGGTAB",  str2 = "GXTXAYB"
Output:  "AGXGTXAYB"
```

## References

- [trekhleb/javascript-algorithms](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sets/shortest-common-supersequence)
- [GeeksForGeeks](https://www.geeksforgeeks.org/shortest-common-supersequence/)


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