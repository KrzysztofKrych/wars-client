import React from 'react';
import css from "./MainMenu.module.scss";
import Option from "../../models/Option";

export interface Props {
    onClick: (option: string) => void;
    options: Option[];
}


const MainMenu = ({onClick, options}: Props) => {
    const handleClick = (event: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
        event.currentTarget.textContent && onClick(event.currentTarget.textContent);
    }
    return (
        <ul className={css.Menu}>
            {options.map(option => <li onClick={handleClick}>{option.text}</li>)}
        </ul>
    )
}

export default MainMenu;