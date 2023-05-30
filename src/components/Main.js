import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

import Card from "./Card.js";

function Main({cards ,onCardClick, onEditProfile, onAddPlace, onEditAvatar, onCardDelete, onCardLike}) {

  const currentUser = React.useContext(CurrentUserContext); 

  const cardsElements = cards.map((card) => (
    <Card 
    card={ card } 
    key={ card._id } 
    onCardClick={ onCardClick } 
    onCardDelete={ onCardDelete }
    onCardLike={ onCardLike } />
  ))

  return (
    <main className="container">
      <section className="profile">
        <button 
          className="profile__avatar-button" 
          type="button"
          aria-label="Изменить аватар"
          onClick={onEditAvatar}
        >
          <img 
            className="profile__avatar" 
            alt="Аватар пользователя"
            src={currentUser.avatar}
            />
        </button>
       <div className="profile__info">
         <h1 className="profile__title">
           {currentUser.name || '...'}
         </h1>
         <button
           className="profile__edit-button" 
           type="button"
           aria-label="Редактировать профиль"
           onClick={onEditProfile}
           ></button>
         <p className="profile__description">
           {currentUser.about || '...'}
         </p>
       </div>
       <button
         className="profile__add-button" 
         type="button"
         aria-label="Добавить фото"
         onClick={onAddPlace}
         ></button>
      </section>
        <section className="cards">
        <ul className="cards__list">
          {cardsElements}
        </ul>
      </section>
    </main>
  );
}

export default Main;