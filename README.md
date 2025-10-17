# ansangah.github.io

개발자 안상아의 개인 포트폴리오 겸 기술 블로그입니다.  
Hugo Blox Builder(Tailwind CSS v4)를 기반으로 학습 기록, 프로젝트, 학기별 과목 정리 등을 한 곳에서 관리할 수 있도록 구성했습니다.

## 핵심 특징
- **커스텀 블로그 뷰**  
  - `ai-blog`: `dl_kind` 파라미터로 교과서/노트/기타를 분류해 카드 형태로 보여줍니다.  
  - `subjects`: `semester`, `course_topics` 메타데이터로 학기별 과목 정리를 버튼형 카드로 묶어 제공합니다.
- **다크/라이트 모드 대응**: `assets/css/custom.css`에서 주요 섹션 색상을 오버라이드해 모드별로 가독성을 유지합니다.
- **Tailwind CSS v4**: `@tailwindcss/cli`를 사용해 최신 Tailwind 기능을 활용합니다.
- **Hugo Modules**: Hugo Blox 테마와 확장 모듈을 이용해 슬라이더, 이력서 섹션 등 다양한 블록을 쉽게 재사용합니다.

## 로컬 개발 환경
| 항목 | 권장 버전 |
| --- | --- |
| Hugo (extended) | `>= 0.151.0` |
| pnpm (선택) | `>= 10` |
| Node.js (선택) | `>= 18` |

```bash
# 저장소 클론
git clone https://github.com/ansangah/ansangah.github.io.git
cd ansangah.github.io

# (선택) Tailwind CLI 업데이트가 필요할 때
pnpm install

# 개발 서버 실행
hugo server --disableFastRender
```

`http://localhost:1313`에서 미리보기를 확인할 수 있습니다. Tailwind CLI는 Hugo가 동적으로 로드하므로 별도 빌드 스텝 없이 즉시 반영됩니다.

## 콘텐츠 작성 가이드

### AI Blog (`content/ko/blog/ai-blog`)
- `_index.md`에서 `layout: "ai-blog"`을 지정해 커스텀 뷰를 사용합니다.
- 각 글(`index.md`)의 front matter 예시:
  ```yaml
  ---
  title: "📁 2장 : 순방향 신경망(FNN) 정리"
  summary: "다층 퍼셉트론의 구조와 분류/회귀 정리."
  date: 2025-10-16
  dl_kind: "textbook"   # textbook, notes, 기타 분류
  semester: "3-2"       # subjects 뷰와 공유 가능
  course_topics:
    - 순방향 신경망 구조
    - 활성 함수
  ---
  ```
- `dl_kind` 값에 따라 “교과서 정리 / 인공지능 정리 / 기타” 섹션으로 자동 배치됩니다.

### 과목별 정리 (`content/ko/blog/Subjects`)
- `_index.md`에서 `layout: "subjects"`를 지정합니다.
- 학기별 묶음을 만들려면 프론트 매터에 `semester` (예: `"3-2"`)와 `course_topics`를 추가합니다.
- 레이아웃과 스타일은 `layouts/blog/subjects.html`, `assets/css/custom.css`에서 조정합니다.

## 스타일 커스터마이징
- 글로벌 스타일: `assets/css/custom.css`
- Tailwind 유틸리티 확장: `package.json`의 `tailwindcss` 의존성 업데이트 후 `pnpm exec tailwindcss -i ...` 형태로 사용할 수 있습니다.
- 추가 파셜: `layouts/partials` 내부에 필요한 UI 조각을 배치합니다.

## 빌드 및 배포
```bash
# 정적 사이트 생성 (minify 포함)
hugo --cleanDestinationDir --ignoreCache
hugo --minify
```
생성된 결과는 `public/`에 위치하며 GitHub Pages 등 정적 호스팅에 바로 업로드할 수 있습니다.  
GitHub Actions/Pages를 사용할 경우 빌드 완료 후 커밋을 push 하면 자동으로 최신 콘텐츠가 배포됩니다.

## 폴더 구조(요약)
```
├── assets/                # 사용자 정의 CSS, Tailwind 구성 등
├── content/               # 다국어 콘텐츠 (ko, en)
│   └── blog/
│       ├── ai-blog/       # 인공지능 블로그
│       └── subjects/      # 학기별 과목 정리
├── layouts/               # 커스텀 템플릿 (ai-blog, subjects 등)
├── static/                # 정적 자산 (이미지 등)
├── hugoblox.yaml          # Hugo Blox 설정
└── go.mod                 # Hugo Modules 의존성
```

## TODO / 개선 아이디어
- 학기별 과목 카드에 진행 상태(예: 완료/진행 중) 배지 추가
- 다국어(영문) 페이지와 콘텐츠의 구조 동기화
- 자동 빌드 파이프라인에서 이미지 최적화 추가

---
문의나 피드백은 Issues 또는 PR로 남겨 주세요. 😊
