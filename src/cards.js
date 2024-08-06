const cardTemplate = document.querySelector("#card-template").content;

export function createCard(item, deleteCard, likeCard, openPopupImage) {
  const cardElement = cardTemplate.cloneNode(true);
  const imageCard = cardElement.querySelector(".card__image");
  const cardTitle = cardElement.querySelector(".card__title");
  const delButton = cardElement.querySelector(".card__delete-button");
  const cardLikeButton = cardElement.querySelector(".card__like-button");
  imageCard.src = item.link;
  cardTitle.textContent = item.name;
  imageCard.alt = item.name;
  delButton.addEventListener("click", deleteCard);
  cardLikeButton.addEventListener("click", likeCard);
  imageCard.addEventListener("click", () => openPopupImage(item));
  return cardElement;
};

export function likeCard(event) {
  const like = event.target.closest(".card__like-button");
  like.classList.toggle("card__like-button_is-active");
};

export function deleteCard(event) {
  const card = event.target.closest(".card");
  card.remove();
};
