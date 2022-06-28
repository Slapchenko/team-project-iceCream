(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-application-open]"),
    closeModalBtn: document.querySelector("[data-modal-application-close]"),
    modal: document.querySelector("[data-modal-application]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();