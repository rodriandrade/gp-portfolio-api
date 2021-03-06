const express = require('express')
const router = express.Router()
const Video = require('../models/videos')

router.get('/', async (req, res) => {
    try{
        const videos = await Video.find()
        res.header('Access-Control-Allow-Origin', '*');
        res.json(videos);
    } catch (err){
        res.status(500).json({ message: err.message })
    }
})

module.exports = router

