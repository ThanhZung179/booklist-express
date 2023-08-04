const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");
const authorRoute = require("./routers/author")
const bookRoute = require("./routers/book")
dotenv.config();

//Connect Database
(async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL);
    console.log('Connected to MongoDB!');
  } catch (err) {
    console.error('Fail', err);
  }
})();

app.use(bodyParser.json({ limit: "50mb" })); 
app.use(morgan("common"))

//ROUTERS
app.use("/v1/author", authorRoute);
app.use("/v1/book", bookRoute);


app.listen(3000, () => { console.log("Server is running ...") });