USE tickets_db;

INSERT INTO ticket (id, ticket_name, completed)
  VALUES (DEFAULT, 'Hello World is not displaying correctly', DEFAULT),
         (DEFAULT, 'ORM is not sending a callback', DEFAULT),
         (DEFAULT, 'Handlebars not rendering properly', DEFAULT);
         
SELECT *
FROM ticket