const express = require('express')
const router = express.Router()
const Imagen = require('../models/imagenes')

router.get('/', async (req, res) => {
    try{
        const imagenes = await Imagen.find()
        res.header('Access-Control-Allow-Origin', '*');
        res.json(imagenes);
    } catch (err){
        res.status(500).json({ message: err.message })
    }
})

module.exports = router

