import React from "react";
import { RootState } from "../../store/config";
import { connect } from "react-redux";
import User from "../../models/User";

export interface Props{
    user: User;
}

const Character = ({user}: Props) => {
    return (
        <div>Character</div>
    )
}

const map = {
    state: (state: RootState) => {
        return {
            user: state.user.model
        }
    }
}

const connected = connect(map.state);


export default connected(Character);