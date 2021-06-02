---
layout: default
title: Portfolio
permalink: /portfolio/
---

<ul class="post-list">
{% for post in site.categories.portfolio %}
    <li>
      <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
      {{ post.excerpt }}
    </li>
  {% endfor %}
</ul>