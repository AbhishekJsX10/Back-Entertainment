import tvShows from "../models/tvshowModel.js"

export async function allTvShows(req,res){
    try{
        const allTvShows = await tvShows.find();
        if(allTvShows){
            return res.status(200).json({
                success:true,
                tvShows:allTvShows
        })
        }
        return res.status(400).json({
            sucess:false,
            message:"No Tv shows available"
        })

    }
    catch(error){
        console.error(error.message);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}

export async function addtvshow(request,response){

    try{
        const {title,rating,language,firstyear,lastyear,status,trending,genre,synopsis,casts,links,itemType,imageUrl} = request.body;

        const isShow = await tvShows.findOne({title})

        if(isShow){
            return response.status(400).json({
                success:false,
                message:"tvshow already exists"
            })
        }
        const newtvshow = await tvShows.create({
            title,rating,language,firstyear,lastyear,status,genre,synopsis,casts,links,trending,itemType,imageUrl
        })
        await newtvshow.save()
        return response.status(200).json({
            success:true,
            message:"tvshow added successfully"
        })
    }catch(error){
        console.error(error.message);
        return response.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
    
}

export async function deletetvshow(req,res){
    try{
        const {title} = req.body;
        const isShow = await tvShows.findOne({title})
        if(!isShow){
            return res.status(400).json({
                success:false,
                message:"tvshow does not exist"
            })
        }
        await tvShows.deleteOne({title})
        res.status(200).json({
            success:true,
            message:"tvshow deleted successfully"
        })
    }catch(error){
        console.error(error.message);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}

export async function singleTvShow(req,res){
    try{
        const {id} = req.params;
        const isShow = await tvShows.findOne({_id:id})
        if(!isShow){
            return res.status(400).json({
                success:false,
                message:"tvshow does not exist"
            })
        }
        return res.status(200).json({
            success:true,
            tvshow:isShow
        })
    }catch(error){
        console.error(error.message);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
}