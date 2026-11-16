---
layout: default
description: "Seoyoung의 이력과 논문 리뷰를 모아 둔 개인 블로그입니다."
---

<section class="home-hero">
  <p class="eyebrow">컴퓨터공학 학습 기록</p>
  <h1>배우고, 만들고,<br>기록합니다.</h1>
  <p class="hero-description">
    컴퓨터공학을 공부하며 쌓아 온 경험과 프로젝트, 그리고 읽은 논문에서 배운 내용을 정리하는 공간입니다.
  </p>
</section>

<nav class="home-sections" aria-label="주요 콘텐츠">
  <a class="feature-card" href="{{ '/resume/' | relative_url }}">
    <h2>이력</h2>
    <p>학력, 경험, 프로젝트와 기술을 한곳에 정리합니다.</p>
    <span class="card-link">이력 보기 <span aria-hidden="true">→</span></span>
  </a>

  <a class="feature-card" href="{{ '/paper-reviews/' | relative_url }}">
    <h2>논문 리뷰</h2>
    <p>읽은 논문의 핵심 아이디어와 생각을 기록합니다.</p>
    <span class="card-link">리뷰 모아보기 <span aria-hidden="true">→</span></span>
  </a>
</nav>

<section class="recent-reviews">
  <div class="section-heading">
    <h2>최근 논문 리뷰</h2>
    <a href="{{ '/paper-reviews/' | relative_url }}">전체 보기 <span aria-hidden="true">→</span></a>
  </div>

  {% assign paper_reviews = site.categories["paper-review"] %}
  {% if paper_reviews.size > 0 %}
  <ul class="review-list">
    {% for post in paper_reviews limit: 3 %}
    <li>
      <a href="{{ post.url | relative_url }}">
        <time datetime="{{ post.date | date_to_xmlschema }}">{{ post.date | date: site.date_format }}</time>
        <strong>{{ post.title | escape }}</strong>
        <span aria-hidden="true">↗</span>
      </a>
    </li>
    {% endfor %}
  </ul>
  {% else %}
  <div class="empty-state">
    <p>첫 번째 논문 리뷰를 준비 중입니다.</p>
  </div>
  {% endif %}
</section>
