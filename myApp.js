let express = require('express');
let app = express();
const path = require("path")
require('dotenv').config()

//middlewares
app.use('/public', express.static(path.join(__dirname + '/public')))

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, '/views/index.html'))
})

let dataJson = {"message": "Hello json"};

app.get("/json", function(req, res){
    if (process.env.MESSAGE_STYLE === "uppercase") {
        dataJson.message = dataJson.message.toUpperCase();
      };
      
      res.json(dataJson);
})

  console.log("Hello World")




































 module.exports = app;
