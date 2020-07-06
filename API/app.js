const express = require('express')
const dbConnection = require('./config/db')
const dotenv = require('dotenv')
const morgan = require('morgan')


// *Adding dotenv config
dotenv.config({
    path: './config/.env'
})
// *Connection to Database
dbConnection()

// *Initializing express on an app
const app = express()

// !Please remove 'dev' if it in production mode
app.use(morgan('dev'))

// *Adding body-parser build by express
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/',(req, res) => {
    res.send('first up')
})

// *Listen port
app.listen(process.env.PORT, () => {
    console.log(`Serving on ${process.env.PORT}`)
})