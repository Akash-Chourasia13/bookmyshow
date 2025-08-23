const router = require("express").Router();
const User = require("../models/userModel");

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
	console.log(req.body);

	try {
		const user = await User.findOne({ email: req.body.email });
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
			.json({ success: true, message: "Login Successful", data: user });
	} catch (error) {
		return res
			.status(500)
			.send({ message: "An Error has occured, Please try again later" });
	}
});

module.exports = router;
