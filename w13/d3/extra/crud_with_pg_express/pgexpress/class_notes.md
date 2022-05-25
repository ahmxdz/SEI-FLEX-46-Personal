## Create db role for postgres with a createdb permission

`create role sei_flex with login password '<password>' createdb;`


## Create a database with this user as the owner
`create database bookstore owner sei_flex;`

## Create two tables books and authors

books
-------------------------------
id              serial primary key
title           varchar(255)


authors
----------------------------------
id              serial primary key
first_name      varchar(50)
last_name       varchar(50)
country         varchar(255)

```sql

INSERT INTO Authors (first_name, last_name, country)
VALUES
    ('J.D.', 'Salinger', 'USA'),
    ('F. Scott.', 'Fitzgerald', 'USA'),
    ('Jane', 'Austen', 'UK'),
    ('Scott', 'Hanselman', 'USA'),
    ('Jason N.', 'Gaylord', 'USA'),
    ('Pranav', 'Rastogi', 'India'),
    ('Todd' 'Miranda', 'USA'),
    ('Christian', 'Wenz', 'USA')
    ;
```

```sql
INSERT INTO Books
    (title)
VALUES
    ('The Catcher in the Rye'),
    ('Nine Stories'),
    ('Franny and Zooey'),
    ('The Great Gatsby'),
    ('Tender id the Night'),
    ('Pride and Prejudice'),
    ('Professional ASP.NET 4.5 in C# and VB')
;
```

## Create a join table that establishes the relationship between books and authors

books_authors



Here is the data for the table

```sql
INSERT INTO BooksAuthors
    (book_id, author_id)
VALUES
    (1, 1),
    (2, 1),
    (3, 1),
    (4, 2),
    (5, 2),
    (6, 3),
    (7, 4),
    (7, 5),
    (7, 6),
    (7, 7),
    (7, 8)
;
```



interpreted - interpreter runs and executes the code line by line each time

compiled - builds an executable from source code