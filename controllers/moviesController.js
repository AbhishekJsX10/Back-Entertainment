

import Movies from "../models/movieModel.js"


export async function singleMovie(req,res){
    try{
        const { id } = req.params
        const singleMovie = await Movies.findById(id)
        if(singleMovie){
            return res.status(200).json({
                success:true,
                movie:singleMovie
        })
        }
        return res.status(400).json({
            sucess:false,
            message:"No movie available"
        })
    }
    catch(error){
        console.error(error.message);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}

export async function deleteMovie(req,res){
    try{
        const { title } = req.body
        const isMovie = await Movies.findOne({title})
        if(!isMovie){
            return res.status(400).json({
                success:false,
                message:"Movie does not exist"
            })
        }
        await Movies.deleteOne({title})
        return res.status(200).json({
            sucess:true,
            message:"Movie deleted successfully"
        })
    }
    catch(error){
        console.error(error.message);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}


export  async function addMovie(req,res){
    try{
        const { title,rating,length,language,year,status,genre,synopsis,casts,links,trending,itemType,imageUrl } = req.body
        const isMovie = await Movies.findOne({title})
        if(isMovie){
            return res.status(400).json({
                success:false,
                message:"Movie already exists"
            })
        }
        const newMovie = await Movies.create({
            title,rating,length,language,year,status,genre,synopsis,casts,links,trending,itemType,imageUrl
        })
        await newMovie.save()
        return res.status(200).json({
            sucess:true,
            message:"Movie added successfully"
        })
    }
    catch(error){
        console.error(error.message);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}


export async function allMovies(req,res){
    try{
        const allMovies = await Movies.find()
        if(allMovies){
            return res.status(200).json({
                success:true,
                movie:allMovies
        })
        }
        return res.status(400).json({
            sucess:false,
            message:"No Tv shows available"
        })
    }
    catch(error){
        console.error(error.message);
        return res.status(500).json({ success: false, message: "Internal Server Error" });
    }
}