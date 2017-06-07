import Express from "express";
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, Route } from 'react-router';
import Home from "./myapp/components/home";
import About from "./myapp/components/about";

const app = Express();

const MyApp = () => {
    return <div>
        <Route path="/" exact component={Home} />
        <Route path="/about" exact component={About} />
    </div>;
};
//Serve static files
app.use(Express.static('public'));

// This is fired every time the server side receives a request
app.get("*",(req, res)=>{
    // This context object contains the results of the render
  const context = {};
  const html = renderToString(
    <StaticRouter location={req.url} context={context}>
        <MyApp />
    </StaticRouter>
  );
  res.status(200).send(renderFullPage(html));
});


function renderFullPage(html) {
  return `
    <!doctype html>
    <html>
      <head>
        <title>React Universal Example</title>
      </head>
      <body>
        <div id="root">${html}</div>
        <script src="vendor.js" async></script>
        <script src="app.js" async></script>
      </body>
    </html>
    `
}

app.listen(8888);
