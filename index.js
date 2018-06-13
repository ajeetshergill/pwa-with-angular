const express = require('express')
const path = require('path')
const https = require('https')
const PORT = process.env.PORT || 5000
var app = express();

// app.use(express.static(path.join(__dirname, './')))
app
  .use(express.static(path.join(__dirname, 'demo1')))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('index'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
  
// https.createServer(options, app).listen(PORT, () => console.log(`Listening on ${ PORT }`));