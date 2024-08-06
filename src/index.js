import "./pages/index.css";
import { initialCards } from "./initialCards.js";
import { createCard, deleteCard, likeCard } from "./cards.js";
import { openPopup, closePopup } from "./modal.js";

//DOM
const popups = document.querySelectorAll(".popup");
const conteiner = document.querySelector(".places__list");
const popupEditOpen = document.querySelector(".profile__edit-button");
const popupCardOpen = document.querySelector(".profile__add-button");

const popupEdit = document.querySelector(".popup_type_edit");
const popupCard = document.querySelector(".popup_type_new-card");
const popupImage = document.querySelector(".popup_type_image");
const popupImageContent = popupImage.querySelector(".popup__content");
const imageAtribut = popupImageContent.querySelector(".popup__image");
const imageCaption = document.querySelector(".popup__caption");
const profileForm = popupEdit.querySelector(".popup__form");
const nameInput = profileForm.querySelector(".popup__input_type_name");
const jobInput = profileForm.querySelector(".popup__input_type_description");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const formCardElement = popupCard.querySelector(".popup__form");
const inputCardName = formCardElement.querySelector(
  ".popup__input_type_card-name"
);
const inputCardUrl = formCardElement.querySelector(".popup__input_type_url");

initialCards.forEach((item) => {
  conteiner.append(createCard(item, deleteCard, likeCard, openPopupImage));
});

popupEditOpen.addEventListener("click", (evt) => {
  openPopup(popupEdit);
  nameInput.value = profileTitle.textContent;
  jobInput.value = profileDescription.textContent;
});

popupCardOpen.addEventListener("click", (evt) => {
  openPopup(popupCard);
});

function openPopupImage(item) {
  openPopup(popupImage);
  imageAtribut.src = item.link;
  imageAtribut.alt = item.name;
  imageCaption.textContent = item.name;
}

popups.forEach((popup) => {
  popup.addEventListener("mousedown", (evt) => {
    if (evt.target.classList.contains("popup_is-opened")) {
      closePopup(popup);
    }
    if (evt.target.classList.contains("popup__close")) {
      closePopup(popup);
    }
  });
});

popupEdit.classList.add("popup_is-animated");
popupCard.classList.add("popup_is-animated");
popupImage.classList.add("popup_is-animated");

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileTitle.textContent = nameInput.value;
  profileDescription.textContent = jobInput.value;
  closePopup(popupEdit);
  profileForm.reset();
}

function addNewCardSubmit(evt) {
  evt.preventDefault();
  const link = inputCardUrl.value;
  const name = inputCardName.value;
  const newCard = createCard(
    { name, link },
    deleteCard,
    likeCard,
    openPopupImage
  );
  addCard(newCard, true);
  closePopup(popupCard);
  formCardElement.reset();
}

function addCard(element, toStart) {
  if (toStart === true) {
    conteiner.prepend(element);
  } else {
    conteiner.append(element);
  }
}

formCardElement.addEventListener("submit", addNewCardSubmit);
profileForm.addEventListener("submit", handleProfileFormSubmit);
