const express = require("express");
const app = express();

const path = require("path");
const mongoose = require("mongoose");
const routes = require("./routes");
const cors = require('cors');

// const { MONGODB_URI, SESSION_SECRET, NODE_ENV} = process.env;

const port = process.env.APP_PORT || "5001";
const MONGODB_URI = 'mongodb://127.0.0.1:27017/Global_Map';
// Connect to MongoDB
mongoose
  .connect(MONGODB_URI, {
    // useCreateIndex: true,
    // useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log("Successfully connected to MongoDB");
    
  })
  .catch((err) => {
    if (err.name === "MongooseTimeoutError") {
      console.error(
        "MongoDB connection error. Please make sure MongoDB is running.",
        err
      );
    } else {
      console.error(err);
    }
    process.exit();
  });

  app.use(cors());

  app.use(express.json());
// Routes
app.use("/api", routes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

module.exports = app;
