const router = require("express").Router();
const Movie = require("../models/movieModel");

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

router.get("/", async (req, res) => {
	try {
		const allMovies = await Movie.find({});
		res.send({
			success: true,
			message: "All movies have been fetched",
			data: allMovies,
		});
	} catch (err) {
		res.send({ success: false, message: err.message });
	}
});

// Update movie details
router.put("/:id", async (req, res) => {
	try {
		const dataToBeUpdated = req.body;
		const { movieId } = dataToBeUpdated;
		const movie = await Movie.findByIdAndUpdate(movieId, dataToBeUpdated, {
			new: true,
		});
		res.send({
			success: true,
			message: "Movie details updated successfully",
			data: movie,
		});
	} catch (err) {
		res.send({ success: false, message: err.message });
	}
});

// delete a movie
router.delete("/", async (req, res) => {
	try {
		const { movieId } = req.body;
		await Movie.findByIdAndDelete(movieId);
		res.send({ success: true, message: "Movie deleted successfully" });
	} catch (err) {
		res.send({ success: false, message: err.message });
	}
});

module.exports = router;
