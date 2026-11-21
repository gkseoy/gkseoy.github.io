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
    <dt>Jan 2024 – Present</dt>
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
      <!-- Add part-time work details here. -->
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

<!--
  Edit each title, PDF filename, and activity/period below.
  Place the PDF files in assets/resume/.
-->
<ul class="resume-work-list" role="list">
  <li class="resume-work-item">
    <a class="resume-work-title" href="{{ '/assets/resume/work-01.pdf' | relative_url }}" target="_blank" rel="noopener">Work title 1</a>
    <span class="resume-work-meta">Activity or period 1</span>
  </li>
  <li class="resume-work-item">
    <a class="resume-work-title" href="{{ '/assets/resume/work-02.pdf' | relative_url }}" target="_blank" rel="noopener">Work title 2</a>
    <span class="resume-work-meta">Activity or period 2</span>
  </li>
</ul>

