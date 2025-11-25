const express = require('express')
const router = express.Router()
const postsArr = require('../public/postsArr')

// index
router.get('/', (req, res) => {
    res.json('Show all posts')
})

// show
router.get('/:id', (req, res) => {
    res.json(`Show the post with id: ${req.params.id}`)
})

// delete
router.delete('/:id', (req, res) => {
    res.send(`Delete the post with id: ${req.params.id}`)
})

// Export the router
module.exports = router