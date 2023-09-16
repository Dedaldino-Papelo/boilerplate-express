let express = require('express');
let app = express();
const path = require("path")
require('dotenv').config()

app.use('/public', express.static(path.join(__dirname + '/public')))

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, '/views/index.html'))
})

app.get("/json", function(req, res){
    res.json({"message": "Hello json"})
})

  console.log("Hello World")




































 module.exports = app;
