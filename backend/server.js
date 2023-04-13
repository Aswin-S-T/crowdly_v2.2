const express = require("express");
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Database connection
const db = require("./config/db");
const userRouter = require("./router/users/userRouter");
db.connect();

// Router configuration
app.use("/api/v1/user", userRouter);

app.get("/", (req, res) => {
	res.send("Nodejs is started");
});

app.listen(port, () => {
	console.log(`Server is running at the port ${port}`);
});
