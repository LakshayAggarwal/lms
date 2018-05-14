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

/**
 * Post requests
 */
// Add new student to the database
route.post('/', (req, res) => {

})

/**
 * PUT requests
 */
// Update student with given student Id
route.put('/:studentId', (req, res) => {

})

/**
 * DELETE requests
 */
// Delete student with given student Id
route.delete('/:studentId', (req, res) => {

})

module.exports = route