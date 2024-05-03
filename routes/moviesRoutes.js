import express from "express"


import { allMovies, addMovie, deleteMovie, singleMovie } from "../controllers/moviesController.js"

const router = express.Router()

// to get data for all movies 
router.get("/all", allMovies)

//  route to add movie 
router.post("/add", addMovie)

// route to delete a movie
router.delete("/delete", deleteMovie)

// route to get data related to a particular movie
router.get("/:id",singleMovie)

export default router