/* scripts/awards.js — Awards 섹션 렌더링 */

function renderAwards() {
  const grid = document.getElementById('awardsGrid');
  if (!grid) return;

  grid.innerHTML = awardsData.map(award => `
    <div class="award-card glass-panel">
      <div class="award-icon-box">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="${award.iconPath}"/>
        </svg>
      </div>
      <div class="award-meta">
        <h3>${award.title}</h3>
        <p class="award-issuer">${award.issuer}</p>
        <p>${award.desc}</p>
      </div>
    </div>
  `).join('');
}
