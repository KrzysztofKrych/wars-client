
import Redux from "redux";
import ActionType, { UserNameChangeActionInit } from "./user.actions";

export interface UserState {
    name: string
}

export type UserAction = UserNameChangeActionInit;

export const userInitialState = {
    name: ""
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