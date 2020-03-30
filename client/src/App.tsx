import React from 'react';
import "./style.scss";
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import {Sorter} from "./Sorter";
function App() {
  return (
      <>
          <BrowserRouter>
              <Switch>
                  <Route exact path="/" render={() => (<Redirect to="/home" />)} />
                  <Route path="/home"  component={Sorter}/>
              </Switch>
          </BrowserRouter>
      </>
  );
}

export default App;
