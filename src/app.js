const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Main page");
});

app.all("*", (req, res) => {
    res.send("Other page");
});

app.listen(8000);
