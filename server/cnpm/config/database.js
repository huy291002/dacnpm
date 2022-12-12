const mongoose = require("mongoose");
const url = `mongodb+srv://huyle252:family9788vn@cluster0.ote7who.mongodb.net/test`;
var MongoClient = require('mongodb').MongoClient;

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

module.exports = mongoose;