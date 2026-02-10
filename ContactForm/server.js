const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.set("views", "./EJS");

app.use(express.urlencoded({ extended: true }));
app.use("/contact", require("./Router/contact"));

app.listen(3002, () => {
    console.log("Q3 running on port 3002");
});
