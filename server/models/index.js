var db = require('../db');

module.exports = {
  messages: {
    get: function (cb) {
      db.query('SELECT * FROM messages', function(err,data){
        if(err) throw err;
        else cb(data)
        console.log('returning data test ',data)
      })
    },
    post: function (data,cb) {
      //console.log('posting data', data)
      var query = db.query('INSERT INTO messages SET ?', data, function(err,result){
        if(err) throw err;
        else cb(result)
      })
      //console.log('query sql' + query.sql)
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (cb) {
      var querySearch = 'SELECT * FROM users;';
      db.query(querySearch, function(err,data){
        if(err) console.log(err);
        else cb(data)
      })
    },
    post: function (data, cb) {
      //console.log('posting data', data)
      var queryInsert = 'INSERT INTO users SET ?';
      db.query(queryInsert, data, function(err, results){
        if(err) console.log(err);
        else cb(results)
      })
    }
  }
};
