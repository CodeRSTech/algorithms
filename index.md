---
layout: main
title: Algorithm Reference Guide
---

# Algorithm Reference Guide

A comparative guide to data structures and algorithms.

{% for discipline in site.data.curriculum %}
<h2>{{ discipline.discipline }}</h2>

{% for subject in discipline.subjects %}
<!-- Link to the subject's main index page -->
<h3>
<a href="{{ site.baseurl }}/{{ discipline.folder }}/{{ subject.folder }}/">
{{ subject.name }}
</a>
</h3>

<ul>
{% for category in subject.categories %}
<!-- Link to the specific category index page -->
<li>
<a href="{{ site.baseurl }}/{{ discipline.folder }}/{{ subject.folder }}/{{ category.folder }}/">
{{ category.name }}
</a>
</li>
{% endfor %}
</ul>
{% endfor %}
<hr>
{% endfor %}