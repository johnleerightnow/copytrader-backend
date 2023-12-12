const express = require('express')
const app = express()

const dummyRoutes = require('./routes/dummy')

app.use('/hello', dummyRoutes)

app.listen(3000, () => {
    console.log("Server running in port 3000. Click here http://localhost:3000")
})