import React from "react";
import data from "../data";
import Avatar from "@mui/material/Avatar";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ModeCommentIcon from "@mui/icons-material/ModeComment";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

function Post(props) {
	return (
		<div>
			{props.post.map((post, index) => (
				<div className="">
					<div className=" p-2" key={index}>
						<div className="post_actions">
							<div>
								<Avatar alt="Travis Howard" src={post.image} />
							</div>
							<div>
								<p style={{ color: "#111" }}>
									{post.name ? post.name : "Dulquer Salman"}
								</p>
							</div>
							<div>
								{/* <i className="fa fa-ellipsis-v"></i> */}
								<button className="followbtn">Follow +</button>
							</div>
						</div>

						<div className="post_image mt-4">
							<div>
								<img src={post.image} className="w-100" />
							</div>
						</div>
						<hr />
						<div className="post_actions">
							<div>
								{post.like}
								<ThumbUpIcon className="mt-2" />
							</div>
							<div>
								{post.comment}
								<ModeCommentIcon />
							</div>
							<div>
								{post.share}
								<BookmarkBorderIcon />
							</div>
						</div>
					</div>
					<hr />
				</div>
			))}
		</div>
	);
}

export default Post;
