import React, { Fragment } from "react";
import { connect } from "react-redux";
import { RootState } from "../../store/config";
import User from "../../models/User";
import Login from "../Login/Login";

export interface Props{
    user: User;
}

const Wrapper = ({user}: Props) => (
  <Fragment>
    {user.loggedIn ?
        <div>user loggedIn</div> :
        <Login />
    }
  </Fragment>  
);



const map = {
  state: (state: RootState) => {
      return {
          user: state.user
      };
  },
}

const connected = connect(map.state);
export default connected(Wrapper);