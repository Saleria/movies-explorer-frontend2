import React from "react";
import MoviesImg from "../../../images/movies-img.png";

function MoviesCard() {
    return (
        <div className="film">
            <div className="film__container">
                <h2 className="film__title">
                    В погоне за Бенкси
                </h2>
                <p className="film__time">0ч 42м</p>
            </div>
            <img className="film__img" alt="Кадр из фильма" src={MoviesImg} />
            <button className="film__button">Сохранить</button>
        </div>
    );
}

export default MoviesCard;