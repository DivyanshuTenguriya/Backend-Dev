const express = require("express");
const logger = require("./Middleware/Logging");
const employeeRoutes = require("./Routing/routes");

const app = express();

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
const methodOverride = require("method-override");
app.use(methodOverride("_method"));


app.use(express.json());
app.use(logger);


app.use("/employees", employeeRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

module.exports = app;
