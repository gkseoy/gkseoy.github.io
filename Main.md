---
layout: section-index
title: "About"
permalink: /resume/
description: "Education, experience, and skills."
body_class: resume-page
---

<style>
  .resume-grid {
    display: grid;
    grid-template-columns: minmax(9rem, 22%) minmax(0, 1fr);
    gap: 0.9rem 1.5rem;
    margin: 0 0 1.75rem;
  }

  .resume-grid dd {
    margin: 0;
  }

  .resume-grid dt {
    color: var(--muted-color);
  }

  .section-index > h3:not(:first-of-type) {
    margin-block-start: 3.25rem;
  }

  @media (max-width: 600px) {
    .resume-grid {
      grid-template-columns: 1fr;
      row-gap: 0.3rem;
    }

    .resume-grid dd:not(:last-child) {
      margin-bottom: 0.6rem;
    }
  }
</style>

<br>
## Education

<dl class="resume-grid resume-timeline">
  <div class="resume-row">
    <dt>2024 – Present</dt>
    <dd>
      <strong>Dongguk University</strong><br>
      Department of Computer Engineering<br>
      Expected graduation in February 2028<br>
    </dd>
  </div>

  <div class="resume-row">
    <dt>2023</dt>
    <dd>Sookmyung Girls' High School</dd>
  </div>
</dl>

---

## Experience

<dl class="resume-grid resume-timeline">
  <div class="resume-row">
    <dt>Feb 2026 – Present</dt>
    <dd>Undergraduate Research Intern at <em><a href="https://noslab.github.io/">NOSLab</a> (Prof. DongHyun Kang)</em></dd>
  </div>

  <div class="resume-row">
    <dt>Dec 2022 – Present</dt>
    <dd>
      <button type="button" id="part-time-experience-trigger" class="resume-experience-trigger" aria-controls="part-time-experience" aria-haspopup="dialog">
        Various part-time jobs
      </button>
    </dd>
  </div>
</dl>

<link rel="stylesheet" href="{{ '/assets/css/resume-experience.css' | relative_url }}">

<dialog id="part-time-experience" class="resume-experience-dialog" aria-label="Various part-time jobs">
  <div class="resume-experience-panel">
    <form method="dialog">
      <button type="submit" class="resume-experience-close" aria-label="Close" autofocus>×</button>
    </form>
    <div id="part-time-experience-content">
      <div class="resume-experience-heading">
        <h2 class="resume-experience-title">Various Part-Time Jobs</h2>
        <div class="resume-experience-duration-summary" aria-label="Part-time work duration summary">
          <span>Total: 4 years 6 months + 4 days</span>
          <span>Without overlaps: 3 years 1 month + 4 days</span>
        </div>
      </div>
      <ul class="resume-work-list" role="list">
        <li class="resume-work-item">
          <span class="resume-work-title">MEXX Daechi</span>
          <span class="resume-work-venue">Mathematics Teaching Assistant to Instructor Kyungsik Shin</span>
          <span class="resume-work-meta">Jan–Feb 2026 · Aug 2026–Present</span>
          <span class="resume-work-role">6 months total</span>
        </li>

        <li class="resume-work-item">
          <span class="resume-work-title">MEXX Daechi</span>
          <span class="resume-work-venue">Science Teaching Assistant to Instructor Heonjin Park</span>
          <span class="resume-work-meta">Mar 2024–Present</span>
          <span class="resume-work-role">2 years 9 months</span>
        </li>

        <li class="resume-work-item">
          <span class="resume-work-title">Saengkeu Academy, Daechi-dong</span>
          <span class="resume-work-venue">Mathematics Teaching Assistant</span>
          <span class="resume-work-meta">Jun–Aug 2025</span>
          <span class="resume-work-role">2 months</span>
        </li>

        <li class="resume-work-item">
          <span class="resume-work-title">Private Tutoring</span>
          <span class="resume-work-venue">Biology Tutor for a High School Senior</span>
          <span class="resume-work-meta">Oct 2024–Jun 2025</span>
          <span class="resume-work-role">9 months</span>
        </li>

        <li class="resume-work-item">
          <span class="resume-work-title">GODIVA Café Pop-Up at Shinsegae Department Store</span>
          <span class="resume-work-venue">Pop-Up Store Staff</span>
          <span class="resume-work-meta">Feb 2024</span>
          <span class="resume-work-role">4-day temporary position</span>
        </li>

        <li class="resume-work-item">
          <span class="resume-work-title">Disney 100th Anniversary Pop-Up Store</span>
          <span class="resume-work-venue">Pop-Up Store Staff</span>
          <span class="resume-work-meta">Dec 2023–Jan 2024</span>
          <span class="resume-work-role">2 months</span>
        </li>

        <li class="resume-work-item">
          <span class="resume-work-title">GODIVA Café</span>
          <span class="resume-work-venue">Café Staff</span>
          <span class="resume-work-meta">Dec 2022–Jan 2023</span>
          <span class="resume-work-role">2 months</span>
        </li>
      </ul>
    </div>
  </div>
</dialog>

<script src="{{ '/assets/js/resume-experience.js' | relative_url }}" defer></script>

---

## Skills

<dl class="resume-grid resume-timeline">
  <div class="resume-row">
    <dt>GPA</dt>
    <dd>XX (major GPA XX)</dd>
  </div>

  <div class="resume-row">
    <dt>Languages</dt>
    <dd>OPIc AL (August 28)<br>TOEIC 850 (Expired)</dd>
  </div>

  <div class="resume-row">
    <dt>Certifications</dt>
    <dd>SQLD (XX)<br>Linux Master Level 2 (XX)</dd>
  </div>

  <div class="resume-row">
    <dt>Scholarships</dt>
    <dd>
      Munju Scholarship Foundation (Fall 2025)<br>
      Beomeun Scholarship Foundation (Spring 2026)<br>
      Jongha Scholarship Association (Spring 2026–Winter 2027)
    </dd>
  </div>
</dl>

---

## Work

<ul class="resume-work-list" role="list">
  <li class="resume-work-item">
    <a
      class="resume-work-title"
      href="{{ '/assets/resume/kcc2026.pdf' | relative_url }}"
      target="_blank"
      rel="noopener"
    >코딩 기반 AI Agent의 프로그래밍 언어별 토큰 사용량 및 작업 완료 시간 분석</a>

    <span class="resume-work-venue">KCC 2026</span>
    <span class="resume-work-meta">Conference poster</span>
    <span class="resume-work-role">First Author · Presenter</span>
  </li>

  <li class="resume-work-item">
    <a
      class="resume-work-title"
      href="{{ '/assets/resume/ksc2026.pdf' | relative_url }}"
      target="_blank"
      rel="noopener"
    >유사도 기반 검색을 적용한 AI Agent의 컨텍스트 윈도우 구성 및 성능 평가</a>

    <span class="resume-work-venue">KSC 2026</span>
    <span class="resume-work-meta">Conference poster</span>
    <span class="resume-work-role">First Author · Presenter</span>
  </li>
</ul>

