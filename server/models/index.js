var db = require('../db');

module.exports = {
  messages: {
    get: function (cb) {
      var querySearch = 'select * from messages;';
      db.query(querySearch, function(err,results){
        if(err) throw err;
        else cb(results)
      })
    }, // a function which produces all the messages
    post: function (data,cb) {
      console.log('model-messages.post')
      var querySearch = 'insert into messages set ?';
      db.query(querySearch, data, function(err, results){
        if(err) throw err;
        else cb(results)
      })
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (cb) {
      var querySearch = 'SELECT * from users;';
      db.query(querySearch, function(err,results){
        if(err) throw err;
        else cb(results)
      })
    },
    post: function (value,cb) {
      var queryInsert = 'INSERT INTO users set ?';
      db.query(queryInsert, data, function(err,results){
        if(err) throw err;
        else cb(results)
      })
    }
  }
};
//
//'isnert data.text
//insert(sleet user id form users where username = ' + data.username ")
//insert( select roomid from rooms where roomnae = " +data.roomnaem''
