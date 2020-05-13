import { socket } from "../constants";
const emitAction = <T>(name: string, body: T) => {
    return new Promise((resolve, reject) => {
        socket.emit(name, body, (error: Error, response: unknown) => {
            if(error) return reject(new Error("login error " + error));
            return resolve(response);
        })  
    })
};

export {
    emitAction
}