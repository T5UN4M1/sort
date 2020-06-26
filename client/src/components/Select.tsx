import React from "react";
import {OptionField} from "./Option";

export const Select = ({name, label, options}: any) => (
    <div>
        <label>{label}</label><br/>
        <select name={name} id={name}>
            {options.map((option: any, i: number) => <OptionField value={option.id} key={i}>{option.label}</OptionField>)}
        </select>
    </div>
);