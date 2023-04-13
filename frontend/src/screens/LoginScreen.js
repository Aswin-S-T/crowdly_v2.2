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
								<label htmlFor="exampleInputEmail1">Email address</label>
								<input
									type="email"
									className="form-control"
									id="exampleInputEmail1"
									aria-describedby="emailHelp"
									placeholder="Enter email"
									onChange={(e) => setEmail(e.target.value)}
								/>
								<label htmlFor="exampleInputPassword1">Password</label>
								<input
									type="password"
									className="form-control"
									id="exampleInputPassword1"
									placeholder="Password"
									onChange={(e) => setPassword(e.target.value)}
								/>
								<button type="submit" className="authenticationBtn mt-3">
									Sign in
								</button>
							</form>
						</div>
					</div>
					<div className="col-md-2"></div>
				</div>
			</div>
		</div>
	);
}

export default LoginScreen;
