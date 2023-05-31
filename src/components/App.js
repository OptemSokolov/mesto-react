import React, { useState, useEffect } from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

import '../index.css';

import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js';

import api from '../utils/Api.js'
import ImagePopup from './ImagePopup.js';
import EditProfilePopup from "./EditProfilePopup.js";
import EditAvatarPopup from "./EditAvatarPopup.js";
import AddPlacePopup from "./AddPlacePopup.js";
import ConfirmDeletePopup from "./ConfirmDeletePopup.js";


function App() {

  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isDeleteCardPopupOpen, setIsDeleteCardPopupOpen] = useState(false);

  const [selectedCard, setSelectedCard] = useState(null);
  const [selectCardDelete, setSelectCardDelete] = useState({});
  const [currentUser, setCurrentUser] = useState({});

  const [cards, setCards] = useState([]);

  useEffect(() => {
    api.getProfile()
      .then((res) => {
        setCurrentUser(res);
      })
      .catch((err) => console.error(err));

    api.getInitialCards()
      .then((res) => {
        setCards(res.map((card) => card));
      })
      .catch((err) => console.error(err));
  }, []);

  // Профиль -----------------------
  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleUpdateUser({ name, about }) {
    api
      .editProfile(name, about)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch((err) => console.error(err));
  }

  // Аватар -----------------------
  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleUpdateAvatar({ avatar }) {
    api.updateAvatar(avatar)
      .then((res) => {
        setCurrentUser(res);
        closeAllPopups();
      })
      .catch((err) => console.error(err));
  }

  // Плэйс -----------------------
  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleAddPlaceSubmit({ name, link }) {
    api
      .addCard(name, link)
      .then((newCard) => {
        setCards([newCard, ...cards]);
        closeAllPopups();
      })
      .catch((err) => console.log(err));
  }

  // Делит -----------------------
  function handleDeleteCardClick(card) {
    setIsDeleteCardPopupOpen(true);
    setSelectCardDelete(card);
  }

  function handleCardDelete(card) {
    api
      .deleteCard(card._id)
      .then(() => {
        setCards((state) => state.filter((c) => c._id !== card._id));
        // setCards(cards.filter((item) => item !== card))
        closeAllPopups();
      })
      .catch((err) => console.error(err));
  }


  function closeAllPopups() {
    setIsEditProfilePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsDeleteCardPopupOpen(false);
    setSelectedCard(null);
  }

  const isOpen = isEditAvatarPopupOpen || isEditProfilePopupOpen || isAddPlacePopupOpen || selectedCard

  useEffect(() => {
    function closeByEscape(evt) {
      if(evt.key === 'Escape') {
        closeAllPopups();
      }
    }
    if(isOpen) { 
      document.addEventListener('keydown', closeByEscape);
      return () => {
        document.removeEventListener('keydown', closeByEscape);
      }
    }
  }, [isOpen]) 

  function handleCardClick(card) {
    setSelectedCard(card);
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);
    api
      .changeLikeCardStatus(card._id, !isLiked)
      .then((newCard) => {
        setCards((state) =>
          state.map((c) => (c._id === card._id ? newCard : c))
        );
      })
      .catch((err) => console.error(err));
  }


  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Header />
        <Main
          cards={cards}
          onCardClick={handleCardClick}
          onEditProfile={handleEditProfileClick}
          onEditAvatar={handleEditAvatarClick}
          onAddPlace={handleAddPlaceClick}
          onCardDelete={handleDeleteCardClick}
          onCardLike={handleCardLike}
        />
        <Footer />

        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          onUpdateUser={handleUpdateUser}
        />

        <AddPlacePopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          onAddPlace={handleAddPlaceSubmit}
        />

        <EditAvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          onUpdateAvatar={handleUpdateAvatar}
        />
        
        <ConfirmDeletePopup
          isOpen={isDeleteCardPopupOpen}
          onClose={closeAllPopups}
          card={selectCardDelete}
          onCardDelete={ handleCardDelete }
        />

        <ImagePopup 
          card={selectedCard} 
          onClose={closeAllPopups} 
        />
    </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
