import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";

function Card({card, onCardClick, onCardLike, onCardDelete}) {

  const currentUser = React.useContext(CurrentUserContext);

  const isOwn = card.owner._id === currentUser._id;
  const isLiked = card.likes.some((i) => i._id === currentUser._id);
  const cardDeleteButtonClassName = isOwn ? "card__delete-button" : "card__delete-button_hidden";
  const cardLikeButtonClassName = `card__like-button ${ isLiked ? "card__like-button_active" : null }`;

  function handleCardClick() {
    onCardClick(card);
  }

  function handleLikeClick() {
    onCardLike(card);
  }

  function handleDeleteClick() {
    onCardDelete(card);
  }

  return (
    <li className="card" key={card._id}>
      <button
        className={cardDeleteButtonClassName}
        type="button"
        aria-label='Удалить'
        onClick={handleDeleteClick} 
      ></button>
      <img
        className="card__image"
        src={card.link}
        alt={card.name}
        onClick={handleCardClick}
      />
      <div className="card__label">
        <h2 className="card__title">{card.name}</h2>
        <div className="card__like">
          <button 
            className={cardLikeButtonClassName}
            type="button"
            aria-label='Лайк' 
            onClick={handleLikeClick}
          ></button>
          <span className="card__like-sum">{card.likes.length}</span>
        </div>
      </div>
    </li>
  );
}

export default Card;