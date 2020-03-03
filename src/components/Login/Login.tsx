import React from "react";
import Input from "../Elements/Input/Input";
import Button from "../Elements/Button/Button";
import css from "./Login.module.scss";

const Login = () => {
    return (
        <div className={css.Login}>
            <Input type="text" />
            <Input type="text" />
            <Button>Login</Button>
        </div>
    )
};

export default Login;