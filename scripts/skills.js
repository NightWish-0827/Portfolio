/* scripts/skills.js — Skills 섹션 렌더링 */

function renderSkills() {
  const grid = document.getElementById('skillsGrid');
  if (!grid) return;

  grid.innerHTML = skillsData.map(group => `
    <div class="tech-card glass-panel">
      <h3>${group.title}</h3>
      <div class="tech-list">
        ${group.items.map(item => `<span class="tech-item">${item}</span>`).join('')}
      </div>
    </div>
  `).join('');
}
