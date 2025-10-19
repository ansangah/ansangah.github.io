---
# Leave the homepage title empty to use the site title
title: "Sang-A Ahn"
summary: "The development portfolio of Sang-A Ahn, exploring deep learning and front-end technologies. Discover key projects and learning records."
date: 2022-10-24
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
  <h1> Sang-A Ahn&apos;s Portfolio </h1>
  <p>Capturing experience, AI projects, and deep learning notes in one place.</p>
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
        text: Download CV
        url: uploads/resume.pdf
      headings:
        about: 'About Me'
        education: 'Education'
        interests: 'Interests'
    design:
      # Apply a gradient background
      css_class: pill-cards custom-hero
      # Avatar customization
      avatar:
        size: medium # Options: small (150px), medium (200px, default), large (320px), xl (400px), xxl (500px)
        shape: circle # Options: circle (default), square, rounded
  - block: collection
    id: projects
    content:
      title: My Projects
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
  - block: collection
    id: news
    content:
      title: Blog
      subtitle: ''
      text: ''
      # Page type to display. E.g. post, talk, publication...
      page_type: blog
      # Choose how many pages you would like to display (0 = all pages)
      count: 9
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
      view: article-grid
      column: '2'

exclude_search: false
---
