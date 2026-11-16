const express = require("express");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
    res.send("Hello Twitter!");
});

app.get("/login", (req, res) => {
    res.send("<h1>Hello Login!</h1>");
});

app.get("/youtube", (req, res) => {
    res.send("<h1>Hello YouTube!</h1>");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});