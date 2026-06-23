const express = require("express");

const path = require("path");

const app = express();

const port = 3000;

// serve static files
app.use(express.static("public"));
// middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}))

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
});

// route
app.get('/', (req, res) => {
    // res.send("Welcome to Express.js");
    
    // serve html file using route
    res.sendFile(path.join(__dirname, "views", "index.html"));
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