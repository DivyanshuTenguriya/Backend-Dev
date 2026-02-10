const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

router.get("/", (req, res) => {
    
    const files = fs.readdirSync('StaticFiles/images');
    console.log(files)
    res.render("gallery", { images: files });
});

module.exports = router;
