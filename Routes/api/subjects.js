const route = require('express').Router()

/**
 * Get requests
 */
route.get('/', (req, res) => {
    res.send('subjects')
})

route.get('/:subjectId', (req, res) => {
    res.send('subjects/id')
})

route.get('/:subjectId/teachers', (req, res) => {
    res.send('subjects/id/teachers')
})

module.exports = route