const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.render("contact");
});

router.post("/", (req, res) => {
    const { name, email } = req.body;
    res.send(`Thank you ${name}, we will contact you soon`);
});

module.exports = router;
