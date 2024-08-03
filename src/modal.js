const popupEdit = document.querySelector(".popup_type_edit");
const popupCard = document.querySelector(".popup_type_new-card");

export function openEditPopup(event) {

  popupEdit.classList.add("popup_is-opened");
  return;
}

export function openCardPopup(event) {

  event.preventDefault();
  popupCard.classList.add("popup_is-opened");
  return;
}