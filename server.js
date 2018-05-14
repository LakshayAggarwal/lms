const express = require('express')
const app = express()

app.use((req, res) => {
    res.send('working')
})

app.listen(8080, () => console.log('Server running on http://localhost:8080/'))