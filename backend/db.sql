\c MagicTheGathering
DROP TABLE IF EXISTS users;

DROP TABLE IF EXISTS decks;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    username text NOT NULL,
    firstname text NOT NULL
);

CREATE TABLE decks (
    id SERIAL PRIMARY KEY,
    commander text NOT NULL,
    colors text,
    users_id INTEGER REFERENCES users ON DELETE CASCADE
);
