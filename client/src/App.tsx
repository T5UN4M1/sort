import React from 'react';
import "./style.scss";
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom';
import {Home} from "./components/Home";

function App() {
    return (
        <>
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" render={() => (<Redirect to="/home"/>)}/>
                    <Route path="/home" component={Home}/>
                </Switch>
            </BrowserRouter>
        </>
    );
}

export default App;
