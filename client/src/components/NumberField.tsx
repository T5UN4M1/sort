import React from "react";

export const NumberField = ({name, label, onChange, value, min, max}: any) => (
    <div className="form-group">
        <label>{label}</label>
        <input type="number" name={name} id={name} onChange={onChange} value={value} min={min} max={max}/>
    </div>
);