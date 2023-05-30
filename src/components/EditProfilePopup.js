import React from "react";
import PopupWithForm from "./PopupWithForm";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

function EditProfilePopup(props) {
const [name, setName] = React.useState("");
const [description, setDescription] = React.useState("");
const currentUser = React.useContext(CurrentUserContext);
React.useEffect(() => {
  setName(currentUser.name);
  setDescription(currentUser.about);
}, [currentUser]);

function handleNameChange(e) {
  setName(e.target.value);
}
function handleDescriptionChange(e) {
  setDescription(e.target.value);
}
function handleSubmit(e) {
  e.preventDefault();
  props.onUpdateUser({
    name: name,
    about: description,
  });
}

return (
      <PopupWithForm 
          name='profile'
          title='Редактировать профиль'
          btnText='Сохранить'
          isOpen={props.isOpen}
          onClose={props.onClose}
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