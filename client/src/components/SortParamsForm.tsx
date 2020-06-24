import React from "react";
import {NumberField} from "./NumberField";
import {RadioField} from "./RadioField";
import {Select} from "./Select";
import {OptionField} from "./Option";


const onChange = () => {

};

const onChangeRadio = () => {

};

const onClick = () => {

};


const sortAlgorithms = [
    {name: 'selection', label: 'Selection'}
];

const numbersConfigurations = [
    {name: 'random', label: 'Randomly sorted'},
    {name: 'almost-sorted', label: 'Almost sorted'},
    {name: 'inverted-sort', label: 'Inverted sort'}
];
const options = () => (
    <OptionField value="insertion">Insertion</OptionField>
);

export const Form = () => (
    <form method="post" action="#">
        <NumberField name="quantity" label="quantity" onChange={onChange} value={null} min={50} max={500}/>
        <p>Initial configuration</p>
        <RadioField name="initial-numbers-configuration" id="random" onChange={onChangeRadio} value="random"/>
        <RadioField name="initial-numbers-configuration" id="almost-sorted" onChange={onChangeRadio}
                    value="almost-sorted"/>
        <RadioField name="initial-numbers-configuration" id="inverted-sort" onChange={onChangeRadio}
                    value="inverted-sort"/>
        <Select name="algorithm" label="Algorithm" option={options}/>
        <button type="submit" onClick={onClick}>Send</button>
    </form>
);
