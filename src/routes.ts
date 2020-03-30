import path from "path";
import arrayShuffle from "array-shuffle";

const setSortedNumbers = (lengthArray: number) :number[] => {
    const numbers:number[] = new Array(Number(lengthArray));
    for(let i = 0; i < numbers.length; i++) {
        numbers[i] = i;
    }
    return numbers;
}

const setRoutes = app => {
    app.get("/getNumbers", (req,res) => {
        console.log("Not Implemented yet");
    });
    app.get('/randomly-sorted-numbers/:number', (req, res) => {
        res.send(arrayShuffle(setSortedNumbers(Number(req.params.number))));
    });
    app.get('*', (req,res) => {
        res.sendFile(path.join(__dirname,"/../client/build/index.html"));
    });
};

export {setRoutes};