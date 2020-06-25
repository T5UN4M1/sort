import React from "react";
import {NumberField} from "./NumberField";
import {RadioFields} from "./RadioFields";
import {Select} from "./Select";

const onChange = () => {
};

const onChangeRadio = () => {
};

const onClick = () => {
};

const radios = ["Random", "Almost sorted", "Inverted sort"];

const options = ["Insertion", "Other"];

export const SortParamsForm = () => (
    <form method="post" action="#" style={{marginTop: "30px"}}>
        <NumberField name="quantity" label="Quantity " onChange={onChange} value="" min={50} max={500}/>
        <p style={{marginBottom: 0}}>Initial configuration</p>
        <RadioFields name="initial-numbers-configuration" onChange={onChangeRadio} values={radios}/>
        <div style={{margin: "20px 0"}}>
            <Select name="algorithm" label="Algorithm" options={options}/>
        </div>
        <button type="submit" onClick={onClick}>Send</button>
    </form>
);