---
layout: main
title: Learn Reference Guide
---

# Learn Reference Guide

A multi-disciplinary learning reference guide.

{% for discipline in site.data.curriculum %}
<h2>{{ discipline.discipline }}</h2>

{% for subject in discipline.subjects %}
<!-- Link to the subject's main index page -->
<h3>
<a href="{{ site.baseurl }}/{{ discipline.folder | uri_escape }}/{{ subject.folder | uri_escape }}/">
{{ subject.name }}
</a>
</h3>

<ul>
{% for category in subject.categories %}
<!-- Link to the specific category index page -->
<li>
<a href="{{ site.baseurl }}/{{ discipline.folder | uri_escape }}/{{ subject.folder | uri_escape }}/{{ category.folder | uri_escape }}/">
{{ category.name }}
</a>
</li>
{% endfor %}
</ul>
{% endfor %}
<hr>
{% endfor %}