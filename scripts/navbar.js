/* scripts/navbar.js — 네비게이션 동작 */

function initNavbar() {
  const navbar     = document.getElementById('navbar');
  const menuToggle = document.getElementById('menuToggle');
  const navLinks   = document.getElementById('navLinks');

  /* 햄버거 토글 */
  menuToggle.addEventListener('click', () => {
    const open = navbar.classList.toggle('active');
    navLinks.classList.toggle('active', open);
    menuToggle.setAttribute('aria-expanded', open);
  });

  /* 모바일 메뉴 링크 클릭 시 닫기 */
  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navbar.classList.remove('active');
      navLinks.classList.remove('active');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}
