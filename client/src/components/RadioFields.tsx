import React from "react";

export const RadioFields = ({name, onChange, values}: any) => (
    <>
        {
            values.map((value: any, i: number) =>
                <div key={i}>
                    <input type="radio" name={name} id={value.id} value={value.id} onChange={onChange}/>
                    <label htmlFor={value.id}>{value.label}</label>
                </div>
            )
        }
    </>
);