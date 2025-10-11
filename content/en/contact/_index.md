---
title: "Contact"
type: landing
summary: "Get in touch and find my location"
cascade:
  toc: false
---

- block: about.biography
  design:
    columns: 2
  content:
    title: "✉️ Get in touch"
    text: |
      Feel free to reach me anytime.

      {{< icon name="phone" pack="fas" >}} [+82-10-3630-4640](tel:+821036304640)  
      {{< icon name="envelope" pack="fas" >}} [dkstkddkdhkd@jbnu.ac.kr](mailto:dkstkddkdhkd@jbnu.ac.kr)  
      {{< icon name="instagram" pack="fab" >}} [@ahnneu_](https://instagram.com/ahnneu_)  
      {{< icon name="github" pack="fab" >}} [ansangah](https://github.com/ansangah)

- block: feature.map
  design:
    columns: 2
  content:
    title: "📍 Location"
    text: "College of Engineering, JBNU"
    map:
      provider: "osm"
      latitude: 35.8460286
      longitude: 127.1344631
      zoom: 15
      address: "Jeonbuk National University, Jeonju"
      marker: true

- block: cta.buttons
  content:
    buttons:
      - text: "Email me"
        icon: "at-symbol"
        url: "mailto:dkstkddkdhkd@jbnu.ac.kr"
      - text: "GitHub"
        icon: "brands/github"
        url: "https://github.com/ansangah"
      - text: "Instagram"
        icon: "brands/instagram"
        url: "https://www.instagram.com/ahnneu_/"