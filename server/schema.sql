DROP DATABASE IF EXISTS chat;
CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (

  text VARCHAR(140) NOT NULL,
  roomname VARCHAR(140) NOT NULL,
  username VARCHAR(140) NOT NULL,
  createdAt DATE,
  message_id INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (message_id)

);

CREATE TABLE users (
  username VARCHAR(40) NOT NULL,
  user_id INT NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (user_id)
);

