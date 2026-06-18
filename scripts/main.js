/* scripts/main.js — 엔트리 포인트 (모든 모듈 초기화) */

document.addEventListener('DOMContentLoaded', () => {
  /* 모바일: 히어로 배경 비디오 디코딩 완전 중단 → 스크롤 렉 제거 */
  if (window.matchMedia('(max-width: 768px)').matches) {
    const vid = document.querySelector('.hero-video-bg video');
    if (vid) { vid.pause(); vid.src = ''; vid.load(); }
  }

  /* 네비게이션 */
  initNavbar();

  /* 스크롤 & fade-in */
  initScrollEffects();
  initFadeIn();

  /* 섹션 렌더링 */
  renderSkills();
  renderProjects();
  renderOpenSource();

  /* 인터랙션 초기화 */
  initProjectFilters();
  initLabSearch();
  initModal();
});
