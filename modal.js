const modalbtn = document.querySelector(".modal-btn");
const modaloverlay = document.querySelector(".modal-overlay");
const closeButton = document.querySelector(".close-btn");

const closeModal = function () {
  modaloverlay.classList.remove("open-modal");
};

modalbtn.addEventListener("click", function () {
  modaloverlay.classList.add("open-modal");
});

closeButton.addEventListener("click", closeModal);
modaloverlay.addEventListener("click", closeModal);
