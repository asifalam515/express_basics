const handlerFn = (req, res) => {
  console.log(req.app.get); //{ filter: 'name' }
  res.send("hello world");
};
module.exports = handlerFn;
