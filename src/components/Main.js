import React from "react";


function Main() {
  return (
    <main className="container">
    <section className="profile">
      <button className="profile__avatar-button" type="button">
        <img className="profile__avatar" alt="Аватар пользователя"/>
      </button>
      <div className="profile__info">
        <h1 className="profile__title"></h1>
        <button className="profile__edit-button" type="button"></button>
        <p className="profile__description"></p>
      </div>
      <button className="profile__add-button" type="button"></button>
    </section>
    <section className="cards" aria-label="cards">
      <ul className="cards__list"></ul>
    </section>
  </main>
  );
}

export default Main;