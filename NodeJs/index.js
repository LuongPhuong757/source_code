const express = require('express'),
    app = express(),
    cors = require('cors'),
    configMongoodb = require('./config/configMongoodb'),
    bodyParser = require('body-parser'),
    path = require('path'),
    routes = require('./routes/index'),
    dotenv = require('dotenv');
dotenv.config();
configMongoodb()

const port = process.env.PORT || 3001;
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'))
app.use(routes)
app.use('/',function (req,res) {
  res.send({
    message : 'Success'
  })
})
// app.use(express.static(path.join(__dirname, 'build')));


// app.get('/*', (req, res) => {
//   res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

app.listen(port, () => {
    console.log('Server run on ', port)
})
