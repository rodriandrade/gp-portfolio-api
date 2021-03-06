const crudArtists = (app) =>{
    const Artist = require('../models/artists.js');

    findAllArtists = (req, res) => {
        Artist.find((err, artists) =>{
            if(!err){
                console.log('GET /artists');
                res.send(artists);
            }
        })
     }

     app.get('/artists', findAllArtists);
}

module.exports = crudArtists;
