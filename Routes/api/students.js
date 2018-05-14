const route = require('express').Router()

/**
 * Get requests
 */
route.get('/', (req, res) => {
    res.send('students')
})

route.get('/:studentId', (req, res) => {
    res.send('students/id')
})

route.get('/:studentId/batches', (req, res) => {
    res.send('students/id/batches')
})

module.exports = route