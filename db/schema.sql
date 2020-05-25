DROP DATABASE IF EXISTS tickets_db;
CREATE DATABASE tickets_db;

USE tickets_db;

DROP TABLE IF EXISTS ticket;

CREATE TABLE IF NOT EXISTS ticket
(
  id INT AUTO_INCREMENT,
  ticket_name VARCHAR(150),
  completed BOOLEAN,
  PRIMARY KEY (id)
);