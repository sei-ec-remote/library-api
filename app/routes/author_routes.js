// Express docs: http://expressjs.com/en/api.html
const express = require('express')

// pull in Mongoose model for authors
const Author = require('../models/author')

// this is a collection of methods that help us detect situations when we need
// to throw a custom error
const customErrors = require('../../lib/custom_errors')

// we'll use this function to send 404 when non-existant document is requested
const handle404 = customErrors.handle404

// this is middleware that will remove blank fields from `req.body`, e.g.
// { author: { title: '', text: 'foo' } } -> { author: { text: 'foo' } }
const removeBlanks = require('../../lib/remove_blank_fields')

// instantiate a router (mini app that only handles routes)
const router = express.Router()

// INDEX
// GET /authors
router.get('/authors', (req, res, next) => {
  Author.find()
    .then(authors => {
      // `authors` will be an array of Mongoose documents
      // we want to convert each one to a POJO, so we use `.map` to
      // apply `.toObject` to each one
      return authors.map(author => author.toObject())
    })
    // respond with status 200 and JSON of the authors
    .then(authors => res.status(200).json({ authors: authors }))
    // if an error occurs, pass it to the handler
    .catch(next)
})

// SHOW
// GET /authors/5a7db6c74d55bc51bdf39793
router.get('/authors/:id', (req, res, next) => {
  // req.params.id will be set based on the `:id` in the route
  Author.findById(req.params.id)
    .then(handle404)
    // if `findById` is succesful, respond with 200 and "author" JSON
    .then(author => res.status(200).json({ author: author.toObject() }))
    // if an error occurs, pass it to the handler
    .catch(next)
})

// CREATE
// POST /authors
router.post('/authors', (req, res, next) => {
  Author.create(req.body.author)
    // respond to succesful `create` with status 201 and JSON of new "author"
    .then(author => {
      res.status(201).json({ author: author.toObject() })
    })
    // if an error occurs, pass it off to our error handler
    // the error handler needs the error message and the `res` object so that it
    // can send an error message back to the client
    .catch(next)
})

// UPDATE
// PATCH /authors/5a7db6c74d55bc51bdf39793
router.patch('/authors/:id', removeBlanks, (req, res, next) => {
  Author.findById(req.params.id)
    .then(handle404)
    .then(author => {
      // pass the result of Mongoose's `.update` to the next `.then`
      return author.updateOne(req.body.author)
    })
    // if that succeeded, return 204 and no JSON
    .then(() => res.sendStatus(204))
    // if an error occurs, pass it to the handler
    .catch(next)
})

// DESTROY
// DELETE /authors/5a7db6c74d55bc51bdf39793
router.delete('/authors/:id', (req, res, next) => {
  Author.findById(req.params.id)
    .then(handle404)
    .then(author => {
      // delete the author ONLY IF the above didn't throw
      author.deleteOne()
    })
    // send back 204 and no content if the deletion succeeded
    .then(() => res.sendStatus(204))
    // if an error occurs, pass it to the handler
    .catch(next)
})

module.exports = router