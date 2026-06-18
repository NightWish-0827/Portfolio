/* scripts/contact.js — 이메일 복사, 문의 폼, 토스트 */

function copyEmail() {
  const email = document.getElementById('emailValue')?.textContent.trim();
  if (!email) return;

  if (navigator.clipboard) {
    navigator.clipboard.writeText(email)
      .then(() => showToast('이메일이 복사되었습니다!'))
      .catch(() => _fallbackCopy(email));
  } else {
    _fallbackCopy(email);
  }
}

function _fallbackCopy(text) {
  const ta = document.createElement('textarea');
  ta.value = text;
  ta.style.cssText = 'position:fixed;opacity:0;';
  document.body.appendChild(ta);
  ta.select();
  try { document.execCommand('copy'); showToast('이메일이 복사되었습니다!'); }
  catch { showToast('복사에 실패했습니다.'); }
  document.body.removeChild(ta);
}

function sendEmail() {
  const name    = document.getElementById('formName')?.value  || '';
  const email   = document.getElementById('formEmail')?.value || '';
  const message = document.getElementById('formMsg')?.value   || '';
  const subject = encodeURIComponent(`[포트폴리오 문의] ${name}님의 문의`);
  const body    = encodeURIComponent(`이름: ${name}\n이메일: ${email}\n\n${message}`);
  window.location.href = `mailto:gaunbabo1999@naver.com?subject=${subject}&body=${body}`;
}

function showToast(message) {
  const toast = document.getElementById('toastNotification');
  const msgEl = document.getElementById('toastMessage');
  if (!toast || !msgEl) return;

  msgEl.textContent = message;
  toast.classList.add('active');
  setTimeout(() => toast.classList.remove('active'), 3000);
}
