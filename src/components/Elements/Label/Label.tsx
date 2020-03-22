import React, { ReactElement, ReactText, ReactNode } from "react";
import css from "./Label.module.scss";

export interface Props{
    children: ReactElement | ReactText | ReactNode; 
    htmlFor?: string;
    className?: string
}

const Label = ({children, htmlFor, className = ""}: Props) => (
    <label className={`${css[className]} ${css.Label}`} htmlFor={htmlFor}>{children}</label>
);

export default Label;