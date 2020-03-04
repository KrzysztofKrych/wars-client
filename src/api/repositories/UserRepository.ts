import { socket } from "../../constants";
import CryptoJS from "crypto-js";
import User from "../../models/User";
import { UserLoginActionSuccess } from "../../store/user/user.actions";

const cb = (response:User) => {

}

const loginAction = async (email: string, password: string, callback: (user: User) => void) => {
    return new Promise((resolve, reject) => {
        socket.emit("login", { email, password: CryptoJS.SHA256(password).toString() }, (response: User) => {
            if(response) return resolve(response);
            return reject(new Error("login error"))
        })
    })
}

export {
    loginAction
};