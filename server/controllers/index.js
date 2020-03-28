var models = require('../models');
var { mysql } = require('./../db/index.js');

module.exports = {
  messages: {
    get: function (req, res) {

      mysql.query('SELECT * FROM messages', (err, results) => {
        if (err) {
          throw err;
        }
        res.send({ results });
      });

    }, // a function which handles a get request for all messages
    post: function (req, res) {
      let { message, username, roomname } = req.body;
      mysql.query('INSERT INTO messages SET ?', {
        text: message,
        username,
        roomname
      }, (err, res) => {
        if (err) {
          throw err;

        }
        console.log('message inserted');
      });
      res.end();

    } // a function which handles posting a message to the database
  },

  users: {
    // Ditto as above
    get: function (req, res) {
      mysql.query('SELECT * FROM users', (err, results) => {
        if (err) {
          throw err;
        }
        res.send({ results });
      });
    },
    post: function (req, res) {
      mysql.query('INSERT INTO users SET ?', req.body, (err, res) => {
        if (err) {
          throw err;
        }
        console.log('user inserted');
      });
      res.end();
    }
  }
};

