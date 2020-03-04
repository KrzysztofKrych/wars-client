
import Redux from "redux";
import ActionType, { UserNameChangeActionInit, UserLoginActionSuccess } from "./user.actions";

export interface UserState {
    name: string;
    level: number;
    experience: number;
    gold: number;
    email: string;
    loggedIn: boolean;
}

export type UserAction = UserNameChangeActionInit | UserLoginActionSuccess;

export const userInitialState = {
    name: "Player",
    level: 1,
    experience: 0,
    gold: 0,
    email: "",
    loggedIn: false
}

const userReducer: Redux.Reducer<UserState, UserAction> = (state = userInitialState, action) => {
    switch(action.type){
        case ActionType.USER_NAME_CHANGE_INIT_ACTION : {
            const { name } = action.payload;
            return { ...state, name }
        }
        case ActionType.USER_LOGIN_ACTION_SUCCESS: {
            console.log(action)
            return {
                ...state
            }
        }
        default: {
            return state;
        }

    }
}

export default userReducer;