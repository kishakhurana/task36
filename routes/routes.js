const express = require("express");
const router = express.Router();

const User = require("../models/User");
const Post = require("../models/Post");

// POST /users
router.post("/users", async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    res.json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /posts
router.post("/posts", async (req, res) => {
  try {
    const post = new Post(req.body);
    await post.save();
    res.json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /posts  ✅ IMPORTANT
router.get("/posts", async (req, res) => {
  try {
    const posts = await Post.find().populate("user");
    res.json(posts); // MUST BE ARRAY
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;