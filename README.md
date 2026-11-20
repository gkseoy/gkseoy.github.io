# Seoyoung Yoon Tech Blog

운영체제, 스토리지 시스템, 파일 시스템, LLM 기반 에이전트의 메모리를 공부하며 남기는 개인 기술 블로그입니다. Jekyll과 [Monophase](https://github.com/zivhub/monophase)를 기반으로 하며 GitHub Pages에서 배포됩니다.

- Live: [gkseoy.github.io](https://gkseoy.github.io)
- Author: Seoyoung Yoon
- Lab: [NOSLab](https://noslab.github.io/)

---

## 1. 주요 기능

- `All`, `Paper Reviews`, `Seminar`, `Event Notes`를 한 페이지에서 필터링
- 카테고리별 글을 날짜순으로 정렬하고 10개 단위로 페이지 구분
- Contact와 연구 Keywords를 보여주는 반응형 사이드바
- 논문 리뷰용 공통 레이아웃과 이미지 자산 관리
- 월별 세미나 기록과 학회 참관기 컬렉션
- 타임라인 형태의 CV와 작업물 링크 관리

## 2. 파일 구조

```text
.
├── _config.yml                 # 사이트 기본 정보와 컬렉션 설정
├── index.md                    # 메인 피드와 About
├── Main.md                     # CV
├── _paper_reviews/             # 논문 리뷰
├── _seminars/                  # 월별 세미나 기록
├── _event_notes/               # 학회·행사 참관기
├── _data/
│   ├── navigation.yml          # 메인 필터 순서와 이름
│   ├── sidebar.yml             # Contact와 Keywords
│   ├── social.yml              # 푸터 소셜 링크
│   └── resume_resources.yml    # CV 작업물·문서 링크
├── _includes/                  # 헤더, 푸터, 피드, 사이드바 구성 요소
├── _layouts/                   # 홈 2열 구조, 페이지, 논문 리뷰 레이아웃
└── assets/
    ├── css/                    # 사이트·리뷰·CV 스타일
    ├── js/                     # 필터, 페이지 이동, CV 인터랙션
    ├── conferences/            # 학회 썸네일
    └── paper-reviews/          # 리뷰별 그림
```

## 3. 로컬 실행

Ruby와 Bundler가 필요합니다.

```bash
bundle install
bundle exec jekyll serve
```

브라우저에서 `http://localhost:4000`을 열어 확인합니다. 정적 빌드만 확인하려면 다음 명령을 사용합니다.

```bash
bundle exec jekyll build
```

## 4. 글 작성

모든 컬렉션 글은 파일 상단의 front matter에 `title`, `date`, `description`을 작성합니다. 메인 피드는 `date`를 기준으로 최신 글부터 표시합니다.

### Paper Review

`_paper_reviews/<slug>.md` 또는 `.html`에 저장합니다. `layout`은 컬렉션 기본값인 `paper-review`가 자동 적용됩니다.

```yaml
---
title: "[Conference’YY] Paper title"
date: 2026-11-20 09:00:00 +0900
lang: ko
description: "메인 피드에 표시할 한 문장 요약"
thumbnail: /assets/conferences/example.png
---
```

리뷰 그림은 `assets/paper-reviews/<slug>/`에 보관합니다.

### Seminar

`_seminars/YYYY-MM.md`에 월별 기록을 작성합니다.

```yaml
---
layout: page
title: "2026.11"
date: 2026-11-01 09:00:00 +0900
lang: ko
description: "2026년 11월 세미나와 논문 발표 기록"
permalink: /seminars/2026-11/
---
```

### Event Note

`_event_notes/<event-slug>.md`에 행사별 참관기를 작성합니다. 기간 전체를 메인 피드에 표시하려면 `date_label`을 추가합니다.

```yaml
---
layout: page
title: "Event 2026"
date: 2026-10-22 09:00:00 +0900
date_label: "2026.10.22–10.23"
lang: ko
description: "행사 참관기 요약"
permalink: /event-notes/event-2026/
---
```

## 5. CV 관리

학력, 경험, 기술은 [`Main.md`](Main.md)에서 수정합니다. 논문, 성적표, 작업물 링크는 [`_data/resume_resources.yml`](_data/resume_resources.yml)에 추가합니다.

```yaml
- title: "My paper title"
  url: "/assets/resume/my-paper.pdf"
  type: "Publication · PDF"
```

로컬 PDF는 `assets/resume/`에 저장하고, 외부 작업물은 `url`에 전체 주소를 입력합니다.

## 6. 사이드바 수정

메인 오른쪽의 Contact와 Keywords는 [`_data/sidebar.yml`](_data/sidebar.yml)에서 관리합니다.

```yaml
contacts:
  - label: "GitHub"
    value: "gkseoy"
    url: "https://github.com/gkseoy"

keywords:
  - "Operating Systems"
  - "Storage Systems"
```

## 7. 디자인

- 공통 색상과 타이포그래피: `assets/css/site.css`
- 헤더, 피드, 필터, 사이드바: `_includes/site-frame.css`
- 사이트 이름: Poppins
- 한글 본문: 브라우저와 테마의 기본 sans-serif 계열
- 주요 색상: navy `#101d38`, blue `#245fba`

## 8. 배포

`main` 브랜치에 push하면 GitHub Pages가 사이트를 다시 빌드합니다.

```bash
git add <changed-files>
git commit -m "Describe the change"
git push origin main
```

배포 상태는 저장소의 **Actions** 또는 **Settings → Pages**에서 확인할 수 있습니다.
