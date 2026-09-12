

const playBtn = document.getElementById('playBtn');
const vinyl = document.getElementById('vinyl');
const modal = document.getElementById('videoModal');
const modalBackdrop = document.getElementById('modalBackdrop');
const modalClose = document.getElementById('modalClose');
const modalVideo = document.getElementById('modalVideo');

function openModal() {
  if (!modal) return;
  modal.classList.add('is-open');
  vinyl?.classList.add('is-playing');
  document.body.style.overflow = 'hidden';
  modalVideo?.play().catch(() => {

  });
}

function closeModal() {
  if (!modal) return;
  modal.classList.remove('is-open');
  vinyl?.classList.remove('is-playing');
  document.body.style.overflow = '';
  modalVideo?.pause();
}

playBtn?.addEventListener('click', openModal);
modalClose?.addEventListener('click', closeModal);
modalBackdrop?.addEventListener('click', closeModal);

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && modal?.classList.contains('is-open')) {
    closeModal();
  }
});
