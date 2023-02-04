CREATE DATABASE tasks;
CREATE TYPE mood AS ENUM ('In progress','Finished','BackLog')
CREATE TABLE task(
    id SERIAL PRIMARY KEY,
    title VARCHAR(255),
    description TEXT,
    state mood,
    date bigint
);

INSERT INTO task (title, description, state, date) VALUES
    ('Backend', 'Desarrollo de un backend con postgres y NodeJs.', 'In progress', 1660035150515),
    ('Frontend', 'Desarrollo de un Frontend con ReactJs.','In progress', 1660035172856);