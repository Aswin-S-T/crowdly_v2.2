import React from "react";
import TelegramIcon from "@mui/icons-material/Telegram";

function HeaderMob() {
	return (
		<div className="headerMob container">
			<h4 className="mt-3" style={{ fontWeight: 600, color: "blue" }}>
				Crowdly
			</h4>
			<div>
				<TelegramIcon className="mt-3" />
			</div>
		</div>
	);
}

export default HeaderMob;
