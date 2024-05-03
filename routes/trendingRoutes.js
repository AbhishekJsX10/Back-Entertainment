import express from "express"
// import tvShows from "../Models/tvshowModal.js"
// import Movies from "../Models/movieModal.js"

import { allTrends } from "../controllers/trendingController.js"

const router = express.Router()


// to get all data of all trending items
router.get("/all", allTrends)

export default router



