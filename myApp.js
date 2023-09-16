require('dotenv').config()
let express = require('express');
let app = express();
const path = require("path")

process.env.MESSAGE_STYLE == "uppercase";

app.use('/public', express.static(path.join(__dirname + '/public')))

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, '/views/index.html'))
})

var message = {"message": "Hello json"};

app.get('/json', (req, res) => {
    if(process.env.MESSAGE_STYLE == uppercase){
        response.json({"message" : "HELLO JSON"})
     }else{
       response.json(message)
     }
})




































 module.exports = app;
