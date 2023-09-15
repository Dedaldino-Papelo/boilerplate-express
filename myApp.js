require("dotenv").config()

let express = require('express');
let app = express();
const path = require("path")

app.use('/public', express.static(path.join(__dirname + '/public')))

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, '/views/index.html'))
})

app.get("/json", function(req, res){
    let response = "Hello json"

    if (process.env.MESSAGE_STYLE == "uppercase") {
        response = response.toUpperCase();
    } 

    res.json({
        message: response
    })
})

  console.log("Hello World")




































 module.exports = app;
