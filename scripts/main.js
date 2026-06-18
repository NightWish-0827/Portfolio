/* scripts/main.js — 엔트리 포인트 (모든 모듈 초기화) */

document.addEventListener('DOMContentLoaded', () => {
  /* 히어로 배경 비디오 — 자동재생 실패 시 poster 폴백 */
  const vid = document.querySelector('.hero-video-bg video');
  if (vid) {
    vid.play().catch(() => {
      vid.style.display = 'none';
    });
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
