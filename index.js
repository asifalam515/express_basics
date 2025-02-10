const express = require("express");
const app = express();
const admin = express();

const port = 3000;

app.param("id", (req, res, next, id) => {
  const user = {
    userId: id,
    name: "bangladesh",
  };
  req.userDetails = user;
  next();
});
app.get("/user/:id", (req, res) => {
  console.log(req.userDetails);
  res.send("welcome to application home");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
