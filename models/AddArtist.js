const mongoose = require("mongoose");


const Schema = mongoose.Schema;

const ArtistSchema = new Schema({
   
    artistname: { type:String},
    dateofbirth: { type: String},
    bio: { type: String}, 
    
}, { timestamps: true });


const Artist = mongoose.model("Song", ArtistSchema);

module.exports = Artist;

