const express = require('express')
const app = express()

/**
 *  Middleware json and url encoding support
 */
app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

/**
 *  Middleware for Route API
 */
app.use('/api', require('./Routes/api').route)

app.listen(8080, () => console.log('Server running on http://localhost:8080/'))