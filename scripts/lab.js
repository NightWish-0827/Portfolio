/* scripts/lab.js — Open Source Lab 렌더 + 검색 + 필터 + 더보기 */

const LAB_INITIAL_COUNT = 4;
let labExpanded = false;

const BADGE_META = {
  active: { label: '최근 업데이트', cls: 'active' },
  hot:    { label: 'Hot',          cls: 'hot'    },
  stable: { label: 'Stable',       cls: 'stable' },
  beta:   { label: 'Beta',         cls: 'beta'   },
  wiki:   { label: '공식 위키',     cls: 'wiki'   },
};

const FIRE_PARTICLES = [
  { x: '12%', size: '4px', delay: '0s',    dur: '2.4s' },
  { x: '28%', size: '3px', delay: '0.6s',  dur: '2.1s' },
  { x: '48%', size: '5px', delay: '1.1s',  dur: '2.7s' },
  { x: '65%', size: '3px', delay: '0.3s',  dur: '2.0s' },
  { x: '80%', size: '4px', delay: '1.6s',  dur: '2.5s' },
  { x: '38%', size: '3px', delay: '0.9s',  dur: '2.2s' },
];

function renderOpenSource() {
  const grid = document.getElementById('labGrid');
  if (!grid) return;

  grid.innerHTML = openSourceData.map((item, i) => {
    const badges     = item.badges || [];
    const isFeatured = badges.includes('hot');
    const badgesHtml = badges
      .filter(b => BADGE_META[b])
      .map(b => `<span class="dir-badge dir-badge--${BADGE_META[b].cls}">${BADGE_META[b].label}</span>`)
      .join('');
    const particlesHtml = isFeatured
      ? FIRE_PARTICLES.map(p =>
          `<span class="fire-particle" style="--fp-x:${p.x};--fp-size:${p.size};--fp-delay:${p.delay};--fp-dur:${p.dur}"></span>`
        ).join('')
      : '';
    const cardClick = item.docsUrl
      ? `onclick="window.open('${item.docsUrl}','_blank')" style="cursor:pointer;"`
      : '';

    return `
    <div class="dir-card${isFeatured ? ' featured' : ''} ${i >= LAB_INITIAL_COUNT ? 'hide-item lab-extra' : ''}"
         data-lab-category="${item.category}"
         data-lab-text="${(item.title + ' ' + item.desc + ' ' + item.tags.join(' ')).toLowerCase()}"
         ${cardClick}>
      ${particlesHtml}
      <div class="dir-card-header">
        <div class="dir-card-title-area">
          <span class="dir-card-badge-dot"></span>
          <h4>${item.title}</h4>
          ${item.version ? `<span class="dir-version">${item.version}</span>` : ''}
        </div>
        <div class="dir-card-actions">
          <a class="dir-link-btn dir-github-btn" href="${item.url}" target="_blank" rel="noopener"
             aria-label="GitHub 열기" onclick="event.stopPropagation()">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
            </svg>
          </a>
        </div>
      </div>
      ${badgesHtml ? `<div class="dir-badges">${badgesHtml}</div>` : ''}
      <p class="dir-card-desc">${item.desc.replace(/\n/g, '<br>')}</p>
      <div class="dir-card-tags">
        ${item.tags.map(t => `<span>${t}</span>`).join('')}
      </div>
    </div>`;
  }).join('');

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
