require("dotenv").config()

let express = require('express');
let app = express();
const path = require("path")

app.use('/public', express.static(path.join(__dirname + '/public')))

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, '/views/index.html'))
})

app.get("/json", function(req, res){

    const displayMessage = text => {
        return process.env.MESSAGE_STYLE === 'uppercase' ? text.toUpperCase() : text.toLowerCase()
    }

    res.json({
        message: displayMessage('Hello json')
    })
})

  console.log("Hello World")




































 module.exports = app;
