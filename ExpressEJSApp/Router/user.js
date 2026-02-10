const express = require("express");
const router = express.Router();
const data = require("../data");

router.get("/", (req, res) => {
    const { name } = req.query;

    const result = name
        ? data.users.filter(u =>
            u.name.toLowerCase().includes(name.toLowerCase()))
        : data.users;

    res.json(result);
});

module.exports = router;
