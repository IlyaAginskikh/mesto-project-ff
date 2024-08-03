export const initialCards = [
    {
      name: "Архыз",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
    },
    {
      name: "Челябинская область",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
    },
    {
      name: "Иваново",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
    },
    {
      name: "Камчатка",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
    },
    {
      name: "Холмогорский район",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
    },
    {
      name: "Байкал",
      link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
    }
];

const cardTemplate = document.querySelector("#card-template").content;
const popupImage = document.querySelector(".popup_type_image");
const popupImageContent = popupImage.querySelector(".popup__content");
const popupImageSrc = popupImageContent.querySelector(".popup__image");

export function createCard(item, deleteCard, openPopupImage, likeCard) {
  const cardElement = cardTemplate.cloneNode(true);
  const imageCard = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");
  const delButton = cardElement.querySelector(".card__delete-button");
  const cardLikeButton = cardElement.querySelector(".card__like-button");
  imageCard.src = item.link;
  cardTitle.textContent = item.name;
  imageCard.alt = item.name;
  delButton.addEventListener("click", deleteCard);
  imageCard.addEventListener("click", openPopupImage);
  cardLikeButton.addEventListener("click", likeCard);
  return cardElement;
}

export function likeCard(event) {
  const like = event.target.closest(".card__like-button");
  like.classList.toggle("card__like-button_is-active");
}

export function deleteCard(event) {
  const card = event.target.closest(".card");
  card.remove();
}

export function openPopupImage(event) {
  event.preventDefault();
  popupImage.classList.add("popup_is-opened");
  popupImageSrc.src = event.target.src;
  return;
  }