const Song = require("../models/Song");

exports.addsong = async (req, res, next) => {
    console.log(req.body)
  
    const { name,date,artist} = req.body;
    const newSong = new Song({
        name,
        date,artist
      
      });
    try {
     
      await newSong.save()
      return res.status(200).json({
        success: true,
       
      })
    } catch (error) {
      console.log(error);
      
    }
  }