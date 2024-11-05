const config = {
  baseUrl: "https://nomoreparties.co/v1/wff-cohort-25",
  headers: {
    authorization: "3b58d5d8-f904-448a-a266-c5fe05324d98",
    "Content-Type": "application/json",
  },
};

export const getInitialCards = () => {
  return fetch(`${config.baseUrl}/cards`, {
    method: "GET",
    headers: config.headers,
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(res.status);
      }
    })
    .catch((err) => console.log(`Ошибка ${err}`));
};

export const getDataProfile = () => {
  return fetch(`${config.baseUrl}/users/me`, {
    method: "GET",
    headers: config.headers,
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(res.status);
      }
    })
    .catch((err) => console.log(`Ошибка ${err}`));
};

export const patchEditProfile = () => {
  const data = {
    name: document.querySelector(".popup__input_type_name").value,
    about: document.querySelector(".popup__input_type_description").value,
  };
  return fetch(`${config.baseUrl}/users/me`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify(data),
  }).catch((err) => console.log(`Ошибка ${err}`));
};

export const postNewCard = () => {
  const data = {
    name: document.querySelector(".popup__input_type_card-name").value,
    link: document.querySelector(".popup__input_type_url").value,
  };
  return fetch(`${config.baseUrl}/cards`, {
    method: "POST",
    headers: config.headers,
    body: JSON.stringify(data),
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(res.status);
      }
    })
    .catch((err) => console.log(`Ошибка ${err}`));
};

export const putLikeCard = (cardID) => {
  return fetch(`${config.baseUrl}/cards/likes/${cardID}`, {
    method: "PUT",
    headers: config.headers,
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(res.status);
      }
    })
    .catch((err) => console.log(`Ошибка ${err}`));
};

export const deleteInitialCard = (itemID) => {
  fetch(`https://nomoreparties.co/v1/wff-cohort-25/cards/${itemID}`, {
    method: "DELETE",
    headers: {
      authorization: "3b58d5d8-f904-448a-a266-c5fe05324d98",
      "Content-Type": "application/json",
    },
  }).catch((err) => console.log(`Ошибка ${err}`));
};

export const deleteLikeCard = (cardID) => {
  return fetch(`${config.baseUrl}/cards/likes/${cardID}`, {
    method: "DELETE",
    headers: config.headers,
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      } else {
        return Promise.reject(res.status);
      }
    })
    .catch((err) => console.log(`Ошибка ${err}`));
};

export const patchAvatar = () => {
  const data = {
    avatar: document.querySelector(".popup__input_avatar_url").value,
  };
  return fetch(`${config.baseUrl}/users/me/avatar`, {
    method: "PATCH",
    headers: config.headers,
    body: JSON.stringify(data),
  }).catch((err) => console.log(`Ошибка ${err}`));
};
