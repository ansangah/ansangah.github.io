---
widget: blank
headless: true
weight: 10
title:
design:
  spacing:
    padding: ["0","0","24px","0"]
---
<link rel="stylesheet" href="/css/slider.css">

<div class="hb-fullbleed">
  <div class="hb-slider" aria-label="Image slider">
  <div class="hb-slide active">
    <img src="/media/slide1.jpeg" alt="슬라이드 1">
    <div class="hb-caption">CV Projects</div>
  </div>
  <div class="hb-slide">
    <img src="/media/slide2.jpeg" alt="슬라이드 2">
    <div class="hb-caption">Frontend UI</div>
  </div>
  <div class="hb-slide">
    <img src="/media/slide3.jpeg" alt="슬라이드 3">
    <div class="hb-caption">NLP & Analytics</div>
  </div>

  <button class="hb-nav hb-prev" aria-label="이전">‹</button>
  <button class="hb-nav hb-next" aria-label="다음">›</button>

  <div class="hb-dots" aria-hidden="true"></div>
  </div>
</div>

<script defer src="/js/slider.js"></script>