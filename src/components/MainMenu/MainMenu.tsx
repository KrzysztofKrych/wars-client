import React from 'react';
import css from "./MainMenu.module.scss";
import Option from "../../models/Option";

export interface Props {
    onClick: (option: Option) => void;
    options: Option[];
}


const MainMenu = ({onClick, options}: Props) => {
    const handleClick = (event: React.MouseEvent<HTMLLIElement, MouseEvent>, option: Option) => {
        event.currentTarget.textContent && onClick(option);
    }
    return (
        <ul className={css.Menu}>
            {options.map((option, index) => 
                <li key={index} onClick={event => handleClick(event, option)}>{option.text}</li>
            )}
        </ul>
    )
}

export default MainMenu;