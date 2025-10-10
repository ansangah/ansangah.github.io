---
widget: slider
headless: true
weight: 50            # 페이지 최상단 근처
title: ""
content:
  slides:
    - title: ""
      background:
        image: "/media/slide1.jpeg"   # 또는 "slide1.jpeg" (assets 방식)
        position: center
        fit: cover 
    - title: ""
      background:
        image: "/media/slide2.jpeg"
        position: center
        fit: cover
    - title: ""
      background:
        image: "/media/slide3.jpeg"
        position: center
        fit: cover
design:
  height: "360px"               # auto 대신 고정 높이로 겹침 방지
  autoplay: true
  interval: 4000
  spacing:
    padding: ["12px","0","36px","0"]   # 상/우/하/좌 (아래쪽 여백 36px)
---