import React from "react";

function PopupWithForm({isOpen, onClose, name, title, btnText, children, onSubmit}) {
  return (
    <section
      className={`popup popup-${name} ${isOpen ? "popup_opened" : ""}`} 
    >
      <div className="popup__container">
        <h2 className="popup__title">{title}</h2>
        <button 
          className="popup__close-icon" 
          type="button"
          aria-label="Закрыть окно"
          onClick={onClose}
        />
        <form 
          className="popup__form"
          id={name}
          name={name}
          autoComplete="off"
          onSubmit={onSubmit}
        >
          {children}
          <button 
            className="popup__button" 
            type="submit"
            aria-label="Сохранить"
          >
            {btnText}
          </button>
        </form>
      </div>
    </section>
  );
}

export default PopupWithForm;