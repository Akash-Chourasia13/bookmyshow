const express = require("express");
require("dotenv").config();
const dbConfig = require("./config/dbconfig");
const app = express();
const port = 8082;
const userRoute = require("./routes/userRoutes");
const movieRoute = require("./routes/movieRoute");
app.use(express.json());
app.use("/api/user", userRoute);
app.use("/api/movie", movieRoute);

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
