const express = require("express");
const router = express.Router();
const Countries = require("../models/Country");
const admin = require("./admin");
const user = require("./user");

router.get("/", (req, res) => {
  res.send("hello!");

});

// Routes
router.use("/admin", require("./admin"));
router.use("/users", require("./user"));

module.exports = router;
