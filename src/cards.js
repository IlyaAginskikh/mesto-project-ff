import { putLikeCard, deleteLikeCard, deleteInitialCard } from "./api.js";

const cardTemplate = document.querySelector("#card-template").content;

export function createCard(item, userId, deleteCard, likeCard, openPopupImage) {
  const cardElement = cardTemplate.cloneNode(true);
  const imageCard = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");
  const delButton = cardElement.querySelector(".card__delete-button");
  const cardLikeButton = cardElement.querySelector(".card__like-button");
  const cardLikeNamber = cardElement.querySelector(".card_number_likes");
  const card = cardElement.querySelector(".card");

  cardLikeNamber.textContent = item.likes.length;
  if (item.owner._id != userId) {
    delButton.remove();
  }
  if (item.likes.some((user) => user._id === `${userId}`)) {
    cardLikeButton.classList.add("card__like-button_is-active");
  } else {
    cardLikeButton.classList.remove("card__like-button_is-active");
  }

  imageCard.src = item.link;
  cardTitle.textContent = item.name;
  imageCard.alt = item.name;
  delButton.addEventListener("click", () => deleteCard(item._id, card));

  cardLikeButton.addEventListener("click", () =>
    likeCard(cardLikeButton, cardLikeNamber, item)
  );
  imageCard.addEventListener("click", () => openPopupImage(item));
  return cardElement;
}

export function deleteCard(cardId, cardElem) {
  deleteInitialCard(cardId)
    .then(() => {
      cardElem.remove();
    })
    .catch((err) => console.log(`Ошибка ${err}`));
}

export function likeCard(cardLikeButton, cardLikeButtonCounter, cardData) {
  const cardID = cardData._id;
  if (!cardLikeButton.classList.contains("card__like-button_is-active")) {
    putLikeCard(cardID)
      .then((res) => {
        cardLikeButtonCounter.textContent = res.likes.length;
        cardLikeButton.classList.toggle("card__like-button_is-active");
      })
      .catch((err) => console.log(`Ошибка ${err}`));
  } else {
    deleteLikeCard(cardID)
      .then((res) => {
        cardLikeButtonCounter.textContent = res.likes.length;
        cardLikeButton.classList.toggle("card__like-button_is-active");
      })
      .catch((err) => console.log(`Ошибка ${err}`));
  }
}
