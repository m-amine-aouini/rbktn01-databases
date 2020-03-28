CREATE DATABASE chat;

USE chat;


/* Create other tables and define schemas for them here! */

CREATE TABLE users (

  id int NOT NULL UNIQUE PRIMARY KEY AUTO_INCREMENT,

  username VARCHAR(101) NOT NULL UNIQUE
);

CREATE TABLE rooms (
  id int NOT NULL UNIQUE PRIMARY KEY AUTO_INCREMENT,

  name VARCHAR(65) NOT NULL UNIQUE
);

CREATE TABLE messages (
  /* Describe your table here.*/
  id int NOT NULL UNIQUE PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(101) NOT NULL,
  roomname VARCHAR(65) NOT NULL,
  text VARCHAR(255) NOT NULL
);

/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/

