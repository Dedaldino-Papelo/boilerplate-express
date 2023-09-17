require('dotenv').config()
let express = require('express');
let app = express();
const path = require("path")

app.use('/public', express.static(__dirname + '/public'))

app.use((req, res, next) => {
  console.log(req.method + " " + req.path + " - " + req.ip);
  next();
});

app.get("/", function(req, res){
    res.sendFile(__dirname + '/views/index.html')
})

/* app.get('/json', (req, res) => {
  res.json({ "message": 'Hello json' })
}) */

app.get('/json', (req, res) => {
    if(process.env['MESSAGE_STYLE'] == "uppercase" ){
      res.json({"message" : "Hello json".toUpperCase() });
    } else {
      res.json({"message" : "Hello json" });
    }
})

app.get('/now', (req, res, next) => {
  req.time = new Date().toString()
  next()
}, (req, res) => {
  res.json({ time: req.time })
})
module.exports = app




































 module.exports = app;
