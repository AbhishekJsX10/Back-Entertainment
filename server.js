import Express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import dotenv from 'dotenv';
import userRouter from "./routes/userRoute.js";
import cors from "cors";

import tvShowsRouter from "./routes/tvShowsRoutes.js"
import trendingRouter from "./routes/trendingRoutes.js"
import recommendRouter from "./routes/recommendRoutes.js"
import moviesRouter from "./routes/moviesRoutes.js"
import bookmarkRouter from "./routes/bookmarkRoutes.js"
import searchRouter from "./routes/searchRouter.js"

dotenv.config(); // using dotenv 
const app = Express(); // instances  

mongoose.connect( process.env.MONGODB_URL, { // connecting mongodb 
    dbName: "Entertainment_2"
}).then(() => console.log("Mongodb is connected"));

app.use(Express.json())  // middleware to use json
app.use(cookieParser()) // middleware for cookie parser 
app.use(cors({
    origin : [process.env.FRONTEND_URL],
    methods :["GET", "POST", "PUT", "DELETE"],
    credentials : true
}))

// app.use('/api/users', userRouter); // routing 
// app.use('/api/blogs', blogRouter); // routing 

app.use("/user",userRouter)
app.use("/tvshow",tvShowsRouter)
app.use("/trends",trendingRouter)
app.use("/recommends",recommendRouter)
app.use("/movies",moviesRouter)
app.use("/bookmarks",bookmarkRouter)
app.use("/search",searchRouter)

const port = process.env.PORT; 
app.listen(port, () => console.log(`Server is running on port ${port}`));


