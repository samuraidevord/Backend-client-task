CREATE DATABASE tasks;

CREATE TABLE tasks(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    description TEXT
);

INSERT INTO tasks (title, description) VALUES
    ('Backend', 'Desarrollo de un backend con postgres y NodeJs.'),
    ('Frontend', 'Desarrollo de un Frontend con ReactJs.')