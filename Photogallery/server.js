const express = require("express");
const app = express();

app.set("view engine", "ejs");
const galleryRouter = require("./Router/gallery");

app.use(express.static("StaticFiles"));
app.use("/gallery",galleryRouter);

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
