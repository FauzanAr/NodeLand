const express = require('express')
const dbConnection = require('./config/db')

//* Connection to Database
dbConnection()

const app = express()


app.get('/',(req, res) => {
    res.send('first up')
})

//* Listen port
app.listen(process.env.PORT, () => {
    console.log(`Serving on ${process.env.PORT}`)
})