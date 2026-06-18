/* scripts/lab.js — Open Source Lab 렌더 + 검색 + 필터 + 더보기 */

const LAB_INITIAL_COUNT = 4;
let labExpanded = false;

function renderOpenSource() {
  const grid = document.getElementById('labGrid');
  if (!grid) return;

  grid.innerHTML = openSourceData.map((item, i) => `
    <div class="dir-card ${i >= LAB_INITIAL_COUNT ? 'hide-item lab-extra' : ''}"
         data-lab-category="${item.category}"
         data-lab-text="${(item.title + ' ' + item.desc + ' ' + item.tags.join(' ')).toLowerCase()}">
      <div class="dir-card-header">
        <div class="dir-card-title-area">
          <span class="dir-card-badge-dot"></span>
          <h4>${item.title}</h4>
        </div>
        <a class="dir-link-btn" href="${item.url}" target="_blank" rel="noopener" aria-label="GitHub 열기">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <path d="M7 17L17 7M17 7H7M17 7v10"/>
          </svg>
        </a>
      </div>
      <p class="dir-card-desc">${item.desc}</p>
      <div class="dir-card-tags">
        ${item.tags.map(t => `<span>${t}</span>`).join('')}
      </div>
      ${item.wikiUrl ? `
      <a class="dir-wiki-btn" href="${item.wikiUrl}" target="_blank" rel="noopener">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
        </svg>
        Wiki 문서 보기
      </a>` : ''}
    </div>
  `).join('');

  updateLabMoreBtn();
  document.getElementById('labMoreBtn')?.addEventListener('click', toggleLabMore);
}

function initLabSearch() {
  document.getElementById('labSearch')?.addEventListener('input', filterLab);

  document.querySelectorAll('[data-lab-filter]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-lab-filter]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      filterLab();
    });
  });
}

function filterLab() {
  const query      = (document.getElementById('labSearch')?.value || '').toLowerCase();
  const activeBtn  = document.querySelector('[data-lab-filter].active');
  const filter     = activeBtn ? activeBtn.dataset.labFilter : 'all';

  document.querySelectorAll('#labGrid .dir-card').forEach(card => {
    const matchCat   = filter === 'all' || card.dataset.labCategory === filter;
    const matchQuery = !query || card.dataset.labText.includes(query);
    card.classList.toggle('hide-item', !(matchCat && matchQuery));
  });
}

function toggleLabMore() {
  labExpanded = !labExpanded;
  document.querySelectorAll('.lab-extra').forEach(el => {
    el.classList.toggle('hide-item', !labExpanded);
  });
  updateLabMoreBtn();

  if (!labExpanded) {
    document.getElementById('opensource')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function updateLabMoreBtn() {
  const btn      = document.getElementById('labMoreBtn');
  if (!btn) return;
  const hasExtra = openSourceData.length > LAB_INITIAL_COUNT;
  btn.style.display = hasExtra ? 'inline-flex' : 'none';
  btn.textContent   = labExpanded ? '접기' : '더 보기';
}
