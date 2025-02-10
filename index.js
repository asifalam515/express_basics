const express = require("express");
const handlerFn = require("./handle");
const app = express();
app.use(express.json());

const port = 3000;
const adminRoute = express.Router();
adminRoute.get("/dashboard", (req, res) => {
  console.log(req.hostname);
  res.send("we are in admin dashboard");
});
app.use("/admin", adminRoute);
app.get("/user/:id", handlerFn);
app.post("/user/", (req, res) => {
  console.log(req.body);
  res.send("hello from post method");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
