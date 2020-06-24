import React, {useState} from 'react';
import {Sorter} from "./Sorter";


export const Home = () => {
    const [isDisplayingGraph,setDisplayGraph] = useState(false);

    return isDisplayingGraph ? <Sorter/> : <button onClick={() => setDisplayGraph(true)}>GO</button>;
};