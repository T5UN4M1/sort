import React, {useEffect, useState} from 'react';
import {Bar, BarChart, Tooltip} from 'recharts';
import {getRandomlySortedNumbers} from "../services/get-number-service";
import {selectionSort} from "../services/sort-algorithms/selection-sort";

export const Sorter = () => {
    const initialData: object[] = [];
    const [data, setData] = useState(initialData);
    const DELAY = 25;

    useEffect(() => {
        getRandomlySortedNumbers(100).then(numbers => {
            const convertRawData = (numbers: number[]) => numbers.map((entry: number) => ({uv: entry}));
            const nextStep = (numbers: number[], step: number) => {
                const arr = selectionSort(numbers, step);
                setData(convertRawData(arr));
                if (step < numbers.length - 1) {
                    setTimeout(nextStep, DELAY, arr, ++step);
                }
            };
            setData(convertRawData(numbers.data));
            setTimeout(nextStep, DELAY, numbers.data, 0);
        });
    }, []);

    const CustomTooltip = (props: any) =>
        props.active ? (
            <div className="tooltip">
                Value : {props.payload[0].value}
            </div>
        ) : null;

    return (
        <div>
            <BarChart width={1890} height={998} data={data}>
                <Tooltip content={<CustomTooltip/>}/>
                <Bar dataKey="uv" fill="#fff"/>
            </BarChart>
        </div>
    );
};
