const playBtn = document.getElementById("playBtn");
const vinyl = document.getElementById("vinyl");
const modal = document.getElementById("videoModal");
const modalBackdrop = document.getElementById("modalBackdrop");
const modalClose = document.getElementById("modalClose");
const modalVideo = document.getElementById("modalVideo");

function openModal() {
  if (!modal) return;

  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
  vinyl?.classList.add("is-playing");
  document.body.classList.add("modal-open");

  modalClose?.focus();

  if (modalVideo) {
    modalVideo.currentTime = 0;
    modalVideo.play().catch(() => {});
  }
}

function closeModal() {
  if (!modal) return;

  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
  vinyl?.classList.remove("is-playing");
  document.body.classList.remove("modal-open");

  if (modalVideo) {
    modalVideo.pause();
    modalVideo.currentTime = 0;
  }

  playBtn?.focus();
}

playBtn?.addEventListener("click", openModal);
modalClose?.addEventListener("click", closeModal);
modalBackdrop?.addEventListener("click", closeModal);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && modal?.classList.contains("is-open")) {
    closeModal();
  }
});
