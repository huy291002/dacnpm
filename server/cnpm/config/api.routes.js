var ListBanaWords = require('../controllers/api/banawords_controller.js');

module.exports = function(router) {
  router.get('/list_banaWords', ListBanaWords.index);
}