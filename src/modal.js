export function openPopup(popup) {
  popup.classList.add("popup_is-opened");
  document.addEventListener("keydown", handleEscape);
  popup.addEventListener("mousedown", handleOverlay);
};

export function closePopup(popup) {
  popup.classList.remove("popup_is-opened");
  document.removeEventListener("keydown", handleEscape);
  popup.removeEventListener("mousedown", handleOverlay);
};

function handleEscape(evt) {
  if (evt.key === "Escape") {
    const opened = document.querySelector(".popup_is-opened");
    closePopup(opened);
  }
};

function handleOverlay(evt) {
  if (evt.target.classList.contains("popup_is-opened")) {
    closePopup(evt.target);
    closePopup(opened);
  }
};
