import React from "react";

export const RadioFields = ({name, onChange, values}: any) => (
    <>
        {values.map((value: string, i: number) =>
            <div key={i}>
                <input type="radio" name={name} id={value.toLowerCase().replace(' ', '-')} onChange={onChange} value={value.toLowerCase().replace(' ', '-')}/><label htmlFor={value.toLowerCase().replace(' ', '-')}>{value}</label>
            </div>
        )}
    </>
);