var models = require('../models');
var bluebird = require('bluebird');



module.exports = {
  messages: {
    get: function (req, res) {
      models.messages.get(function(results){
        res.json(results);
      })
    }, // a function which handles a get request for all messages
    post: function (req, res) {
      models.messages.post(function(results){
        console.log('controller.post')
        console.log(JSON.parse(req.body))
        res.send(results);
      })
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {

    },
    post: function (req, res) {}
  }
};

