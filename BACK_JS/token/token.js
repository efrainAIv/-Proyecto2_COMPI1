const tipo = Object.freeze({
    "P_RESERVADA":1,
    "CADENA":2,
    "COMENTARIO_ML":3,
    "COMENTARIO_SIMPLE":4,
    "CARACTER":5,
    "ID":6,
    "ENTERO":7,
    "DECIMAL":8,
    "LLAVE_APERTURA":9,
    "LLAVE_CIERRE":10,
    "PARENTESIS_APERTURA":11,
    "PARENTESIS_CIERRE":12,
    "CORCHETE_APERTURA":13,
    "CORCHETE_CIERRE":14,
    "COMA":15,
    "PUNTO":16,
    "IGUAL_AR":17,  //IGUAL ARITMETICO
    "PUNTO_COMA":18,
    "DOS_PUNTOS":19,
    "MAS":20,
    "MENOS":21,
    "MULTIPLICACION":22,
    "DIVISION":23,
    "MAYOR":24,
    "MENOR":25,
    "NOT":26,
    "XOR":27,
    "AND":28,
    "OR":29,
    "MAYOR_IGUAL":30,
    "MENOR_IGUAL":31,
    "IGUAL_LOG":32,
    "DIFERENTE":33,
    "INCREMENTO":34,
    "DECREMENTO":35,
    "DESCONOCIDO":36,
    "VACIO":37
});

function Token(lexema, tipo, fila, columna){

    this.lexema = lexema;
    this.tipo = tipo;
    this.fila = fila;
    this.columna = columna;

    this.printToken =function(){
        return "Lexema: "+this.lexema+" Tipo: "+this.tipo+" Fila: "+this.fila+" Col: "+this.columna
    }

}


exports.tipo = tipo;
exports.Token = Token;
