const mongoose = require("mongoose");


const Schema = mongoose.Schema;

const SongSchema = new Schema({
   
    songname: { type:String},
    date: { type: String},
    artist: { type: String}, 
    
}, { timestamps: true });


const Song = mongoose.model("Song", SongSchema);

module.exports = Song;

