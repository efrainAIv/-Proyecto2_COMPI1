const { stringify } = require("querystring");
const tkn = require("../token/token")
const pars = require("../analyzer/parser");
const { EROFS } = require("constants");

var lex = "";
var fila = 0;
var col = 0;
var nuevaCadena = "";

var comentarioActivo = false;

var tokens = [];
var errores = [];


function hola() {

    alert("hola!");

}

function leerCadena(cadena) {

    fila = 0;
    col = 0;
    lex = "";
    nuevaCadena = "";
    tokens = [];
    errores = [];

    console.log("CADENE ANALIZADA: " + cadena);

    let lineas = cadena.split('\n');
    console.log(lineas.length);
    for (let i = 0; i < lineas.length; i++) {
        console.log("FILA " + i + ":  " + lineas[i]);
        fila++;
        col = 0;

        if (i == lineas.length - 1) {
            estado0(lineas[i] + " ");
        }
        else {
            estado0(lineas[i]);
        }
    }

    listaParser = [];
    if (tokens.length > 0) {
        listaParser = pars.prueba(tokens);
    }

    listaRetorno = [];
    listaRetorno.push(tokens);
    listaRetorno.push(errores);
    listaRetorno.push(listaParser[0]);
    listaRetorno.push(listaParser[1]);
    listaRetorno.push(listaParser[2]);
    return listaRetorno;
}


function comprobarSimbolo(cadena) {

    if (cadena.length == 0) {
        return true;
    }
    if (cadena[0] == ' ') {
        return true;
    }
    if (cadena[0] == '{') {
        return true;
    }
    else if (cadena[0] == '}') {
        return true;
    }
    else if (cadena[0] == '(') {
        return true;
    }
    else if (cadena[0] == ')') {
        return true;
    }
    else if (cadena[0] == '[') {
        return true;
    }
    else if (cadena[0] == ']') {
        return true;
    }
    else if (cadena[0] == ',') {
        return true;
    }
    else if (cadena[0] == '.') {
        return true;
    }
    else if (cadena[0] == ';') {
        return true;
    }
    else if (cadena[0] == ':') {
        return true;
    }
    else if (cadena[0] == '=') {
        if (cadena[1] == '=') {
            return true;
        }
        else {
            return true;
        }
    }
    else if (cadena[0] == '+') {
        if (cadena[1] == '+') {
            return true;
        }
        else {
            return true;
        }
    }
    else if (cadena[0] == '-') {
        if (cadena[1] == '-') {
            return true;
        }
        else {
            return true;
        }
    }
    else if (cadena[0] == '*') {
        return true;
    }
    else if (cadena[0] == '/') {
        return true;
    }
    else if (cadena[0] == '>') {
        if (cadena[1] == '=') {
            return true;
        }
        else {
            return true;
        }
    }
    else if (cadena[0] == '<') {
        if (cadena[1] == '=') {
            return true;
        }
        else {
            return true;
        }
    }
    else if (cadena[0] == '!') {
        if (cadena[1] == '=') {
            return true;
        }
        else {
            return true;
        }
    }
    else if (cadena[0] == '^') {
        return true;
    }
    else if (cadena[0] == '&' && cadena[1] == '&') {
        return true;
    }
    else if (cadena[0] == '|' && cadena[1] == '|') {
        return true;
    }
    else if (cadena[0] == '\t') {
        return true;
    }
    else {
        return false;
    }


}


function agregarSimbolo(cadena) {

    if (cadena.length == 0) {
        return 1
    }
    if (cadena[0] == '{') {
        token = new tkn.Token(cadena[0], tkn.tipo.LLAVE_APERTURA, fila, col);
        tokens.push(token);
        lex = "";
        nuevaCadena = cadena.slice(1, cadena.length);
    }
    else if (cadena[0] == '}') {
        token = new tkn.Token(cadena[0], tkn.tipo.LLAVE_CIERRE, fila, col);
        tokens.push(token);
        lex = "";
        nuevaCadena = cadena.slice(1, cadena.length);
    }
    else if (cadena[0] == '(') {
        token = new tkn.Token(cadena[0], tkn.tipo.PARENTESIS_APERTURA, fila, col);
        tokens.push(token);
        lex = "";
        nuevaCadena = cadena.slice(1, cadena.length);
    }
    else if (cadena[0] == ')') {
        token = new tkn.Token(cadena[0], tkn.tipo.PARENTESIS_CIERRE, fila, col);
        tokens.push(token);
        lex = "";
        nuevaCadena = cadena.slice(1, cadena.length);
    }
    else if (cadena[0] == '[') {
        token = new tkn.Token(cadena[0], tkn.tipo.CORCHETE_APERTURA, fila, col);
        tokens.push(token);
        lex = "";
        nuevaCadena = cadena.slice(1, cadena.length);
    }
    else if (cadena[0] == ']') {
        token = new tkn.Token(cadena[0], tkn.tipo.CORCHETE_CIERRE, fila, col);
        tokens.push(token);
        lex = "";
        nuevaCadena = cadena.slice(1, cadena.length);
    }
    else if (cadena[0] == ',') {
        token = new tkn.Token(cadena[0], tkn.tipo.COMA, fila, col);
        tokens.push(token);
        lex = "";
        nuevaCadena = cadena.slice(1, cadena.length);
    }
    else if (cadena[0] == '.') {
        token = new tkn.Token(cadena[0], tkn.tipo.PUNTO, fila, col);
        tokens.push(token);
        lex = "";
        nuevaCadena = cadena.slice(1, cadena.length);
    }
    else if (cadena[0] == ';') {
        token = new tkn.Token(cadena[0], tkn.tipo.PUNTO_COMA, fila, col);
        tokens.push(token);
        lex = "";
        nuevaCadena = cadena.slice(1, cadena.length);
    }
    else if (cadena[0] == ':') {
        token = new tkn.Token(cadena[0], tkn.tipo.DOS_PUNTOS, fila, col);
        tokens.push(token);
        lex = "";
        nuevaCadena = cadena.slice(1, cadena.length);
    }
    else if (cadena[0] == '=') {
        if (cadena[1] == '=') {
            token = new tkn.Token(cadena[0] + cadena[1], tkn.tipo.IGUAL_LOG, fila, col);
            tokens.push(token);
            lex = "";
            nuevaCadena = cadena.slice(2, cadena.length);
        }
        else {
            token = new tkn.Token(cadena[0], tkn.tipo.IGUAL_AR, fila, col);
            tokens.push(token);
            lex = "";
            nuevaCadena = cadena.slice(1, cadena.length);
        }
    }
    else if (cadena[0] == '+') {
        if (cadena[1] == '+') {
            token = new tkn.Token(cadena[0] + cadena[1], tkn.tipo.INCREMENTO, fila, col);
            tokens.push(token);
            lex = "";
            nuevaCadena = cadena.slice(2, cadena.length);
        }
        else {
            token = new tkn.Token(cadena[0], tkn.tipo.MAS, fila, col);
            tokens.push(token);
            lex = "";
            nuevaCadena = cadena.slice(1, cadena.length);
        }
    }
    else if (cadena[0] == '-') {
        if (cadena[1] == '-') {
            token = new tkn.Token(cadena[0] + cadena[1], tkn.tipo.DECREMENTO, fila, col);
            tokens.push(token);
            lex = "";
            nuevaCadena = cadena.slice(2, cadena.length);
        }
        else {
            token = new tkn.Token(cadena[0], tkn.tipo.MENOS, fila, col);
            tokens.push(token);
            lex = "";
            nuevaCadena = cadena.slice(1, cadena.length);
        }
    }
    else if (cadena[0] == '*') {
        token = new tkn.Token(cadena[0], tkn.tipo.MULTIPLICACION, fila, col);
        tokens.push(token);
        lex = "";
        nuevaCadena = cadena.slice(1, cadena.length);
    }
    else if (cadena[0] == '/') {
        token = new tkn.Token(cadena[0], tkn.tipo.DIVISION, fila, col);
        tokens.push(token);
        lex = "";
        nuevaCadena = cadena.slice(1, cadena.length);
    }
    else if (cadena[0] == '>') {
        if (cadena[1] == '=') {
            token = new tkn.Token(cadena[0] + cadena[1], tkn.tipo.MAYOR_IGUAL, fila, col);
            tokens.push(token);
            lex = "";
            nuevaCadena = cadena.slice(2, cadena.length);
        }
        else {
            token = new tkn.Token(cadena[0], tkn.tipo.MAYOR, fila, col);
            tokens.push(token);
            lex = "";
            nuevaCadena = cadena.slice(1, cadena.length);
        }
    }
    else if (cadena[0] == '<') {
        if (cadena[1] == '=') {
            token = new tkn.Token(cadena[0] + cadena[1], tkn.tipo.MENOR_IGUAL, fila, col);
            tokens.push(token);
            lex = "";
            nuevaCadena = cadena.slice(2, cadena.length);
        }
        else {
            token = new tkn.Token(cadena[0], tkn.tipo.MENOR, fila, col);
            tokens.push(token);
            lex = "";
            nuevaCadena = cadena.slice(1, cadena.length);
        }
    }
    else if (cadena[0] == '!') {
        if (cadena[1] == '=') {
            token = new tkn.Token(cadena[0] + cadena[1], tkn.tipo.DIFERENTE, fila, col);
            tokens.push(token);
            lex = "";
            nuevaCadena = cadena.slice(2, cadena.length);
        }
        else {
            token = new tkn.Token(cadena[0], tkn.tipo.NOT, fila, col);
            tokens.push(token);
            lex = "";
            nuevaCadena = cadena.slice(1, cadena.length);
        }
    }
    else if (cadena[0] == '^') {
        token = new tkn.Token(cadena[0], tkn.tipo.XOR, fila, col);
        tokens.push(token);
        lex = "";
        nuevaCadena = cadena.slice(1, cadena.length);
    }
    else if (cadena[0] == '&' && cadena[1] == '&') {
        token = new tkn.Token(cadena[0] + cadena[1], tkn.tipo.AND, fila, col);
        tokens.push(token);
        lex = "";
        nuevaCadena = cadena.slice(2, cadena.length);
    }
    else if (cadena[0] == '|' && cadena[1] == '|') {
        token = new tkn.Token(cadena[0] + cadena[1], tkn.tipo.OR, fila, col);
        tokens.push(token);
        lex = "";
        nuevaCadena = cadena.slice(2, cadena.length);
    }
    else if (cadena[0] == ' ') {
        nuevaCadena = cadena.slice(1, cadena.length);
    }
    else if (cadena[0] == '\t') {
        nuevaCadena = cadena.slice(1, cadena.length);
    }
}


function estado0(cadena) {

    nuevaCadena = cadena;

    if (cadena.length == 0) {
        return 1;
    }
    if (comentarioActivo) {
        estadoComentarioML(cadena);
    }
    else if (cadena[0] == "/") {
        if (cadena[1] == "/") {
            estadoComentarioLinea(cadena.slice(2, cadena.length));
        }
        else if (cadena[1] == "*") {
            estadoComentarioML(cadena.slice(2, cadena.length));
        }
        else {
            agregarSimbolo(cadena);
        }
    }
    else if (cadena[0] == '\n' || cadena[0] == '\r') {
        return 1;
    } else if (comprobarSimbolo(cadena)) {
        agregarSimbolo(cadena);
    }
    else if (cadena[0] == 'b') {
        lex += cadena[0];
        estadoB(cadena.slice(1, cadena.length));
    } else if (cadena[0] == 'c') {
        lex += cadena[0];
        estadoC(cadena.slice(1, cadena.length));
    } else if (cadena[0] == 'd') {
        lex += cadena[0];
        estadoD(cadena.slice(1, cadena.length));
    } else if (cadena[0] == 'e') {
        lex += cadena[0];
        estadoE(cadena.slice(1, cadena.length));
    } else if (cadena[0] == 'f') {
        lex += cadena[0];
        estadoF(cadena.slice(1, cadena.length));
    } else if (cadena[0] == 'i') {
        lex += cadena[0];
        estadoI(cadena.slice(1, cadena.length));
    } else if (cadena[0] == 'n') {
        lex += cadena[0];
        estadoN(cadena.slice(1, cadena.length));
    } else if (cadena[0] == 'o') {
        lex += cadena[0];
        estadoO(cadena.slice(1, cadena.length));
    } else if (cadena[0] == 'p') {
        lex += cadena[0];
        estadoP(cadena.slice(1, cadena.length));
    } else if (cadena[0] == 'r') {
        lex += cadena[0];
        estadoR(cadena.slice(1, cadena.length));
    } else if (cadena[0] == 's' || cadena[0] == 'S') {
        lex += cadena[0];
        estadoS(cadena.slice(1, cadena.length), cadena[0]);
    } else if (cadena[0] == 't') {
        lex += cadena[0];
        estadoT(cadena.slice(1, cadena.length));
    } else if (cadena[0] == 'v') {
        lex += cadena[0];
        estadoV(cadena.slice(1, cadena.length));
    } else if (cadena[0] == 'w') {
        lex += cadena[0];
        estadoW(cadena.slice(1, cadena.length));
    }
    else if (esNumero(cadena[0])) {
        lex += cadena[0];
        estadoNumeroEntero(cadena.slice(1, cadena.length));
    }
    else if (cadena[0] == '"') {
        estadoCadena(cadena.slice(1, cadena.length));
    }
    else if (cadena[0] == "'") {
        estadoCaracter(cadena.slice(1, cadena.length));
    }
    else {
        estadoAuxiliar(cadena.slice(0, cadena.length));
    }


    estado0(nuevaCadena);
}


function estadoB(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 'r') {
        estado1(cadena.slice(0, cadena.length));
        return 1;
    } else if (cadena[0] == 'o') {
        estado5(cadena.slice(0, cadena.length));
        return 1;
    }
    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estadoC(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 'h') {
        estado11(cadena.slice(0, cadena.length));
        return 1;
    } else if (cadena[0] == 'l') {
        estado14(cadena.slice(0, cadena.length));
        return 1;
    } else if (cadena[0] == 'o') {
        estado18(cadena.slice(0, cadena.length));
        return 1;
    }
    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estadoD(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 'o') {
        estado25(cadena.slice(0, cadena.length))
        return 1;
    }
    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estadoE(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 'l') {
        estado30(cadena.slice(0, cadena.length))
        return 1;
    } else if (cadena[0] == 'x') {
        estado33(cadena.slice(0, cadena.length))
        return 1;
    }
    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estadoF(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 'a') {
        estado39(cadena.slice(0, cadena.length))
        return 1;
    } else if (cadena[0] == 'o') {
        estado43(cadena.slice(0, cadena.length))
        return 1;
    }
    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estadoI(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 'f') {
        estado45(cadena.slice(0, cadena.length))
        return 1;
    } else if (cadena[0] == 'n') {
        estado46(cadena.slice(0, cadena.length))
        return 1;
    } else if (cadena[0] == 'm') {
        estado54(cadena.slice(0, cadena.length))
        return 1;
    }
    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estadoN(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 'e') {
        estado63(cadena.slice(0, cadena.length))
        return 1;
    }
    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estadoO(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 'u') {
        estado65(cadena.slice(0, cadena.length))
        return 1;
    }
    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estadoP(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 'r') {
        estado67(cadena.slice(0, cadena.length))
        return 1;
    } else if (cadena[0] == 'u') {
        estado73(cadena.slice(0, cadena.length))
        return 1;
    }
    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estadoR(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 'e') {
        estado78(cadena.slice(0, cadena.length))
        return 1;
    }
    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estadoS(cadena, anterior) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 't' && anterior == 's') {
        estado83(cadena.slice(0, cadena.length))
        return 1;
    } else if (cadena[0] == 't' && anterior == 'S') {
        estado88(cadena.slice(0, cadena.length))
        return 1;
    } else if (cadena[0] == 'y' && anterior == 'S') {
        estado93(cadena.slice(0, cadena.length))
        return 1;
    }
    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estadoT(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 'r') {
        estado98(cadena.slice(0, cadena.length))
        return 1;
    }
    else if (cadena[0] == 'h') {
        estado108(cadena.slice(0, cadena.length))
        return 1;
    }
    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estadoV(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 'o') {
        estado101(cadena.slice(0, cadena.length))
        return 1;
    }
    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estadoW(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 'h') {
        estado104(cadena.slice(0, cadena.length))
        return 1;
    }
    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}



function estado1(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 'r') {
        lex += cadena[0];
        estado2(cadena.slice(1, cadena.length))
        return 1;
    }

    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estado2(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 'e') {
        lex += cadena[0];
        estado3(cadena.slice(1, cadena.length))
        return 1;
    }

    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estado3(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 'a') {
        lex += cadena[0];
        estado4(cadena.slice(1, cadena.length))
        return 1;
    }

    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estado4(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 'k' && (cadena[1] == '\n' || cadena[1] == '\r' || comprobarSimbolo(cadena.slice(1, cadena.length)))) {
        lex += cadena[0];
        estadoAceptacion(cadena.slice(1, cadena.length))
        return 1;
    }

    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estado5(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 'o') {
        lex += cadena[0];
        estado6(cadena.slice(1, cadena.length))
        return 1;
    }

    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estado6(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 'o') {
        lex += cadena[0];
        estado7(cadena.slice(1, cadena.length))
        return 1;
    }

    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estado7(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 'l') {
        lex += cadena[0];
        estado8(cadena.slice(1, cadena.length))
        return 1;
    }

    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estado8(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 'e') {
        lex += cadena[0];
        estado9(cadena.slice(1, cadena.length))
        return 1;
    }

    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estado9(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 'a') {
        lex += cadena[0];
        estado10(cadena.slice(1, cadena.length))
        return 1;
    }

    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estado10(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 'n' && (cadena[1] == '\n' || cadena[1] == '\r' || comprobarSimbolo(cadena.slice(1, cadena.length)))) {
        lex += cadena[0];
        estadoAceptacion(cadena.slice(1, cadena.length))
        return 1;
    }

    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estado11(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 'h') {
        lex += cadena[0];
        estado12(cadena.slice(1, cadena.length))
        return 1;
    }

    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estado12(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 'a') {
        lex += cadena[0];
        estado13(cadena.slice(1, cadena.length))
        return 1;
    }

    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estado13(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 'r' && (cadena[1] == '\n' || cadena[1] == '\r' || comprobarSimbolo(cadena.slice(1, cadena.length)))) {
        lex += cadena[0];
        estadoAceptacion(cadena.slice(1, cadena.length))
        return 1;
    }

    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estado14(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 'l') {
        lex += cadena[0];
        estado15(cadena.slice(1, cadena.length))
        return 1;
    }

    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estado15(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 'a') {
        lex += cadena[0];
        estado16(cadena.slice(1, cadena.length))
        return 1;
    }

    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estado16(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 's') {
        lex += cadena[0];
        estado17(cadena.slice(1, cadena.length))
        return 1;
    }

    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estado17(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 's' && (cadena[1] == '\n' || cadena[1] == '\r' || comprobarSimbolo(cadena.slice(1, cadena.length)))) {
        lex += cadena[0];
        estadoAceptacion(cadena.slice(1, cadena.length))
        return 1;
    }

    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estado18(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 'o') {
        lex += cadena[0];
        estado19(cadena.slice(1, cadena.length))
        return 1;
    }

    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estado19(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 'n') {
        lex += cadena[0];
        estado20(cadena.slice(1, cadena.length))
        return 1;
    }

    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estado20(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 't') {
        lex += cadena[0];
        estado21(cadena.slice(1, cadena.length))
        return 1;
    }

    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estado21(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 'i') {
        lex += cadena[0];
        estado22(cadena.slice(1, cadena.length))
        return 1;
    }

    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estado22(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 'n') {
        lex += cadena[0];
        estado23(cadena.slice(1, cadena.length))
        return 1;
    }

    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estado23(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 'u') {
        lex += cadena[0];
        estado24(cadena.slice(1, cadena.length))
        return 1;
    }

    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estado24(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 'e' && (cadena[1] == '\n' || cadena[1] == '\r' || comprobarSimbolo(cadena.slice(1, cadena.length)))) {
        lex += cadena[0];
        estadoAceptacion(cadena.slice(1, cadena.length))
        return 1;
    }

    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


//aceptacion
function estado25(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 'o' && (cadena[1] == '\n' || cadena[1] == '\r' || comprobarSimbolo(cadena.slice(1, cadena.length)))) {
        lex += cadena[0];
        estadoAceptacion(cadena.slice(1, cadena.length))
        return 1;
    }
    else if (cadena[0] == 'o' && cadena[1] == 'u') {
        lex += cadena[0];
        estado26(cadena.slice(1, cadena.length))
        return 1;
    }

    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estado26(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 'u') {
        lex += cadena[0];
        estado27(cadena.slice(1, cadena.length))
        return 1;
    }


    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estado27(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 'b') {
        lex += cadena[0];
        estado28(cadena.slice(1, cadena.length))
        return 1;
    }

    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estado28(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 'l') {
        lex += cadena[0];
        estado29(cadena.slice(1, cadena.length))
        return 1;
    }

    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estado29(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 'e' && (cadena[1] == '\n' || cadena[1] == '\r' || comprobarSimbolo(cadena.slice(1, cadena.length)))) {
        lex += cadena[0];
        estadoAceptacion(cadena.slice(1, cadena.length))
        return 1;
    }

    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estado30(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 'l') {
        lex += cadena[0];
        estado31(cadena.slice(1, cadena.length))
        return 1;
    }

    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estado31(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 's') {
        lex += cadena[0];
        estado32(cadena.slice(1, cadena.length))
        return 1;
    }

    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estado32(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 'e' && (cadena[1] == '\n' || cadena[1] == '\r' || comprobarSimbolo(cadena.slice(1, cadena.length)))) {
        lex += cadena[0];
        estadoAceptacion(cadena.slice(1, cadena.length))
        return 1;
    }

    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estado33(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 'x') {
        lex += cadena[0];
        estado34(cadena.slice(1, cadena.length))
        return 1;
    }

    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estado34(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 't') {
        lex += cadena[0];
        estado35(cadena.slice(1, cadena.length))
        return 1;
    }

    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estado35(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 'e') {
        lex += cadena[0];
        estado36(cadena.slice(1, cadena.length))
        return 1;
    }

    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estado36(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 'n') {
        lex += cadena[0];
        estado37(cadena.slice(1, cadena.length))
        return 1;
    }

    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estado37(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 'd') {
        lex += cadena[0];
        estado38(cadena.slice(1, cadena.length))
        return 1;
    }

    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estado38(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 's' && (cadena[1] == '\n' || cadena[1] == '\r' || comprobarSimbolo(cadena.slice(1, cadena.length)))) {
        lex += cadena[0];
        estadoAceptacion(cadena.slice(1, cadena.length))
        return 1;
    }

    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estado39(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 'a') {
        lex += cadena[0];
        estado40(cadena.slice(1, cadena.length))
        return 1;
    }

    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estado40(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 'l') {
        lex += cadena[0];
        estado41(cadena.slice(1, cadena.length))
        return 1;
    }

    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estado41(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 's') {
        lex += cadena[0];
        estado42(cadena.slice(1, cadena.length))
        return 1;
    }

    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estado42(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 'e' && (cadena[1] == '\n' || cadena[1] == '\r' || comprobarSimbolo(cadena.slice(1, cadena.length)))) {
        lex += cadena[0];
        estadoAceptacion(cadena.slice(1, cadena.length))
        return 1;
    }

    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estado43(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 'o') {
        lex += cadena[0];
        estado44(cadena.slice(1, cadena.length))
        return 1;
    }

    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estado44(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 'r' && (cadena[1] == '\n' || cadena[1] == '\r' || comprobarSimbolo(cadena.slice(1, cadena.length)))) {
        lex += cadena[0];
        estadoAceptacion(cadena.slice(1, cadena.length))
        return 1;
    }

    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estado45(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 'f' && (cadena[1] == '\n' || cadena[1] == '\r' || comprobarSimbolo(cadena.slice(1, cadena.length)))) {
        lex += cadena[0];
        estadoAceptacion(cadena.slice(1, cadena.length))
        return 1;
    }

    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estado46(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 'n') {
        lex += cadena[0];
        estado47(cadena.slice(1, cadena.length))
        return 1;
    }

    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


//aceptacion
function estado47(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 't' && (cadena[1] == '\n' || cadena[1] == '\r' || comprobarSimbolo(cadena.slice(1, cadena.length)))) {
        lex += cadena[0];
        estadoAceptacion(cadena.slice(1, cadena.length))
        return 1;
    }
    else if (cadena[0] == 't' && cadena[1] == 'e') {
        lex += cadena[0];
        estado48(cadena.slice(1, cadena.length))
        return 1;
    }

    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estado48(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 'e') {
        lex += cadena[0];
        estado49(cadena.slice(1, cadena.length))
        return 1;
    }

    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estado49(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 'r') {
        lex += cadena[0];
        estado50(cadena.slice(1, cadena.length))
        return 1;
    }

    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estado50(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 'f') {
        lex += cadena[0];
        estado51(cadena.slice(1, cadena.length))
        return 1;
    }

    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estado51(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 'a') {
        lex += cadena[0];
        estado52(cadena.slice(1, cadena.length))
        return 1;
    }

    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estado52(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 'c') {
        lex += cadena[0];
        estado53(cadena.slice(1, cadena.length))
        return 1;
    }

    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estado53(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 'e' && (cadena[1] == '\n' || cadena[1] == '\r' || comprobarSimbolo(cadena.slice(1, cadena.length)))) {
        lex += cadena[0];
        estadoAceptacion(cadena.slice(1, cadena.length))
        return 1;
    }

    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estado54(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 'm') {
        lex += cadena[0];
        estado55(cadena.slice(1, cadena.length))
        return 1;
    }

    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estado55(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 'p') {
        lex += cadena[0];
        estado56(cadena.slice(1, cadena.length))
        return 1;
    }

    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estado56(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 'l') {
        lex += cadena[0];
        estado57(cadena.slice(1, cadena.length))
        return 1;
    }

    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estado57(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 'e') {
        lex += cadena[0];
        estado58(cadena.slice(1, cadena.length))
        return 1;
    }

    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estado58(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 'm') {
        lex += cadena[0];
        estado59(cadena.slice(1, cadena.length))
        return 1;
    }

    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estado59(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 'e') {
        lex += cadena[0];
        estado60(cadena.slice(1, cadena.length))
        return 1;
    }

    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estado60(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 'n') {
        lex += cadena[0];
        estado61(cadena.slice(1, cadena.length))
        return 1;
    }

    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estado61(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 't') {
        lex += cadena[0];
        estado62(cadena.slice(1, cadena.length))
        return 1;
    }

    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estado62(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 's' && (cadena[1] == '\n' || cadena[1] == '\r' || comprobarSimbolo(cadena.slice(1, cadena.length)))) {
        lex += cadena[0];
        estadoAceptacion(cadena.slice(1, cadena.length))
        return 1;
    }

    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estado63(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 'e') {
        lex += cadena[0];
        estado64(cadena.slice(1, cadena.length))
        return 1;
    }

    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estado64(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 'w' && (cadena[1] == '\n' || cadena[1] == '\r' || comprobarSimbolo(cadena.slice(1, cadena.length)))) {
        lex += cadena[0];
        estadoAceptacion(cadena.slice(1, cadena.length))
        return 1;
    }

    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estado65(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 'u') {
        lex += cadena[0];
        estado66(cadena.slice(1, cadena.length))
        return 1;
    }

    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estado66(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 't' && (cadena[1] == '\n' || cadena[1] == '\r' || comprobarSimbolo(cadena.slice(1, cadena.length)))) {
        lex += cadena[0];
        estadoAceptacion(cadena.slice(1, cadena.length))
        return 1;
    }

    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estado67(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 'r') {
        lex += cadena[0];
        estado68(cadena.slice(1, cadena.length))
        return 1;
    }

    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estado68(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 'i') {
        lex += cadena[0];
        estado69(cadena.slice(1, cadena.length))
        return 1;
    }

    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estado69(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 'n') {
        lex += cadena[0];
        estado70(cadena.slice(1, cadena.length))
        return 1;
    }

    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estado70(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 't' && (cadena[1] == '\n' || cadena[1] == '\r' || comprobarSimbolo(cadena.slice(1, cadena.length)))) {
        lex += cadena[0];
        estadoAceptacion(cadena.slice(1, cadena.length))
        return 1;
    }
    else if (cadena[0] == 't' && cadena[1] == 'l') {
        lex += cadena[0];
        estado71(cadena.slice(1, cadena.length))
        return 1;
    }

    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estado71(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 'l') {
        lex += cadena[0];
        estado72(cadena.slice(1, cadena.length))
        return 1;
    }

    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estado72(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 'n' && (cadena[1] == '\n' || cadena[1] == '\r' || comprobarSimbolo(cadena.slice(1, cadena.length)))) {
        lex += cadena[0];
        estadoAceptacion(cadena.slice(1, cadena.length))
        return 1;
    }

    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estado73(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 'u') {
        lex += cadena[0];
        estado74(cadena.slice(1, cadena.length))
        return 1;
    }

    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estado74(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 'b') {
        lex += cadena[0];
        estado75(cadena.slice(1, cadena.length))
        return 1;
    }

    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estado75(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 'l') {
        lex += cadena[0];
        estado76(cadena.slice(1, cadena.length))
        return 1;
    }

    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estado76(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 'i') {
        lex += cadena[0];
        estado77(cadena.slice(1, cadena.length))
        return 1;
    }

    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estado77(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 'c' && (cadena[1] == '\n' || cadena[1] == '\r' || comprobarSimbolo(cadena.slice(1, cadena.length)))) {
        lex += cadena[0];
        estadoAceptacion(cadena.slice(1, cadena.length))
        return 1;
    }

    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estado78(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 'e') {
        lex += cadena[0];
        estado79(cadena.slice(1, cadena.length))
        return 1;
    }

    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estado79(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 't') {
        lex += cadena[0];
        estado80(cadena.slice(1, cadena.length))
        return 1;
    }

    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estado80(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 'u') {
        lex += cadena[0];
        estado81(cadena.slice(1, cadena.length))
        return 1;
    }

    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estado81(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 'r') {
        lex += cadena[0];
        estado82(cadena.slice(1, cadena.length))
        return 1;
    }

    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estado82(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 'n' && (cadena[1] == '\n' || cadena[1] == '\r' || comprobarSimbolo(cadena.slice(1, cadena.length)))) {
        lex += cadena[0];
        estadoAceptacion(cadena.slice(1, cadena.length))
        return 1;
    }

    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estado83(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 't') {
        lex += cadena[0];
        estado84(cadena.slice(1, cadena.length))
        return 1;
    }

    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estado84(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 'a') {
        lex += cadena[0];
        estado85(cadena.slice(1, cadena.length))
        return 1;
    }

    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estado85(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 't') {
        lex += cadena[0];
        estado86(cadena.slice(1, cadena.length))
        return 1;
    }

    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estado86(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 'i') {
        lex += cadena[0];
        estado87(cadena.slice(1, cadena.length))
        return 1;
    }

    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estado87(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 'c' && (cadena[1] == '\n' || cadena[1] == '\r' || comprobarSimbolo(cadena.slice(1, cadena.length)))) {
        lex += cadena[0];
        estadoAceptacion(cadena.slice(1, cadena.length))
        return 1;
    }

    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estado88(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 't') {
        lex += cadena[0];
        estado89(cadena.slice(1, cadena.length))
        return 1;
    }

    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estado89(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 'r') {
        lex += cadena[0];
        estado90(cadena.slice(1, cadena.length))
        return 1;
    }

    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estado90(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 'i') {
        lex += cadena[0];
        estado91(cadena.slice(1, cadena.length))
        return 1;
    }

    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estado91(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 'n') {
        lex += cadena[0];
        estado92(cadena.slice(1, cadena.length))
        return 1;
    }

    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estado92(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 'g' && (cadena[1] == '\n' || cadena[1] == '\r' || comprobarSimbolo(cadena.slice(1, cadena.length)))) {
        lex += cadena[0];
        estadoAceptacion(cadena.slice(1, cadena.length))
        return 1;
    }

    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estado93(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 'y') {
        lex += cadena[0];
        estado94(cadena.slice(1, cadena.length))
        return 1;
    }

    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estado94(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 's') {
        lex += cadena[0];
        estado95(cadena.slice(1, cadena.length))
        return 1;
    }

    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estado95(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 't') {
        lex += cadena[0];
        estado96(cadena.slice(1, cadena.length))
        return 1;
    }

    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estado96(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 'e') {
        lex += cadena[0];
        estado97(cadena.slice(1, cadena.length))
        return 1;
    }

    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estado97(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 'm' && (cadena[1] == '\n' || cadena[1] == '\r' || comprobarSimbolo(cadena.slice(1, cadena.length)))) {
        lex += cadena[0];
        estadoAceptacion(cadena.slice(1, cadena.length))
        return 1;
    }

    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estado98(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 'r') {
        lex += cadena[0];
        estado99(cadena.slice(1, cadena.length))
        return 1;
    }

    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estado99(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 'u') {
        lex += cadena[0];
        estado100(cadena.slice(1, cadena.length))
        return 1;
    }

    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estado100(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 'e' && (cadena[1] == '\n' || cadena[1] == '\r' || comprobarSimbolo(cadena.slice(1, cadena.length)))) {
        lex += cadena[0];
        estadoAceptacion(cadena.slice(1, cadena.length))
        return 1;
    }

    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estado101(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 'o') {
        lex += cadena[0];
        estado102(cadena.slice(1, cadena.length))
        return 1;
    }

    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estado102(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 'i') {
        lex += cadena[0];
        estado103(cadena.slice(1, cadena.length))
        return 1;
    }

    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estado103(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 'd' && (cadena[1] == '\n' || cadena[1] == '\r' || comprobarSimbolo(cadena.slice(1, cadena.length)))) {
        lex += cadena[0];
        estadoAceptacion(cadena.slice(1, cadena.length))
        return 1;
    }

    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estado104(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 'h') {
        lex += cadena[0];
        estado105(cadena.slice(1, cadena.length))
        return 1;
    }

    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estado105(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 'i') {
        lex += cadena[0];
        estado106(cadena.slice(1, cadena.length))
        return 1;
    }

    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estado106(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 'l') {
        lex += cadena[0];
        estado107(cadena.slice(1, cadena.length))
        return 1;
    }

    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estado107(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 'e' && (cadena[1] == '\n' || cadena[1] == '\r' || comprobarSimbolo(cadena.slice(1, cadena.length)))) {
        lex += cadena[0];
        estadoAceptacion(cadena.slice(1, cadena.length))
        return 1;
    }

    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estado108(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 'h') {
        lex += cadena[0];
        estado109(cadena.slice(1, cadena.length))
        return 1;
    }

    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estado109(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 'i') {
        lex += cadena[0];
        estado110(cadena.slice(1, cadena.length))
        return 1;
    }

    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estado110(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == 's' && (cadena[1] == '\n' || cadena[1] == '\r' || comprobarSimbolo(cadena.slice(1, cadena.length)))) {
        lex += cadena[0];
        estadoAceptacion(cadena.slice(1, cadena.length))
        return 1;
    }

    else {
        estadoAuxiliar(cadena);
    }
    //agregar estado Aux
}


function estadoAuxiliar(cadena) {

    nuevaCadena = cadena;
    col++;

    if (comprobarSimbolo(cadena) || cadena[0] == '\n' || cadena[0] == '\r') {
        token = new tkn.Token(lex, 6, fila, col);
        tokens.push(token);
        lex = "";
        return 1;
    }
    else if (esID(cadena[0])) {
        lex += cadena[0];
        estadoAuxiliar(cadena.slice(1, cadena.length));
    }
    else {

        if (lex.length > 0) {
            token = new tkn.Token(lex, 6, fila, col);
            tokens.push(token);
        }

        token = new tkn.Token(cadena[0], 36, fila, col);
        errores.push(token);
        nuevaCadena = cadena.slice(1, cadena.length);
        return 1;
    }

}


function estadoNumeroEntero(cadena) {

    nuevaCadena = cadena;
    col++;

    if (comprobarSimbolo(cadena) || cadena[0] == '\n' || cadena[0] == '\r') {
        if (cadena[0] == '.' && esNumero(cadena[1])) {
            lex += cadena[0];
            estadoNumeroDecimal(cadena.slice(1, cadena.length));
            return 1;
        }
        else {
            token = new tkn.Token(lex, 7, fila, col);
            tokens.push(token);
            lex = "";
            return 1;
        }
    }
    else if (esNumero(cadena[0])) {
        lex += cadena[0];
        estadoNumeroEntero(cadena.slice(1, cadena.length));
    }
    else {
        token = new tkn.Token(cadena[0], 36, fila, col);
        errores.push(token);
        nuevaCadena = cadena.slice(1, cadena.length);
        return 1;
    }

}


function estadoNumeroDecimal(cadena) {

    nuevaCadena = cadena;
    col++;

    if (comprobarSimbolo(cadena) || cadena[0] == '\n' || cadena[0] == '\r') {
        token = new tkn.Token(lex, 8, fila, col);
        tokens.push(token);
        lex = "";
        return 1;
    }
    else if (esNumero(cadena[0])) {
        lex += cadena[0];
        estadoNumeroDecimal(cadena.slice(1, cadena.length));
    }
    else {
        token = new tkn.Token(cadena[0], 36, fila, col);
        errores.push(token);
        nuevaCadena = cadena.slice(1, cadena.length);
        return 1;
    }

}


function estadoCadena(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena.length == 1 && cadena[0] != '"') {
        token = new tkn.Token(lex, 2, fila, col);
        tokens.push(token);
        lex = "";
        nuevaCadena = "";
        return 1;
    }
    else {
        if (cadena[0] != '"') {
            lex += cadena[0];
            estadoCadena(cadena.slice(1, cadena.length));
        }
        else {
            token = new tkn.Token(lex, 2, fila, col);
            tokens.push(token);
            lex = "";
            nuevaCadena = cadena.slice(1, cadena.length);
            return 1;
        }
    }

}

function estadoCaracter(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] != "'") {
        token = new tkn.Token(lex + cadena[0], 5, fila, col);
        tokens.push(token);
        lex = "";
        nuevaCadena = cadena.slice(2, cadena.length);
    }
    else {
        token = new tkn.Token(lex, 5, fila, col);
        tokens.push(token);
        lex = "";
        nuevaCadena = cadena.slice(1, cadena.length);
    }

    return 1;
}


function estadoComentarioLinea(cadena) {

    nuevaCadena = cadena;
    col++;

    if ((cadena.length == 1 && (cadena[0] != '\n' || cadena[0] != '\r')) || cadena[0] == '\n' || cadena[0] == '\r') {
        token = new tkn.Token(lex, 4, fila, col);
        tokens.push(token);
        lex = "";
        nuevaCadena = cadena[0];
        return 1;
    }
    else {
        lex += cadena[0];
        estadoComentarioLinea(cadena.slice(1, cadena.length));
    }

}

function estadoComentarioML(cadena) {

    nuevaCadena = cadena;
    col++;

    if (cadena[0] == '\n' || cadena[0] == '\r') {
        lex += cadena[0];
        nuevaCadena = cadena.slice(1, cadena.length);
        comentarioActivo = true;
        return 1;
    }
    else if (cadena.length == 1) {
        token = new tkn.Token(lex, 3, fila, col);
        tokens.push(token);
        lex = "";
        nuevaCadena = "";
        comentarioActivo = false;
        return 1;
    }
    else if (cadena[0] == "*" && cadena[1] == "/") {
        token = new tkn.Token(lex, 3, fila, col);
        tokens.push(token);
        lex = "";
        nuevaCadena = cadena.slice(2, cadena.length);
        comentarioActivo = false;
        return 1;
    }
    else {
        lex += cadena[0];
        estadoComentarioML(cadena.slice(1, cadena.length));
    }

}






function esNumero(cadena) {
    if (cadena.charCodeAt(0) > 47 && cadena.charCodeAt(0) < 58) {
        return true;
    }
}

function esID(cadena) {

    if (cadena.charCodeAt(0) > 47 && cadena.charCodeAt(0) < 58) {
        return true;
    }
    else if (cadena.charCodeAt(0) > 64 && cadena.charCodeAt(0) < 91) {
        return true;
    }
    else if (cadena.charCodeAt(0) > 96 && cadena.charCodeAt(0) < 123) {
        return true;
    }
    else if (cadena.charCodeAt(0) == 95) {
        return true;
    }
    else {
        return false;
    }

}

function estadoAceptacion(cadena) {

    console.log(lex + " AGREGADO");

    nuevaCadena = cadena;

    token = new tkn.Token(lex, 1, fila, col);
    tokens.push(token);
    lex = "";

}
exports.leerCadena = leerCadena;