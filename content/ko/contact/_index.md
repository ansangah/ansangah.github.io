---
title: "연락하기"
type: landing   # ← 섹션 빌더 활성화
summary: "연락처와 위치 안내"
cascade:
  toc: false
---

# 좌측: 연락처 / 우측: 지도

- block: about.biography
  design:
    columns: 2            # 2열 (모바일에서는 자동 1열)
  content:
    title: "✉️ 문의하기"
    text: |
      아래 연락처로 언제든 문의해 주세요.

      {{< icon name="phone" pack="fas" >}} [+82-10-3630-4640](tel:+821036304640)  
      {{< icon name="envelope" pack="fas" >}} [dkstkddkdhkd@jbnu.ac.kr](mailto:dkstkddkdhkd@jbnu.ac.kr)  
      {{< icon name="instagram" pack="fab" >}} [@ahnneu_](https://instagram.com/ahnneu_)  
      {{< icon name="github" pack="fab" >}} [ansangah](https://github.com/ansangah)

- block: feature.map
  content:
    title: "📍 위치"
    text: "전북대학교 공과대학 7호관"
    map:
      provider: "osm"     # 구글 지도를 쓰려면 "google" + API key 필요
      latitude: 35.8460286
      longitude: 127.1344631
      zoom: 15
      address: "Jeonbuk National University, Jeonju"
      marker: true
  design:
    columns: 2            # 위 블록과 같은 줄에 배치(데스크탑), 모바일은 자동 1열

# 하단: 버튼들

- block: cta.buttons
  content:
    buttons:
      - text: "이메일 보내기"
        icon: "at-symbol"
        url: "mailto:dkstkddkdhkd@jbnu.ac.kr"
      - text: "GitHub"
        icon: "brands/github"
        url: "https://github.com/ansangah"
      - text: "Instagram"
        icon: "brands/instagram"
        url: "https://www.instagram.com/ahnneu_/"