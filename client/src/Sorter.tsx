import React from 'react';
import {
    BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
} from 'recharts';

const data = [
    {
        uv: 1
    },
    {
        uv: 2
    },
    {
        uv: 3
    },
    {
        uv: 4
    },
    {
        uv: 5
    },
    {
        uv: 6
    },
    {
        uv: 7
    },
];
export const Sorter = () => {

    return (
        <>
            <BarChart width={1800} height={1000} data={data}>
                <Tooltip />
                <Bar dataKey="uv" fill="#fff" />

            </BarChart>
        </>
    );
};
