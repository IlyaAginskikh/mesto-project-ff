import "./pages/index.css";
import { createCard, deleteCard, likeCard } from "./cards.js";
import { openPopup, closePopup } from "./modal.js";
import { enableValidation, clearValidation } from "./validation.js";
import {
  getInitialCards,
  getDataProfile,
  patchEditProfile,
  postNewCard,
  patchAvatar,
} from "./api.js";

const popups = document.querySelectorAll(".popup");
const conteiner = document.querySelector(".places__list");
const popupEditOpen = document.querySelector(".profile__edit-button");
const popupCardOpen = document.querySelector(".profile__add-button");
const popupAvatarOpen = document.querySelector(".profile__image");
const popupEdit = document.querySelector(".popup_type_edit");
const popupCard = document.querySelector(".popup_type_new-card");
const popupAvatar = document.querySelector(".popup_type_avatar");
const popupImage = document.querySelector(".popup_type_image");
const popupImageContent = popupImage.querySelector(".popup__content");
const imageAtribut = popupImageContent.querySelector(".popup__image");
const imageCaption = document.querySelector(".popup__caption");
const profileForm = popupEdit.querySelector(".popup__form");
const avatarForm = popupAvatar.querySelector(".popup__form");
const popupForm = popupCard.querySelector(".popup__form");

const nameInput = profileForm.querySelector(".popup__input_type_name");
const avatarInput = avatarForm.querySelector(".popup__input_avatar_url");
const aboutInput = profileForm.querySelector(".popup__input_type_description");
const profileTitle = document.querySelector(".profile__title");
const profileDescription = document.querySelector(".profile__description");
const profileImage = document.querySelector(".profile__image");
const formCardElement = popupCard.querySelector(".popup__form");
const cardPopupButton = popupForm.querySelector(".popup__button");
const avatarPopupButton = popupAvatar.querySelector(".popup__button");
const editPopupButton = profileForm.querySelector(".popup__button");
const cardValue = document.querySelector(".popup__input_type_card-name").value;
const linkValue = document.querySelector(".popup__input_type_url").value;

const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

enableValidation(validationConfig);

let userId;

Promise.all([getInitialCards(), getDataProfile()])
  .then(([getCard, dataProfile]) => {
    userId = dataProfile._id;
    getCard.forEach((item) => {
      conteiner.append(
        createCard(item, userId, deleteCard, likeCard, openPopupImage)
      );
    });
    profileTitle.textContent = dataProfile.name;
    profileDescription.textContent = dataProfile.about;
    profileImage.style.backgroundImage = `url(${dataProfile.avatar})`;
  })
  .catch((err) => console.log(`Ошибка ${err}`));

popupEditOpen.addEventListener("click", (evt) => {
  openPopup(popupEdit);
  nameInput.value = profileTitle.textContent;
  aboutInput.value = profileDescription.textContent;
  clearValidation(popupEdit, validationConfig);
});

popupCardOpen.addEventListener("click", (evt) => {
  openPopup(popupCard);
});

popupAvatarOpen.addEventListener("click", (evt) => {
  openPopup(popupAvatar);
});

function openPopupImage(item) {
  openPopup(popupImage);
  imageAtribut.src = item.link;
  imageAtribut.alt = item.name;
  imageCaption.textContent = item.name;
}

popups.forEach((popup) => {
  popup.classList.add("popup_is-animated");
  popup.addEventListener("mousedown", (evt) => {
    if (evt.target.classList.contains("popup_is-opened")) {
      closePopup(popup);
    }
    if (evt.target.classList.contains("popup__close")) {
      closePopup(popup);
    }
  });
});

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  editPopupButton.textContent = "Сохранение...";
  patchEditProfile(nameInput.value, aboutInput.value)
    .then(() => {
      profileTitle.textContent = nameInput.value;
      profileDescription.textContent = aboutInput.value;
      closePopup(popupEdit);
      profileForm.reset();
    })
    .catch((err) => console.log(`Ошибка ${err}`))
    .finally(() => {
      editPopupButton.textContent = "Сохранить";
    });
}

function handleAvatarFormSubmit(evt) {
  evt.preventDefault();
  avatarPopupButton.textContent = "Сохранение...";
  patchAvatar()
    .then(() => {
      profileImage.style.backgroundImage = `url(${avatarInput.value})`;
      avatarForm.reset();
      closePopup(popupAvatar);
    })
    .catch((err) => console.log(`Ошибка ${err}`))
    .finally(() => {
      avatarPopupButton.textContent = "Сохранить";
    });
}

function addNewCardSubmit(evt) {
  evt.preventDefault();
  cardPopupButton.textContent = "Сохранение...";
  postNewCard(cardValue, linkValue)
    .then((dataNewCard) => {
      addCard(
        createCard(dataNewCard, userId, deleteCard, likeCard, openPopupImage),
        true
      );
      formCardElement.reset();
      closePopup(popupCard);
    })
    .catch((err) => console.log(`Ошибка ${err}`))
    .finally(() => {
      cardPopupButton.textContent = "Сохранить";
    });
  clearValidation(popupCard, validationConfig);
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
avatarForm.addEventListener("submit", handleAvatarFormSubmit);
