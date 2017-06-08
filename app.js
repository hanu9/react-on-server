import Express from "express";
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter, Route } from 'react-router';
import App from "./shared/App";

const app = Express();

//Serve static files
app.use(Express.static('public'));

// This is fired every time the server side receives a request
app.get("*",(req, res)=>{
    // This context object contains the results of the render
  console.log(req.url);
  const context = {};
  const html = renderToString(
    <StaticRouter location={req.url} context={context}>
        <App />
    </StaticRouter>
  );
    if (context.url) {
      // can use the `context.status` that
      // we added in RedirectWithStatus
      res.redirect(context.status, context.url);
  }else{
      res.status(200).send(renderFullPage(html));
  }
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
        <script src="/vendor.js" async></script>
        <script src="/app.js" async></script>
      </body>
    </html>
    `
}

app.listen(8888);
