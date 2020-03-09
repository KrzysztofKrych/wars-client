import React, { Fragment, useEffect } from "react";
import { connect } from "react-redux";
import { RootState } from "../../store/config";
import User from "../../models/User";
import Login from "../Login/Login";
import Auth from "../../models/Auth";
import { Dispatch } from "redux";
import { UserLoginActionInit } from "../../store/user/user.actions";

export interface Props{
    user: User;
    token: Auth;
    onLogin: (email: string, password: string) => void;
}

const Wrapper = ({user, token, onLogin}: Props) => {
  useEffect(() => {
    if(token && !user.loggedIn){
      onLogin(token.email, token.password);
    }
  }, [])
  return (
    <Fragment>
      {user.loggedIn ?
          <div>user loggedIn</div> :
          <Login />
      }
    </Fragment>  
  );
} 



const map = {
  state: (state: RootState) => {
      return {
          user: state.user.model,
          token: state.local.sessionStorage.token
      };
  },
  dispatch: (dispatch: Dispatch) => ({
    onLogin: (email: string, password: string) => {
        dispatch(new UserLoginActionInit(email, password));
    }
})
}


const connected = connect(map.state, map.dispatch);
export default connected(Wrapper);