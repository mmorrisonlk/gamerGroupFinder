DROP DATABASE IF EXISTS gamersearch_DB;
create database gamersearch_DB;

CREATE TABLE User(
  id INT NOT NULL AUTO_INCREMENT,
  email VARCHAR(100) NOT NULL,
  password varchar(100) NOT NULL,
  PRIMARY KEY (id)
);
