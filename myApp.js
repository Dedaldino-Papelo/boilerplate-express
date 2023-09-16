require('dotenv').config()
let express = require('express');
let app = express();
const path = require("path")

app.use('/public', express.static(path.join(__dirname + '/public')))

app.use((req, res, next) => {
  console.log(req.method + " " + req.path + " - " + req.ip);
  next();
});

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

module.exports = app




































 module.exports = app;
