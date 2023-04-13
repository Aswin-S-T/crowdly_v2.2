import React from "react";

import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import RegisterScreen from "./screens/RegisterScreen";
import LoginScreen from "./screens/LoginScreen";
import ProfileScreen from "./screens/ProfileScreen";
import HeaderMob from "./components/HeaderMob";
function App() {
	return (
		<BrowserRouter>
			<div>
				<header>
					{/* <Header /> */}
					<HeaderMob />
				</header>
				<main>
					<Routes>
						<Route path="/" element={<HomeScreen />} />
						<Route path="/register" element={<RegisterScreen />} />
						<Route path="/login" element={<LoginScreen />} />
						<Route path="/profile" element={<ProfileScreen />} />
					</Routes>
				</main>
				<footer></footer>
			</div>
		</BrowserRouter>
	);
}

export default App;
