import express from "express" ;
import morgan from "morgan";
import * as path from "path";
import {setRoutes} from "./routes";

const app = express();
const port = 8080;

app.use(morgan('dev'));
app.use(express.urlencoded());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/build')));
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

setRoutes(app);

app.listen( port, () => {
    console.log( `server started at http://localhost:${ port }` );
} );