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
      models.messages.post(req.body, function(results){
        req.body.created = new Date().toISOString().slice(0, 19).replace('T', '');
        res.json(results);
      })
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      models.users.get(function(results){
        res.json(results);
      })
    },
    post: function (req, res) {
      models.users.post(req.body, function(results){
        req.body.createdAt = new Date.toISOString().slice(0, 19).replace('T', '');
        res.json(results);
      })
    }
  }
};

