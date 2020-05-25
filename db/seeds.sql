USE tickets_db;

INSERT INTO ticket (id, ticket_name, completed)
  VALUES (DEFAULT, 'Check your morning emails', FALSE),
         (DEFAULT, 'Drink your morning coffee', FALSE),
         (DEFAULT, 'Have your morning donut', FALSE);
         
SELECT *
FROM ticket