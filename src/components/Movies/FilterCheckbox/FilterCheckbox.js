import React from "react";
import filter_active from "../../../images/smalltumb-active.svg";
import filter_inactive from "../../../images/smalltum-inactive.svg";

function FilterCheckbox() {
    return (
        <div className="filter">
            <input className="filter__check"
                type="checkbox"
                id="filter"
            />
            <label className="filter__title"
                htmlFor="filter">
                Короткометражки
            </label>
        </div>
    );
}

export default FilterCheckbox;