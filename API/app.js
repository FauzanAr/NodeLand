const express = require('express')


const PORT = 3000
const app = express()


app.get('/',(req, res) => {
    res.send('first up')
})

app.listen(PORT, () => {
    console.log(`Serving on ${PORT}`)
})