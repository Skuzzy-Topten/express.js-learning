const express = require("express");

const app = express();

const port = 3000;

// route
app.get('/', (req, res) => {
    res.send("Welcome to Express.js");
});

// route parameters
app.get("/user/:name", (req, res) => {
    res.send(`Hello ${req.params.name}`);
});

// query parameters
app.get("/search", (req, res) => {
    const keyword = req.query.keyword;
    res.send(`Searching for: ${keyword}`);
});

// run express server
app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});