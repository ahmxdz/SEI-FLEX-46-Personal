const db = require('../db/config')

//modify to list the authors of each book

const getBooks = (request, response) => {
    db.pool.query(`select title, first_name, last_name, country from books inner join books_authors on (books.id = books_authors.book_id)
    inner join authors on (books_authors.author_id = authors.id)`, 
    (err, results) => {
        if(err) throw err

        response.status(200).json(results.rows)
    })
}

const getBookById = (request, response) => {
    const bookId = request.params.id
    console.log(request)
    db.pool.query(`select * from books where id = ${bookId}`, (err, results) => {
        if(err) throw err

        response.status(200).json(results.rows)
    })

}


module.exports = {
    getBooks,
    getBookById
}