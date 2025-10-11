---
title: "연락하기"
summary: "문의, 협업 제안, 자료 요청은 아래 채널을 이용해 주세요."
# Academic CV(Blox)의 섹션 페이지
type: page
# 대표 이미지(카톡 미리보기 등)
image:
  filename: "media/og-cover.jpg"
  focal_point: Center
# 페이지 내 블럭(위젯)들
sections:
  - block: about.biography
    content:
      title: "Contact"
      text: |
        아래 연락처로 언제든 문의해 주세요.

        **E-mail**: [dkstkddkdhkd@jbnu.ac.kr](mailto:dkstkddkdhkd@jbnu.ac.kr)  
        **GitHub**: [ansangah](https://github.com/ansangah)  
        **Instagram**: [@ansangah](https://www.instagram.com/ansangah/)  

  - block: contact.form
    content:
      # 폼 공급자(Formspree 사용 예시). 아직 없으면 아래 action을 mailto로 임시 연결 가능.
      form:
        netlify: false
        action: "https://formspree.io/f/xxxxxxxx" # ← Formspree 엔드포인트로 교체
        method: "POST"
        name: "contact"
        success_url: "/contact/#thanks"
        fields:
          - { name: "name", label: "이름", type: "text", required: true }
          - { name: "email", label: "이메일", type: "email", required: true }
          - { name: "message", label: "메시지", type: "textarea", required: true }
        submit:
          label: "보내기"
      # 스팸 방지(허니팟)
      captcha:
        honeypot: true
    design:
      columns: "1"

  - block: feature.map
    content:
        title: "Location"
        text: |
        전북대학교 공과대학 7호관

        <!-- Google Maps Embed -->
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3234.1213201548776!2d127.13446309999999!3d35.8460286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x35702330dc920b9d%3A0x1d0d425396006646!2z7KCE67aB64yA7ZWZ6rWQIOqzteqzvOuMgO2VmSA37Zi46rSA!5e0!3m2!1sko!2skr!4v1760171558095!5m2!1sko!2skr" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

  - block: cta.buttons
    content:
      buttons:
        - text: "이메일 보내기"
          icon: "at-symbol"
          url: "mailto:dkstkddkdhkd@jbnu.ac.kr"
        - text: "이력서 다운로드"
          icon: "download"
          url: "/resume.pdf"
        - text: "GitHub"
          icon: "brands/github"
          url: "https://github.com/ansangah"
        - text: "Instagram"
          icon: "brands/instagram"
          url: "https://www.instagram.com/ansangah/"
---