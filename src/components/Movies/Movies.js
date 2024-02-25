import React from "react";
import SearchForm from "./SearchForm/SearchForm";
import MoviesCardList from "./MoviesCardList/MoviesCardList";
import FilterCheckbox from "./FilterCheckbox/FilterCheckbox";
import Footer from "../Footer/Footer";

function Movies() {
    return (
        <section className="movies">
            <SearchForm />
            <FilterCheckbox />
            <MoviesCardList />
            <Footer />
        </section>
    );
}

export default Movies;