const express = require("express");
const app = express();
const admin = express();
const port = 3000;
app.use(express.json());
const router = express.Router();
app.use(router);
app.use(express.static(__dirname + "/public/"));
app.get("/", (req, res) => {
  res.send("welcome to application homepage");
});
router.get("/about", (req, res) => {
  res.send("Know about us");
});
app.use("/admin", admin);

admin.get("/dashboard", (req, res) => {
  console.log(admin.mountpath);
  res.send("welcome to admin dashboard");
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
