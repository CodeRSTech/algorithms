---
layout: algo
title: Job Scheduling Problem
category: Greedy
attribution_sources:
  - Algorithm Visualizer Project
viz_url: https://algorithm-visualizer.org/greedy/job-scheduling-problem
---

# Job Scheduling Algorithm
An array of jobs along with their deadline and profit (if job completes within deadline) where every job takes single unit of time. Maximize total profit if only one job can be scheduled at a time.

## Applications

## Complexity
* **Time**:  ![](https://latex.codecogs.com/svg.latex?O(N^2))
* **Space**: ![](https://latex.codecogs.com/svg.latex?O(N))

## References
* [mit.edu](http://ocw.mit.edu/courses/civil-and-environmental-engineering/1-204-computer-algorithms-in-systems-engineering-spring-2010/lecture-notes/MIT1_204S10_lec10.pdf)

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