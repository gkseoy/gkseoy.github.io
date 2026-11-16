---
layout: page
title: "Resume"
permalink: /resume/
description: "Education, experience, and skills."
---

Email · [{{ site.email }}](mailto:{{ site.email }})

<style>
  .resume-grid {
    display: grid;
    grid-template-columns: minmax(9rem, 22%) minmax(0, 1fr);
    gap: 0.9rem 1.5rem;
    margin: 0 0 1.75rem;
  }

  .resume-grid dd,
  .resume-references h2,
  .resume-references p {
    margin: 0;
  }

  .resume-grid dt {
    color: var(--muted-color);
  }

  .resume-references {
    align-items: baseline;
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

### Education

<dl class="resume-grid">
  <dt>2024 – Present</dt>
  <dd>
    <strong>Dongguk University</strong><br>
    Department of Computer Engineering<br>
    Expected graduation in February 2028<br>
    <em>Research interests include operating systems, storage systems,
    AI agents, and memory management for LLM-based agents.</em>
  </dd>

  <dt>2023</dt>
  <dd>Sookmyung Girls' High School</dd>
</dl>

### Experience

<dl class="resume-grid">
  <dt>Feb 2026 – Present</dt>
  <dd>Undergraduate Research Intern at <em>NOSLab (Prof. DongHyun Kang)</em></dd>

  <dt>Jan 2024 – Present</dt>
  <dd>Various part-time jobs</dd>
</dl>

### Skills

<dl class="resume-grid">
  <dt>GPA</dt>
  <dd>XX (major GPA XX)</dd>

  <dt>Languages</dt>
  <dd>OPIc AL (August 28)<br>TOEIC XXX (XX XX)</dd>

  <dt>Certifications</dt>
  <dd>SQLD (XX)<br>Linux Master Level 2 (XX)</dd>
</dl>

<div class="resume-grid resume-references">
  <h2>References</h2>
  <p>Available upon request</p>
</div>
