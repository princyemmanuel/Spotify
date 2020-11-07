const express = require("express");
const bodyParser = require("body-parser");
const mongoose=require("mongoose");

const db = mongoose.connect("mongodb://localhost:27017/spotify",{
  useNewUrlParser:true,
  useUnifiedTopology:true
})

const songRoutes=require("./routes/song");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.use("api/song",songRoutes);
const port =  4000;
// const port = 4000
app.listen(port, () => {
  console.log(`App running on port: ${port}`);
});

