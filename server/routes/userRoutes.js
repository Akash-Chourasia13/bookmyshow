const router = require("express").Router();
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const authMiddleware = require("../middlewares/authMiddleware");

router.post("/register", async (req, res) => {
	console.log(req.body);

	try {
		const userExists = await User.findOne({ email: req.body.email });
		if (userExists) {
			return res
				.status(400)
				.json({ success: false, message: "User already exists" });
		}
		const newUser = new User(req.body);
		await newUser.save();
		// Redirect to login page after successful registration or send a success response
		return res
			.status(201)
			.json({ success: true, message: "User registered successfully" });
	} catch (error) {
		return res.status(500).send({ message: "Error registering user", error });
	}
});

router.post("/login", async (req, res) => {
	try {
		const user = await User.findOne({ email: req.body.email });
		const token = jwt.sign({ userId: user._id }, process.env.jwt_secret, {
			expiresIn: "1d",
		});
		if (!user) {
			return res.status(400).json({
				success: false,
				message: "Invalid Credentials",
			});
		}
		if (user.password !== req.body.password) {
			return res
				.status(400)
				.json({ success: false, message: "Invalid Credentials" });
		}
		return res
			.status(200)
			.json({ success: true, message: "Login Successful", data: token });
	} catch (error) {
		return res
			.status(500)
			.send({ message: "An Error has occured, Please try again later" });
	}
});

router.get("/current", authMiddleware, async (req, res) => {
	try {
		const user = await User.findById(req.user.userId).select("-password");
		if (!user) {
			return res
				.status(404)
				.json({ success: false, message: "User not found" });
		} else {
			return res
				.status(200)
				.json({ success: true, message: "User found", data: user });
		}
	} catch (error) {
		console.log(error);
		return res
			.status(500)
			.send({ message: "An Error has occured, Please try again later" });
	}
});

module.exports = router;
