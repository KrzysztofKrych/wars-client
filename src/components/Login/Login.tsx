import React, { useState } from "react";
import Input from "../Elements/Input/Input";
import Button from "../Elements/Button/Button";
import css from "./Login.module.scss";
import Label from "../Elements/Label/Label";
import { Dispatch } from "redux";
import { UserLoginActionInit } from "../../store/user/user.actions";
import { connect } from "react-redux";
import CryptoJS from "crypto-js";

export interface Props{
    onLogin: (email: string, password: string) => void
}

const Login = ({onLogin}: Props) => {
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const handleLogin = () => {
        onLogin(email, CryptoJS.SHA256(password).toString())
    }
    return (
        <div className={css.Login}>
            <Label htmlFor="email" className="login">
                <span>Email</span>
                <Input 
                    type="text" 
                    placeholder="type your email..." 
                    name="email"
                    onChange={event => setEmail(event.target.value) } />
            </Label>
            
            <Label htmlFor="password" className="login">
                <span>Password</span>
                <Input 
                    type="password" 
                    placeholder="type your password..."
                    name="password" 
                    onChange={event => setPassword(event.target.value) } />
            </Label>
            <Button onClick={handleLogin}>Login</Button>
        </div>
    )
};

const map = {
    dispatch: (dispatch: Dispatch) => ({
        onLogin: (email: string, password: string) => {
            dispatch(new UserLoginActionInit(email, password));
        }
    })
}

const connected = connect(undefined, map.dispatch);

export default connected(Login);