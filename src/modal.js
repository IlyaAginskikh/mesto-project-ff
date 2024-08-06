export function openPopup(popup) {
  popup.classList.add("popup_is-opened");
  document.addEventListener("keydown", handleEscape);
};

export function closePopup(popup) {
  popup.classList.remove("popup_is-opened");
  document.removeEventListener("keydown", handleEscape);
};

function handleEscape(evt) {
  if (evt.key === "Escape") {
    const opened = document.querySelector(".popup_is-opened");
    closePopup(opened);
  }
};