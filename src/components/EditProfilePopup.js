import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup({isOpen, onClose, onUpdateUser}) {
const [name, setName] = React.useState("");
const [description, setDescription] = React.useState("");
const currentUser = React.useContext(CurrentUserContext);
React.useEffect(() => {
  setName(currentUser.name);
  setDescription(currentUser.about);
}, [currentUser, isOpen]);

function handleNameChange(e) {
  setName(e.target.value);
}
function handleDescriptionChange(e) {
  setDescription(e.target.value);
}
function handleSubmit(e) {
  e.preventDefault();
  onUpdateUser({
    name: name,
    about: description,
  });
}

return (
      <PopupWithForm 
          name='profile'
          title='Редактировать профиль'
          btnText='Сохранить'
          isOpen={isOpen}
          onClose={onClose}
          onSubmit={handleSubmit}
        >
          <input 
            id="username" 
            className="popup__input" 
            name="name"
            type="text" 
            placeholder="Имя пользователя" 
            minLength="2" 
            maxLength="40" 
            required
            autoFocus
            value={name ?? ""}
            onChange={handleNameChange}
            pattern="^[a-zA-Zа-яА-я-\s]+$"
          />
          <span className="popup__error" id="username-error"></span>
          <input 
            id="about"
            className="popup__input" 
            name="description"
            type="text"
            placeholder="О себе"
            minLength="2"
            maxLength="200"
            required
            autoFocus
            value={description ?? ""}
            onChange={handleDescriptionChange}
            pattern="^[a-zA-Zа-яА-я-\s]+$"
          />
          <span className="popup__error" id="about-error"></span>
        </PopupWithForm>
);
}

export default EditProfilePopup;