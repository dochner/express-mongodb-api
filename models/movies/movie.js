const mongoose = require('mongoose')

const MovieSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        lowercase: true
    },
    genre: {
        type: String,
        default: '',
        lowercase: true
    }
})

const Movie = mongoose.model("Movie", MovieSchema)

module.exports = Movie