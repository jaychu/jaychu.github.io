---
layout: default
title: Blog
permalink: /blog/
---

<ul class="post-list">
{% for post in site.categories.blog %}
    <li>
      <h2><a href="{{ post.url }}">{{ post.title }}</a></h2>
      {{ post.excerpt }}
    </li>
  {% endfor %}
</ul>