import React, { useState } from "react";
import axios from "axios";
import { BASE_URL } from "../constants/ApplicationConstants";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

function LoginScreen() {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const navigate = useNavigate();

	const handleLogin = async (e) => {
		let loginData = {
			email,
			password,
		};
		e.preventDefault();
		let res = await axios.post(`${BASE_URL}/api/v1/user/login`, loginData);
		if (res && res.status == 200) {
			Swal.fire({
				title: "Success!",
				text: "Login Success",
				icon: "success",
				confirmButtonText: "OK",
			}).then(() => {
				localStorage.setItem("user", JSON.stringify(res.data.data));
				navigate("/");
				window.location.reload();
			});
		}
	};
	return (
		<div className="authenticationScreen">
			<div className="container">
				<div className="row">
					<div className="col-md-2"></div>
					<div className="col-md-8">
						<div className="form-bx p-4 mt-5">
							<h1 className="text-center authentication-text">Login here</h1>
							<form onSubmit={handleLogin}>
								<label for="exampleInputEmail1">Email address</label>
								<input
									type="email"
									class="form-control"
									id="exampleInputEmail1"
									aria-describedby="emailHelp"
									placeholder="Enter email"
									onChange={(e) => setEmail(e.target.value)}
								/>
								<label for="exampleInputPassword1">Password</label>
								<input
									type="password"
									class="form-control"
									id="exampleInputPassword1"
									placeholder="Password"
									onChange={(e) => setPassword(e.target.value)}
								/>
								<button type="submit" class="authenticationBtn mt-3">
									Sign in
								</button>
							</form>
						</div>
						{/* <form className="formBx p-4" onSubmit={handleLogin}>
						<h2 className="text-center">Login Here</h2>
						<div class="form-group">
							<label for="exampleInputEmail1">Email address</label>
							<input
								type="email"
								class="form-control"
								id="exampleInputEmail1"
								aria-describedby="emailHelp"
								placeholder="Enter email"
								onChange={(e) => setEmail(e.target.value)}
							/>
							<small id="emailHelp" class="form-text text-muted">
								We'll never share your email with anyone else.
							</small>
						</div>
						<div class="form-group">
							<label for="exampleInputPassword1">Password</label>
							<input
								type="password"
								class="form-control"
								id="exampleInputPassword1"
								placeholder="Password"
								onChange={(e) => setPassword(e.target.value)}
							/>
						</div>

						<button type="submit" class="btn btn-primary">
							Submit
						</button>
					</form> */}
					</div>
					<div className="col-md-2"></div>
				</div>
			</div>
		</div>
	);
}

export default LoginScreen;
