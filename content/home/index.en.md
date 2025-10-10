---
title: "홈페이지"
type: landing

sections:
  - block: slider
    content:
      slides:
        - title: ""
          background:
            image:
              filename: slide1.jpeg
              fit: cover
              position: center
        - title: ""
          background:
            image:
              filename: slide2.jpeg
              fit: cover
              position: center
        - title: ""
          background:
            image:
              filename: slide3.jpeg
              fit: cover
              position: center
    design:
      slide_height: "400px"
      interval: 4000
      is_fullscreen: false

  - block: about.avatar
    content:
      username: admin
      text: |
        👋 안녕하세요! 전북대학교 컴퓨터인공지능학부 3학년 **안상아**입니다.
        <br>아래에서 제 포트폴리오를 확인해보세요!
  
  - block: collection
    content:
      title: "프로젝트"
      filters:
        folders: ["project"]
      count: 9
      sort_by: date
      sort_ascending: false
---