const route = require('express').Router()

route.use('/courses', require('./courses'))

module.exports = {
    route
}