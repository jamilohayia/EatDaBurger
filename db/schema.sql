### Schema

DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
	id int NOT NULL AUTO_INCREMENT,
	name varchar(30) NOT NULL,
	eaten BOOLEAN DEFAULT false NULL,
	PRIMARY KEY (id)
);
