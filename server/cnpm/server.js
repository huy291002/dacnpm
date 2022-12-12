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

// mongoose.connect(url, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// const wordSchema = new mongoose.Schema(
//   {
//     Vietnamese: String,
//     Bahnaric: String,
//     PoS: String,
//     BinhDinh: String,
//     KonTum: String,
//     GiaLai: String
//   },
//   { collection: `words` }
// );

// const Word = mongoose.model("Word", wordSchema);

// const wordData = (bodyData) => {
//   Word({ data: bodyData }).save((err) => {
//     if (err) {
//       throw err;
//     }
//   });
// };

// const urlencodedParser = bodyParser.urlencoded({ extended: false });

// app.set("view engine", "ejs");
// app.use(express.static("public"));

// app.get('/', (req,res) => {
//   res.render('home');
// });

// app.get('/list', (req, res, next) => {
//   Word.find({}, function(err, allWord) {
//     if (err) throw err;
//     else {
//   res.render('list',{ Word: allWord })};
//   });
// });

// app.get("/create", (req, res) => {
//   res.render("index");
// });

// app.post("/create", urlencodedParser, (req, res) => {
//   wordData(req.body);
//   res.render('sound');
// });

server.listen(3001);