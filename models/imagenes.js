const mongoose = require('mongoose')

const imagenSchema = new mongoose.Schema({
    imagen: String,
    name: String
})

module.exports = mongoose.model("imagenes", imagenSchema)
