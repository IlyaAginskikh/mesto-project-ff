(()=>{"use strict";var e={baseUrl:"https://nomoreparties.co/v1/wff-cohort-25",headers:{authorization:"3b58d5d8-f904-448a-a266-c5fe05324d98","Content-Type":"application/json"}},t=document.querySelector("#card-template").content;function n(e,n,r,o,c){var u=t.cloneNode(!0),a=u.querySelector(".card__image"),i=u.querySelector(".card__title"),s=u.querySelector(".card__delete-button"),l=u.querySelector(".card__like-button"),p=u.querySelector(".card_number_likes"),d=u.querySelector(".card");return p.textContent=e.likes.length,e.owner._id!=n&&s.remove(),e.likes.some((function(e){return e._id==="".concat(n)}))?l.classList.add("card__like-button_is-active"):l.classList.remove("card__like-button_is-active"),a.src=e.link,i.textContent=e.name,a.alt=e.name,s.addEventListener("click",(function(){return r(e._id,d)})),l.addEventListener("click",(function(){return o(l,p,e)})),a.addEventListener("click",(function(){return c(e)})),u}function r(t,n){var r;(r=t,fetch("https://nomoreparties.co/v1/wff-cohort-25/cards/".concat(r),{method:"DELETE",headers:e.headers}).then((function(e){return e.ok?e.json():Promise.reject(e.status)}))).then((function(){n.remove()})).catch((function(e){return console.log("Ошибка ".concat(e))}))}function o(t,n,r){var o=r._id;t.classList.contains("card__like-button_is-active")?function(t){return fetch("".concat(e.baseUrl,"/cards/likes/").concat(t),{method:"DELETE",headers:e.headers}).then((function(e){return e.ok?e.json():Promise.reject(e.status)}))}(o).then((function(e){n.textContent=e.likes.length,t.classList.remove("card__like-button_is-active")})).catch((function(e){return console.log("Ошибка ".concat(e))})):function(t){return fetch("".concat(e.baseUrl,"/cards/likes/").concat(t),{method:"PUT",headers:e.headers}).then((function(e){return e.ok?e.json():Promise.reject(e.status)}))}(o).then((function(e){n.textContent=e.likes.length,t.classList.add("card__like-button_is-active")})).catch((function(e){return console.log("Ошибка ".concat(e))}))}function c(e){e.classList.add("popup_is-opened"),document.addEventListener("keydown",a)}function u(e){e.classList.remove("popup_is-opened"),document.removeEventListener("keydown",a)}function a(e){"Escape"===e.key&&u(document.querySelector(".popup_is-opened"))}function i(e,t,n){var r=e.querySelector(".".concat(t.id,"-error"));t.classList.remove(n.inputErrorClass),r.classList.remove(n.errorClass),r.textContent=""}function s(e,t,n){!function(e){return e.some((function(e){return!e.validity.valid}))}(e)?(t.disabled=!1,t.classList.remove(n.inactiveButtonClass)):(t.disabled=!0,t.classList.add(n.inactiveButtonClass))}function l(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);n.forEach((function(n){i(e,n,t)})),s(n,r,t)}function p(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}var d,f=document.querySelectorAll(".popup"),_=document.querySelector(".places__list"),m=document.querySelector(".profile__edit-button"),y=document.querySelector(".profile__add-button"),v=document.querySelector(".profile__image"),h=document.querySelector(".popup_type_edit"),S=document.querySelector(".popup_type_new-card"),b=document.querySelector(".popup_type_avatar"),q=document.querySelector(".popup_type_image"),k=q.querySelector(".popup__content").querySelector(".popup__image"),C=document.querySelector(".popup__caption"),g=h.querySelector(".popup__form"),E=b.querySelector(".popup__form"),L=S.querySelector(".popup__form"),j=L.querySelector(".popup__input_type_card-name"),x=L.querySelector(".popup__input_type_url"),A=g.querySelector(".popup__input_type_name"),P=E.querySelector(".popup__input_avatar_url"),w=g.querySelector(".popup__input_type_description"),T=document.querySelector(".profile__title"),U=document.querySelector(".profile__description"),O=document.querySelector(".profile__image"),B=S.querySelector(".popup__form"),D=L.querySelector(".popup__button"),I=b.querySelector(".popup__button"),M=g.querySelector(".popup__button"),N={formSelector:".popup__form",inputSelector:".popup__input",submitButtonSelector:".popup__button",inactiveButtonClass:"popup__button_disabled",inputErrorClass:"popup__input_type_error",errorClass:"popup__error_visible"};function J(e){c(q),k.src=e.link,k.alt=e.name,C.textContent=e.name}!function(e){Array.from(document.querySelectorAll(e.formSelector)).forEach((function(t){!function(e,t){var n=Array.from(e.querySelectorAll(t.inputSelector)),r=e.querySelector(t.submitButtonSelector);s(n,r,t),n.forEach((function(o){o.addEventListener("input",(function(){!function(e,t,n){t.validity.patternMismatch?t.setCustomValidity(t.dataset.errorMessage):t.setCustomValidity(""),t.validity.valid?i(e,t,n):function(e,t,n,r){var o=e.querySelector(".".concat(t.id,"-error"));t.classList.add(r.inputErrorClass),o.classList.add(r.errorClass),o.textContent=n}(e,t,t.validationMessage,n)}(e,o,t),s(n,r,t)}))}))}(t,e)}))}(N),Promise.all([fetch("".concat(e.baseUrl,"/cards"),{method:"GET",headers:e.headers}).then((function(e){return e.ok?e.json():Promise.reject(e.status)})),fetch("".concat(e.baseUrl,"/users/me"),{method:"GET",headers:e.headers}).then((function(e){return e.ok?e.json():Promise.reject(e.status)}))]).then((function(e){var t,c,u=(c=2,function(e){if(Array.isArray(e))return e}(t=e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,c,u,a=[],i=!0,s=!1;try{if(c=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;i=!1}else for(;!(i=(r=c.call(n)).done)&&(a.push(r.value),a.length!==t);i=!0);}catch(e){s=!0,o=e}finally{try{if(!i&&null!=n.return&&(u=n.return(),Object(u)!==u))return}finally{if(s)throw o}}return a}}(t,c)||function(e,t){if(e){if("string"==typeof e)return p(e,t);var n={}.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?p(e,t):void 0}}(t,c)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),a=u[0],i=u[1];d=i._id,a.forEach((function(e){_.append(n(e,d,r,o,J))})),T.textContent=i.name,U.textContent=i.about,O.style.backgroundImage="url(".concat(i.avatar,")")})).catch((function(e){return console.log("Ошибка ".concat(e))})),m.addEventListener("click",(function(e){c(h),A.value=T.textContent,w.value=U.textContent,l(h,N)})),y.addEventListener("click",(function(e){c(S)})),v.addEventListener("click",(function(e){c(b)})),f.forEach((function(e){e.classList.add("popup_is-animated"),e.addEventListener("mousedown",(function(t){t.target.classList.contains("popup_is-opened")&&u(e),t.target.classList.contains("popup__close")&&u(e)}))})),B.addEventListener("submit",(function(t){t.preventDefault(),D.textContent="Сохранение...",function(t,n){var r={name:t,link:n};return fetch("".concat(e.baseUrl,"/cards"),{method:"POST",headers:e.headers,body:JSON.stringify(r)}).then((function(e){return e.ok?e.json():Promise.reject(e.status)}))}(j.value,x.value).then((function(e){var t;t=n(e,d,r,o,J),_.prepend(t),B.reset(),u(S)})).catch((function(e){return console.log("Ошибка ".concat(e))})).finally((function(){D.textContent="Сохранить"})),l(S,N)})),g.addEventListener("submit",(function(t){var n,r,o;t.preventDefault(),M.textContent="Сохранение...",(n=A.value,r=w.value,o={name:n,about:r},fetch("".concat(e.baseUrl,"/users/me"),{method:"PATCH",headers:e.headers,body:JSON.stringify(o)}).then((function(e){return e.ok?e.json():Promise.reject(e.status)}))).then((function(){T.textContent=A.value,U.textContent=w.value,u(h),g.reset()})).catch((function(e){return console.log("Ошибка ".concat(e))})).finally((function(){M.textContent="Сохранить"}))})),E.addEventListener("submit",(function(t){var n;t.preventDefault(),I.textContent="Сохранение...",(n={avatar:document.querySelector(".popup__input_avatar_url").value},fetch("".concat(e.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:e.headers,body:JSON.stringify(n)}).then((function(e){return e.ok?e.json():Promise.reject(e.status)}))).then((function(){O.style.backgroundImage="url(".concat(P.value,")"),E.reset(),u(b)})).catch((function(e){return console.log("Ошибка ".concat(e))})).finally((function(){I.textContent="Сохранить"}))}))})();