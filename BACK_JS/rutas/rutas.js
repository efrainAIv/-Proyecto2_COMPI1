const { Router } = require('express');
const router = Router()
const tkn = require('../token/token');

const fetch = require("node-fetch");

var traductor = require('../traductor/javaScript');
var { parser } = require('../Gramatica');

var arbol = "";

var listaTokens = [];
var listaErroresL = [];
var listaErroresS = [];

router.get('/', (req, res) => {

    res.send("<h1>Analizando...</h1>")

});

router.post('/analizar', async (req, res) => {

    this.tokens(null, true);
    this.erroresL(null, true);
    this.erroresS(null, true);
    this.grafo(null, true);
    console.log("REQUEST: -----------------------");
    console.log(req.body);
    console.log("--------------------------------");

    parser.parse(req.body.texto);

    console.log(listaTokens);

    peticion(req.body);

    trad = traductor.traducir(listaTokens);

    console.log("Errores Lexicos", listaErroresL);

    salida = { lenguaje: "JavaScript", listaTokens: listaTokens, listaErroresLex: listaErroresL, listaErroresSintact: listaErroresS, traduccion: trad, grafo: arbol };

    let jsson = JSON.stringify(salida);
    res.send(jsson);

});


function tokens(token, vaciar){

    if( typeof tokens.tokens == 'undefined' ) {
        tokens.tokens = [];
    }

    if(vaciar){
        tokens.tokens = [];
    }
    else{
        tokens.tokens.push(token);
        listaTokens = tokens.tokens;
    }

}

function erroresL(token, vaciar){

    if( typeof erroresL.erroresL == 'undefined' ) {
        erroresL.erroresL = [];
    }

    if(vaciar){
        erroresL.erroresL = [];
    }
    else{
        erroresL.erroresL.push(token);
        listaErroresL = erroresL.erroresL;
    }

}


function erroresS(token, vaciar){

    if( typeof erroresS.erroresS == 'undefined' ) {
        erroresS.erroresS = [];
    }

    if(vaciar){
        erroresS.erroresS = [];
    }
    else{
        erroresS.erroresS.push(token);
        listaErroresS = erroresS.erroresS;
    }

}


function grafo(dot, vaciar){

    if( typeof grafo.grafo == 'undefined' ) {
        grafo.grafo = "";
    }

    if(vaciar){
        grafo.grafo = "";
    }
    else{
        grafo.grafo = dot;
        arbol = grafo.grafo;
    }

}

function peticion(data) {

    parser.parse(data.texto);

    var url = 'http://localhost:8020/analizar';

    fetch(url, {
        method: 'POST', // or 'PUT'
        body: JSON.stringify(data), // data can be `string` or {object}!
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
        .catch(error => console.error('Error:', error))
        .then(response => { this.grafo(response.grafo, false); });
}




exports.tokens = tokens;
exports.erroresL = erroresL;
exports.erroresS = erroresS;
exports.grafo = grafo;
module.exports = router;