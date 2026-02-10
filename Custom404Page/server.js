const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.set("views", "./EJS");

app.use((req, res) => {
    res.status(404).render("404");
});

app.listen(3003, () => {
    console.log("Q4 running on port 3003");
});
