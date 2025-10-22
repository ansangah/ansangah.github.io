# ansangah.github.io

개발자 안상아의 포트폴리오 겸 기술 블로그입니다.  
Hugo Blox Builder(Tailwind CSS v4)를 커스터마이징해 딥러닝 학습 노트, 프로젝트, 학기별 과목 정리를 한 페이지에서 탐색할 수 있도록 구성했습니다.

## Highlights
- **Hero & Resume Section**
  - `custom-hero` 배경과 카드 스타일을 오버라이드하여 텍스트 가독성과 양쪽 정렬(평가 항목 반영)을 강화했습니다.
  - 이력서 블록은 `content/ko/_index.md` 설정만으로 다운로드 버튼 및 소개 문단을 연동합니다.
- **AI Blog View (`layouts/blog/ai-blog.html`)**
  - Front matter의 `dl_kind` 값으로 “교과서 정리 / 노트 · 논문 / 기타”를 자동 분류합니다.
  - 카드 요약은 `text-justify` 클래스로 정렬되어 읽기 흐름이 일정합니다.
- **Subjects View (`layouts/blog/subjects.html`)**
  - `semester`, `course_topics` 메타데이터를 이용해 학기별 카드를 묶고, 요약 문단 역시 양쪽 정렬로 정돈했습니다.
- **Pagefind Search**
  - `npx pagefind --source public`으로 생성한 인덱스를 로드해 한/영 전역 검색을 제공합니다.
- **글로벌 스타일 커스터마이징 (`assets/css/custom.css`)**
  - 다크/라이트 모드 대응, 슬라이더, 카드 스타일, `text-justify` 유틸리티 등을 직접 정의했습니다.
- **Slider Hero (`layouts/partials/slider.html`)**
  - Swiper 기반 캐러셀을 메인 페이지에서 코드 한 줄(`{{< slider >}}`)로 삽입할 수 있습니다.
  - `slider-hero-copy` 및 노란빛 오버레이를 추가해 환영 문구/CTA를 자연스럽게 배치하고 브랜딩을 강화했습니다.

## Quick Start
| 항목 | 권장 버전 |
| --- | --- |
| Hugo (extended) | `>= 0.151.0` |
| Node.js | `>= 18` |
| pnpm *(선택)* | `>= 10` |

```bash
git clone https://github.com/ansangah/ansangah.github.io.git
cd ansangah.github.io

# (선택) Tailwind/프론트 의존성 설치
pnpm install

# 실시간 미리보기
hugo server --disableFastRender
```

검색 인덱스까지 확인하려면 빌드 후 한 번 실행합니다.

```bash
hugo --buildFuture
npx pagefind --source public
```

## Content Guide

### AI Blog (`content/ko/blog/ai-blog/*/index.md`)
```yaml
---
title: "📁 2장 : 순방향 신경망(FNN) 정리"
summary: "다층 퍼셉트론의 구조와 분류/회귀 정리."
date: 2025-10-16
dl_kind: "textbook"    # textbook | notes | 기타
semester: "3-2"        # Subjects 뷰와 공유 가능
course_topics:
  - 순방향 신경망 구조
  - 활성 함수
content_meta:
  trending: true        # 상단 강조 섹션 노출 여부
math: true
---
```

### Subjects (`content/ko/blog/Subjects/*/index.md`)
- `_index.md`에서 `layout: "subjects"` 지정.
- 각 과목 페이지는 `semester`, `course_topics`, `dl_kind` 등을 통해 카드에 필요한 정보를 제공합니다.

## Feature Checklist
- **Projects & Cards**: 메인 페이지에서 3개 이상 프로젝트/카드 구성, AI Blog/Subjects에서 6가지 이상 카드 뷰 제공.
- **Dark/Light & Theming**: 커스텀 CSS로 다크/라이트 모드 및 기본 색상 변경.
- **Hero Contact & Socials**: 이름, 사진, 전공, 연락처(이메일)와 GitHub/Instagram 링크 노출.
- **Maps & Media**: 슬라이더, 지도, FAB 아이콘, PDF 다운로드 버튼 포함.
- **FAB Icons Usage**: Font Awesome Brands 팩 아이콘을 메인 홈에 3개, 연락처 페이지에 3개 배치해 총 6개 활용.
- **Search & Icons**: Pagefind 검색, 헤더 검색·다운로드 아이콘 구현.
- **Custom Views**: `ai-blog`, `subjects` 두 개의 HTML 커스텀 뷰 제작 및 적용.
- **Korean Default**: `hugo.yaml`에서 기본 언어를 한국어로 설정하고 다국어 메뉴 구성.
- **Deploy Pipeline**: GitHub Actions로 Hugo → Pagefind → GitHub Pages 배포 자동화.

## Styling & Components
- 전역 스타일 및 유틸리티: `assets/css/custom.css`
- 슬라이더 파셜: `layouts/partials/slider.html`
- 카드 레이아웃: `layouts/partials/views/card-ai.html`

## Build & Deploy
```bash
# 정적 사이트 생성
hugo --minify
npx pagefind --source public
```
`public/` 폴더를 GitHub Pages 등 정적 호스팅에 올리면 됩니다.  
GitHub Actions 배포 파이프라인에서는 다음 순서가 필수입니다.
1. `hugo --minify`
2. `npx pagefind --source public`
3. `actions/upload-pages-artifact` → `actions/deploy-pages`

## Structure (요약)
```
├── assets/                # 사용자 정의 CSS 및 프론트 자산
├── content/               # 다국어 콘텐츠 (ko, en)
│   └── blog/
│       ├── ai-blog/       # 인공지능 학습 노트
│       └── subjects/      # 학기별 과목 정리
├── layouts/               # 커스텀 템플릿 & 파셜
├── static/                # 정적 파일
├── .github/workflows/     # GitHub Pages 배포 워크플로
└── hugoblox.yaml / go.mod # Hugo Blox, Modules 설정
```

## Roadmap
- 과목 카드에 진행 상태·성적 배지 추가
- 영문 페이지 구조 정비 및 콘텐츠 확장
- 이미지 자동 최적화(Cloudflare Images, imgproxy 등) 연동

---
질문이나 피드백은 Issues 또는 PR로 남겨 주세요. 감사합니다! 😊
