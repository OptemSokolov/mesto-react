import React from "react";

function ImagePopup({card, onClose}) {
  return (
    <div 
      className={`popup popup-image > ${card ? "popup_opened" : ""}`}
    >
      <div className="popup__image-card">
        <button
          className="popup__close-icon popup__image-close-icon" 
          type="button"
          aria-label="Закрыть окно"
          onClick={onClose}
        ></button>
        <img
          className="popup__image-photo"
          src={`${card?.link}`}
          alt={`${card?.name}`}
        />
        <figcaption 
          className="popup__image-title"
        >
          {`${card ? card.name : ""}`}
        </figcaption>
      </div>
    </div>
  );
}

export default ImagePopup;