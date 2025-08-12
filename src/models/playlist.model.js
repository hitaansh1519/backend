import {mongoose, Schema} from "mongoose"

const playlistSchema = new Schema({
    id:{
        type: String,
        required: true      
    },
    name:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: true
    },
    video:[
        {
        type: Schema.Types.ObjectId,
        ref: "Video"
        }
    ],
    owner:{
        type: Schema.Types.ObjectId,
        ref: "User"
    }
},{
    timestamps: true
})

export const Playlist = mongoose.model("Playlist", playlistSchema)