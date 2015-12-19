var db = require('../db');

module.exports = {
  messages: {
    get: function (cb) {
      var querySearch = 'select * from messages join users on messages.name_id=users.user_id;';
      db.query(querySearch, function(err,results){
        if(err) throw err;
        else cb(results)
      })
    }, // a function which produces all the messages
    post: function (data,cb) {
      console.log('model-messages.post')
      var querySearch = 'insert into messages values("' + data.text +'", (select user_id from users where username="' + data.username + '"));';
      db.query(querySearch, function(err, results){
        if(err) throw err;
        else cb(results)
      })
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function (cb) {
      var querySearch = 'SELECT * users;';
      db.query(querySearch, function(err,results){
        if(err) throw err;
        else cb(results)
      })
    },
    post: function (value,cb) {
      var queryInsert = 'INSERT INTO users values("' + value.name + '");';
      db.query(queryInsert, function(err,results){
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
