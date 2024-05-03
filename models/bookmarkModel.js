

import mongoose from "mongoose";

const bookmarkSchema = mongoose.Schema({
    userId: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true 
    },
    itemId: { 
        type: mongoose.Schema.Types.ObjectId, 
        required: true 
    },
    itemType: { 
        type: String, 
        required: true 
    },
    createdAt: { 
        type: Date, 
        default: Date.now 
    },
})

const bookmarked = mongoose.model("bookmarked",bookmarkSchema)
export default bookmarked