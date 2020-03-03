import React, { CSSProperties } from "react";
import css from "./Input.module.scss"
export interface Props{
    type: string;
    value?: string;
    style?: CSSProperties;
    className?: string;
    placeholder?: string;
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onBlur?: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onFocus?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({
    type,
    value, 
    style, 
    className, 
    placeholder,
    onChange, 
    onBlur, 
    onFocus
    }: Props) => (
    <input 
        type={type} 
        value={value} 
        style={style}
        className={`${className} ${css.Input}`} 
        placeholder={placeholder}
        onChange={onChange} 
        onBlur={onBlur} 
        onFocus={onFocus}  />
);

export default Input;