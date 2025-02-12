const express = require("express");
const app = express();
const port = 3000;
const multer = require("multer");
const UPLOADS_FOLDER = "./uploads/";
const upload = multer({
  dest: UPLOADS_FOLDER,
});

// application
app.post("/", upload.array("avatar", 2), (req, res) => {
  res.send("Hello world");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
