const express = require("express");
const router= new express.Router();
const songController=require("../controllers/songController")

router.route('/').post(songController.addsong)

module.exports=router