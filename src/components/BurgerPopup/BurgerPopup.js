import React from "react";
import account from "../../images/account-img.svg";
function BurgerPopup({ isOpen, onClose }) {

    return (
        <section className={`popup ${isOpen ? "popup_opened" : ""}`}>
            <button className="popup__close"
                type="button"
                onClick={onClose} />
            <div className="popup__container">
                <ul className="popup__navigation-list">
                    <li className="popup__navigation-item">Главная</li>
                    <li className="popup__navigation-item">Фильмы</li>
                    <li className="popup__navigation-item">Сохранённые фильмы</li>
                </ul>
                <button className="popup-navigation-button">
                    Аккаунт
                    <img className="popup__navigation-img"
                        alt="Значок аккаунта"
                        src={account} />
                </button>
            </div>
        </section>
    );
}

export default BurgerPopup;