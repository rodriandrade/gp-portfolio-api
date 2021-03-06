var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var http = require('http');
var server = http.createServer(app);
var mongoose = require('mongoose');
var cors = require('cors');

mongoose.connect('mongodb+srv://admin:admin123@cluster0.9plwn.mongodb.net/gp-site-videos?retryWrites=true&w=majority', { useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', (error) => console.error(error))
db.once('open', () => console.log('Connected to DataBase'))

// Middle

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(cors());

const videosRouter = require('./routes/videos')
app.use('/videos', videosRouter)

const imagenesRouter = require('./routes/imagenes')
app.use('/imagenes', imagenesRouter)

const streamingsRouter = require('./routes/streamings')
app.use('/streamings', streamingsRouter)

server.listen(process.env.PORT || 4000, function(){
  console.log("Servidor corriendo en localhost:4000");
});

module.export = app;