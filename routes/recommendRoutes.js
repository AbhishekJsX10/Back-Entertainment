import express from "express"
import { allRecommeds } from "../controllers/recommendedController.js"


const router = express.Router()

// to get data for recommendation section
router.get("/all",allRecommeds)
 

export default router