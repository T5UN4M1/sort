import React from "react";

export const RadioFields = ({name, onChange, value,options}: any) => (
    <>
        {
            options.map((option: any, i: number) =>
                <div key={i}>
                    <input type="radio" name={name} id={option.id} value={option.id} onChange={onChange} checked={value === option.id}/>
                    <label htmlFor={option.id}>{option.label}</label>
                </div>
            )
        }
    </>
);