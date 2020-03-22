import { socket } from "../../constants";
import User from "../../models/User";

const loginAction = async (email: string, password: string) => {
    return new Promise((resolve, reject) => {
        socket.emit("login", { email, password: password }, (error: Error,response: User) => {
            if(error) return reject(new Error("login error"));
            sessionStorage.setItem("token", 
            btoa(JSON.stringify({email, password})))
            return resolve(response);
        })
    })
}

export {
    loginAction
};