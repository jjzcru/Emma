CREATE TABLE users (
    id INTEGER PRIMARY KEY,
    username TEXT NOT NULL UNIQUE,
    password_hash TEXT NOT NULL,
    type TEXT NOT NULL DEFAULT 'doctor' CHECK(type IN ('patient', 'doctor')),
    name TEXT NOT NULL,
    age INTEGER NOT NULL
);

CREATE TABLE medicines (
    id INTEGER PRIMARY KEY,
    name TEXT NOT NULL,
    dose TEXT NOT NULL
);

CREATE TABLE records (
    id INTEGER PRIMARY KEY,
    user_id INTEGER NOT NULL,
    medicine_id INTEGER NOT NULL,
    date_time DATETIME DEFAULT CURRENT_TIMESTAMP,
    state TEXT NOT NULL DEFAULT 'pending' CHECK(state IN ('pending', 'taken')),
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (medicine_id) REFERENCES medicines(id)
);
