import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

function MoviesCardList () {
    return(
        <section className="films">
            <ul className="films__list">
                <li>
                    <MoviesCard />
                </li>
            </ul>
        </section>
    );
}

export default MoviesCardList;