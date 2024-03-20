const express = require('express')
const TestModel = require('../models/TestModel1')

const router = express.Router()

router.get('/', async (req, res) => {
    try {
        const items = await TestModel.find()
        res.status(200).json(items)
    } catch (error) {
        res.status(400).json({error: error.message})
    }

})

router.post('/testPost', async (req, res) => {
    const {title, attribute1} = req.body

    try{
        const test = await TestModel.create({title, attribute1})
        res.status(200).json(test)
    } catch (error) {
        res.status(400).json({error: error.message})
    }
})


module.exports = router