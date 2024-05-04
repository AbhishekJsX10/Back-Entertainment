
// import express from'express'
// import Movies from "../models/movieModel.js"
// import tvShows from "../models/tvshowModel.js"


// const router = express.Router()


// router.get(`/`, async(req, res) => {
//   try{
//     const query = req.query.query;
//   if (!query) {
//     return res.status(400).json({ error: 'Query parameter is required' });
//   }else{
//     const response = Movies.find({ "title": { $regex: /query/i } })
//     console.log(response.data)

//   }
//   res.status(200).json(response.data)
//   }catch(error){
//     console.error(error)
//   }
// });

// export default router
import express from 'express';
import Movies from "../models/movieModel.js";

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const query = req.query.query;
    if (!query) {
      return res.status(400).json({ error: 'Query parameter is required' });
    } else {
      const response = await Movies.find({ "title": { $regex: new RegExp(query, 'i') } });
      console.log(response);
      res.status(200).json(response);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

export default router;
