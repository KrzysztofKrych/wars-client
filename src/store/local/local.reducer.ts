
import Redux from "redux";
import ActionType, { LocalGetSessionStorageAction } from "./local.actions";
import SessionStorage from "../../models/SessionStorage";

export interface localState {
    sessionStorage: SessionStorage;
}

export type LocalAction = LocalGetSessionStorageAction;

const getSessionStorage = () => {
    const token = sessionStorage.getItem("token");
    if(token) {
        return {
            sessionStorage: {
                token: JSON.parse(atob(token)) || {}
            }
        }
    }
    return {
        sessionStorage: {
            token: {}
        }
    }
}

export const localInitialState = getSessionStorage();

const localReducer: Redux.Reducer<localState, LocalAction> = (state = localInitialState, action) => {
    switch(action.type){
        default: {
            return state;
        }
    }
}

export default localReducer;