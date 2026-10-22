import Movie from "../models/Movie.js";
const getAllMovies = async (req, res) => {
    const movies = await Movie.find();
    res.json(movies);
}

const getMovieById = async (req, res, next) => {
    const movie = await Movie.findById(req.params.id);
res.json(movie);
}

const addMovie = async (req, res) => {
    const movie = await Movie.create(req.body);
    res.status(201).json(movie);
}

export {
    getAllMovies,
    getMovieById,
    addMovie
}