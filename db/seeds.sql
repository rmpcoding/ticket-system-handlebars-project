USE tickets_db;

INSERT INTO ticket (id, ticket_name, completed)
  VALUES (DEFAULT, 'Printer is not printing.', DEFAULT),
         (DEFAULT, 'Please reset my password.', DEFAULT),
         (DEFAULT, 'Is the internet down?', DEFAULT);
         
SELECT *
FROM ticket