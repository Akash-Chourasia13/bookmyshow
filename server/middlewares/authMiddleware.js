const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
	try {
		const authHeader = req.header("Authorization");
		if (!authHeader) {
			return res
				.status(401)
				.send({ message: "Access Denied. No token provided." });
		}

		// format: "Bearer <token>"
		const token = authHeader.split(" ")[1];
		if (!token) {
			return res
				.status(401)
				.send({ message: "Access Denied. Invalid token format." });
		}

		const decoded = jwt.verify(token, process.env.jwt_secret);
		req.user = decoded; // ✅ safer than modifying req.body
		next();
	} catch (error) {
		return res.status(400).send({ message: "Invalid token." });
	}
};
