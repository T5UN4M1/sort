import * as path from "path";


const setRoutes = app => {
    app.get("/getNumbers", (req,res) =>{
        console.log("Not Implemented yet");
    });
    app.get('*', (req,res) =>{
        res.sendFile(path.join(__dirname,"/../client/build/index.html"));
    });
};

export {setRoutes};