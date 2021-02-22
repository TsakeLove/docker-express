const express = require("express");
const app = express();
const os = require("os");
const expressLayouts = require('express-ejs-layouts');

app.set('view engine', 'ejs');
app.set('layout extractScripts', true)
app.set('layout extractStyles', true)
app.use(expressLayouts);

const port = process.env.PORT || 8080;
const message = process.env.MESSAGE || "Have a blast learning Docker!";

app.get('/', function (req, res) {
    res.render('home', {
        message: message,
        hostName: os.hostname()
    });
});
app.listen(port, ()=> {
    console.log("Listening on: http://%s:%s", os.hostname(), port);
});
