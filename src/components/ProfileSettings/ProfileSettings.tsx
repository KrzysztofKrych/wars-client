import React from "react";
import { RootState } from "../../store/config";
import User from "../../models/User";
import { connect } from "react-redux";


export interface Props {
    user: any;
}

const ProfileSettings = ({user}: Props) => {
    return (
        <div>{user.name}</div>
    )
}


const map = {
    state: (state: RootState) => {
        return {
            user: state.user
        };
    },
}

const connected = connect(map.state);


export default connected(ProfileSettings)