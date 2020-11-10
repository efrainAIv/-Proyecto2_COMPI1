var express = require('express');
var bodyParser = require("body-parser");
const path = require('path');
const app = express();

app.set('port', '8030');

//MIDDLEWARES
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(bodyParser.json());

//RUTAS
app.use('/', require('./rutas/rutas'));

//ESTATICOS
app.use(express.static(path.join(__dirname, 'prueba')));


app.use((req,res, next) =>{
    res.status(404).send('404 Not Found');
});

exports.app = app;

//nodemon whatch index.js 