import React, { CSSProperties, ReactText } from "react";
import css from "./Button.module.scss";

export interface Props{
    style?: CSSProperties;
    className?: string;
    children: ReactText;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    variant?: string
}

const Button = ({
    style, 
    className, 
    onClick,
    children,
    variant = "primary"
    }: Props) => (
    <button 
        style={style}
        className={`${className} ${css[variant]} ${css.Button}`}
        onClick={onClick}>{children}</button>
);

export default Button;