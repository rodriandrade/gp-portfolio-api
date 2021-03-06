const mongoose = require('mongoose')

const streamingSchema = new mongoose.Schema({
    image: String,
    video: String,
    name: String
})

module.exports = mongoose.model("streamings", streamingSchema)
