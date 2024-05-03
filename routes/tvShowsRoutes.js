import express from "express"

import { allTvShows,addtvshow,deletetvshow,singleTvShow } from "../controllers/tvShowsController.js" 

const router = express.Router()

//  to get data of tv shows present
router.get("/all", allTvShows)

// to add a tv show 
router.post("/add",addtvshow)

// to delete data of a particular tv show 
router.delete("/delete", deletetvshow)

//  to get data of a particular tv show
router.get("/:id", singleTvShow)


export default router;


