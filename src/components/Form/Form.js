import React from "react";

function Form ({title, children, buttonText}) {
    return(
        <section className="form">
            <div className="form__container">
                <h2 className="form__title">{title}</h2>
                <form className="form__shell">
                    <fieldset className="form__info">
                        
                    </fieldset>
                    <button className="form__button" type="submit">
                        {buttonText}
                    </button>
                </form>
            </div>
        </section>
    );
}

export default Form;