/* scripts/projects.js — Projects 그리드 렌더 + 필터 */

function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;

  grid.innerHTML = projectsData.map(p => `
    <div class="project-card glass-panel" data-category="${p.category}" data-id="${p.id}">
      ${p.thumb ? `
      <div class="project-thumb-wrap" onclick="openProjectModal('${p.id}')" style="cursor:pointer;">
        <img class="project-thumb" src="${p.thumb}" alt="${p.title}" loading="lazy" decoding="async"
             style="object-position:${p.thumbPosition ?? 'center'};">
        <div class="project-thumb-overlay"></div>
        ${p.year ? `<span class="project-year">${p.year}</span>` : ''}
      </div>` : ''}
      <div class="project-card-meta">
        <p class="project-cat">${p.catLabel}</p>
        <h3>${p.title}</h3>
        <p class="project-desc">${p.desc.replace(/\n/g, '<br>')}</p>
        <div class="project-stack">
          ${p.stack.map(s => `<span>${s}</span>`).join('')}
        </div>
        <div class="project-actions">
          <button class="project-link" onclick="openProjectModal('${p.id}')">
            자세히 보기
            <svg class="project-arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
              <path d="M7 17L17 7M17 7H7M17 7v10"/>
            </svg>
          </button>
          ${p.githubUrl ? `
            <a class="project-link" href="${p.githubUrl}" target="_blank" rel="noopener">
              GitHub
              <svg class="project-arrow-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
                <path d="M7 17L17 7M17 7H7M17 7v10"/>
              </svg>
            </a>
          ` : ''}
        </div>
      </div>
    </div>
  `).join('');
}

function initProjectFilters() {
  const applyFilter = filter => {
    document.querySelectorAll('#projectsGrid .project-card').forEach(card => {
      card.classList.toggle('hide', filter !== 'all' && card.dataset.category !== filter);
    });
  };

  /* 초기 상태: 활성 버튼 필터 적용 */
  const activeBtn = document.querySelector('.portfolio-filters [data-filter].active');
  if (activeBtn) applyFilter(activeBtn.dataset.filter);

  document.querySelectorAll('.portfolio-filters [data-filter]').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.closest('.portfolio-filters').querySelectorAll('[data-filter]')
         .forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      applyFilter(btn.dataset.filter);
    });
  });
}
