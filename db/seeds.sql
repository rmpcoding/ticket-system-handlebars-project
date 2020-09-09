USE tickets_db;

INSERT INTO ticket (id, ticket_name, completed)
  VALUES (DEFAULT, 'Check your morning emails', DEFAULT),
         (DEFAULT, 'Drink your morning coffee', DEFAULT),
         (DEFAULT, 'Have your morning donut', DEFAULT);
         
SELECT *
FROM ticket