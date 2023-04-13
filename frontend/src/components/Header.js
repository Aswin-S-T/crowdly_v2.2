import React from "react";
import { AVATAR_IMAGE } from "../constants/contants";

function Header() {
	return (
		<div>
			<nav class="navbar navbar-expand-lg navbar-light">
				<a class="navbar-brand text-white" href="#">
					Crowdly
				</a>
				<button
					class="navbar-toggler"
					type="button"
					data-toggle="collapse"
					data-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span class="navbar-toggler-icon"></span>
				</button>
				{/* <div>
						<input type="text" className="form-control" />
					</div> */}
				<div class="collapse navbar-collapse" id="navbarSupportedContent">
					<ul class="navbar-nav mr-auto"></ul>
					<form class="form-inline my-2 my-lg-0">
						<ul class="nav justify-content-end">
							<li class="nav-item">
								<a class="nav-link active" href="#">
									<i className="fa fa-home" style={{ fontSize: "25px" }}></i>
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">
									<i className="fa fa-comment" style={{ fontSize: "18px" }}></i>
								</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#">
									<i className="fa fa-bell" style={{ fontSize: "18px" }}></i>
								</a>
							</li>
							<li class="nav-item dropdown">
								<a
									class="nav-link dropdown-toggle"
									href="#"
									id="navbarDropdown"
									role="button"
									data-toggle="dropdown"
									aria-haspopup="true"
									aria-expanded="false"
								>
									<img src={AVATAR_IMAGE} alt="Avatar" class="avatar" />
								</a>
								<div class="dropdown-menu" aria-labelledby="navbarDropdown">
									<a class="dropdown-item" href="#">
										Profile
									</a>

									<div class="dropdown-divider"></div>
									<a class="dropdown-item" href="#">
										Logout
									</a>
								</div>
							</li>
						</ul>
					</form>
				</div>
			</nav>
		</div>
	);
}

export default Header;
