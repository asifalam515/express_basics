const express = require("express");
const app = express();
const port = 3000;
const multer = require("multer");
const UPLOADS_FOLDER = "./uploads/";
const upload = multer({
  dest: UPLOADS_FOLDER,
  limits: {
    fileSize: 500000,
  },
});

// application
app.post("/", upload.single("avatar"), (req, res) => {
  res.send("Hello world");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
