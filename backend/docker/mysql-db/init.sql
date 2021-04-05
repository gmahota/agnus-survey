CREATE TABLE surveys
(
    id BINARY(16) PRIMARY KEY,
    name nvarchar(100),
    json text
);

CREATE TABLE results
(
    id BINARY(16) PRIMARY KEY,
    postid nvarchar(50),
    json text
)