import { emitAction } from "../api";

const loginAction = async (email: string, password: string) => {
    const login = await emitAction("login", { email, password: password })
    if(login){
        sessionStorage.setItem("token", btoa(JSON.stringify({email, password})));
        return login;
    }
}

export {
    loginAction
};