// Express docs: http://expressjs.com/en/api.html
const express = require('express')

// pull in Mongoose model for books
const Book = require('../models/book')

// this is a collection of methods that help us detect situations when we need
// to throw a custom error
const customErrors = require('../../lib/custom_errors')

// we'll use this function to send 404 when non-existant document is requested
const handle404 = customErrors.handle404

// this is middleware that will remove blank fields from `req.body`, e.g.
// { book: { title: '', text: 'foo' } } -> { book: { text: 'foo' } }
const removeBlanks = require('../../lib/remove_blank_fields')

// instantiate a router (mini app that only handles routes)
const router = express.Router()

// INDEX
// GET /books
router.get('/books', (req, res, next) => {
  Book.find()
    .then(books => {
      // `books` will be an array of Mongoose documents
      // we want to convert each one to a POJO, so we use `.map` to
      // apply `.toObject` to each one
      return books.map(book => book.toObject())
    })
    // respond with status 200 and JSON of the books
    .then(books => res.status(200).json({ books: books }))
    // if an error occurs, pass it to the handler
    .catch(next)
})

// SHOW
// GET /books/5a7db6c74d55bc51bdf39793
router.get('/books/:id', (req, res, next) => {
  // req.params.id will be set based on the `:id` in the route
  Book.findById(req.params.id)
    .then(handle404)
    // if `findById` is succesful, respond with 200 and "book" JSON
    .then(book => res.status(200).json({ book: book.toObject() }))
    // if an error occurs, pass it to the handler
    .catch(next)
})

// CREATE
// POST /books
router.post('/books', (req, res, next) => {
  Book.create(req.body.book)
    // respond to succesful `create` with status 201 and JSON of new "book"
    .then(book => {
      res.status(201).json({ book: book.toObject() })
    })
    // if an error occurs, pass it off to our error handler
    // the error handler needs the error message and the `res` object so that it
    // can send an error message back to the client
    .catch(next)
})

// UPDATE
// PATCH /books/5a7db6c74d55bc51bdf39793
router.patch('/books/:id', removeBlanks, (req, res, next) => {
  Book.findById(req.params.id)
    .then(handle404)
    .then(book => {
      // pass the result of Mongoose's `.update` to the next `.then`
      return book.updateOne(req.body.book)
    })
    // if that succeeded, return 204 and no JSON
    .then(() => res.sendStatus(204))
    // if an error occurs, pass it to the handler
    .catch(next)
})

// DESTROY
// DELETE /books/5a7db6c74d55bc51bdf39793
router.delete('/books/:id', (req, res, next) => {
  Book.findById(req.params.id)
    .then(handle404)
    .then(book => {
      // delete the book
      book.deleteOne()
    })
    // send back 204 and no content if the deletion succeeded
    .then(() => res.sendStatus(204))
    // if an error occurs, pass it to the handler
    .catch(next)
})

module.exports = router