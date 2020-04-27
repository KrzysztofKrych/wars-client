import React from "react";
import { RootState } from "../../store/config";
import User from "../../models/User";
import { connect } from "react-redux";
import css from "./Home.module.scss";

export interface Props{
    user: User;
}

const Home = ({user}: Props) => {
    return (
        <div className={css.Home}>
            <div>News slider</div>
            <div>something when i have an idesomething when i have an ideasomething when i have an ideasomething when i have an ideasomething when i have an ideaa</div>
            <div>something when i have an idea</div>
        </div>
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

export default connected(Home);