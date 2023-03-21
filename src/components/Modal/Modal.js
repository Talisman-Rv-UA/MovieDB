import "./Modal.scss";
import { refs } from "../../utils/refs.js";

export const Modal = (content) => {
  console.log(typeof content);

  const modal = document.createElement("div");
  modal.classList.add("modal");

  const modalContent = document.createElement("div");
  modalContent.classList.add("modal__content");

  const modalBackdrop = document.createElement("div");
  modalBackdrop.classList.add("modal__backdrop");

  const closeButton = new Image();
  closeButton.classList.add("close_button");
  closeButton.src = "/assets/images/icons/close.svg";
  closeButton.alt = "close button";

  const wrapCenterMiddle = document.createElement("div");
  wrapCenterMiddle.classList.add("wrap_center_middle");

  wrapCenterMiddle.appendChild(modal);
  modal.appendChild(modalContent);
  modal.appendChild(modalBackdrop);
  modal.appendChild(closeButton);
  modalContent.innerHTML = `<h1>${content.title}</h1>`; //тут має бути розмітка

  refs.app.appendChild(wrapCenterMiddle);

  setTimeout(() => {
    modal.classList.add("show");
  }, 0);

  closeButton.addEventListener("click", closeModal);

  modalBackdrop.addEventListener("click", closeModal);

  function closeModal() {
    wrapCenterMiddle.remove();
  }
};
