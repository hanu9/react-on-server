import React from "react";
import { Route, Switch } from 'react-router';
import routes from "./Routes";

const App = () => {
    return (
        <Switch>
        {
            routes.map( route => (
                <Route {...route}/>
            ))
        }
        </Switch>
    );
};

export default App;
