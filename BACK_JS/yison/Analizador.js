const parser = require('../Gramatica');
const traductor = require ('../traductor/javaScript');
const tokens = [];


function analizar() {

    texto = "public interface ola { void hola(String h); } public class main { public static void main(String args[]){} }"

    parser.parse(texto);

    for (let i = 0; i < parser.listaTokens.length; i++) {
        console.log("Lexema: " + parser.listaTokens[i].lexema + " Fila: " + parser.listaTokens[i].fila + " Col: " + parser.listaTokens[i].columna+" Tipo: "+parser.listaTokens[i].tipo);
    }

    console.log("Cantidad de tokens " + parser.listaTokens.length);
    console.log("");
    console.log("-------------------- TRADUCCION --------------------");
    console.log(traductor.traducir(parser.listaTokens));

}


analizar();

exports.tokens = tokens;