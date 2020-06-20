import React, {useState,useEffect} from 'react';
import {Bar, BarChart, Tooltip,} from 'recharts';
import {getRandomlySortedNumbers} from "../services/get-number-service";
import {selectionSort} from "../services/sort-algorithms/selection-sort";

export const Sorter = () => {
    const initialData: object[] = [];
    const [data, setData] = useState(initialData);
    
    useEffect(() => {
        getRandomlySortedNumbers(100).then(numbers => {
            const convertRawData = (numbers: number[]) => numbers.map((entry: number) => ({uv: entry}));
            const nextStep = (numbers:  number[], step:number) => {
                let arr = selectionSort(numbers,step);
                setData(convertRawData(arr));
                if(step < numbers.length-1) {
                    setTimeout(nextStep,100,arr,++step);
                }
            };
            setData(convertRawData(numbers.data));
            setTimeout(nextStep,100,numbers.data,0)
        });
    },[]);
    return (
        <div>
            <BarChart width={1890} height={998} data={data}>
                <Tooltip/>
                <Bar dataKey="uv" fill="#fff"/>

            </BarChart>
        </div>
    );
};
