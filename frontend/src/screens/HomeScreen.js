import React, { useEffect, useState } from "react";
import Post from "../components/Post";
import data from "../data";
import axios from "axios";
import { BASE_URL } from "../constants/ApplicationConstants";
import Loader from "../components/Loader";
import Story from "../components/Story";

function HomeScreen() {
	const [posts, setPosts] = useState([]);
	const [loading, setLoading] = useState(false);
	useEffect(() => {
		setLoading(true);
		const fetchData = async () => {
			const data = await axios.get(`${BASE_URL}/api/v1/user/all-post`);
			setPosts(data.data.data);
			setLoading(false);
		};
		fetchData();
	}, []);
	return (
		<div className="screen container">
			<div className="row">
				<div className="col-md-3 col-0">1</div>
				<div className="col-md-3 col-12">
					<Post post={posts} />
				</div>
				<div className="col-md-3 col-0">3</div>
			</div>
		</div>
	);
}

export default HomeScreen;
