import mongoose from "mongoose";

const movieSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    rating:{
        type: Number,
        required: true
    },
    length:{
        type: Number,
        required: true
    },
    language:{
        type:String,
        required:true
    },
    year: {
        type: Number,
        required: true
    },
    status:{
        type:String,
        required:true
    },
    genre: {
        type: [String],
        required: true
    },
    synopsis:{
        type: String,
        required: true
    },
    casts:{
        type: [String],
        default:[],
        required: true
    },
    links:{
        type: Map,
        of: String 
    },
    trending:{
        type:Boolean,
        default:false,
        required: true
    },
    itemType: { 
        type: String, 
        required: true 
    },
    imageUrl:{
        type: String,
        required:true
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

const Movies = mongoose.model('Movies', movieSchema);
export default Movies