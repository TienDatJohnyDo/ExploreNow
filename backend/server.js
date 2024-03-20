const express = require('express')
const testRoutes = require('./routes/testRoute')

//create express app
const app = express()

app.get('/', (req, res) => {
    res.json({mssg: "welcome to the app"})
})

app.use('/api/test',testRoutes)

//listen for requests
app.listen(4000, () => {
    console.log("Listening on port 4000")
})






