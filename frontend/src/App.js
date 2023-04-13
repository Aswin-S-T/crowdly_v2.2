import React from "react";
import Header from "./components/Header";
import { AVATAR_IMAGE } from "./constants/contants";

function App() {
	return (
		<div>
			<header>
				<Header />
			</header>
			<main>
				<div className="container">
					<div className="row">
						<div className="col-md-4"></div>
						<div className="col-md-4"></div>
						<div className="col-md-4"></div>
					</div>
				</div>
			</main>
			<footer></footer>
		</div>
	);
}

export default App;
