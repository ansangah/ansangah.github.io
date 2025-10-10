---
# Leave the homepage title empty to use the site title
title:
type: landing

sections:
  - block: slider
    content:
      slides:
        - title: ""
          background:
            image:
              filename: slide1.jpeg
            position: center
            fit: cover
        - title: ""
          background:
            image:
              filename: slide2.jpeg
            position: center
            fit: cover
        - title: ""
          background:
            image:
              filename: slide3.jpeg
            position: center
            fit: cover
    design:
      slide_height: '360px'
      is_fullscreen: false
      loop: true
      interval: 4000

  - block: about.avatar
    content:
      username: admin

  - block: collection
    content:
      title: "Project"
      subtitle: "recent projects"
      filters:
        folders:
          - project
      count: 9
      sort_by: date
      sort_ascending: false
    design:
      columns: 3
      view: masonry
---