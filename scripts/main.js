/* scripts/main.js — 엔트리 포인트 (모든 모듈 초기화) */

document.addEventListener('DOMContentLoaded', () => {
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
