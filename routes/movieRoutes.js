import express from "express";

const router = express.Router();

import {getAllMovies, getMovieById, addMovie} from "../controllers/movieController.js";

router.get("/", getAllMovies);
router.get("/:id", getMovieById);
router.post("/", addMovie);

export default router;