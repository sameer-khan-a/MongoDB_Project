import mongoose from "mongoose";
const movieSchema = new mongoose.Schema({
    title: String,
    genre: String,
    year: Number,
    rating: Number
})

const Movie = mongoose.model("Movie", movieSchema);

export default Movie;