const express = require("express");
const publicRouter = express.Router();

publicRouter
  .route("/user")
  .all((req, res, next) => {
    console.log("i am logging something");
    next();
  })
  .get((req, res) => {
    res.send("GET");
  });
module.exports = publicRouter;
