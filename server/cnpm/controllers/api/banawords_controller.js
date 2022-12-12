var database = require('../../config/database');
var wordModel = require('../../model/WordModel');

exports.index = function (req, res, next) {
    wordModel.find({}, function(err, allWord) {
        if (err) throw err;
        res.json({message: allWord});
    });
}