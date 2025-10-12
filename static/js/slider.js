document.addEventListener("DOMContentLoaded", () => {
    const slides = document.querySelectorAll(".slide");
    const dotsContainer = document.querySelector(".dots");
    const prev = document.querySelector(".prev");
    const next = document.querySelector(".next");
  
    let index = 0;
    let interval;
  
    // create dots
    slides.forEach((_, i) => {
      const dot = document.createElement("button");
      dot.addEventListener("click", () => goToSlide(i));
      dotsContainer.appendChild(dot);
    });
  
    const dots = dotsContainer.querySelectorAll("button");
  
    function showSlide(i) {
      slides.forEach(s => s.classList.remove("active"));
      dots.forEach(d => d.classList.remove("active"));
      slides[i].classList.add("active");
      dots[i].classList.add("active");
      document.querySelector(".slider-track").style.transform = `translateX(-${i * 100}%)`;
    }
  
    function goToSlide(i) {
      index = i;
      showSlide(index);
      resetInterval();
    }
  
    function nextSlide() {
      index = (index + 1) % slides.length;
      showSlide(index);
    }
  
    function prevSlideFunc() {
      index = (index - 1 + slides.length) % slides.length;
      showSlide(index);
    }
  
    function startAutoSlide() {
      interval = setInterval(nextSlide, 4000);
    }
  
    function resetInterval() {
      clearInterval(interval);
      startAutoSlide();
    }
  
    prev.addEventListener("click", prevSlideFunc);
    next.addEventListener("click", nextSlide);
  
    showSlide(index);
    startAutoSlide();
  });