import User from "../../models/User";

enum ActionType {
    LOCAL_GET_SESSION_STORAGE_ACTION = "LOCAL_GET_SESSION_STORAGE_ACTION"
}

export class LocalGetSessionStorageAction {
    public readonly type = ActionType.LOCAL_GET_SESSION_STORAGE_ACTION;
}

export default ActionType;