const express = require("express");
const app = express();
const port = 3000;

const logger = (req, res, next) => {
  console.log(
    `${new Date(Date.now).toLocaleString()}-${req.method} -${
      req.originalUrl
    }  - ${req.protocol}`
  );
  next();
};
app.use(logger);
app.get("/about", (req, res) => {
  res.send("about route is here");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
