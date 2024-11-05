import { putLikeCard, deleteLikeCard, deleteInitialCard } from "./api.js";

const cardTemplate = document.querySelector("#card-template").content;

export function createCard(
  item,
  dataProfile,
  deleteCard,
  likeCard,
  openPopupImage
) {
  const cardElement = cardTemplate.cloneNode(true);
  const imageCard = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");
  const delButton = cardElement.querySelector(".card__delete-button");
  const cardLikeButton = cardElement.querySelector(".card__like-button");
  const cardLikeNamber = cardElement.querySelector(".card_number_likes");
  cardLikeNamber.textContent = item.likes.length;
  if (item.owner._id != dataProfile._id) {
    delButton.remove();
  }
  if (item.likes.some((user) => user._id === `${dataProfile._id}`)) {
    cardLikeButton.classList.add("card__like-button_is-active");
  } else {
    cardLikeButton.classList.remove("card__like-button_is-active");
  }

  imageCard.src = item.link;
  cardTitle.textContent = item.name;
  imageCard.alt = item.name;
  delButton.addEventListener("click", () => deleteInitialCard(item._id));
  delButton.addEventListener("click", deleteCard);
  cardLikeButton.addEventListener("click", () =>
    likeCard(cardLikeButton, cardLikeNamber, item, dataProfile)
  );
  imageCard.addEventListener("click", () => openPopupImage(item));
  return cardElement;
}

export function deleteCard(event) {
  const card = event.target.closest(".card");
  card.remove();
}

export function likeCard(cardLikeButton, cardLikeButtonCounter, cardData) {
  const cardID = cardData._id;
  cardLikeButton.classList.toggle("card__like-button_is-active");
  if (cardLikeButton.classList.contains("card__like-button_is-active")) {
    putLikeCard(cardID).then((res) => {
      cardLikeButtonCounter.textContent = res.likes.length;
    });
  } else {
    deleteLikeCard(cardID).then((res) => {
      cardLikeButtonCounter.textContent = res.likes.length;
    });
  }
}
