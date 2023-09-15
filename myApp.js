let express = require('express');
let app = express();
const path = require("path")

app.use(path.join(__dirname + '/public'))

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, '/views/index.html'))
  })

  console.log("Hello World")




































 module.exports = app;
