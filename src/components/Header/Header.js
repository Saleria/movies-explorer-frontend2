import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import logo from "../../images/logo.svg";
import profile from "../../images/profile.svg";
import enter_button from "../../images/enter-button.svg";

function Header() {
    return (
        <header className="header">
            <div className="header__container">
                <img src={logo}
                    alt="Логотип С"
                    className="header__logo" />
                <div className="header__registration">
                <Routes>
                        <Route path="/" element={
                            <>
                                <p className="header__films">Фильмы</p>
                                <p className="header__save-films">Сохраненные фильмы</p>
                                <Link className="header__profile-enter" to="/profile" src={profile} />
                            </>} />                        
                        <Route path="/sign-in" element={<Link to="/sign-up" className="header__subtitle">Регистрация</Link>} />
                        <Route path="/sign-up" element={<Link to="/sign-in" className="header__subtitle" src={enter_button}></Link>} />
                    </Routes>
                </div>
            </div>
        </header>
    );
}

export default Header;