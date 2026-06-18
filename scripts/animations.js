/* scripts/animations.js — 스크롤 효과 + Intersection Observer */

function initScrollEffects() {
  const navbar     = document.getElementById('navbar');
  const navLinkEls = Array.from(document.querySelectorAll('.nav-links a[data-nav]'));

  /* nav에 data-nav가 있는 섹션만 추적 — hero 등 링크 없는 섹션 제외 */
  const navIds   = new Set(navLinkEls.map(l => l.dataset.nav));
  const sections = Array.from(document.querySelectorAll('section[id]'))
                        .filter(s => navIds.has(s.id));

  /* offsetTop 캐싱 — 스크롤마다 레이아웃 재계산 방지 */
  let sectionTops = [];
  function cacheSectionTops() {
    sectionTops = sections.map(s => s.offsetTop);
  }
  cacheSectionTops();
  window.addEventListener('resize', cacheSectionTops, { passive: true });
  /* 동적 콘텐츠(skills, projects 등) 렌더 완료 후 재캐싱 */
  setTimeout(cacheSectionTops, 900);

  let ticking = false;

  function handleScroll() {
    const y = window.scrollY;

    /* ① 읽기: viewport 45% 지점 기준으로 활성 섹션 판별
     *  고정 오프셋(px) 대신 비율을 쓰면 화면 크기와 무관하게 일관성 유지 */
    const threshold = y + window.innerHeight * 0.45;
    let current = '';
    for (let i = 0; i < sections.length; i++) {
      if (sectionTops[i] <= threshold) current = sections[i].id;
    }

    /* ② 쓰기: 읽기 완료 후 일괄 DOM 변이 */
    navbar.classList.toggle('scrolled', y > 50);
    for (const link of navLinkEls) {
      link.classList.toggle('active', link.dataset.nav === current);
    }

    ticking = false;
  }

  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(handleScroll);
      ticking = true;
    }
  }, { passive: true });
}

function initFadeIn() {
  const observer = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target); /* 한 번 실행 후 관찰 해제 */
      }
    }
  }, { threshold: 0.08 });

  document.querySelectorAll('.fade-in-section').forEach(el => observer.observe(el));
}
