const express = require("express");
const app = express();
const admin = express();

const port = 3000;
app.set("view engine", "ejs");

app
  .route("/about/mission")
  .get((req, res) => {
    res.render("pages/about");
  })
  .post()
  .put();
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
