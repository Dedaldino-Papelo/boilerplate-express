let express = require('express');
let app = express();
const path = require("path")
require('dotenv').config()

//middlewares
app.use('/public', express.static(path.join(__dirname + '/public')))
app.use(function(req, res, next){
    console.log(`${req.method} ${req.path} - ${req.ip}`)
    next()
})

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, '/views/index.html'))
})

app.get("/json", function(req, res){
    const messageStyle = process.env.MESSAGE_STYLE || "uppercase";

  if (messageStyle === "uppercase") {
    res.json({ message: "HELLO JSON" });
  } else {
    res.json({ message: "Hello json" });
  }
})

  console.log("Hello World")




































 module.exports = app;
