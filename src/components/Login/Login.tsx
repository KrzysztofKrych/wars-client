import React from "react";
import Input from "../Elements/Input/Input";
import Button from "../Elements/Button/Button";
import css from "./Login.module.scss";
import Label from "../Elements/Label/Label";

const Login = () => {
    return (
        <div className={css.Login}>
            <Label htmlFor="email" className="login">
                <span>Email</span>
                <Input type="text" placeholder="type your email..." name="email" />
            </Label>
            
            <Label htmlFor="password" className="login">
                <span>Password</span>
                <Input type="password" placeholder="type your password..." name="password" />
            </Label>
            <Button>Login</Button>
        </div>
    )
};

export default Login;