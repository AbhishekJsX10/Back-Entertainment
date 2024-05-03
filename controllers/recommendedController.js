import tvShows from "../models/tvshowModel.js"
import Movies from "../models/movieModel.js"


export async function allRecommeds(req,res){
    let recomMovie =  await Movies.find()
    let recomTvShow = await tvShows.find()
    let allRecommendedData=[...recomMovie,...recomTvShow]
    function shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }
    const finalData = await shuffleArray(allRecommendedData)
    if(finalData){
        return res.status(200).json({
            success: true,
            data: finalData
        })
    }
    else{
        return res.status(400).json({
            success: false,
            message: "No recommended data found"
        })
    }
}