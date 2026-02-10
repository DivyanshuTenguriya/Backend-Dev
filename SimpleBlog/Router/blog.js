const express = require("express");
const router = express.Router();
const data = require("../data");

router.get("/", (req, res) => {
    res.render("blog", { posts: data.posts });
});

router.get("/new", (req, res) => {
    res.render("new");
});

router.post("/new", (req, res) => {
    data.posts.push(req.body);
    res.redirect("/blog");
});

router.get("/:id", (req, res) => {
    res.render("post", { post: data.posts[req.params.id] });
});

module.exports = router;
