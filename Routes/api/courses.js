const route = require('express').Router()

/**
 * Get requests
 */
route.get('/', (req, res) => {
    res.send('courses')
})

route.get('/:courseId', (req, res) => {
    res.send('courses/id')
})

route.get('/:courseId/batches', (req, res) => {
    res.send('courses/id/batches')
})

route.get('/:courseId/batches/:batchId', (req, res) => {
    res.send('courses/id/batches/id')
})

route.get('/:courseId/batches/:batchId/lectures', (req, res) => {
    res.send('courses/id/batches/id/lectures')
})

route.get('/:courseId/batches/:batchId/lectures/lectureId', (req, res) => {
    res.send('courses/id/batches/id/lectures/id')
})

route.get('/:courseId/batches/:batchId/students', (req, res) => {
    res.send('courses/id/batches/id/students')
})

route.get('/:courseId/batches/:batchId/teachers', (req, res) => {
    res.send('courses/id/batches/id/teachers')
})

module.exports = route