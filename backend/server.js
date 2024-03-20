const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const testRoutes = require('./routes/testRoute')

const MONGO_URL = "mongodb+srv://test:testPassword@explorenowdb.gmrwrda.mongodb.net/?retryWrites=true&w=majority&appName=ExploreNowDB"

//create express app
const app = express()


app.get('/', (req, res) => {
    res.json({mssg: "welcome to the app"})
})

app.use(bodyParser.json())
app.use('/api/test',testRoutes)

mongoose.connect(MONGO_URL)
    .then(() => {
        app.listen(4000, () => {
            console.log("Listening on port 4000")
        })
    })
    .catch((error) => {
        console.log(error)
    })

//listen for requests







