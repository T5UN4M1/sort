import axios from 'axios';

const apiRoot = "http://localhost:8080/";

export const getRandomlySortedNumbers = (amount:number) => axios.get(`${apiRoot}randomly-sorted-numbers/${amount}`);