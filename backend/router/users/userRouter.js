const express = require("express");
const { getAllPost } = require("../../controllers/post/postController");
const { register, login } = require("../../controllers/users/userController");
const data = require("../../data");
const { verifyToken } = require("../../middlewares/auth");
const Post = require("../../models/post/postSchema");
const userRouter = express.Router();

userRouter.get("/", async (req, res) => {
	await Post.create(data.posts);
	res.send("USER ROUTER CALLED");
});

userRouter.post("/register", async (req, res) => {
	const data = req.body;
	register(data).then((response) => {
		res.send(response);
	});
});

userRouter.post("/login", async (req, res) => {
	const data = req.body;
	login(data).then((response) => {
		res.send(response);
	});
});

userRouter.get("/all-post", async (req, res) => {
	getAllPost().then((response) => {
		res.send(response);
	});
});

module.exports = userRouter;
