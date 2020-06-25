import React from "react";
import {OptionField} from "./Option";

export const Select = ({name, label, options}: any) => (
    <div>
        <label>{label}</label><br/>
        <select name={name} id={name}>
            {options.map((option: string, i: number) => <OptionField value={option.toLowerCase()} key={i}>{option}</OptionField>)}
        </select>
    </div>
);