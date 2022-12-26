var ListBanaWords = require('../controllers/api/banawords_controller.js');
var UploadFile = require('../controllers/api/uploadfile_controller.js');
var multer = require('multer');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './audio');
  },
  filename: (req, file, callback) => {
    callback(null, file.originalname);
  }
});

var upload = multer({ storage: storage });

module.exports = function (router) {
  router.get('/list_banaWords', ListBanaWords.index);
  router.post('/uploadfile', upload.single('file'), UploadFile.index);
}