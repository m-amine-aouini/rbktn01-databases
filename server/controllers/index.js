var models = require('../models');
var { messages, users } = require('./../models/index.js');

module.exports = {
  messages: {
    get: function (req, res) {

      messages.get(req, res);

    }, // a function which handles a get request for all messages
    post: function (req, res) {

      messages.post(req, res);
    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      users.get(req, res);
    },
    post: function (req, res) {
      users.post(req, res);
    }
  }
};

