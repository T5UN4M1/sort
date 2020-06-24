import arrayMove from 'array-move';

const getLowestIndex = (numbers : number[],step: number) => {
    let lowest = step;
    for(let i=step;i<numbers.length;++i){
        if(numbers[i] < numbers[lowest]){
            lowest = i;
        }
    }
    return lowest;
};
export const selectionSort = (numbers: number[], step: number) => {
    const lowestIndex = getLowestIndex(numbers,step);
    return arrayMove(numbers,lowestIndex,step);
};