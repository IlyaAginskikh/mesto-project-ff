(()=>{"use strict";var e=document.querySelector("#card-template").content;function t(t,n,o,r){var c=e.cloneNode(!0),p=c.querySelector(".card__image"),u=c.querySelector(".card__title"),a=c.querySelector(".card__delete-button"),d=c.querySelector(".card__like-button");return p.src=t.link,u.textContent=t.name,p.alt=t.name,a.addEventListener("click",n),d.addEventListener("click",o),p.addEventListener("click",(function(){return r(t)})),c}function n(e){e.target.closest(".card__like-button").classList.toggle("card__like-button_is-active")}function o(e){e.target.closest(".card").remove()}function r(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",p)}function c(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",p)}function p(e){"Escape"===e.key&&c(document.querySelector(".popup_is-opened"))}var u=document.querySelectorAll(".popup"),a=document.querySelector(".places__list"),d=document.querySelector(".profile__edit-button"),s=document.querySelector(".profile__add-button"),i=document.querySelector(".popup_type_edit"),l=document.querySelector(".popup_type_new-card"),_=document.querySelector(".popup_type_image"),m=_.querySelector(".popup__content").querySelector(".popup__image"),y=document.querySelector(".popup__caption"),v=i.querySelector(".popup__form"),f=v.querySelector(".popup__input_type_name"),k=v.querySelector(".popup__input_type_description"),q=document.querySelector(".profile__title"),S=document.querySelector(".profile__description"),g=l.querySelector(".popup__form"),L=g.querySelector(".popup__input_type_card-name"),E=g.querySelector(".popup__input_type_url");function h(e){r(_),m.src=e.link,m.alt=e.name,y.textContent=e.name}[{name:"Архыз",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg"},{name:"Челябинская область",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg"},{name:"Иваново",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg"},{name:"Камчатка",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg"},{name:"Холмогорский район",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg"},{name:"Байкал",link:"https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg"}].forEach((function(e){a.append(t(e,o,n,h))})),d.addEventListener("click",(function(e){r(i),f.value=q.textContent,k.value=S.textContent})),s.addEventListener("click",(function(e){r(l)})),u.forEach((function(e){e.classList.add("popup_is-animated"),e.addEventListener("mousedown",(function(t){t.target.classList.contains("popup_is-opened")&&c(e),t.target.classList.contains("popup__close")&&c(e)}))})),g.addEventListener("submit",(function(e){e.preventDefault();var r,p=E.value;r=t({name:L.value,link:p},o,n,h),a.prepend(r),c(l),g.reset()})),v.addEventListener("submit",(function(e){e.preventDefault(),q.textContent=f.value,S.textContent=k.value,c(i),v.reset()}))})();