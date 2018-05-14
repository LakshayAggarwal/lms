const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({
    extended: true
}))

app.use('/api', require('./Routes/api').route)

app.listen(8080, () => console.log('Server running on http://localhost:8080/'))