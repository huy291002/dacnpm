const express = require("express");
const app = express();
const server = require("http").Server(app);
const bodyParser = require("body-parser");
var apiRoutes = require('./config/api.routes');
const properties = require('./config/properties');
var cors = require('cors');
// var MongoClient = require('mongodb').MongoClient;
var whitelist = properties.CORS;

var corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(cors(corsOptions));

var bodyParserJSON = bodyParser.json();
var bodyParserURLEncoded = bodyParser.urlencoded({extended:true});

var router = express.Router();
app.use(bodyParserJSON);
app.use(bodyParserURLEncoded);

app.use('/api',router);
apiRoutes(router);

server.listen(3001);