
import Redux from "redux";
import ActionType, { UserNameChangeActionInit, UserLoginActionSuccess } from "./user.actions";
import User from "../../models/User";

export interface UserState {
    model: User;
}

export type UserAction = UserNameChangeActionInit | UserLoginActionSuccess;

export const userInitialState = {
    model: {
        name: "Player",
        level: 1,
        experience: 0,
        gold: 0,
        email: "",
        loggedIn: false
    }
}

const userReducer: Redux.Reducer<UserState, UserAction> = (state = userInitialState, action) => {
    switch(action.type){
        case ActionType.USER_NAME_CHANGE_INIT_ACTION : {
            const { name } = action.payload;
            return { ...state, name }
        }
        case ActionType.USER_LOGIN_ACTION_SUCCESS: {
            const { user } = action.payload;
            return {
                ...state,
                model: {
                    ...user,
                    loggedIn: true
                }
            }
        }
        default: {
            return state;
        }

    }
}

export default userReducer;