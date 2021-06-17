---
layout: freeform
title: Portfolio
permalink: /portfolio/
css: "/assets/css/portfolio.css"
---
<div>
  <div class="portfolio-grid">
  {% for post in site.categories.portfolio %}


    <div class="grid-item" style="background-image:url({{post.image}})">
      <a href="{{ post.url }}">
        <div class="excerpt">
          <h2>{{ post.title }}</h2>
          {{ post.excerpt }}
        </div>
        </a>
    </div>
  {% endfor %}
  </div>
</div>