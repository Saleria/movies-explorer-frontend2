import React from "react";
import Form from "../Form/Form";

function Register () {
    return(
        <Form 
            title="Добро пожаловать!"
            buttonText="Зарегистрироваться"
            lableText="Уже зарегистрированы?"
            buttonEnterText="Войти"
        />
    );
}

export default Register;