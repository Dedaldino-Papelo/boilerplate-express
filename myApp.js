require("dotenv").config()

let express = require('express');
let app = express();
const path = require("path")

app.use('/public', express.static(path.join(__dirname + '/public')))

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, '/views/index.html'))
})

app.get("/json", function(req, res){

    res.json({
        message: process.env.MESSAGE_STYLE === 'uppercase' ? "HELLO JSON" : "Hello json"
    })
})

  console.log("Hello World")




































 module.exports = app;
