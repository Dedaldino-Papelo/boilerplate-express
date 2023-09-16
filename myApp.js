require('dotenv').config()
let express = require('express');
let app = express();
const path = require("path")

app.use('/public', express.static(path.join(__dirname + '/public')))

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, '/views/index.html'))
})

let dataJson = {message: "Hello json"};

app.get('/json', function(req, res){
    const MESSAGE_STYLE = process.env.MESSAGE_STYLE

    if (MESSAGE_STYLE == 'uppercase') {
        dataJson.message = dataJson.message.toUpperCase();
      };
      
      res.json(dataJson);
})




































 module.exports = app;
