const { Router } = require('express');
const router = Router()
const tkn = require('../token/token');

const parser = require('../Gramatica');
const traductor = require('../traductor/javaScript');
const tokens = [];



router.get('/', (req, res) => {

    res.send("<h1>Analizando...</h1>")

});

router.post('/analizar', (req, res) => {

    console.log("REQUEST: -----------------------");
    console.log(req.body);
    console.log("--------------------------------");
    cadena = JSON.stringify(req.body);
    tokens = [];



    salida = { "nombre": "Reconocidos", "lista": tokens };

    console.log("cantidad de tokens en LISTA", salida.lista.length);
    console.log("cantidad de tokens", tokens.length);

    let jsson = JSON.stringify(salida);
    res.send(jsson);
});

router.get('/analizar', (req, res) => {

    var url = 'https://example.com/profile';
    var data = { username: 'example' };

    fetch(url, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => console.log('Success:', response));

});





module.exports = router;