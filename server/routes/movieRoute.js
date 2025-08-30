const router = require("express").Router();
const Movie = require("./models/movieModel");

// Add a new movie
router.post("/", async (req, res) => {
	try {
		const newMovie = new Movie(req.body);
		await newMovie.save();
		res.send({ success: true, message: "Movie added successfully" });
	} catch (err) {
		res.send({ success: false, message: err.message });
	}
});

module.exports = router;
