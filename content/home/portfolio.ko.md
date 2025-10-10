---
draft: true
# A section created with the Portfolio widget.
# This section displays content from `content/project/`.
# See https://docs.hugoblox.com/widget/portfolio/
widget: portfolio

# This file represents a page section.
headless: true

# Order that this section appears on the page.
weight: 30

title: "프로젝트"
subtitle: "최근 작업 모음"

content:
  # Page type to display. E.g. project.
  page_type: project

  # Default filter index (e.g. 0 corresponds to the first `filter_button` instance below).
  filter_default: 0

  # Filter toolbar (optional).
  # Add or remove as many filters (`filter_button` instances) as you like.
  # To show all items, set `tag` to "*".
  # To filter by a specific tag, set `tag` to an existing tag name.
  # To remove the toolbar, delete the entire `filter_button` block.
  filter_button:
    - name: 전체
      tag: '*'
    - name: 객체 지향 프로그래밍
      tag: 객지프
    - name: Computer Vision
      tag: CV
    - name: 프론트엔드
      tag: 프론트

design:
  columns: 3              # 한 줄에 카드 3개
  view: masonry
  flip_alt_rows: false    # 줄 뒤집힘 비활성화 (필요시 유지해도 무방)
  background:
    shape: none           # 섹션 장식(삼각형) 비활성화
  spacing:
    padding: ["40px", "0", "0", "0"]  # 위쪽 여백 넉넉히 확보
---
