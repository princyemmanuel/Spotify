const express = require("express");
const bodyParser = require("body-parser");

const db = require("./db/db");

const songRoutes=require(".routes/song");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.use("api/song",songRoutes);
const port =  4000;
// const port = 4000
app.listen(port, () => {
  console.log(`App running on port: ${port}`);
});

