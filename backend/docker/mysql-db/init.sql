
CREATE TABLE surveys
(
    id nvarchar(50) not null PRIMARY KEY,
    name nvarchar(100),
    json text
);

CREATE TABLE results
(
    id nvarchar(50) PRIMARY KEY,
    postid nvarchar(50),
    json text
)