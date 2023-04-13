import * as React from "react";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ArchiveIcon from "@mui/icons-material/Archive";
import Paper from "@mui/material/Paper";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import PeopleIcon from "@mui/icons-material/People";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import HeaderMob from "./components/HeaderMob";
import HomeScreen from "./screens/HomeScreen";
import ProfileScreen from "./screens/ProfileScreen";
import NotificationsIcon from "@mui/icons-material/Notifications";
import NotificationScreen from "./screens/NotificationScreen";
import ChatScreen from "./screens/ChatScreen";

import { IconButton, Menu, MenuItem } from "@material-ui/core";
import LoginScreen from "./screens/LoginScreen";
import { BrowserRouter } from "react-router-dom";

function refreshMessages() {
	const getRandomInt = (max) => Math.floor(Math.random() * Math.floor(max));

	return Array.from(new Array(50)).map(
		() => messageExamples[getRandomInt(messageExamples.length)]
	);
}

export default function FixedBottomNavigation() {
	const [value, setValue] = React.useState(0);
	const ref = React.useRef(null);
	const [messages, setMessages] = React.useState(() => refreshMessages());
	const [loggedIn, setLoggedIn] = React.useState(false);

	React.useEffect(() => {
		ref.current.ownerDocument.body.scrollTop = 0;
		setMessages(refreshMessages());
	}, [value, setMessages]);

	React.useEffect(() => {
		let user = localStorage.getItem("user");
		if (user) {
			setLoggedIn(true);
		}
		if (!user) {
			setValue(5);
		}
	}, []);

	return (
		<BrowserRouter>
			<Box sx={{ pb: 7 }} ref={ref}>
				<CssBaseline />
				{loggedIn && <HeaderMob className="header" />}

				{value === 0 ? (
					<>
						<HomeScreen />
					</>
				) : value == 1 ? (
					<>1</>
				) : value == 2 ? (
					<>
						<ChatScreen />
					</>
				) : value == 3 ? (
					<>
						<NotificationScreen />
					</>
				) : value == 4 ? (
					<>
						<ProfileScreen />
					</>
				) : (
					<>
						<LoginScreen />
					</>
				)}
				{/* <List style={{ top: "100px", position: "absolute" }}>
				{messages.map(({ primary, secondary, person }, index) => (
					<ListItem button key={index + person}>
						<ListItemAvatar>
							<Avatar alt="Profile Picture" src={person} />
						</ListItemAvatar>
						<ListItemText primary={primary} secondary={secondary} />
					</ListItem>
				))}
			</List> */}
				{loggedIn && (
					<Paper
						sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}
						elevation={3}
					>
						<BottomNavigation
							showLabels
							value={value}
							onChange={(event, newValue) => {
								setValue(newValue);
							}}
						>
							<BottomNavigationAction label="Home" icon={<HomeIcon />} />
							<BottomNavigationAction label="People" icon={<PeopleIcon />} />
							<BottomNavigationAction
								label="Chat"
								icon={<ChatBubbleOutlineIcon />}
							/>

							<BottomNavigationAction
								label="Notification"
								icon={<NotificationsIcon />}
							/>
							<BottomNavigationAction
								// style={{ border: "none" }}
								// class="dropdown-toggle"
								// // type="button"
								// id="dropdownMenuButton"
								// data-toggle="dropdown"
								// aria-haspopup="true"
								// aria-expanded="false"
								label="Account"
								icon={<AccountCircleIcon />}
							/>
							{/* <div class="dropdown">
						<button
							class="btn btn-secondary dropdown-toggle"
							type="button"
							id="dropdownMenuButton"
							data-toggle="dropdown"
							aria-haspopup="true"
							aria-expanded="false"
						>
							Dropdown button
						</button>
						<div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
							<a class="dropdown-item" href="#">
								Action
							</a>
							<a class="dropdown-item" href="#">
								Another action
							</a>
							<a class="dropdown-item" href="#">
								Something else here
							</a>
						</div>
					</div> */}
						</BottomNavigation>
					</Paper>
				)}
			</Box>
		</BrowserRouter>
	);
}

const messageExamples = [
	{
		primary: "Brunch this week?",
		secondary:
			"I'll be in the neighbourhood this week. Let's grab a bite to eat",
		person: "/static/images/avatar/5.jpg",
	},
	{
		primary: "Birthday Gift",
		secondary: `Do you have a suggestion for a good present for John on his work
      anniversary. I am really confused & would love your thoughts on it.`,
		person: "/static/images/avatar/1.jpg",
	},
	{
		primary: "Recipe to try",
		secondary:
			"I am try out this new BBQ recipe, I think this might be amazing",
		person: "/static/images/avatar/2.jpg",
	},
	{
		primary: "Yes!",
		secondary: "I have the tickets to the ReactConf for this year.",
		person: "/static/images/avatar/3.jpg",
	},
	{
		primary: "Doctor's Appointment",
		secondary:
			"My appointment for the doctor was rescheduled for next Saturday.",
		person: "/static/images/avatar/4.jpg",
	},
	{
		primary: "Discussion",
		secondary: `Menus that are generated by the bottom app bar (such as a bottom
      navigation drawer or overflow menu) open as bottom sheets at a higher elevation
      than the bar.`,
		person: "/static/images/avatar/5.jpg",
	},
	{
		primary: "Summer BBQ",
		secondary: `Who wants to have a cookout this weekend? I just got some furniture
      for my backyard and would love to fire up the grill.`,
		person: "/static/images/avatar/1.jpg",
	},
];
