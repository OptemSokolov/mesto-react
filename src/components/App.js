import React, { useState } from "react";
import '../index.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';
import ImagePopup from './ImagePopup.js';
import PopupWithForm from "./PopupWithForm.js";


function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isDeleteCardPopupOpen, setIsDeleteCardPopupOpen] = useState(false);

  const [selectedCard, setSelectedCard] = useState(null);

  // Обработчики на кнопки
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsDeleteCardPopupOpen(false);
    setSelectedCard(null);
  }

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleDeleteCardClick(card) {
    setIsDeleteCardPopupOpen(true);
    }

  return (
    <div className="page">
        <Header />
        <Main
          onCardClick={handleCardClick}
          onEditProfile={handleEditProfileClick}
          onEditAvatar={handleEditAvatarClick}
          onAddPlace={handleAddPlaceClick}
          onCardDelete={handleDeleteCardClick}
        />
        <Footer />

        <PopupWithForm 
          name='profile'
          title='Редактировать профиль'
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          btnText='Сохранить'
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
          />
          <span className="popup__error" id="about-error"></span>
        </PopupWithForm>
        
        <PopupWithForm
          name='place'
          title='Новое место'
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          btnText="Сохранить"
        >
          <input 
            id="place-name" 
            className="popup__input" 
            name="name"
            type="text" 
            placeholder="Название" 
            minLength="2" 
            maxLength="30" 
            required 
            autoFocus
          />
          <span className="popup__error" id="place-name-error"></span>
          <input
            id="place-link" 
            className="popup__input" 
            name="link" 
            type="url" 
            placeholder="Ссылка на картинку"
            required
          />
          <span className="popup__error" id="place-link-error"></span>
        </PopupWithForm>

        <PopupWithForm
          name='avatar'
          title='Обновить аватар'
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          btnText="Сохранить"
        >
          <input
            id="avatar-link" 
            className="popup__input" 
            name="avatar" 
            type="url" 
            placeholder="Ссылка на картинку"
            required
          />
          <span className="popup__error" id="avatar-link-error"></span>
        </PopupWithForm>
        
        <PopupWithForm
          name='delete'
          title='Вы уверены?'
          isOpen={isDeleteCardPopupOpen}
          onClose={closeAllPopups}
          btnText="Да"
        >
        </PopupWithForm>

        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}
        />
    </div>
  );
}

export default App;
