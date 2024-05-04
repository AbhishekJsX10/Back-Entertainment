// import express from "express";
// import Movies from "../models/movieModel.js";
// import tvShows from "../models/tvshowModel.js"

// const router = express.Router();

// // Search route for movies
// router.get("/movies/:query", async (req, res) => {
//     try {
//         const query = req.params.query;
//         const movies = await Movies.find({ title: { $regex: query, $options: "i" } }).limit(20);
//         if (movies.length === 0) {
//             return res.status(400).json({
//                 success: false,
//                 message: "No movies found"
//             });
//         }
//         res.status(200).json({
//             success: true,
//             data: movies
//         });
//     } catch (error) {
//         console.error("Error searching movies:", error);
//         res.status(500).json({
//             success: false,
//             error: "Internal server error"
//         });
//     }
// });

// // Search route for TV shows
// router.get("/tvshows/:query", async (req, res) => {
//     try {
//         const query = req.params.query;
//         const shows = await tvShows.find({ title: { $regex: query, $options: "i" } }).limit(20);
//         if (shows.length === 0) {
//             return res.json({
//                 success: false,
//                 message: "No TV shows found"
//             });
//         }
//         res.json({
//             success: true,
//             data: shows
//         });
//     } catch (error) {
//         console.error("Error searching TV shows:", error);
//         res.status(500).json({
//             success: false,
//             error: "Internal server error"
//         });
//     }
// });

// export default router;
