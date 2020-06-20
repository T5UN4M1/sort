import arrayShuffle from "array-shuffle";

const setSortedNumbers = (lengthArray: number) :number[] => {
    const numbers:number[] = new Array(Number(lengthArray));
    for(let i = 0; i < numbers.length; i++) {
        numbers[i] = i + 1;
    }
    return numbers;
};

export const RandomNumbersService = {
    randomlySortedNumbers: (amount) => arrayShuffle(setSortedNumbers(Number(amount)))
};