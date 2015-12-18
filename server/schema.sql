DROP DATABASE IF EXISTS chat;
CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (

  message_id INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (message_id),
  text VARCHAR(140) NOT NULL,
  roomname_id INT NOT NULL,
  name_id INT NOT NULL

);

CREATE TABLE users (

  user_id INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (user_id),
  name VARCHAR(40) NOT NULL
);

CREATE TABLE rooms (
  room_id INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (room_id),
  roomname VARCHAR(20) NOT NULL
);



