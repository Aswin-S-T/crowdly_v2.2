const mongoose = require("mongoose");
const postSchema = new mongoose.Schema(
	{
		caption: { type: String },
		image: { type: String },
		about: { type: String },
		like: { type: Number, default: 0 },
		comment: { type: Number, default: 0 },
		share: { type: Number, default: 0 },
		time: { type: String },
	},
	{
		timestamps: true,
	}
);

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
