import React from "react";
<<<<<<< HEAD

export const Select = ({name, label, options}: any) => (
    <div>
        <label>{label}</label>
        <select name={name} id={name}>
            {options}
=======
import {OptionField} from "./Option";

export const Select = ({name, label, options}: any) => (
    <div>
        <label>{label}</label><br/>
        <select name={name} id={name}>
            {options.map((option: string, i: number) => <OptionField value={option.toLowerCase()} key={i}>{option}</OptionField>)}
>>>>>>> select-component
        </select>
    </div>
);