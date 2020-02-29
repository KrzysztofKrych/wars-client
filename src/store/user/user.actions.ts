enum ActionType {
    USER_NAME_CHANGE_INIT_ACTION = "USER_NAME_CHANGE_INIT_ACTION"
}


export class UserNameChangeActionInit {
    public readonly type = ActionType.USER_NAME_CHANGE_INIT_ACTION;
    public readonly payload: { name: string };
    public constructor(name: string ) {
        this.payload = { name };
    }
}


export default ActionType;