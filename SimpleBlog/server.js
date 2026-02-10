const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.set("views", "./EJS");

app.use(express.urlencoded({ extended: true }));
app.use("/blog", require("./Router/blog"));

app.listen(3005, () => {
    console.log("Q6 running on port 3005");
});
