import React from "react";

export const Select = ({name, label, options}: any) => (
    <div>
        <label>{label}</label>
        <select name={name} id={name}>
            {options}
        </select>
    </div>
);