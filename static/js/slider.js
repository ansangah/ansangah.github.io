(function(){
    const root = document.querySelector('.hb-slider');
    if(!root) return;
  
    const slides = Array.from(root.querySelectorAll('.hb-slide'));
    const dotsWrap = root.querySelector('.hb-dots');
    const prevBtn = root.querySelector('.hb-prev');
    const nextBtn = root.querySelector('.hb-next');
  
    let idx = 0, timer = null, interval = 4000;
  
    function show(i){
      slides.forEach((el,k)=> el.classList.toggle('active', k===i));
      const dots = Array.from(dotsWrap.children);
      dots.forEach((d,k)=> d.classList.toggle('active', k===i));
      idx = i;
    }
  
    function next(){ show((idx+1) % slides.length); }
    function prev(){ show((idx-1+slides.length) % slides.length); }
  
    // dots 생성
    slides.forEach((_,i)=>{
      const b = document.createElement('button');
      b.className = 'hb-dot' + (i===0 ? ' active':'');
      b.setAttribute('aria-label', `slide ${i+1}`);
      b.addEventListener('click', ()=>{ show(i); restart(); });
      dotsWrap.appendChild(b);
    });
  
    function start(){ timer = setInterval(next, interval); }
    function stop(){ if(timer) clearInterval(timer); timer=null; }
    function restart(){ stop(); start(); }
  
    prevBtn.addEventListener('click', ()=>{ prev(); restart(); });
    nextBtn.addEventListener('click', ()=>{ next(); restart(); });
  
    // hover/포커스 시 일시정지
    ['mouseenter','focusin'].forEach(ev=> root.addEventListener(ev, stop));
    ['mouseleave','focusout'].forEach(ev=> root.addEventListener(ev, start));
  
    // touch swipe (모바일)
    let sx=0, dx=0;
    root.addEventListener('touchstart', e=>{ sx = e.touches[0].clientX; stop(); }, {passive:true});
    root.addEventListener('touchmove',  e=>{ dx = e.touches[0].clientX - sx; }, {passive:true});
    root.addEventListener('touchend',  ()=>{
      if (dx > 40) prev();
      else if (dx < -40) next();
      dx=0; start();
    });
  
    // 시작
    show(0); start();
  })();