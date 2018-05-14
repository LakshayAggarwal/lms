const route = require('express').Router()

/**
 * Get requests
 */
route.get('/', (req, res) => {
    res.send('teachers')
})

route.get('/:teacherId', (req, res) => {
    res.send('teachers/id')
})

route.get('/:teacherId/batches', (req, res) => {
    res.send('teachers/id/batches')
})

module.exports = route