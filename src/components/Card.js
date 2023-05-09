import React from "react";


function Card({card, onCardClick, onCardLike, onCardDelete}) {

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
    <li className="card">
      <button
        className="card__delete-button" 
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
            className="card__like-button"
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