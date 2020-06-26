import React, {useState} from "react";
import {NumberField} from "./NumberField";
import {RadioFields} from "./RadioFields";
import {Select} from "./Select";
import {mapKebabEntriesToIdsAndLabels} from "../services/util";

const initialNumbersConfig = ['random', 'almost-sorted', 'inverted-sort'].map(mapKebabEntriesToIdsAndLabels);
const sortingAlgorithms = ['selection', 'insertion'].map(mapKebabEntriesToIdsAndLabels);

const initialState = {
    quantity: 100,
    initialNumbersConfig: initialNumbersConfig[1].id,
    sortingAlgorithms: sortingAlgorithms[0].id,
    delay: 25
};


export const SortParamsForm = () => {
    const [state, setState] = useState(initialState);
    const handleChange = (e: any) => setState({...state, [e.target.name]: e.target.value});
    const onClick = () => {};

    return (
        <form method="post" action="#" style={{marginTop: "30px"}}>
            <NumberField name="quantity" label="Quantity "
                         min={50} max={500}
                         onChange={handleChange} value={state.quantity}/>

            <p style={{marginBottom: 0}}>Initial configuration</p>

            <RadioFields name="initialNumbersConfig"
                         onChange={handleChange} value={state.initialNumbersConfig} options={initialNumbersConfig}/>

            <div style={{margin: "20px 0"}}>
                <Select name="sortingAlgorithms" label="Algorithm"
                        onChange={handleChange} value={state.sortingAlgorithms} options={sortingAlgorithms}/>
            </div>

            <NumberField name="delay" label="Delay between changes (ms)" min={0} max={1000}
                         onChange={handleChange} value={state.delay}/>

            <button type="submit" onClick={onClick}>Send</button>
        </form>
    )
};