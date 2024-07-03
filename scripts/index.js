const cardTemplate = document.querySelector('#card-template').content;
const conteiner = document.querySelector('.places__list');

function createCard(item, deleteCard) {

    const cardElement = cardTemplate.cloneNode(true);

    const imageCard = cardElement.querySelector('.card__image');
    const cardTitle = cardElement.querySelector('.card__title');
    const delButton = cardElement.querySelector('.card__delete-button');

    imageCard.src = item.link;
    cardTitle.textContent = item.name;
    imageCard.alt = item.name;

    delButton.addEventListener('click', deleteCard);

    return cardElement;
}

function deleteCard(event) {
    const card = event.target.closest('.card');
    card.remove();
}

initialCards.forEach((item) => {
    conteiner.append(createCard(item, deleteCard));
})
