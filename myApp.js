require('dotenv').config()
let express = require('express');
let app = express();
const path = require("path")

app.use('/public', express.static(path.join(__dirname + '/public')))

app.get("/", function(req, res){
    res.sendFile(path.join(__dirname, '/views/index.html'))
})

app.get('/json', (req, res) => {
    const MESSAGE_STYLE = process.env.MESSAGE_STYLE

    if (MESSAGE_STYLE === 'uppercase') {
        res.json({ message: 'HELLO JSON' })
      } else {
        res.json({ message: 'Hello json' });
      } 
})




































 module.exports = app;
