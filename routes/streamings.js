const express = require('express')
const router = express.Router()
const Streaming = require('../models/streamings')

router.get('/', async (req, res) => {
    try{
        const streamings = await Streaming.find()
        res.header('Access-Control-Allow-Origin', '*');
        res.json(streamings);
    } catch (err){
        res.status(500).json({ message: err.message })
    }
})

module.exports = router

