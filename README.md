# Seoyoung Yoon Blog

Jekyll과 [Monophase](https://github.com/zivhub/monophase) 테마로 만든 개인 GitHub Pages 블로그입니다.

## 내용 수정

- 이력은 [`Main.md`](Main.md)에서 수정합니다.
- 논문 리뷰는 `_paper_reviews/`, 참관기는 `_event_notes/`, 세미나 기록은 `_seminars/`에 저장합니다.
- 각 글은 `geminifs.html` 또는 `seminar-name.md`처럼 이름을 정하고, 상단의 `---` 사이에 `title:`과 `date:`를 넣습니다. 각 목록은 `date:` 기준 최신순으로 표시됩니다. 논문 리뷰는 공통 리뷰 레이아웃으로 표시되므로 본문부터 작성하면 됩니다.

### Resume에 논문, 성적표, 작업물 추가

논문이나 성적표 PDF는 `assets/resume/`에 올리고 [`_data/resume_resources.yml`](_data/resume_resources.yml)에 항목을 추가합니다. 외부 작업물의 경우 `url:`에 전체 주소를 넣습니다.

```yaml
- title: "My paper title"
  url: "/assets/resume/my-paper.pdf"
  type: "Publication · PDF"
```

## 로컬 실행

```bash
bundle exec jekyll serve
```

브라우저에서 `http://localhost:4000`을 열어 확인할 수 있습니다.
