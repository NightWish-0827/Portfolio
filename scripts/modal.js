/* scripts/modal.js — 모달 열기/닫기 + 갤러리 라이트박스 */

/* ── 라이트박스 (모달 위 레이어) ── */
const _lb     = document.createElement('div');
_lb.id        = 'imgLightbox';
const _lbImg  = document.createElement('img');
_lbImg.id     = 'imgLightboxImg';
_lbImg.alt    = '';
_lb.appendChild(_lbImg);
document.body.appendChild(_lb);

_lb.addEventListener('click', () => _lb.classList.remove('active'));
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    if (_lb.classList.contains('active')) {
      _lb.classList.remove('active');
    } else {
      closeModal();
    }
  }
});

function _openLightbox(src) {
  _lbImg.src = src;
  _lb.classList.add('active');
}

/* ── 모달 초기화 ── */
function initModal() {
  const overlay  = document.getElementById('modalOverlay');
  const closeBtn = document.getElementById('modalClose');

  overlay?.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
  closeBtn?.addEventListener('click', closeModal);
}

function openProjectModal(id) {
  const p = projectsData.find(x => x.id === id);
  if (!p) return;

  const mediaHtml = p.videoUrl
    ? `<div class="modal-video-wrapper">
         <iframe src="${p.videoUrl}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
       </div>`
    : p.localVideoUrl
      ? `<div class="modal-video-wrapper${p.videoPortrait ? ' portrait' : ''}">
           <video controls preload="metadata">
             <source src="${p.localVideoUrl}" type="video/mp4">
           </video>
         </div>`
      : p.thumb
        ? `<div class="modal-thumb-wrap"><img src="${p.thumb}" alt="${p.title}" style="width:100%;border-radius:8px;display:block;"></div>`
        : '';

  const galleryHtml = p.gallery && p.gallery.length
    ? `<div class="modal-gallery">
         ${p.gallery.map(src =>
           `<img src="${src}" alt="${p.title} screenshot" loading="lazy" decoding="async">`
         ).join('')}
       </div>`
    : '';

  document.getElementById('modalBody').innerHTML = `
    <p class="modal-subtitle">${p.catLabel}</p>
    <h2>${p.title}</h2>
    ${mediaHtml}
    <div class="modal-meta-grid">
      <div class="modal-meta-item"><h4>팀 구성</h4><p>${p.team}</p></div>
      <div class="modal-meta-item"><h4>기여도</h4><p>${p.contribution}</p></div>
    </div>
    <div class="modal-text-section">
      <h3>프로젝트 개요</h3>
      <p>${p.overview.replace(/\n/g, '<br>')}</p>
    </div>
    ${p.details.length ? `
      <div class="modal-text-section">
        <h3>주요 기술 작업</h3>
        <ul>${p.details.map(d => `<li>${d}</li>`).join('')}</ul>
      </div>` : ''}
    ${galleryHtml}
    <div class="project-stack" style="margin-top:20px;">
      ${p.stack.map(s => `<span>${s}</span>`).join('')}
    </div>
  `;

  /* 갤러리 이미지 클릭 → 라이트박스 */
  document.querySelectorAll('.modal-gallery img').forEach(img => {
    img.addEventListener('click', () => _openLightbox(img.src));
  });

  _showModal();
}

function _showModal() {
  document.getElementById('modalOverlay').classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const overlay = document.getElementById('modalOverlay');
  if (!overlay) return;
  overlay.classList.remove('active');
  document.body.style.overflow = '';

  /* 영상 재생 중지 */
  overlay.querySelectorAll('iframe').forEach(iframe => {
    const s = iframe.src; iframe.src = ''; iframe.src = s;
  });
  overlay.querySelectorAll('video').forEach(v => {
    v.pause(); v.currentTime = 0;
  });
}
