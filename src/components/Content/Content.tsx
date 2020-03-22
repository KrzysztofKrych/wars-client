import React, { useState } from "react";
import MainMenu from "../MainMenu/MainMenu";
import css from "./Content.module.scss";
import Option from "../../models/Option";
const Content = () => {
    const [menuOption, setMenuOption] = useState("Home");
    const enableMenuOptions: Option[] = [
        {text: "Home"}, {text: "Character"}, {text: "Tasks"}, {text: "City"}, {text:"Shop"}
    ]
    return (
        <div className={css.Content}>
            <MainMenu 
                options={enableMenuOptions} 
                onClick={option => setMenuOption(option)}/>
            {menuOption}
        </div>
    )
};



export default Content;