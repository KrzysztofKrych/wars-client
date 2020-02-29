import ActionType, { UserNameChangeActionInit } from "./user.actions";
import { takeLatest } from "redux-saga/effects";

function* changeUserName(action: UserNameChangeActionInit){
    console.log(action)
}



export default function* userSaga() {
    yield takeLatest(ActionType.USER_NAME_CHANGE_INIT_ACTION, changeUserName);
}
