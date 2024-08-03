import "./pages/index.css";
import {initialCards, createCard, deleteCard, likeCard, openPopupImage} from "./cards.js";
import {openEditPopup, openCardPopup} from "./modal.js";

//DOM
const conteiner = document.querySelector(".places__list");
const popupEditOpen = document.querySelector(".profile__edit-button");
const popupCardOpen = document.querySelector(".profile__add-button");
const popupOver = document.querySelectorAll(".popup");
const popupEdit = document.querySelector(".popup_type_edit");
const popupCard = document.querySelector(".popup_type_new-card");
const popupImage = document.querySelector(".popup_type_image");
const popupEditCloser = popupEdit.querySelector(".popup__close");
const popupCardCloser = popupCard.querySelector(".popup__close");
const popupImageCloser = popupImage.querySelector(".popup__close");
const popupEditContent = popupEdit.querySelector(".popup__content");
const popupCardContent = popupCard.querySelector(".popup__content");
const popupImageContent = popupImage.querySelector(".popup__content");
const formElement = popupEdit.querySelector(".popup__form");
const nameInput = formElement.querySelector(".popup__input_type_name");
const jobInput = formElement.querySelector(".popup__input_type_description");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const formCardElement = popupCard.querySelector(".popup__form");
const InputCardName = formCardElement.querySelector(".popup__input_type_card-name");
const InputCardUrl = formCardElement.querySelector(".popup__input_type_url");

initialCards.forEach((item) => {
  conteiner.append(createCard(item, deleteCard, openPopupImage, likeCard));
});

const popupMosiv = Array.from(popupOver);

popupMosiv.forEach(function (i) {
  popupEditCloser.addEventListener("click", () => {
    popupEdit.classList.remove("popup_is-opened");
  });
  popupCardCloser.addEventListener("click", () => {
    popupCard.classList.remove("popup_is-opened");
  });
  popupImageCloser.addEventListener("click", () => {
    popupImage.classList.remove("popup_is-opened");
  });
  popupEdit.addEventListener("click", (e) => {
    if (e.target !== popupEditContent && !popupEditContent.contains(e.target)) {
      popupEdit.classList.remove("popup_is-opened");
    }
  });
  popupCard.addEventListener("click", (e) => {
    if (e.target !== popupCardContent && !popupCardContent.contains(e.target)) {
      popupCard.classList.remove("popup_is-opened");
    }
  });
  popupImage.addEventListener("click", (e) => {
    if (
      e.target !== popupImageContent &&
      !popupImageContent.contains(e.target)
    ) {
      popupImage.classList.remove("popup_is-opened");
    }
  });
});

popupEdit.classList.add("popup_is-animated");
popupCard.classList.add("popup_is-animated");
popupImage.classList.add("popup_is-animated");

function handleFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  popupEdit.classList.remove("popup_is-opened");
  formElement.reset();
};

function addNewCardSubmit(evt) {
  evt.preventDefault();
  const link = InputCardUrl.value;
  const name = InputCardName.value;
  const newCard = createCard(
    { name, link },
    deleteCard,
    openPopupImage,
    likeCard
  );
  addCard(newCard, true);
  popupCard.classList.remove("popup_is-opened");
  formCardElement.reset();
};

function addCard(element, toStart) {
  if (toStart === true) {
    conteiner.prepend(element);
  } else {
    conteiner.append(element);
  }
};

popupEditOpen.addEventListener("click", openEditPopup);
popupCardOpen.addEventListener("click", openCardPopup);
window.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    popupEdit.classList.remove("popup_is-opened");
    popupCard.classList.remove("popup_is-opened");
    popupImage.classList.remove("popup_is-opened");
  }
});
formCardElement.addEventListener("submit", addNewCardSubmit);
formElement.addEventListener("submit", handleFormSubmit);
popupEditOpen.addEventListener('click', function () {
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.textContent;
  openEditPopup();
});