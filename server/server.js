const express = require("express");
require("dotenv").config();
const dbConfig = require("./config/dbconfig");
const app = express();
const port = 8082;

app.listen(port, () => {
	console.log(`Server is running on http://localhost:${port}`);
});
