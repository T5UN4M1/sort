import path from "path";
import {RandomNumbersController} from "./controller/RandomNumbersController";

const setRoutes = app => {
    app.get("/getNumbers", (req,res) => {
        console.log("Not Implemented yet");
    });
    app.get('/randomly-sorted-numbers/:number', RandomNumbersController.randomlySortedNumbers);
    app.get('*', (req,res) => {
        res.sendFile(path.join(__dirname,"/../client/build/index.html"));
    });
};

export {setRoutes};