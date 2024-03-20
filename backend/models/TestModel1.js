const mongoose = require('mongoose')

const Schema = mongoose.Schema

const testSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    attribute1: {
        type: Number,
        required: true
    }
}, {timestamps: true})

module.exports = mongoose.model('TestModel1', testSchema)