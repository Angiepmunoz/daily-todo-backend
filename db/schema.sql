DROP DATABASE IF EXISTS todo_dev;
CREATE DATABASE todo_dev;

\c todo_dev;

CREATE TABLE todoItems (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    notes TEXT,
    completed BOOLEAN DEFAULT false,
    due_date DATE NOT NULL,
    time_of_day TIME WITHOUT TIME ZONE NOT null,
    date_of_completion DATE DEFAULT null,
    weekly BOOLEAN DEFAULT false
);


