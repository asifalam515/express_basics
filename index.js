const express = require("express");
const app = express();
const admin = express();

const port = 3000;

app.route("/about/mission").get().post().put();
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
