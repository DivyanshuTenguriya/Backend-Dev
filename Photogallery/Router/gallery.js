const express = require("express");
const router = express.Router();
const fs = require("fs");
const path = require("path");

router.get("/", (req, res) => {
    
    const files = fs.readdirSync('StaticFiles/images');
    const page =parseInt(req.query.page) ||1;
    const limit=10;
    const totalPage=Math.ceil(files.length/limit);
    const startIndex=(page-1)*limit;
    const endIndex=page*limit;
    const paginatedFiles=files.slice(startIndex,endIndex);
    res.render("gallery", { image: paginatedFiles, currentPage: page, totalPage: totalPage });
});

module.exports = router;
