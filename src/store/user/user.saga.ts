import ActionType, { UserNameChangeActionInit, UserLoginActionInit, UserLoginActionSuccess } from "./user.actions";
import { takeLatest, call, put } from "redux-saga/effects";
import { loginAction } from "../../api/repositories/UserRepository";
import User from "../../models/User";

function* changeUserName(action: UserNameChangeActionInit){
    console.log(action)
}

function* login(action: UserLoginActionInit){
   const response = yield call(loginAction, action.payload.email, action.payload.password, loginSuccessCallback);
   if(response.name){
    yield put(new UserLoginActionSuccess(response))
   }
}


function* loginSuccessCallback (response: User) {
    yield put(new UserLoginActionSuccess(response))
}

export default function* userSaga() {
    yield takeLatest(ActionType.USER_NAME_CHANGE_INIT_ACTION, changeUserName);
    yield takeLatest(ActionType.USER_LOGIN_ACTION_INIT, login);
}
