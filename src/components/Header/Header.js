import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import profile from "../../images/profile.svg";
import enter_button from "../../images/enter-button.svg";
import BurgerPopup from "../BurgerPopup/BurgerPopup";

function Header({onBurgerPopup}) {
    return (
        <header className="header">
            <div className="header__container">
                <img src={logo}
                    alt="Логотип С"
                    className="header__logo" />
                <div className="header__registration">
                
                </div>
            </div>
        </header>
    );
}

export default Header;