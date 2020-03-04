import User from "../../models/User";

enum ActionType {
    USER_NAME_CHANGE_INIT_ACTION = "USER_NAME_CHANGE_INIT_ACTION",
    USER_LOGIN_ACTION_INIT = "USER_LOGIN_ACTION_INIT",
    USER_LOGIN_ACTION_SUCCESS = "USER_LOGIN_ACTION_SUCCESS"

}


export class UserNameChangeActionInit {
    public readonly type = ActionType.USER_NAME_CHANGE_INIT_ACTION;
    public readonly payload: { name: string };
    public constructor(name: string ) {
        this.payload = { name };
    }
}

export class UserLoginActionInit {
    public readonly type = ActionType.USER_LOGIN_ACTION_INIT;
    public readonly payload: { email: string, password: string };
    public constructor( email: string, password: string) {
        this.payload = { email, password };
    }
}

export class UserLoginActionSuccess {
    public readonly type = ActionType.USER_LOGIN_ACTION_SUCCESS;
    public readonly payload: { user: User };
    public constructor(user: User) {
        this.payload = { user };
    }
}
export default ActionType;