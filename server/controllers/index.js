var models = require('../models');
var { mysql } = require('./../db/index.js');

module.exports = {
  messages: {
    get: function (req, res) {

    }, // a function which handles a get request for all messages
    post: function (req, res) {

      let { username, message, roomname } = req.body;

      mysql.query('INSERT INTO messages SET ?', req.body, (err, res) => {
        if (err) {
          throw err;
        }
        console.log('message inserted');
      });


    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) { },
    post: function (req, res) {
      let { username } = req.body;

      mysql.query('INSERT INTO users SET ?', req.body, (err, res) => {
        if (err) {
          throw err;
        }
        console.log('user inserted');
      });
    }
  }
};

