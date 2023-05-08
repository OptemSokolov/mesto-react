import React from "react";
import '../index.css';
import Header from './Header.js';
import Main from './Main.js';
import Footer from './Footer.js'

function App() {
  return (
    <div className="App">
      <div className="page">
        <>
          <Header />
          <Main
          />
          <Footer />
  <section className="popup popup-profile">
    <div className="popup__container">
      <h2 className="popup__title">Редактировать профиль</h2>
      <form className="popup__form form-profile" name="form-profile">
        <input 
          className="popup__input popup__input_type_error" 
          type="text" 
          placeholder="Имя пользователя" 
          name="name"
          id="username" 
          minlength="2" 
          maxlength="40" 
          required
          />
        <span className="popup__error" id="username-error"></span>
        <input 
          className="popup__input popup__input_type_error" 
          type="text"
          placeholder="О себе"
          name="description"
          id="about"
          minlength="2"
          maxlength="200"
          required
          />
        <span className="popup__error" id="about-error"></span>
        <button className="popup__button popup__button_disabled" type="submit">Сохранить</button>
      </form>
      <button className="popup__close-icon popup__close-icon_type_edit-profile" type="button"></button>
    </div>
  </section>
  <section className="popup popup-place">
    <div className="popup__container">
      <h2 className="popup__title">Новое место</h2>
      <button className="popup__close-icon popup__close-icon_type_add-picture" type="button"></button>
      <form className="popup__form form-place" name="form-place">
        <input className="popup__input popup__input_type_error" type="text" placeholder="Название" name="name"
          id="place-name" minlength="2" maxlength="30" required value=""/>
        <span className="popup__error" id="place-name-error"></span>
        <input className="popup__input popup__input_type_error" type="url" placeholder="Ссылка на картинку"
          name="link" id="place-link" required value=""/>
        <span className="popup__error" id="place-link-error"></span>
        <button className="popup__button popup__button_disabled" type="submit">Создать</button>
      </form>
    </div>
  </section>
  <section className="popup popup-image" aria-label="popup-image">
    <article className="popup__image-card">
      <button className="popup__close-icon popup__image-close-icon" type="button"></button>
      <img className="popup__image-photo"/>
      <h2 className="popup__image-title"></h2>
    </article>
  </section>
  <section className="popup popup-delete">
    <div className="popup__container popup__container_type_delete">
      <button className="popup__close-icon popup__close-icon_type_delete" type="button"></button>
      <form className="popup__form popup__form_type_delete" name="form-delete" id="form-delete">
        <h2 className="popup__title popup__title_type_delete">
          Вы уверены?
        </h2>
        <button className="popup__button popup__button_type_delete" type="submit">
          Да
        </button>
      </form>
    </div>
  </section>
  <section className="popup popup-avatar">
    <div className="popup__container popup__container_type_avatar">
      <button className="popup__close-icon popup__close-icon_type_avatar" type="button"></button>
      <form className="popup__form popup__form_type_avatar" name="form-avatar" id="form-avatar">
        <h2 className="popup__title popup__title_type_avatar">
          Обновить аватар
        </h2>
        <input className="popup__input popup__input_type_error" type="url" placeholder="Ссылка на картинку"
          name="avatar" id="avatar-link" required value=""/>
        <span className="popup__error" id="avatar-link-error"></span>
        <button className="popup__button popup__button_disabled" type="submit" id="edit-avatar">Сохранить</button>
      </form>
    </div>
  </section>
  <template id="card-template">
    <li className="card">
      <button className="card__delete-button" type="button"></button>
      <img className="card__image"/>
      <div className="card__label">
        <h2 className="card__title"></h2>
        <div className="card__like">
          <button className="card__like-button" type="button"></button>
          <span className="card__like-sum"></span>
        </div>
      </div>
    </li>
  </template>

        </>
      </div>
    </div>
  );
}

export default App;
