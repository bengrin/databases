// YOUR CODE HERE:

var app = {};
var friends = {};
var roomObj = {};

app.user = window.location.search.slice(10);

app.server = 'http://localhost:3000/classes/messages';

var bindUIEvents = function() {

  $('.username').on('click', function(){
    var userToAdd = $(this).text();
    app.addFriend(userToAdd);
  });

};

app.init = function(){
  bindUIEvents();
  app.fetch();
};

app.send = function(message){
  $.ajax({
    url: app.server,
    type: 'POST',
    data: JSON.stringify(message),
    contentType: 'application/json',
    success: function(data){
      console.log('chatterbox message sent');
      app.addMessage(message);
    },
    error: function(data){
      console.error('chatterbox message failed', data);
    }
  });
};

app.fetch = function() {
  $.ajax({
    url: app.server,
    type: 'GET',
    // data: {
    //   order: '-createdAt',
    //   limit: 50
    // },
    contentType: 'application/json',
    success: function(data){
      console.log('Fetched successfully from chatterbox', data);
      app.clearMessages();
      _.each(data['results'].reverse(),function(message){
          app.addMessage(message);
      });
    },
    error: function(data){
      console.log('Error: did not recieve data Status code:', data)
    }
  });
};

app.getRoom = function(wantedRoom) {
  $.ajax({
    url: app.server,
    type: 'GET',
    // data: {
    //   order: '-createdAt',
    //   limit: 50,
    //   where: {'roomname': wantedRoom}
    // },
    contentType: 'application/json',
    success: function(data){
      console.log('Fetched successfully from chatterbox', data);
      app.clearMessages();
      _.each(data.results.reverse(),function(message){
          app.addMessage(message);
      });
    },
    error: function(data){
      console.log('Error: did not recieve data Status code:', data)
    }
  });
};

app.clearMessages = function(){
  $('#chats').html('');
};

app.addMessage = function(message){

  var username = message.username;
  var text = message.text;
  var roomname = message.roomname;

  var chat = $('<div class="chat"></div>');
  chat.append('<div class="username"></div>').children('.username').text(username);
  chat.append('<div class="text"></div>').children('.text').text(text);
  chat.append('<div class="roomname"></div>').children('.roomname').text(roomname);

  //check if friend
  if(username in friends){

    chat.addClass('friend');
  }

  //if room doesn't exist, add the room
  if (!(roomname in roomObj)){
    roomObj[roomname] = roomname;
    app.addRoom(roomname);
  }

  $('#chats').append( chat );
  bindUIEvents();
  updateScroll();
};

app.addRoom = function(roomname){

  var newRoomName = $('<option></option>');
  newRoomName.text(roomname);
  newRoomName.val(newRoomName.text());
  $('#roomSelect').append(newRoomName);
};

app.addFriend = function(username){

  if(!(username in friends)) {
    $('.username').filter(function(){
      return $(this).text() === username;
    }).addClass('friend');
  }
  friends[username] = username;
};

app.handleSubmit = function(message){
  var text = $('#send #message').val();
  var username = app.user;
  var roomName = $('#newRoomCreator').val() !== '' ? $('#newRoomCreator').val() : $('#roomSelect option:selected').text();

  var message = {
    username: username,
    text: text,
    roomname: roomName
  };

  app.send(message);
  $('#send #message').val('');
  $('#roomname').val('')
};

var updateScroll = function() {
     $("#chats").prop({ scrollTop: $("#chats").prop("scrollHeight") });
};

$(document).ready(function(){
  app.init();
  updateScroll();

  $('#send .submit').on('submit', function(e){
    e.preventDefault();
    app.handleSubmit();
  });

  $('#roomSelect').on('change', function(e) {
    var clickedRoom = $('#roomSelect option:selected').text();
    console.log(clickedRoom)
    app.getRoom(clickedRoom);
  });

  setInterval(function(){
    app.fetch();
  },10000);

});

$(window).resize(function() {
  updateScroll();
});
