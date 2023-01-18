INSERT INTO task (id, title, description, creation_date, expiration_date, is_done)
    VALUES (1, 'Task 1', 'BlaBlaBla 111', '2023-01-18 18:23:01.001', '2023-01-19 18:01:01.001', false)
        ON CONFLICT (id) DO NOTHING;

INSERT INTO task (id, title, description, creation_date, expiration_date, is_done)
    VALUES (2, 'Task 2', 'BlaBlaBla 222', '2023-01-18 18:30:01.001', '2023-02-19 18:05:01.001', false)
            ON CONFLICT (id) DO NOTHING;

INSERT INTO task (id, title, description, creation_date, expiration_date, is_done)
    VALUES (3, 'Task 3', 'BlaBlaBla 333', '2023-01-18 18:40:01.001', '2023-03-19 18:10:01.001', false)
            ON CONFLICT (id) DO NOTHING;
