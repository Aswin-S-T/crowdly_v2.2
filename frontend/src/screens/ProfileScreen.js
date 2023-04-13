import axios from "axios";
import React, { useEffect, useState } from "react";
import AddPost from "../components/AddPost";
import Post from "../components/Post";
import { BASE_URL } from "../constants/ApplicationConstants";
import Switch from "@mui/material/Switch";

function ProfileScreen() {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(false);
	const [userDetails, setUserDetails] = useState("");

	const [checked, setChecked] = React.useState(true);

	const handleChange = (event) => {
		setChecked(event.target.checked);
	};
	useEffect(() => {
		const fetchData = async () => {
			const res = JSON.parse(localStorage.getItem("user"));
			const data = await axios.get(
				`${BASE_URL}/api/v1/user/details/${res._id}`
			);

			setUserDetails(data.data.data);
		};
		fetchData();
	}, []);
	useEffect(() => {
		setLoading(true);
		const res = JSON.parse(localStorage.getItem("user"));

		const fetchData = async () => {
			const data = await axios.get(
				`${BASE_URL}/api/v1/user//my-post/${res._id}`
			);
			setPosts(data.data.data);
			setLoading(false);
		};
		fetchData();
	}, []);
	return (
		<div className="screen">
			<div className="container">
				<div className="text-center">
					<img
						src="https://wallpapercave.com/wp/wp7039397.jpg"
						className="profile rounded-circle text-center"
					/>
				</div>
				<div style={{ float: "right" }}>
					<i
						style={{ fontSize: "20px" }}
						className="fa fa-gear"
						data-toggle="modal"
						data-target="#settings"
					></i>

					<div
						class="modal fade"
						id="settings"
						tabindex="-1"
						role="dialog"
						aria-labelledby="exampleModalCenterTitle"
						aria-hidden="true"
					>
						<div class="modal-dialog modal-dialog-centered" role="document">
							<div class="modal-content">
								<div class="modal-header">
									<h5 class="modal-title" id="exampleModalLongTitle">
										Settings
									</h5>
									<button
										type="button"
										class="close"
										data-dismiss="modal"
										aria-label="Close"
									>
										<span aria-hidden="true">&times;</span>
									</button>
								</div>
								<div class="modal-body">
									<form>
										<div class="form-group ">
											<div className="profIm">
												<img
													src="https://wallpapercave.com/wp/wp7039397.jpg"
													className="profile rounded-circle"
												/>
											</div>
											<label for="inputEmail3" class="col-sm-2 col-form-label">
												Username
											</label>
											<div class="col-sm-10">
												<input
													type="email"
													class="form-control"
													id="inputEmail3"
													placeholder="Email"
												/>
											</div>
										</div>
										<div class="form-group row">
											<label
												for="inputPassword3"
												class="col-sm-2 col-form-label"
											>
												About
											</label>
											<div class="col-sm-10">
												<textarea
													type="text"
													class="form-control"
													id="inputPassword3"
													placeholder="About...."
												/>
											</div>
										</div>
										<div className="row p-4">
											<p>Private Account</p>
											<Switch
												checked={checked}
												onChange={handleChange}
												inputProps={{ "aria-label": "controlled" }}
											/>
										</div>
										<div class="form-group row">
											<div class="col-sm-10">
												<button type="submit" class="authenticationBtn">
													Save
												</button>
											</div>
										</div>
									</form>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="text-center">
					<h4>{userDetails?.username}</h4>
					<p>{userDetails?.about ? userDetails.about : ""}</p>
				</div>
				<div className="container-fluid">
					<div className="post_actions">
						<div>
							{userDetails?.follower ? userDetails?.follower : 0} Followers
						</div>
						<div>
							{userDetails?.following ? userDetails?.following : 0} Following
						</div>
						<div>{posts && posts.length > 0 ? posts.length : 0} Post</div>
					</div>
				</div>
				<hr />
				{/* <button className="followbtn">Add image</button> */}
				<AddPost />
				{/* <div className="row">
					<div className="col-md-4">1</div>
					<div className="col-md-4">
						<div
							className="post_section p-2"
							style={{ top: "-40px", position: "relative" }}
						>
							<Post post={posts} />
						</div>
					</div>
					<div className="col-md-4">3</div>
				</div> */}
				<div className="row">
					<div className="col-md-3 col-0">1</div>
					<div className="col-md-3 col-12">
						<Post post={posts} />
					</div>
					<div className="col-md-3 col-0">3</div>
				</div>
			</div>
		</div>
	);
}

export default ProfileScreen;
