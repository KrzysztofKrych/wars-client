
import Redux from "redux";
import ActionType, { UserNameChangeActionInit } from "./user.actions";

export interface UserState {
    name: string;
    level: number;
    experience: number;
    gold: number;
    email: string;
}

export type UserAction = UserNameChangeActionInit;

export const userInitialState = {
    name: "Player",
    level: 1,
    experience: 0,
    gold: 0,
    email: ""
}

const userReducer: Redux.Reducer<UserState, UserAction> = (state = userInitialState, action) => {
    switch(action.type){
        case ActionType.USER_NAME_CHANGE_INIT_ACTION : {
            const { name } = action.payload;
            return { ...state, name }
        }
        default: {
            return state;
        }

    }
}

export default userReducer;