const express = require('express')
const dbConnection = require('./config/db')

//* Connection to Database
dbConnection()

const app = express()


app.get('/',(req, res) => {
    res.send('first up')
})

//* Listen port
const PORT = 3000
app.listen(PORT, () => {
    console.log(`Serving on ${PORT}`)
})