const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
const router = require("./router");


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



/** route */
app.use("/api", router);



/** connect to db */
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected To Data Base"))
  .catch((err) => console.log(err));



/** run server */
const port = process.env.PORT;
app.listen(port, () => console.log(`Working on port ${port}`));