import React from "react";
import { Route, Switch, Redirect } from 'react-router';
import { Link } from 'react-router-dom';
import routes from "./Routes";

const RedirectWithStatus = ({ from, to, status }) => (
  <Route render={({ staticContext }) => {
    // there is no `staticContext` on the client, so
    // we need to guard against that here
    if (staticContext)
      staticContext.status = status
    return <Redirect from={from} to={to}/>
  }}/>
);

const App = () => {
    return (
        <div>
            <Link to={"/"}>Home</Link><br/>
            <Link to={"/about"}>About</Link><br/>
            <Link to={"/courses"}>courses redirect</Link>
            <Switch>
                <RedirectWithStatus
                  status={301}
                  from="/users"
                  to="/"
                />
                <RedirectWithStatus
                  status={302}
                  from="/courses"
                  to="/about"
                />
                {
                    routes.map( route => (
                        <Route {...route} key={route.name}/>
                    ))
                }
            </Switch>
        </div>
    );
};

export default App;
