import React from "react";
import {NumberField} from "./NumberField";
import {RadioFields} from "./RadioFields";
import {Select} from "./Select";
import {mapKebabEntriesToIdsAndLabels} from "../services/util";

const onChange = () => {
};

const onChangeRadio = () => {
};

const onClick = () => {
};

const radios = ["random", "almost-sorted", "inverted-sort"].map(mapKebabEntriesToIdsAndLabels);

const options = ["selection"].map(mapKebabEntriesToIdsAndLabels);

export const SortParamsForm = () => (
    <form method="post" action="#" style={{marginTop: "30px"}}>
        <NumberField name="quantity" label="Quantity " onChange={onChange} value="" min={50} max={500}/>

        <p style={{marginBottom: 0}}>Initial configuration</p>

        <RadioFields name="initial-numbers-configuration" onChange={onChangeRadio} values={radios}/>

        <div style={{margin: "20px 0"}}>
            <Select name="algorithm" label="Algorithm" options={options}/>
        </div>

        <NumberField name="delay" label="Delay between changes (ms)" onChange={onChange} value="" min={0} max={1000}/>

        <button type="submit" onClick={onClick}>Send</button>
    </form>
);