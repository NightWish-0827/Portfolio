/* scripts/talab.js — TA Lab 렌더 + 필터 */

function renderTaLab() {
  const grid = document.getElementById('taGrid');
  if (!grid) return;

  grid.innerHTML = taLabData.map(item => `
    <div class="ta-card glass-panel" data-ta-category="${item.category}" onclick="openTaModal('${item.id}')">
      <div class="ta-thumb-wrapper">
        ${item.thumb
          ? `<img class="ta-thumb" src="${item.thumb}" alt="${item.title}" loading="lazy" decoding="async">`
          : `<div class="ta-thumb-placeholder"><span>${item.catLabel}</span></div>`
        }
        <div class="ta-play-overlay">
          <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>
        </div>
      </div>
      <div class="ta-card-meta">
        <p class="project-cat">${item.catLabel}</p>
        <h3>${item.title}</h3>
        <p class="project-desc">${item.desc}</p>
      </div>
    </div>
  `).join('');
}

function initTaFilters() {
  document.querySelectorAll('[data-ta-filter]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-ta-filter]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      const filter = btn.dataset.taFilter;
      document.querySelectorAll('#taGrid .ta-card').forEach(card => {
        card.classList.toggle('hide', filter !== 'all' && card.dataset.taCategory !== filter);
      });
    });
  });
}
