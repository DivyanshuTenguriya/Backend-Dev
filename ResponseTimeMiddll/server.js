const express = require("express");
const app = express();
const responseTime = require("./MiddleWare/responseTime.js");

app.use(responseTime);

app.get("/", (req, res) => {
    res.send("Response Time Middleware Working");
});

app.listen(3001, () => {
    console.log("Q2 running on port 3001");
});
