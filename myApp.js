let express = require('express');
let app = express();
const path = require("path")
require('dotenv').config()

app.use('/public', express.static(path.join(__dirname + '/public')))

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, '/views/index.html'))
})

app.get("/json", function(req, res){
    const messageStyle = process.env.MESSAGE_STYLE || 'uppercase';

  // Check the value of MESSAGE_STYLE and transform the message accordingly
  let message = 'Hello json';
  if (messageStyle === 'uppercase') {
    message = message.toUpperCase();
  }

  // Send the response as JSON
  res.json({ message });

})

  console.log("Hello World")




































 module.exports = app;
