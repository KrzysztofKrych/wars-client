import React, { useState } from "react";
import MainMenu from "../MainMenu/MainMenu";
import css from "./Content.module.scss";
import Option from "../../models/Option";
import Home from "../Home/Home";
import { Menu } from "../../models/Menu";
import Character from "../Character/Character";

const getActiveComponent = (option: Menu) => {
    switch(option){
        case Menu.CHARACTER: return <Character />;
        case Menu.TASKS: return "tasks";
        case Menu.CITY: return "city";
        case Menu.SHOP: return "shop";
        case Menu.HOME: return <Home />;
        default: return null;
    }
}

const Content = () => {
    const [menuOption, setMenuOption] = useState(Menu.HOME);
    const enableMenuOptions: Option[] = [
        {text: Menu.CHARACTER}, {text: Menu.TASKS}, {text: Menu.CITY}, {text: Menu.SHOP}, {text: Menu.HOME}
    ];
    return (
        <div className={css.Content}>
            <MainMenu 
                options={enableMenuOptions}
                onClick={option => setMenuOption(option.text as Menu)}/>
            <div className={css.Main}>
                {getActiveComponent(menuOption)}
            </div>
        </div>
    );
};



export default Content;