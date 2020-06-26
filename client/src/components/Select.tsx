import React from "react";
import {OptionField} from "./Option";

export const Select = ({name, label, value,onChange, options}: any) => (
    <div>
        <label>{label}</label><br/>
        <select name={name} id={name} value={value} onChange={onChange}>
            {
                options.map((option: any, i: number) =>
                    <OptionField value={option.id} key={i}>{option.label}</OptionField>
                )
            }
        </select>
    </div>
);