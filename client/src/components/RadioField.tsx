import React from "react";

export const RadioField = ({name, label, onChange, value}: any) => (
    <div>
        <input type="radio" name={name} id={value} onChange={onChange} value={value}/><label>{label}</label>
    </div>
);