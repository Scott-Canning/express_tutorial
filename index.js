// index.js

// Required External Modules
const express = require('express');
const path = require('path');

// App Variables
const app = express();
const port = process.env.PORT || "8000";


// App Configuration
app.set("views", path.join(__dirname, "views")); // define which directory Express should use as source of view template files
app.set("view engine", "pug"); // define the template engine for Express to use -> pug
app.use(express.static(path.join(__dirname, "public")));

// Routes Definitions
app.get("/", (req, res) => {
    res.render("index", {title: "Home"}); // arg0: render path off of app config; arg1: passes variable w/ definition
    //res.status(200).send("YOO!");
});


// Server Activation
app.listen(port, () => {
    console.log(`Listening to requests on http://localhost:${port}`);
});