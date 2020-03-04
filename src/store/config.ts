import Redux, { createStore, applyMiddleware, Middleware, Dispatch } from 'redux';
import createSagaMiddleware from 'redux-saga';
import "regenerator-runtime/runtime";
import userSaga from "./user/user.saga";
import userReducer, { UserAction, UserState, userInitialState } from './user/user.reducer';


const sagaMiddleware = createSagaMiddleware();

export interface RootState {
    user: UserState;
}
export type RootAction = UserAction;

export const rootInitialState: RootState = {
    user: userInitialState,
};

const rootReducer: Redux.Reducer<RootState, RootAction> = (store = rootInitialState, action) => {
    return {
        user: userReducer(store.user, action as UserAction),
    };
};

const middlewareClassActions: Middleware = () => (next: Dispatch) => (action: Redux.Action) => {
    try{
        return next({ ...action });
    }
    catch(error){
        throw new Error(`Dispatched action must extend from an Action class.`);

    }
};



export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware, middlewareClassActions));

sagaMiddleware.run(userSaga);