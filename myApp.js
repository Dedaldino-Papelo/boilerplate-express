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


app.get('/json', (req, res) => {
    if(process.env['MESSAGE_STYLE'] == "uppercase" ){
      res.json({"message" : "Hello json".toUpperCase() });
    } else {
      res.json({"message" : "Hello json" });
    }
})

//Chain Middleware to Create a Time Server
app.get('/now', (req, res, next) => {
  req.time = new Date().toString()
  next()
}, (req, res) => {
  res.json({ time: req.time })
})

//Get Route Parameter Input from the Client
app.get('/:word/echo', (req, res) => {
  res.json({ echo: req.params.word })
})

//Get Query Parameter Input from the Client
app.route('/name')
  .get((req, res) => {
    const { first, last } = req.query
    res.json({ name: first + " " + last })
  })

module.exports = app




































 module.exports = app;
