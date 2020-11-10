const parser = require('../Gramatica');
const traductor = require ('../traductor/javaScript');
const tokens = [];


function analizar() {

    parser.parse("public class main { public static void main (String args[]){ x=10; boolean falg = true; if(\"hola\"+(var*(19/nu))>=false&&(true||(var^false))){ var=false; } } } ");

    for (let i = 0; i < parser.lista.length; i++) {
        console.log("Lexema: " + parser.lista[i].lexema + " Fila: " + parser.lista[i].fila + " Col: " + parser.lista[i].columna+" Tipo: "+parser.lista[i].tipo);
    }

    console.log("Cantidad de tokens " + parser.lista.length);
    console.log("");
    console.log("-------------------- TRADUCCION --------------------");
    console.log(traductor.traducir(parser.lista));

}


analizar();

exports.tokens = tokens;