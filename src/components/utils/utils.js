const placeForm = document.forms['form-place'];
const profileForm = document.forms["form-profile"];
const avatarForm = document.forms["form-avatar"]
const profileEditButton = document.querySelector('.profile__edit-button');
const avatarEditButton = document.querySelector('.profile__avatar-button')
const profileAddButton = document.querySelector('.profile__add-button');
const elementsListSelector = ".cards__list";

// Объект с константами из форм
const formValidationList = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  errorClass: "popup__input_type_error",
};

export {
  placeForm,
  profileForm,
  avatarForm,
  profileEditButton,
  avatarEditButton,
  profileAddButton,
  elementsListSelector,
  formValidationList
}