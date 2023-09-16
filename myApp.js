require('dotenv').config()
let express = require('express');
let app = express();
const path = require("path")

process.env.MESSAGE_STYLE == "uppercase";

app.use('/public', express.static(path.join(__dirname + '/public')))

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, '/views/index.html'))
})

app.get('/json', (req, res) => {
    const mySecret = process.env['MESSAGE_STYLE'];
    if( mySecret === "uppercase" ){
      res.json({"message" : "Hello json".toUpperCase() });
    } else {
      res.json({"message" : "Hello json" });
    }
})




































 module.exports = app;
