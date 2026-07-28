---
layout: page
title: "논문 리뷰"
permalink: /paper-reviews/
description: "읽은 논문의 핵심 아이디어와 생각을 정리한 리뷰"
---

<header class="page-intro">
  <p class="eyebrow">PAPER REVIEWS</p>
  <h1 class="page-title">논문 리뷰</h1>
  <p>읽은 논문의 문제의식, 핵심 아이디어, 실험 결과와 제 생각을 기록합니다.</p>
</header>

{% assign paper_reviews = site.categories["paper-review"] %}
{% if paper_reviews.size > 0 %}
<ul class="paper-archive">
  {% for post in paper_reviews %}
  <li>
    <a href="{{ post.url | relative_url }}">
      <div>
        <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: site.plainwhite.date_format }}</time>
        <h2>{{ post.title }}</h2>
        {% if post.excerpt %}
        <p>{{ post.excerpt | strip_html | truncate: 130 }}</p>
        {% endif %}
      </div>
      <span aria-hidden="true">↗</span>
    </a>
  </li>
  {% endfor %}
</ul>
{% else %}
<div class="empty-state empty-state-large">
  <p>아직 등록된 논문 리뷰가 없습니다.</p>
  <span>첫 리뷰가 올라오면 이곳에서 바로 확인할 수 있습니다.</span>
</div>
{% endif %}
