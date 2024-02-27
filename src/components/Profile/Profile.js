import React from "react";

function Profile() {
    return (
        <section className="profile">
            <h2 className="profile__title">
                Привет, Виталий!
            </h2>
            <form className="profile__form">
                <fieldset className="profile__info">
                    <div className="profile__shell">
                        <label className="profile__label" htmlFor="text-name">
                            Имя
                        </label>
                        <input className="profile__text"
                            id="text-name"
                            name="text-name"
                            placeholder="Имя" required
                            minLength="2"
                            type="text"
                            defaultValue="Виталий" />
                        <span className="profile__error-message"
                            id="text-name-error"></span>
                    </div>
                    <div className="profile__shell">
                        <label className="profile__label" htmlFor="email">
                            E-mail
                        </label>
                        <input className="profile__text"
                            id="email"
                            name="email"
                            placeholder="Email" required
                            minLength="2"
                            type="email"
                            defaultValue="pochta@yandex.ru" />
                        <span className="profile__error-message"
                            id="text-name-error"></span>
                    </div>                                       
                </fieldset>
                <button className="form__button">Редактировать</button>
                <button className="form__button-exit">Выйти из аккаунта</button> 
            </form>            
        </section>
    );
}

export default Profile; 