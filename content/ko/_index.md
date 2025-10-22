---
# Leave the homepage title empty to use the site title
title: "안상아"
summary: "딥러닝과 프론트엔드 기술을 탐구하는 안상아의 개발 포트폴리오입니다. 주요 프로젝트와 학습 기록을 확인해 보세요."
date: 2025-10-11
type: landing

design:
  # Default section spacing
  spacing: '4rem'

sections:
  - block: markdown
    content:
      title: ''
      text: '{{< slider >}}

<div class="slider-hero-copy">
  <span class="tag">Creative AI Journey</span>
  <h1> 안상아의 포트폴리오 </h1>
  <p>지금까지의 경험과 AI, 딥러닝 연구 기록을 담았습니다.</p>
</div>'
    design:
      spacing:
        padding: [0, 0, 0, 0]
  - block: resume-biography-3
    content:
      # Choose a user profile to display (a folder name within `content/authors/`)
      username: admin
      text: ''
      # Show a call-to-action button under your biography? (optional)
      button:
        text: 이력서 다운로드
        url: uploads/resume.pdf
      headings:
        about: '소개'
        experience: '경험'
        education: '학위'
        interests: '관심 분야'
    design:
      # Apply a gradient background
      css_class: pill-cards custom-hero text-justify
      # Avatar customization
      avatar:
        size: medium # Options: small (150px), medium (200px, default), large (320px), xl (400px), xxl (500px)
        shape: circle # Options: circle (default), square, rounded
  - block: collection
    id: projects
    content:
      title: 나의 프로젝트
      subtitle: ''
      text: ''
      page_type: projects
      count: 3
      filters:
        author: ''
        category: ''
        tag: ''
        exclude_featured: false
        exclude_future: false
        exclude_past: false
        publication_type: ''
      # Choose how many pages you would like to offset by
      offset: 0
      # Page order: descending (desc) or ascending (asc) date.
      order: desc
    design:
      view: article-grid
      columns: '3'
      css_class: text-justify
  - block: collection
    id: news
    content:
      title: ''
      subtitle: ''
      text: ''
      # Page type to display. E.g. post, talk, publication...
      page_type: blog
      # Choose how many pages you would like to display (0 = all pages)
      count: 9
      archive:
        enable: true
        link: /blog/subjects/
      # Filter on criteria
      filters:
        author: ''
        category: ''
        tag: ''
        exclude_featured: false
        exclude_future: false
        exclude_past: false
        publication_type: ''
      # Choose how many pages you would like to offset by
      offset: 0
      # Page order: descending (desc) or ascending (asc) date.
      order: desc
    design:
      view: ai-blog
      columns: '3'
      css_class: text-justify
---
