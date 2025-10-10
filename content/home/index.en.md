---
title:
type: landing

sections:
  - block: hero
    content:
      title: "안상아의 포트폴리오"
      text: "전북대학교 인공지능학부 3학년 | AI × Frontend 개발자 지망생"
      image:
        filename: avatar.jpeg
      align: center
      cta:
        label: "이력서 보기"
        url: uploads/resume.pdf
  - block: slider
    content:
      slides:
        - background:
            image:
              filename: slide1.jpeg
              position: center
              fit: cover
        - background:
            image:
              filename: slide2.jpeg
              position: center
              fit: cover
        - background:
            image:
              filename: slide3.jpeg
              position: center
              fit: cover
    design:
      slide_height: "400px"
      interval: 4000
      is_fullscreen: false
  - block: collection
    content:
      title: "프로젝트"
      filters:
        folders: ["project"]
      count: 9
      sort_by: date
      sort_ascending: false
---