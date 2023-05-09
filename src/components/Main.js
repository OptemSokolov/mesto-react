import React, { useState, useEffect } from "react";
import Card from './Card.js';
import api from './utils/Api.js'


function Main({onCardClick, onEditProfile, onAddPlace, onEditAvatar, onCardDelete}) {

  const [cards, setCards] = useState([]);

  const [userName, setUserName] = useState("...");
  const [userDescription, setUserDescription] = useState("...");
  const [userAvatar, setUserAvatar] = useState("#");

  const cardsElements = cards.map((card) => (
    <Card 
    card={card} 
    key={card.id} 
    onCardClick={onCardClick} 
    onCardDelete={ onCardDelete } />
  ))

  useEffect(() => {
    // Получим данные с сервера
    api.getUserInfo()
      .then((res) => {
        setUserName(res.name);
        setUserDescription(res.about);
        setUserAvatar(res.avatar);
      })
      .catch((err) => console.log(err));

    api.getAllCards()
      .then((res) => {
        const cardsData = res.map((data) => {
          return {
            name: data.name,
            link: data.link,
            likes: data.likes,
            id: data._id,
            ownerId: data.owner._id,
          };
        });
        setCards(cardsData);
      })
      .catch((err) => console.log(err));
  }, []);


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
            src={userAvatar}
            />
        </button>
       <div className="profile__info">
         <h1 className="profile__title">
           {userName}
         </h1>
         <button
           className="profile__edit-button" 
           type="button"
           aria-label="Редактировать профиль"
           onClick={onEditProfile}
           ></button>
         <p className="profile__description">
           {userDescription}
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