const tkn = require("../token/token");

var tokens = [];
var indice;
var tokenAct;
var error;
var errores =   [];

var salto = false;
var incdec = true;
var comp = true;

var panico = false;

var py = "";
var tab = 0;

var grafo = "";


function prueba(tokensLex) {

    errores = [];
    tab = 0;
    panico = false;
    salto = false;
    incdec = true;
    comp = true;
    py = "";
    indice = 0;
    error = false;
    tokens = tokensLex;
    tokenAct = tokens[indice];

    grafo = "";

    INICIO();

    if (!error && tokenAct.tipo == tkn.tipo.VACIO) {
        console.log("Analisis Correcto");
    }
    else {
        console.log("Analisis Inorrecto");
    }

    console.log("****************------------*******************")
    console.log("**************** TRADUCCION *******************")
    console.log("****************------------*******************")
    console.log(py);
    console.log("-----------------------------------------------");
    console.log("-----------------------------------------------");
    console.log("-----------------------------------------------");
    console.log("-----------------------------------------------");
    console.log("");

    listaRetorno = [];
    listaRetorno.push(errores);
    listaRetorno.push(py);
    listaRetorno.push(grafo);
    return listaRetorno;
    //console.log(grafo);
}

//----------------------------------- TIPOS ---------------------------

function TIPO(id) {

    if (tokenAct.tipo == tkn.tipo.P_RESERVADA && tokenAct.lexema == "int") {

        py += "var ";

        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
        parea(tokenAct.tipo);

    }
    else if (tokenAct.tipo == tkn.tipo.P_RESERVADA && tokenAct.lexema == "boolean") {

        py += "var ";

        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
        parea(tokenAct.tipo);

    }
    else if (tokenAct.tipo == tkn.tipo.P_RESERVADA && tokenAct.lexema == "double") {

        py += "var ";

        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
        parea(tokenAct.tipo);



    }
    else if (tokenAct.tipo == tkn.tipo.P_RESERVADA && tokenAct.lexema == "String") {

        py += "var ";

        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
        parea(tokenAct.tipo);



    }
    else if (tokenAct.tipo == tkn.tipo.P_RESERVADA && tokenAct.lexema == "char") {

        py += "var ";

        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
        parea(tokenAct.tipo);



    }
    else {
        error = true;
        panicMode();
    }

}

//---------------------------------------------------------------------

//----------------------------------- OPERADORES ---------------------------

function OP_ARIT(id) {

    if (tokenAct.tipo == tkn.tipo.MAYOR) {

        parea(tokenAct.tipo);

    }
    else if (tokenAct.tipo == tkn.tipo.MENOR) {

        parea(tokenAct.tipo);

    }
    else if (tokenAct.tipo == tkn.tipo.IGUAL_LOG) {

        parea(tokenAct.tipo);

    }
    else if (tokenAct.tipo == tkn.tipo.MENOR_IGUAL) {

        parea(tokenAct.tipo);

    }
    else if (tokenAct.tipo == tkn.tipo.MAYOR_IGUAL) {

        parea(tokenAct.tipo);

    }
    else {
        error = true;
        panicMode();
    }

}


function OP_LOG(id) {

    if (tokenAct.tipo == tkn.tipo.IGUAL_LOG) {

        parea(tokenAct.tipo);

    }
    else if (tokenAct.tipo == tkn.tipo.DIFERENTE) {

        parea(tokenAct.tipo);

    }
    else {

    }

}


function OP_DEC_INC(id) {

    if (tokenAct.tipo == tkn.tipo.INCREMENTO) {

        if (incdec) {
            py += "+=";
        }

        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
        parea(tokenAct.tipo);

    }
    else if (tokenAct.tipo == tkn.tipo.DECREMENTO) {

        if (incdec) {
            py += "-=";
        }

        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
        parea(tokenAct.tipo);

    }
    else {
        error = true;
        panicMode();
    }

}

//--------------------------------------------------------------------------

//--------------------------------------- ID_LLAMADA -----------------------------------


function ID_LLAMADA(id) {

    if (tokenAct.tipo == tkn.tipo.ID) {

        py += tokenAct.lexema + "";

        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
        parea(tokenAct.tipo);

        if (!error && !panico) {

            ID_LLAMADA1(id);

        }

    }

}

function ID_LLAMADA1(id) {

    if (tokenAct.tipo == tkn.tipo.PARENTESIS_APERTURA) {

        py += "(";

        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
        parea(tokenAct.tipo);

        if (!error && !panico) {

            PARAMS(id);

            if (!error && !panico) {

                if (tokenAct.tipo == tkn.tipo.PARENTESIS_CIERRE) {

                    py += ")";

                    grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
                    grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
                    parea(tokenAct.tipo);

                }
                else {
                    error = true;
                    panicMode();
                }

            }

        }

    }
    else if (tokenAct.tipo == tkn.tipo.INCREMENTO) {

        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
        parea(tokenAct.tipo);

    }
    else if (tokenAct.tipo == tkn.tipo.DECREMENTO) {

        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
        parea(tokenAct.tipo);

    }
    else {

    }

}

//--------------------------------------- EXPRESIONES (TODAS) -----------------------------------
function EXPS(id) {

    if (tokenAct.tipo == tkn.tipo.PARENTESIS_APERTURA) {

        py += "(";

        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
        parea(tokenAct.tipo);

        if (!error && !panico) {

            EXPS(id);

            if (!error && !panico) {

                if (tokenAct.tipo == tkn.tipo.PARENTESIS_CIERRE) {

                    py += ")";

                    grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
                    grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
                    parea(tokenAct.tipo);

                    if (!error && !panico) {

                        SYM(id);

                    }


                }
                else {

                    error = true;
                    panicMode();

                }

            }


        }

    }
    else if (tokenAct.tipo == tkn.tipo.ID) {

        ID_LLAMADA(id);

        if (!error && !panico) {

            SYM(id);

        }

    }
    else if (tokenAct.tipo == tkn.tipo.ENTERO || tokenAct.tipo == tkn.tipo.DECIMAL) {

        EXP(id);

    }
    else if (tokenAct.tipo == tkn.tipo.P_RESERVADA && tokenAct.lexema == "true") {

        EXP_LOG(id);

    }
    else if (tokenAct.tipo == tkn.tipo.P_RESERVADA && tokenAct.lexema == "false") {

        EXP_LOG(id);

    }
    else if (tokenAct.tipo == tkn.tipo.NOT) {

        EXP_LOG(id);

    }
    else {

        error = true;
        panicMode();
    }


}


function SYM(id) {

    if (tokenAct.tipo == tkn.tipo.MAS || tokenAct.tipo == tkn.tipo.MENOS ||
        tokenAct.tipo == tkn.tipo.MULTIPLICACION || tokenAct.tipo == tkn.tipo.DIVISION
    ) {

        ARITMETICOS(id);

        if (!error && !panico) {

            EXP(id);

        }

    }
    else if (tokenAct.tipo == tkn.tipo.OR || tokenAct.tipo == tkn.tipo.AND || tokenAct.tipo == tkn.tipo.XOR) {

        LOGICOS(id);

        if (!error && !panico) {

            EXP_LOG(id);

        }

    }
    else {

        error = true;
        panicMode();

    }

}


function ARITMETICOS(id) {

    if (tokenAct.tipo == tkn.tipo.MAS) {

        py += "+";

        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
        parea(tokenAct.tipo);

        /* if (!error && !panico) {
 
             EXP(id);
 
         }*/

    }
    else if (tokenAct.tipo == tkn.tipo.MENOS) {

        py += "-";

        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
        parea(tokenAct.tipo);

        /* if (!error && !panico) {
 
             EXP(id);
 
         }*/

    }
    else if (tokenAct.tipo == tkn.tipo.MULTIPLICACION) {

        py += "*";

        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
        parea(tokenAct.tipo);

        /* if (!error && !panico) {
 
             EXP(id);
 
         }*/

    }
    else if (tokenAct.tipo == tkn.tipo.DIVISION) {

        py += "/";

        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
        parea(tokenAct.tipo);

        /* if (!error && !panico) {
 
             EXP(id);
 
         }*/

    }
    else {
        error = true;
        panicMode();
    }

}


function LOGICOS(id) {

    if (tokenAct.tipo == tkn.tipo.OR) {
        py += " or ";

        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
        parea(tokenAct.tipo);
    }
    else if (tokenAct.tipo == tkn.tipo.AND) {
        py += " and ";

        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
        parea(tokenAct.tipo);
    }
    else if (tokenAct.tipo == tkn.tipo.XOR) {
        py += " xor ";

        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
        parea(tokenAct.tipo);
    }
    else {
        error = true;
        panicMode();
    }

}

//---------------------------------------------------------------------------------------------

//--------------------------------------- CONDICIONES -----------------------------------

function CONDICION(id) {

    let temp = id;
    id = '"' + tokenAct.fila + "" + tokenAct.columna + "lbl" + '"'+"\n";
    grafo += id + "[label=\"EXPRESION\"]\n";
    grafo += temp + "->" + id;


    if (tokenAct.tipo == tkn.tipo.PARENTESIS_APERTURA) {

        py += "(";

        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
        parea(tokenAct.tipo);

        if (!error && !panico) {

            EXPS(id);

            if (!error && !panico) {

                if (tokenAct.tipo == tkn.tipo.PARENTESIS_CIERRE) {

                    py += ")";

                    grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
                    grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
                    parea(tokenAct.tipo);

                    if (!error && !panico) {

                        SYM_CONDICION(id);

                    }


                }
                else {

                    error = true;
                    panicMode();

                }

            }


        }

    }
    else if (tokenAct.tipo == tkn.tipo.ID) {

        ID_LLAMADA(id);

        if (!error && !panico) {

            SYM_CONDICION(id);

        }

    }
    else if (tokenAct.tipo == tkn.tipo.ENTERO || tokenAct.tipo == tkn.tipo.DECIMAL || tokenAct.tipo == tkn.tipo.MENOS) {

        EXP(id);

    }
    else if (tokenAct.tipo == tkn.tipo.P_RESERVADA && tokenAct.lexema == "true") {

        EXP_LOG(id);

    }
    else if (tokenAct.tipo == tkn.tipo.P_RESERVADA && tokenAct.lexema == "false") {

        EXP_LOG(id);

    }
    else if (tokenAct.tipo == tkn.tipo.NOT) {

        EXP_LOG(id);

    }
    else if (tokenAct.tipo == tkn.tipo.CADENA) {

        COND1(id);

    }
    else if (tokenAct.tipo == tkn.tipo.CARACTER) {

        py += "'" + tokenAct.lexema + "'";

        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
        parea(tokenAct.tipo);

        if (!error && !panico) {

            CONCAT_LOG(id);

        }

    }
    else {

        error = true;
        panicMode();
    }


}

function COND1(id) {

    /*
    if(tokenAct.tipo == tkn.tipo.MAS){
        
        parea(tokenAct.tipo);

        if(!error){

            STRING2(id);

        }

    }
    else {

    }
    */
    STRING2(id);

}

function SYM_CONDICION(id) {

    if (tokenAct.tipo == tkn.tipo.MAS || tokenAct.tipo == tkn.tipo.MENOS ||
        tokenAct.tipo == tkn.tipo.MULTIPLICACION || tokenAct.tipo == tkn.tipo.DIVISION
    ) {

        ARITMETICOS_CONDICION(id);

    }
    else if (tokenAct.tipo == tkn.tipo.OR || tokenAct.tipo == tkn.tipo.AND || tokenAct.tipo == tkn.tipo.XOR) {

        LOGICOS(id);

        if (!error && !panico) {

            EXP_LOG(id);

            if (!error && !panico) {

                CONCAT_LOG(id);

            }
        }

    }
    else {

    }

}


function ARITMETICOS_CONDICION(id) {

    if (tokenAct.tipo == tkn.tipo.MAS) {

        py += "+";

        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
        parea(tokenAct.tipo);

        if (!error && !panico) {

            CONCAT(id);

        }

    }
    else if (tokenAct.tipo == tkn.tipo.MENOS) {

        py += "-";

        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
        parea(tokenAct.tipo);

        if (!error && !panico) {

            EXP(id);

        }

    }
    else if (tokenAct.tipo == tkn.tipo.MULTIPLICACION) {

        py += "*";

        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
        parea(tokenAct.tipo);

        if (!error && !panico) {

            EXP(id);

        }

    }
    else if (tokenAct.tipo == tkn.tipo.DIVISION) {

        py += "/";

        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
        parea(tokenAct.tipo);

        if (!error && !panico) {

            EXP(id);

        }

    }
    else {
        error = true;
        panicMode();
    }

}

function CONCAT(id) {

    if (tokenAct.tipo == tkn.tipo.CADENA) {

        STRING2(id);

    }
    else {
        CONDICION(id);
    }
    /*
else {

    if(tokenAct.tipo == tkn.tipo.PARENTESIS_APERTURA){

        parea(tokenAct.tipo);

        if(!error){

            EXP(id);

            if(!error){

                if(tokenAct.tipo == tkn.tipo.PARENTESIS_CIERRE){

                    parea(tokenAct.tipo);

                    if(!error){

                        CONCAT_LOG(id);;

                    }

                }
                else{
                    error=true;
                }

            }

        }

    }else{
        error=true;
    }

}*/

}

function CONCAT_LOG(id) {

    if (tokenAct.tipo == tkn.tipo.MAS) {

        py += "+";

        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
        parea(tokenAct.tipo);

        if (!error && !panico) {

            if (tokenAct.tipo == tkn.tipo.CADENA) {

                py += "\"" + tokenAct.lexema + "\"";

                grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
                grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
                parea(tokenAct.tipo);

                if (!error && !panico) {

                    CONCAT_LOG1(id);

                }

            }
            else {

                error = true;
                panicMode();

            }

        }

    }
    else {

    }

}

function CONCAT_LOG1(id) {

    if (tokenAct.tipo == tkn.tipo.MAS) {

        py += "+";

        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
        parea(tokenAct.tipo);

        if (!error && !panico) {

            STRING2(id);

        }

    }
    else {

    }

}

//---------------------------------------------------------------------------------------------

//--------------------------------------- EXPRESIONES -----------------------------------

function EXP(id) {

    T(id);

    if (!error && !panico) {
        EXP1(id);
    }

}


function EXP1(id) {

    if (tokenAct.tipo == tkn.tipo.MAS) {

        py += "+";

        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
        parea(tokenAct.tipo);

        if (!error && !panico) {

            T(id);

            if (!error && !panico) {

                EXP1(id);

            }

        }

    }
    else if (tokenAct.tipo == tkn.tipo.MENOS) {

        py += "-";

        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
        parea(tokenAct.tipo);

        if (!error && !panico) {

            T(id);

            if (!error && !panico) {

                EXP1(id);

            }

        }

    }
    else {

    }

}


function T(id) {

    F(id);

    if (!error && !panico) {
        T1(id);
    }

}


function T1(id) {

    if (tokenAct.tipo == tkn.tipo.MULTIPLICACION) {

        py += "*";

        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
        parea(tokenAct.tipo);

        if (!error && !panico) {

            F(id);

            if (!error && !panico) {
                T1(id);
            }

        }
    }
    else if (tokenAct.tipo == tkn.tipo.DIVISION) {

        py += "/";

        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
        parea(tokenAct.tipo);

        if (!error && !panico) {

            F(id);

            if (!error && !panico) {
                T1(id);
            }

        }
    } else {

    }

}


function F(id) {

    if (tokenAct.tipo == tkn.tipo.PARENTESIS_APERTURA) {

        py += "(";

        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
        parea(tokenAct.tipo);

        if (!error && !panico) {

            EXP(id);

            if (!error && !panico) {

                if (tokenAct.tipo == tkn.tipo.PARENTESIS_CIERRE) {

                    py += ")";

                    grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
                    grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
                    parea(tokenAct.tipo);

                }
                else {
                    error = true;
                    panicMode();
                }
            }

        }

    }
    else if (tokenAct.tipo == tkn.tipo.ENTERO) {

        py += tokenAct.lexema + "";

        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
        parea(tokenAct.tipo);

    }
    else if (tokenAct.tipo == tkn.tipo.MENOS && tokens[indice + 1].tipo == tkn.tipo.ENTERO) {

        py += tokenAct.lexema + "";

        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
        parea(tokenAct.tipo);

        if (!error && !panico) {

            grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
            grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
            parea(tokenAct.tipo);

        }

    }
    else if (tokenAct.tipo == tkn.tipo.DECIMAL) {

        py += tokenAct.lexema + "";

        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
        parea(tokenAct.tipo);

    }
    else if (tokenAct.tipo == tkn.tipo.MENOS && tokens[indice + 1].tipo == tkn.tipo.DECIMAL) {

        py += tokenAct.lexema + "";

        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
        parea(tokenAct.tipo);

        if (!error && !panico) {

            grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
            grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
            parea(tokenAct.tipo);

        }

    }
    else if (tokenAct.tipo == tkn.tipo.ID) {

        ID_LLAMADA(id);

    }
    else {
        error = true;
        panicMode();
    }


}

//---------------------------------------------------------------------------------------------

//--------------------------------------- ENTEROS -----------------------------------

function INT(id) {

    if (tokenAct.tipo == tkn.tipo.P_RESERVADA && tokenAct.lexema == "int") {

        py += "var ";

        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
        parea(tokenAct.tipo);

        if (!error && !panico) {

            if (tokenAct.tipo == tkn.tipo.ID) {

                py += tokenAct.lexema + " ";

                grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
                grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
                parea(tokenAct.tipo);


                if (!error && !panico) {

                    INT1(id);

                    if (tokenAct.tipo == tkn.tipo.PUNTO_COMA) {

                        py += "\n";

                        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
                        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
                        parea(tokenAct.tipo);
                        panico = false;


                    } else {
                        error = true;
                        panicMode("puntoComa");
                    }

                }

            } else {
                error = true;
                panicMode();
            }

        }

    } else {
        error = true;
        panicMode();
    }

}


function INT1(id) {

    if (tokenAct.tipo == tkn.tipo.IGUAL_AR) {

        py += "= ";

        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
        parea(tokenAct.tipo);

        if (!error && !panico) {

            let temp = id;
            id = '"' + tokenAct.fila + "" + tokenAct.columna + "lbl" + '"'+"\n";
            grafo += id + "[label=\"EXPRESION\"]\n";
            grafo += temp + "->" + id;

            EXP(id);

            if (!error && !panico) {

                INT1(id);

            }

        }

    }
    else if (tokenAct.tipo == tkn.tipo.COMA) {

        py += ", ";

        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
        parea(tokenAct.tipo);

        if (!error && !panico) {

            if (tokenAct.tipo == tkn.tipo.ID) {

                py += tokenAct.lexema + " ";

                grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
                grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
                parea(tokenAct.tipo);

                if (!error && !panico) {

                    INT1(id);

                }

            } else {
                error = true;
                panicMode();
            }

        }

    } else {

    }


}

//--------------------------------------- DECIMALES -----------------------------------

function DOUBLE(id) {

    if (tokenAct.tipo == tkn.tipo.P_RESERVADA && tokenAct.lexema == "double") {

        py += "var ";

        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
        parea(tokenAct.tipo);

        if (!error && !panico) {

            if (tokenAct.tipo == tkn.tipo.ID) {

                py += tokenAct.lexema + " ";

                grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
                grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
                parea(tokenAct.tipo);

                if (!error && !panico) {

                    DOUBLE1(id);

                    if (!error && !panico) {

                        if (tokenAct.tipo == tkn.tipo.PUNTO_COMA) {

                            py += "\n";

                            grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
                            grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
                            parea(tokenAct.tipo);
                            panico = false;

                        } else {
                            error = true;
                            panicMode("puntoComa");
                        }
                    }

                }

            } else {
                error = true;
                panicMode();
            }

        }

    } else {
        error = true;
        panicMode();
    }

}


function DOUBLE1(id) {

    if (tokenAct.tipo == tkn.tipo.IGUAL_AR) {

        py += "= ";

        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
        parea(tokenAct.tipo);

        if (!error && !panico) {

            let temp = id;
            id = '"' + tokenAct.fila + "" + tokenAct.columna + "lbl" + '"'+"\n";
            grafo += id + "[label=\"EXPRESION\"]\n";
            grafo += temp + "->" + id;

            EXP(id);

            if (!error && !panico) {

                DOUBLE1(id);

            }

        }

    }
    else if (tokenAct.tipo == tkn.tipo.COMA) {

        py += ", ";

        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
        parea(tokenAct.tipo);

        if (!error && !panico) {

            if (tokenAct.tipo == tkn.tipo.ID) {

                py += tokenAct.lexema + " ";

                grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
                grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
                parea(tokenAct.tipo);

                if (!error && !panico) {

                    DOUBLE1(id);

                }

            } else {
                error = true;
                panicMode();
            }

        }

    } else {

    }

}

//--------------------------------------- CARACTERES -----------------------------------

function CHAR(id) {

    if (tokenAct.tipo == tkn.tipo.P_RESERVADA && tokenAct.lexema == "char") {

        py += "var ";

        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
        parea(tokenAct.tipo);

        if (!error && !panico) {

            if (tokenAct.tipo == tkn.tipo.ID) {

                py += tokenAct.lexema + " ";

                grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
                grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
                parea(tokenAct.tipo);


                if (!error && !panico) {

                    CHAR1(id);

                    if (!error && !panico) {

                        if (tokenAct.tipo == tkn.tipo.PUNTO_COMA) {

                            py += "\n";

                            grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
                            grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
                            parea(tokenAct.tipo);
                            panico = false;



                        } else {
                            error = true;
                            panicMode("puntoComa");
                        }
                    }

                }

            } else {
                error = true;
                panicMode();
            }

        }

    } else {
        error = true;
        panicMode();
    }

}


function CHAR1(id) {

    if (tokenAct.tipo == tkn.tipo.IGUAL_AR) {

        py += "= ";

        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
        parea(tokenAct.tipo);

        if (!error && !panico) {

            if (tokenAct.tipo == tkn.tipo.CARACTER) {

                py += "'" + tokenAct.lexema + "'";

                grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
                grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
                parea(tokenAct.tipo);

                if (!error && !panico) {

                    CHAR1(id);

                }

            }

        }

    }
    else if (tokenAct.tipo == tkn.tipo.COMA) {

        py += ", ";

        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
        parea(tokenAct.tipo);

        if (!error && !panico) {

            if (tokenAct.tipo == tkn.tipo.ID) {

                py += tokenAct.lexema + " ";

                grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
                grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
                parea(tokenAct.tipo);

                if (!error && !panico) {

                    CHAR1(id);

                }

            } else {
                error = true;
                panicMode();
            }

        }

    } else {

    }

}

//--------------------------------------- CADENAS -----------------------------------

function STRING(id) {

    if (tokenAct.tipo == tkn.tipo.P_RESERVADA && tokenAct.lexema == "String") {

        py += "var ";

        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
        parea(tokenAct.tipo);

        if (!error && !panico) {

            if (tokenAct.tipo == tkn.tipo.ID) {

                py += tokenAct.lexema + " ";

                grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
                grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
                parea(tokenAct.tipo);


                if (!error && !panico) {

                    STRING1(id);

                    if (!error && !panico) {

                        if (tokenAct.tipo == tkn.tipo.PUNTO_COMA) {

                            py += "\n";

                            grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
                            grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
                            parea(tokenAct.tipo);
                            panico = false;

                        }
                        else {
                            error = true;
                            panicMode("puntoComa");
                        }

                    }

                }

            }
            else {
                error = true;
                panicMode();
            }

        }

    }
    else {
        error = true;
        panicMode();
    }

}


function STRING1(id) {

    if (tokenAct.tipo == tkn.tipo.IGUAL_AR) {

        py += "= ";

        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
        parea(tokenAct.tipo);

        if (!error && !panico) {

            let temp = id;
            id = '"' + tokenAct.fila + "" + tokenAct.columna + "lbl" + '"'+"\n";
            grafo += id + "[label=\"EXPRESION\"]\n";
            grafo += temp + "->" + id;

            STRING2(id);

            if (!error && !panico) {
                STRING1(id);
            }

        }

    }
    else if (tokenAct.tipo == tkn.tipo.COMA) {

        py += ", ";

        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
        parea(tokenAct.tipo);

        if (!error && !panico) {

            if (tokenAct.tipo == tkn.tipo.ID) {

                py += tokenAct.lexema + " ";

                grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
                grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
                parea(tokenAct.tipo);

                if (!error && !panico) {

                    STRING1(id);

                }

            }
            else {
                error = true;
                panicMode();
            }

        }
    }
    else {

    }

}


function STRING2(id) {


    if (tokenAct.tipo == tkn.tipo.CARACTER || tokenAct.tipo == tkn.tipo.ENTERO ||
        tokenAct.tipo == tkn.tipo.DECIMAL || tokenAct.tipo == tkn.tipo.CADENA ||
        tokenAct.tipo == tkn.tipo.ID) {

        TEXT(id);
    }
    else if (tokenAct.tipo == tkn.tipo.PARENTESIS_APERTURA) {

        TEXT0(id);

    }
    else {

        error = true;
        panicMode();
    }

}


function TEXT(id) {

    if (tokenAct.tipo == tkn.tipo.CARACTER) {

        py += "'" + tokenAct.lexema + "'";

        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
        parea(tokenAct.tipo);

        if (!error && !panico) {

            if (tokenAct.tipo == tkn.tipo.MAS) {

                py += "+";

                grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
                grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
                parea(tokenAct.tipo);

                if (!error && !panico) {

                    TEXT4(id);

                    if (!error && !panico) {

                        TEXT1(id);

                    }

                }

            }
            else {

                error = true;
                panicMode();

            }

        }

    }
    else if (tokenAct.tipo == tkn.tipo.ENTERO) {

        py += tokenAct.lexema;

        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
        parea(tokenAct.tipo);

        if (!error && !panico) {

            if (tokenAct.tipo == tkn.tipo.MAS) {

                py += "+";

                grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
                grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
                parea(tokenAct.tipo);

                if (!error && !panico) {

                    TEXT4(id);

                    if (!error && !panico) {

                        TEXT1(id);

                    }

                }

            }
            else {

                error = true;
                panicMode();

            }

        }

    }
    else if (tokenAct.tipo == tkn.tipo.DECIMAL) {

        py += tokenAct.lexema;

        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
        parea(tokenAct.tipo);

        if (!error && !panico) {

            if (tokenAct.tipo == tkn.tipo.MAS) {

                py += "+";

                grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
                grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
                parea(tokenAct.tipo);

                if (!error && !panico) {

                    TEXT4(id);

                    if (!error && !panico) {

                        TEXT1(id);

                    }

                }

            }
            else {

                error = true;
                panicMode();

            }

        }

    }
    else if (tokenAct.tipo == tkn.tipo.CADENA) {

        py += "\"" + tokenAct.lexema + "\"";

        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
        parea(tokenAct.tipo);

        if (!error && !panico) {

            TEXT1(id);

        }

    }
    else if (tokenAct.tipo == tkn.tipo.ID) {

        ID_LLAMADA(id);

        if (!error && !panico) {

            TEXT1(id);

        }

    }
    else {
        error = true;
        panicMode();
    }


}


function TEXT0(id) {

    if (tokenAct.tipo == tkn.tipo.PARENTESIS_APERTURA) {

        py += "(";

        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
        parea(tokenAct.tipo);

        if (!error && !panico) {

            EXPS(id);

            if (!error && !panico) {

                if (tokenAct.tipo == tkn.tipo.PARENTESIS_CIERRE) {

                    py += ")";

                    grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
                    grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
                    parea(tokenAct.tipo);

                    if (!error && !panico) {

                        if (tokenAct.tipo == tkn.tipo.MAS) {

                            py += "+";

                            grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
                            grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
                            parea(tokenAct.tipo);

                            if (!error && !panico) {

                                TEXT4(id);

                                if (!error && !panico) {

                                    TEXT1(id);

                                }

                            }

                        } else {

                            error = true;
                            panicMode();

                        }


                    }

                } else {

                    error = true;
                    panicMode();

                }

            }


        }

    } else {

        error = true;
        panicMode();

    }

}


function TEXT1(id) {

    if (tokenAct.tipo == tkn.tipo.MAS) {

        py += "+";

        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
        parea(tokenAct.tipo);

        if (!error && !panico) {

            TEXT2(id);

            if (!error && !panico) {

                TEXT1(id);

            }

        }

    }
    else {

    }

}


function TEXT2(id) {

    if (tokenAct.tipo == tkn.tipo.CARACTER) {

        py += "'" + tokenAct.lexema + "'";

        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
        parea(tokenAct.tipo);

        if (!error && !panico) {

            TEXT3(id);

        }

    }
    else if (tokenAct.tipo == tkn.tipo.ENTERO) {

        py += tokenAct.lexema;

        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
        parea(tokenAct.tipo);

        if (!error && !panico) {

            TEXT3(id);

        }

    }
    else if (tokenAct.tipo == tkn.tipo.DECIMAL) {

        py += tokenAct.lexema;

        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
        parea(tokenAct.tipo);

        if (!error && !panico) {

            TEXT3(id);

        }

    }
    else if (tokenAct.tipo == tkn.tipo.PARENTESIS_APERTURA) {

        py += "(";

        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
        parea(tokenAct.tipo);

        EXPS(id);

        if (!error && !panico) {

            if (tokenAct.tipo == tkn.tipo.PARENTESIS_CIERRE) {

                py += ")";

                grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
                grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
                parea(tokenAct.tipo);

                if (!error && !panico) {

                    TEXT3(id);

                }

            }
            else {

                error = true;
                panicMode();

            }

        }

    }
    else if (tokenAct.tipo == tkn.tipo.ID) {

        ID_LLAMADA(id);
    }
    else if (tokenAct.tipo == tkn.tipo.CADENA) {

        py += "\"" + tokenAct.lexema + "\"";

        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
        parea(tokenAct.tipo);

    }
    else {
        error = true;
        panicMode();
    }

}


function TEXT3(id) {

    if (tokenAct.tipo == tkn.tipo.MAS) {

        py += "+";

        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
        parea(tokenAct.tipo);

        if (!error && !panico) {

            TEXT4(id);

        }

    }
    else {

    }

}


function TEXT4(id) {

    if (tokenAct.tipo == tkn.tipo.CADENA) {

        py += "\"" + tokenAct.lexema + "\"";

        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
        parea(tokenAct.tipo);

    }
    else if (tokenAct.tipo == tkn.tipo.ID) {

        py += tokenAct.lexema + " ";

        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
        parea(tokenAct.tipo);

    }
    else {
        error = true;
        panicMode();
    }

}

//--------------------------------------- BOLEANOS -----------------------------------

function BOOLEAN(id) {

    if (tokenAct.tipo == tkn.tipo.P_RESERVADA && tokenAct.lexema == "boolean") {

        py += "var ";

        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
        parea(tokenAct.tipo);


        if (!error && !panico) {

            if (tokenAct.tipo == tkn.tipo.ID) {

                py += tokenAct.lexema + " ";

                grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
                grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
                parea(tokenAct.tipo);


                if (!error && !panico) {

                    BOOLEAN1(id);

                    if (tokenAct.tipo == tkn.tipo.PUNTO_COMA) {

                        py += "\n";

                        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
                        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
                        parea(tokenAct.tipo);
                        panico = false;


                    } else {
                        error = true;
                        panicMode("puntoComa");
                    }

                }

            } else {
                error = true;
                panicMode();
            }

        }

    } else {
        error = true;
        panicMode();
    }

}


function BOOLEAN1(id) {

    if (tokenAct.tipo == tkn.tipo.IGUAL_AR) {

        py += "= ";

        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
        parea(tokenAct.tipo);

        if (!error && !panico) {

            let temp = id;
            id = '"' + tokenAct.fila + "" + tokenAct.columna + "lbl" + '"'+"\n";
            grafo += id + "[label=\"EXPRESION\"]\n";
            grafo += temp + "->" + id;

            EXP_LOG(id);

            if (!error && !panico) {

                BOOLEAN1(id);

            }

        }

    }
    else if (tokenAct.tipo == tkn.tipo.COMA) {

        py += ", ";

        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
        parea(tokenAct.tipo);

        if (!error && !panico) {

            if (tokenAct.tipo == tkn.tipo.ID) {

                py += tokenAct.lexema + " ";

                grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
                grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
                parea(tokenAct.tipo);

                if (!error && !panico) {

                    BOOLEAN1(id);

                }

            } else {
                error = true;
                panicMode();
            }

        }

    } else {

    }


}


//--------------------------------------- EXPRESIONES LOGICAS -----------------------------------

function EXP_LOG(id) {

    T_LOG(id);

    if (!error && !panico) {

        EXP_LOG1(id);

    }

}


function EXP_LOG1(id) {

    if (tokenAct.tipo == tkn.tipo.OR) {

        py += " or ";

        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
        parea(tokenAct.tipo);

        if (!error && !panico) {

            T_LOG(id);

            if (!error && !panico) {

                EXP_LOG1(id);

            }

        }

    }
    else if (tokenAct.tipo == tkn.tipo.AND) {

        py += " and ";

        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
        parea(tokenAct.tipo);

        if (!error && !panico) {

            T_LOG(id);

            if (!error && !panico) {

                EXP_LOG1(id);

            }

        }

    }
    else {

    }

}


function T_LOG(id) {

    F_LOG(id);

    if (!error && !panico) {

        T_LOG1(id);

    }

}


function T_LOG1(id) {

    if (tokenAct.tipo == tkn.tipo.XOR) {

        py += " xor ";

        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
        parea(tokenAct.tipo);

        if (!error && !panico) {

            F_LOG(id);

            if (!error && !panico) {

                T_LOG1(id);

            }

        }

    }
    else {

    }

}


function F_LOG(id) {

    if (tokenAct.tipo == tkn.tipo.NOT) {

        py += " not ";

        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
        parea(tokenAct.tipo);

        if (!error && !panico) {

            F_LOG1(id);

        }

    }
    else if (tokenAct.tipo == tkn.tipo.P_RESERVADA && (tokenAct.lexema == "true" || tokenAct.lexema == "false")) {

        F_LOG1(id);

    }
    else if (tokenAct.tipo == tkn.tipo.PARENTESIS_APERTURA || tokenAct.tipo == tkn.tipo.ID) {

        F_LOG1(id);

    }
    else {
        error = true;
        panicMode();
    }

}


function F_LOG1(id) {

    if (tokenAct.tipo == tkn.tipo.PARENTESIS_APERTURA) {

        py += "(";

        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
        parea(tokenAct.tipo);

        if (!error && !panico) {

            EXP_LOG(id);

            if (!error && !panico) {

                if (tokenAct.tipo == tkn.tipo.PARENTESIS_CIERRE) {

                    py += ")";

                    grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
                    grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
                    parea(tokenAct.tipo);

                }
                else {
                    error = true;
                    panicMode();
                }

            }

        }

    }
    else if (tokenAct.tipo == tkn.tipo.P_RESERVADA && tokenAct.lexema == "true") {

        py += "True";

        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
        parea(tokenAct.tipo);

    }
    else if (tokenAct.tipo == tkn.tipo.P_RESERVADA && tokenAct.lexema == "false") {

        py += "False";

        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
        parea(tokenAct.tipo);

    }
    else if (tokenAct.tipo == tkn.tipo.ID) {

        py += tokenAct.lexema + " ";
        ID_LLAMADA(id);

    }
    else {
        error = true;
        panicMode();
    }


}

//--------------------------------------- LLAMADAS METODOS -----------------------------------

function LLAMADA(id) {

    if (tokenAct.tipo == tkn.tipo.ID) {

        parea(tokenAct.tipo);

        if (!error && !panico) {

            if (tokenAct.tipo == tkn.tipo.PARENTESIS_APERTURA) {

                parea(tokenAct.tipo);

                if (!error && !panico) {

                    PARAMS(id);

                    if (!error && !panico) {

                        if (tokenAct.tipo == tkn.tipo.PARENTESIS_CIERRE) {

                            parea(tokenAct.tipo);

                        }
                        else {
                            error = true;
                            panicMode();
                        }

                    }

                }

            }
            else {
                error = true;
                panicMode();
            }

        }

    }
    else {
        error = true;
        panicMode();
    }

}


function PARAMS(id) {

    CONDICION(id);

    if (!error && !panico) {

        PARAMS1(id);

    }

}


function PARAMS1(id) {

    if (tokenAct.tipo == tkn.tipo.COMA) {

        py += ", ";
        parea(tokenAct.tipo);

        if (!error && !panico) {

            PARAMS(id);

            if (!error && !panico) {

                PARAMS1(id);

            }

        }

    }
    else {

    }

}


//--------------------------------------- OPERADORES LOGICOS -----------------------------------

function OPS(id) {

    if (tokenAct.tipo == tkn.tipo.MAYOR) {

        if (comp) {
            py += ">";
        } else {
            py += ", "
        }

        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
        parea(tokenAct.tipo);

    }
    else if (tokenAct.tipo == tkn.tipo.MENOR) {

        if (comp) {
            py += "<";
        } else {
            py += ", "
        }

        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
        parea(tokenAct.tipo);

    }
    else if (tokenAct.tipo == tkn.tipo.IGUAL_LOG) {

        if (comp) {
            py += "==";
        } else {
            py += ", "
        }

        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
        parea(tokenAct.tipo);

    }
    else if (tokenAct.tipo == tkn.tipo.MENOR_IGUAL) {

        if (comp) {
            py += "<=";
        } else {
            py += ", "
        }

        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
        parea(tokenAct.tipo);

    }
    else if (tokenAct.tipo == tkn.tipo.MAYOR_IGUAL) {

        if (comp) {
            py += ">=";
        } else {
            py += ", "
        }

        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
        parea(tokenAct.tipo);

    }
    else if (tokenAct.tipo == tkn.tipo.DIFERENTE) {

        if (comp) {
            py += "!=";
        } else {
            py += ", "
        }

        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
        parea(tokenAct.tipo);

    }

}

//--------------------------------------- CONDICIONAL -----------------------------------


function CONDICIONAL(id) {

    let temp = id;
    id = '"' + tokenAct.fila + "" + tokenAct.columna + "lbl" + '"'+"\n";
    grafo += id + "[label=\"CONDICION\"]\n";
    grafo += temp + "->" + id;

    CONDICION(id);

    if (!error && !panico) {

        CONDICIONAL1(id);

        if (!error && !panico) {

            OPS_CONDICIONAL(id);

        }

    }

}


function OPS_CONDICIONAL(id) {

    if (tokenAct.tipo == tkn.tipo.OR) {

        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
        parea(tokenAct.tipo);

        if (!error && !panico) {

            CONDICIONAL(id);

        }

    }
    else if (tokenAct.tipo == tkn.tipo.AND) {

        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
        parea(tokenAct.tipo);

        if (!error && !panico) {

            CONDICIONAL(id);

        }

    }
    else {

    }

}


function CONDICIONAL1(id) {

    if (tokenAct.tipo == tkn.tipo.MAYOR || tokenAct.tipo == tkn.tipo.MENOR
        || tokenAct.tipo == tkn.tipo.MAYOR_IGUAL || tokenAct.tipo == tkn.tipo.MENOR_IGUAL
        || tokenAct.tipo == tkn.tipo.IGUAL_LOG || tokenAct.tipo == tkn.tipo.DIFERENTE
    ) {

        OPS(id);

        if (!error && !panico) {

            CONDICION(id);

        }

    }
    else {

    }

}

//--------------------------------------- FOR -----------------------------------

function FOR(id) {


    if (tokenAct.tipo == tkn.tipo.P_RESERVADA && tokenAct.lexema == "for") {

        let temp = id;
        id = '"' + tokenAct.fila + "" + tokenAct.columna + "lbl" + '"'+"\n";
        grafo += id + "[label=\"FOR\"]\n";
        grafo += temp + "->" + id;

        py += "for ";

        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
        parea(tokenAct.tipo);


        if (!error && !panico) {

            if (tokenAct.tipo == tkn.tipo.PARENTESIS_APERTURA) {


                grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
                grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
                parea(tokenAct.tipo);


                if (!error && !panico) {

                    FOR1(id);

                    if (!error && !panico) {

                        if (tokenAct.tipo == tkn.tipo.PARENTESIS_CIERRE) {

                            py += "):";

                            grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
                            grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
                            parea(tokenAct.tipo);



                            if (!error && !panico) {

                                if (tokenAct.tipo == tkn.tipo.LLAVE_APERTURA) {

                                    tab++;
                                    py += "\n";

                                    grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
                                    grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
                                    parea(tokenAct.tipo);


                                    if (!error && !panico) {

                                        INSTRUCCIONES(id);

                                        if (!error && !panico) {

                                            if (tokenAct.tipo == tkn.tipo.LLAVE_CIERRE) {

                                                tab--;
                                                py += "\n";

                                                grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
                                                grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
                                                parea(tokenAct.tipo);


                                            }
                                            else {
                                                error = true;
                                                panicMode();
                                            }

                                        }

                                    }

                                }
                                else {
                                    error = true;
                                    panicMode();
                                }

                            }

                        }
                        else {

                            error = true;
                            panicMode();
                        }

                    }

                }

            }

        }

    }
    else {
        error = true;
        panicMode();
    }

}

function FOR1(id) {

    let temp = id;
    id = '"' + tokenAct.fila + "" + tokenAct.columna + "lbl" + '"'+"\n";
    grafo += id + "[label=\"CONDICION\"]\n";
    grafo += temp + "->" + id;


    TIPO(id);

    if (!error && !panico) {

        if (tokenAct.tipo == tkn.tipo.ID) {

            py += tokenAct.lexema + " in range (";

            grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
            grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
            parea(tokenAct.tipo);



            if (!error && !panico) {

                if (tokenAct.tipo == tkn.tipo.IGUAL_AR) {

                    grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
                    grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
                    parea(tokenAct.tipo);


                    if (!error && !panico) {

                        FOR_INST(id);

                        if (!error && !panico) {

                            if (tokenAct.tipo == tkn.tipo.PUNTO_COMA) {

                                grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
                                grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
                                parea(tokenAct.tipo);
                                panico = false;

                                if (!error && !panico) {

                                    comp = false;
                                    CONDICIONAL(id);
                                    comp = true;

                                    if (!error && !panico) {

                                        if (tokenAct.tipo == tkn.tipo.PUNTO_COMA) {

                                            grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
                                            grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
                                            parea(tokenAct.tipo);
                                            panico = false;

                                            if (!error && !panico) {

                                                if (tokenAct.tipo == tkn.tipo.ID) {

                                                    grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
                                                    grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
                                                    parea(tokenAct.tipo);

                                                    if (!error && !panico) {

                                                        incdec = false;
                                                        OP_DEC_INC(id);
                                                        incdec = true;

                                                    }

                                                }
                                                else {
                                                    error = true;
                                                    panicMode();
                                                }

                                            }

                                        }
                                        else {
                                            error = true;
                                            panicMode("puntoComa");
                                        }

                                    }

                                }

                            }
                            else {
                                error = true;
                                panicMode("puntoComa");
                            }

                        }

                    }

                }
                else {
                    error = true;
                    panicMode();
                }

            }

        }
        else {
            error = true;
            panicMode();
        }

    }

}

function FOR_INST(id) {

    if (tokenAct.tipo == tkn.tipo.ENTERO) {

        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
        parea(tokenAct.tipo);

    }
    else if (tokenAct.tipo == tkn.tipo.ID) {

        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
        parea(tokenAct.tipo);

    }
    else if (tokenAct.tipo == tkn.tipo.DECIMAL) {

        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
        parea(tokenAct.tipo);
    }
    else {
        error = true;
        panicMode();
    }


}

//--------------------------------------- WHILE -----------------------------------

function WHILE(id) {



    if (tokenAct.tipo == tkn.tipo.P_RESERVADA && tokenAct.lexema == "while") {

        let temp = id;
        id = '"' + tokenAct.fila + "" + tokenAct.columna + "lbl" + '"'+"\n";
        grafo += id + "[label=\"WHILE\"]\n";
        grafo += temp + "->" + id;

        py += "while ";

        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
        parea(tokenAct.tipo);

        if (!error && !panico) {

            if (tokenAct.tipo == tkn.tipo.PARENTESIS_APERTURA) {

                grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
                grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
                parea(tokenAct.tipo);

                if (!error && !panico) {

                    CONDICIONAL(id);

                    if (!error && !panico) {

                        py += ": \n";

                        if (tokenAct.tipo == tkn.tipo.PARENTESIS_CIERRE) {


                            grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
                            grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
                            parea(tokenAct.tipo);

                            if (!error && !panico) {

                                if (tokenAct.tipo == tkn.tipo.LLAVE_APERTURA) {

                                    tab++;

                                    grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
                                    grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
                                    parea(tokenAct.tipo);

                                    if (!error && !panico) {

                                        INSTRUCCIONES(id);

                                        if (!error && !panico) {

                                            if (tokenAct.tipo == tkn.tipo.LLAVE_CIERRE) {

                                                tab--;

                                                grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
                                                grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
                                                parea(tokenAct.tipo);

                                            } else {
                                                error = true;
                                                panicMode();
                                            }

                                        }

                                    }

                                } else {
                                    error = true;
                                    panicMode();
                                }

                            }

                        } else {
                            error = true;
                            panicMode();
                        }

                    }

                }

            } else {
                error = true;
                panicMode();
            }

        }

    } else {
        error = true;
        panicMode();
    }

}

//--------------------------------------- DO WHILE ---------------------------------

function DO_WHILE(id) {



    if (tokenAct.tipo == tkn.tipo.P_RESERVADA && tokenAct.lexema == "do") {

        let temp = id;
        id = '"' + tokenAct.fila + "" + tokenAct.columna + "lbl" + '"'+"\n";
        grafo += id + "[label=\"DO_WHILE\"]\n";
        grafo += temp + "->" + id;

        py += "while: \n";

        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
        parea(tokenAct.tipo);

        if (!error && !panico) {

            if (tokenAct.tipo == tkn.tipo.LLAVE_APERTURA) {

                tab++;

                grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
                grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
                parea(tokenAct.tipo);

                if (!error && !panico) {

                    INSTRUCCIONES(id);

                    if (!error && !panico) {

                        if (tokenAct.tipo == tkn.tipo.LLAVE_CIERRE) {

                            tab--;

                            grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
                            grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
                            parea(tokenAct.tipo);

                            if (tokenAct.tipo == tkn.tipo.P_RESERVADA && tokenAct.lexema == "while") {

                                grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
                                grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
                                parea(tokenAct.tipo);

                                if (!error && !panico) {

                                    if (tokenAct.tipo == tkn.tipo.PARENTESIS_APERTURA) {


                                        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
                                        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
                                        parea(tokenAct.tipo);

                                        if (!error && !panico) {

                                            py += "if ";
                                            CONDICIONAL(id);
                                            py += ": \n break";


                                            if (!error && !panico) {

                                                if (tokenAct.tipo == tkn.tipo.PARENTESIS_CIERRE) {


                                                    grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
                                                    grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
                                                    parea(tokenAct.tipo);

                                                    if (!error && !panico) {

                                                        if (tokenAct.tipo == tkn.tipo.PUNTO_COMA) {

                                                            py += "\n";

                                                            grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
                                                            grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
                                                            parea(tokenAct.tipo);
                                                            panico = false;

                                                        } else {
                                                            error = true;
                                                            panicMode("puntoComa");
                                                        }

                                                    }

                                                } else {
                                                    error = true;
                                                    panicMode();
                                                }

                                            }

                                        }

                                    } else {
                                        error = true;
                                        panicMode();
                                    }

                                }

                            } else {
                                error = true;
                                panicMode();
                            }

                        } else {
                            error = true;
                            panicMode();
                        }

                    }

                }

            } else {
                error = true;
                panicMode();
            }

        }

    } else {
        error = true;
        panicMode();
    }

}

//--------------------------------------- IF ---------------------------------

function IF(id) {


    if (tokenAct.tipo == tkn.tipo.P_RESERVADA && tokenAct.lexema == "if") {

        let temp = id;
        id = '"' + tokenAct.fila + "" + tokenAct.columna + "lbl" + '"'+"\n";
        grafo += id + "[label=\"IF\"]\n";
        grafo += temp + "->" + id;

        py += "if ";
        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
        parea(tokenAct.tipo);

        if (!error && !panico) {

            if (tokenAct.tipo == tkn.tipo.PARENTESIS_APERTURA) {

                grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
                grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
                parea(tokenAct.tipo);


                if (!error && !panico) {

                    CONDICIONAL(id);

                    if (!error && !panico) {

                        if (tokenAct.tipo == tkn.tipo.PARENTESIS_CIERRE) {

                            py += ": \n";
                            grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
                            grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
                            parea(tokenAct.tipo);



                            if (!error && !panico) {

                                if (tokenAct.tipo == tkn.tipo.LLAVE_APERTURA) {

                                    tab++;
                                    grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
                                    grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
                                    parea(tokenAct.tipo);


                                    if (!error && !panico) {

                                        INSTRUCCIONES(id);

                                        if (!error && !panico) {

                                            if (tokenAct.tipo == tkn.tipo.LLAVE_CIERRE) {

                                                tab--;
                                                grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
                                                grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
                                                parea(tokenAct.tipo);


                                                if (!error && !panico) {

                                                    ELSE_IF(id);

                                                }

                                            } else {
                                                error = true;
                                                panicMode();
                                            }

                                        }

                                    }

                                } else {
                                    error = true;
                                    panicMode();
                                }

                            }

                        } else {
                            error = true;
                            panicMode();
                        }

                    }

                }

            } else {
                error = true;
                panicMode();
            }

        }

    } else {
        error = true;
        panicMode();
    }

}

function ELSE_IF(id) {

    if (tokenAct.tipo == tkn.tipo.P_RESERVADA && tokenAct.lexema == "else") {

        let temp = id;
        id = '"' + tokenAct.fila + "" + tokenAct.columna + "lbl" + '"'+"\n";
        grafo += id + "[label=\"ELSE\"]\n";
        grafo += temp + "->" + id;

        parea(tokenAct.tipo);

        if (!error && !panico) {

            tabular();
            ELSE(id);

        }

    }
    else {

    }

}


function ELSE(id) {

    if (tokenAct.tipo == tkn.tipo.P_RESERVADA && tokenAct.lexema == "if") {

        py += "el";
        IF(id);

    }
    else if (tokenAct.tipo == tkn.tipo.LLAVE_APERTURA) {


        tab++;
        py += "else: \n";

        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
        parea(tokenAct.tipo);


        if (!error && !panico) {

            INSTRUCCIONES(id);

            if (!error && !panico) {

                if (tokenAct.tipo == tkn.tipo.LLAVE_CIERRE) {

                    tab--;

                    grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
                    grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
                    parea(tokenAct.tipo);

                }
                else {
                    error = true;
                    panicMode();
                }

            }

        }

    }
    else {
        error = true;
        panicMode();
    }

}

//--------------------------------------- DECLARAION DE METODOS ---------------------------------

function METODO(id) {

    if (tokenAct.tipo == tkn.tipo.P_RESERVADA && tokenAct.lexema == "void") {

        let temp = id;
        id = '"' + tokenAct.fila + "" + tokenAct.columna + "lbl" + '"'+"\n";
        grafo += id + "[label=\"FUNCION\"]\n";
        grafo += temp + "->" + id;

        METODO1(id);

    }
    else if (tokenAct.tipo == tkn.tipo.P_RESERVADA && tokenAct.lexema == "static") {

        let temp = id;
        id = '"' + tokenAct.fila + "" + tokenAct.columna + "lbl" + '"'+"\n";
        grafo += id + "[label=\"FUNCION\"]\n";
        grafo += temp + "->" + id;

        METODO1(id);

    }
    else if (tokenAct.tipo == tkn.tipo.P_RESERVADA && tokenAct.lexema == "public") {

        let temp = id;
        id = '"' + tokenAct.fila + "" + tokenAct.columna + "lbl" + '"'+"\n";
        grafo += id + "[label=\"FUNCION\"]\n";
        grafo += temp + "->" + id;

        PUBLIC(id);

        if (!error && !panico) {

            METODO1(id);

        }

    }
    else if (tokenAct.tipo == tkn.tipo.P_RESERVADA && (tokenAct.lexema == "int" || tokenAct.lexema == "String" || tokenAct.lexema == "double" || tokenAct.lexema == "char" || tokenAct.lexema == "boolean")) {

        let temp = id;
        id = '"' + tokenAct.fila + "" + tokenAct.columna + "lbl" + '"'+"\n";
        grafo += id + "[label=\"FUNCION\"]\n";
        grafo += temp + "->" + id;

        METODO1(id);

    } else {



    }



}

function PUBLIC(id) {

    if (tokenAct.tipo == tkn.tipo.P_RESERVADA && tokenAct.lexema == "public") {

        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
        parea(tokenAct.tipo);

    } else {

    }

}

function METODO1(id) {

    if (tokenAct.tipo == tkn.tipo.P_RESERVADA && (tokenAct.lexema == "String" || tokenAct.lexema == "int")
        || tokenAct.lexema == "double" || tokenAct.lexema == "boolean" || tokenAct.lexema == "char"
    ) {

        TIPO(id);

        if (!error && !panico) {

            if (tokenAct.tipo == tkn.tipo.ID) {

                py += "def ";
                py += tokenAct.lexema;

                grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
                grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
                parea(tokenAct.tipo);


                if (!error && !panico) {

                    if (tokenAct.tipo == tkn.tipo.PARENTESIS_APERTURA) {

                        py += "(";

                        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
                        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
                        parea(tokenAct.tipo);

                        if (!error && !panico) {

                            PARAMS_METODO(id);

                            if (!error && !panico) {

                                if (tokenAct.tipo == tkn.tipo.PARENTESIS_CIERRE) {

                                    py += "):\n";

                                    grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
                                    grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
                                    parea(tokenAct.tipo);


                                    if (!error && !panico) {

                                        if (tokenAct.tipo == tkn.tipo.LLAVE_APERTURA) {

                                            tab++;

                                            grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
                                            grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
                                            parea(tokenAct.tipo);

                                            if (!error && !panico) {

                                                INSTRUCCIONES(id);

                                                if (!error && !panico) {

                                                    if (tokenAct.tipo == tkn.tipo.LLAVE_CIERRE) {

                                                        tab--;

                                                        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
                                                        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
                                                        parea(tokenAct.tipo);

                                                        if (!error && !panico) {

                                                            tabular();
                                                            METODO(id);

                                                        }

                                                    }
                                                    else {
                                                        error = true;
                                                        panicMode();
                                                    }

                                                }

                                            }

                                        }
                                        else {
                                            error = true;
                                            panicMode();
                                        }

                                    }

                                }
                                else {
                                    error = true;
                                    panicMode();
                                }

                            }

                        }

                    }
                    else {
                        error = true;
                        panicMode();
                    }

                }

            }
            else {
                error = true;
                panicMode();
            }

        }

    }
    else if (tokenAct.tipo == tkn.tipo.P_RESERVADA && tokenAct.lexema == "void") {

        py += "self ";

        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
        parea(tokenAct.tipo);

        if (!error && !panico) {

            if (tokenAct.tipo == tkn.tipo.ID) {

                py += tokenAct.lexema;

                grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
                grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
                parea(tokenAct.tipo);


                if (!error && !panico) {

                    if (tokenAct.tipo == tkn.tipo.PARENTESIS_APERTURA) {

                        py += "(";

                        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
                        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
                        parea(tokenAct.tipo);

                        if (!error && !panico) {

                            PARAMS_METODO(id);

                            if (!error && !panico) {

                                if (tokenAct.tipo == tkn.tipo.PARENTESIS_CIERRE) {

                                    py += "):\n";

                                    grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
                                    grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
                                    parea(tokenAct.tipo);

                                    if (!error && !panico) {

                                        if (tokenAct.tipo == tkn.tipo.LLAVE_APERTURA) {

                                            tab++;

                                            grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
                                            grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
                                            parea(tokenAct.tipo);

                                            if (!error && !panico) {

                                                INSTRUCCIONES(id);

                                                if (!error && !panico) {

                                                    if (tokenAct.tipo == tkn.tipo.LLAVE_CIERRE) {

                                                        tab--;

                                                        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
                                                        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
                                                        parea(tokenAct.tipo);

                                                        if (!error && !panico) {

                                                            tabular();
                                                            METODO(id);

                                                        }

                                                    }
                                                    else {
                                                        error = true;
                                                        panicMode();
                                                    }

                                                }

                                            }

                                        }
                                        else {
                                            error = true;
                                            panicMode();
                                        }

                                    }

                                }
                                else {
                                    error = true;
                                    panicMode();
                                }

                            }

                        }

                    }
                    else {
                        error = true;
                        panicMode();
                    }

                }

            }
            else {
                error = true;
                panicMode();
            }

        }

    }
    else if (tokenAct.tipo == tkn.tipo.P_RESERVADA && tokenAct.lexema == "static") {


        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
        parea(tokenAct.tipo);

        if (!error && !panico) {

            if (tokenAct.tipo == tkn.tipo.P_RESERVADA && tokenAct.lexema == "void") {

                py += "def ";

                grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
                grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
                parea(tokenAct.tipo);


                if (!error && !panico) {

                    if (tokenAct.tipo == tkn.tipo.ID) {

                        py += tokenAct.lexema + "";

                        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
                        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
                        parea(tokenAct.tipo);


                        if (!error && !panico) {

                            if (tokenAct.tipo == tkn.tipo.PARENTESIS_APERTURA) {

                                py += "(";

                                grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
                                grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
                                parea(tokenAct.tipo);


                                if (!error && !panico) {

                                    if (tokenAct.tipo == tkn.tipo.P_RESERVADA && tokenAct.lexema == "String") {


                                        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
                                        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
                                        parea(tokenAct.tipo);

                                        if (!error && !panico) {

                                            if (tokenAct.tipo == tkn.tipo.CORCHETE_APERTURA) {


                                                grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
                                                grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
                                                parea(tokenAct.tipo);


                                                if (!error && !panico) {

                                                    if (tokenAct.tipo == tkn.tipo.CORCHETE_CIERRE) {


                                                        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
                                                        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
                                                        parea(tokenAct.tipo);


                                                        if (!error && !panico) {

                                                            if (tokenAct.tipo == tkn.tipo.ID) {


                                                                grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
                                                                grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
                                                                parea(tokenAct.tipo);


                                                                if (!error && !panico) {

                                                                    if (tokenAct.tipo == tkn.tipo.PARENTESIS_CIERRE) {

                                                                        py += "): \n";

                                                                        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
                                                                        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
                                                                        parea(tokenAct.tipo);

                                                                        if (!error && !panico) {

                                                                            if (tokenAct.tipo == tkn.tipo.LLAVE_APERTURA) {

                                                                                tab++;

                                                                                grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
                                                                                grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
                                                                                parea(tokenAct.tipo);


                                                                                if (!error && !panico) {

                                                                                    INSTRUCCIONES(id);

                                                                                    if (!error && !panico) {

                                                                                        if (tokenAct.tipo == tkn.tipo.LLAVE_CIERRE) {

                                                                                            tab--;

                                                                                            grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
                                                                                            grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
                                                                                            parea(tokenAct.tipo);

                                                                                            py += "if __name__==\"__main___\":\n\tmain()\n";

                                                                                            if (!error && !panico) {

                                                                                                tabular();
                                                                                                METODO(id);

                                                                                            }

                                                                                        }
                                                                                        else {
                                                                                            error = true;
                                                                                            panicMode();
                                                                                        }

                                                                                    }

                                                                                }

                                                                            }
                                                                            else {
                                                                                error = true;
                                                                                panicMode();
                                                                            }

                                                                        }

                                                                    }
                                                                    else {
                                                                        error = true;
                                                                        panicMode();
                                                                    }

                                                                }

                                                            }
                                                            else {
                                                                error = true;
                                                                panicMode();
                                                            }

                                                        }

                                                    }
                                                    else {
                                                        error = true;
                                                        panicMode();
                                                    }

                                                }

                                            }
                                            else {
                                                error = true;
                                                panicMode();
                                            }

                                        }

                                    }
                                    else {
                                        error = true;
                                        panicMode();
                                    }

                                }

                            }
                            else {
                                error = true;
                                panicMode();
                            }

                        }

                    }
                    else {
                        error = true;
                        panicMode();
                    }

                }

            }
            else {
                error = true;
                panicMode();
            }

        }

    }
    else {
        error = true;
        panicMode();
    }

}


function PARAMS_METODO(id) {

    if (tokenAct.tipo == tkn.tipo.P_RESERVADA && (tokenAct.lexema == "int" || tokenAct.lexema == "String" || tokenAct.lexema == "double" || tokenAct.lexema == "char" || tokenAct.lexema == "boolean")) {

        let temp = id;
        id = '"' + tokenAct.fila + "" + tokenAct.columna + "lbl" + '"'+"\n";
        grafo += id + "[label=\"PARAMETROS\"]\n";
        grafo += temp + "->" + id;


        TIPO(id);

        if (!error && !panico) {

            if (tokenAct.tipo == tkn.tipo.ID) {

                py += tokenAct.lexema + " ";

                grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
                grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
                parea(tokenAct.tipo);

                if (!error && !panico) {

                    PARAMS_METODO1(id);

                }

            }
            else {
                error = true;
                panicMode();
            }

        }

    }
    else {

    }





}


function PARAMS_METODO1(id) {

    if (tokenAct.tipo == tkn.tipo.COMA) {

        py += ", ";

        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
        parea(tokenAct.tipo);

        if (!error && !panico) {

            if (tokenAct.tipo == tkn.tipo.P_RESERVADA && (tokenAct.lexema == "String" || tokenAct.lexema == "int" || tokenAct.lexema == "double" || tokenAct.lexema == "char" || tokenAct.lexema == "boolean")) {

                py += "var ";

                grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
                grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
                parea(tokenAct.tipo);

                if (!error && !panico) {

                    if (tokenAct.tipo == tkn.tipo.ID) {

                        py += tokenAct.lexema + " ";

                        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
                        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
                        parea(tokenAct.tipo);

                        if (!error && !panico) {

                            PARAMS_METODO1(id);

                        }

                    }
                    else {
                        error = true;
                        panicMode();
                    }

                }

            }

        }

    }
    else {

    }


}


//--------------------------------------- DECLARAION DE MAIN ---------------------------------


function MAIN_CLASS(id) {

    if (tokenAct.tipo == tkn.tipo.P_RESERVADA && tokenAct.lexema == "public") {

        parea(tokenAct.tipo);

        if (!error && !panico) {

            if (tokenAct.tipo == tkn.tipo.P_RESERVADA && tokenAct.lexema == "class") {

                parea(tokenAct.tipo);

                if (!error && !panico) {

                    if (tokenAct.tipo == tkn.tipo.ID) {

                        parea(tokenAct.tipo);

                        if (!error && !panico) {

                            if (tokenAct.tipo == tkn.tipo.LLAVE_APERTURA) {

                                tab++;
                                parea(tokenAct.tipo);

                                if (!error && !panico) {

                                    MAIN(id);

                                    if (!error && !panico) {

                                        MAIN_CLASS1(id);

                                        if (!error && !panico) {

                                            if (tokenAct.tipo == tkn.tipo.LLAVE_CIERRE) {

                                                tab--;
                                                parea(tokenAct.tipo);

                                            }
                                            else {
                                                error = true;
                                                panicMode();
                                            }

                                        }

                                    }

                                }

                            }
                            else {
                                error = true;
                                panicMode();
                            }

                        }

                    }
                    else {
                        error = true;
                        panicMode();
                    }

                }

            }
            else {
                error = true;
                panicMode();
            }

        }

    }
    else {
        error = true;
        panicMode();
    }

}

function MAIN_CLASS1(id) {

    if (tokenAct.tipo == tkn.tipo.P_RESERVADA && tokenAct.lexema == "public") {

        METODO(id);

    } else {

    }

}

function MAIN(id) {

    if (tokenAct.tipo == tkn.tipo.P_RESERVADA && tokenAct.lexema == "public") {

        parea(tokenAct.tipo);

        if (!error && !panico) {



        }

    }
    else {
        error = true;
        panicMode();
    }

}


//--------------------------------------- DECLARAION DE CLASES ---------------------------------


function CLASE(id) {

    /*
    let temp = id;
    id = '"' + tokenAct.fila + "" + tokenAct.columna + "lbl" + '"'+"\n";
    grafo += id + "[label=\"CLASE\"]\n";
    grafo += temp + "->" + id;
    */

    PUBLIC(id);

    if (!error && !panico) {

        if (tokenAct.tipo == tkn.tipo.P_RESERVADA && tokenAct.lexema == "class") {

            py += "class ";

            grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
            grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
            parea(tokenAct.tipo);

            if (!error && !panico) {

                if (tokenAct.tipo == tkn.tipo.ID) {

                    py += tokenAct.lexema + ": \n";

                    grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
                    grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
                    parea(tokenAct.tipo);

                    if (!error && !panico) {

                        if (tokenAct.tipo == tkn.tipo.LLAVE_APERTURA) {

                            tab++;

                            grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
                            grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
                            parea(tokenAct.tipo);

                            if (!error && !panico) {

                                CLASE1(id);

                                if (!error && !panico) {

                                    if (tokenAct.tipo == tkn.tipo.LLAVE_CIERRE) {

                                        tab--;

                                        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
                                        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
                                        parea(tokenAct.tipo);

                                    }
                                    else {
                                        error = true;
                                        panicMode();
                                    }

                                }

                            }

                        }
                        else {
                            error = true;
                            panicMode();
                        }

                    }

                }
                else {
                    error = true;
                    panicMode();
                }

            }

        }
        else {
            error = true;
            panicMode();
        }

    }

}


function CLASE1(id) {

    if (tokenAct.tipo == tkn.tipo.P_RESERVADA && (tokenAct.lexema == "String" || tokenAct.lexema == "int")
        || tokenAct.lexema == "double" || tokenAct.lexema == "boolean" || tokenAct.lexema == "char") {

        METODO(id);

    }
    else if (tokenAct.tipo == tkn.tipo.P_RESERVADA && tokenAct.lexema == "void") {

        METODO(id);

    }
    else if (tokenAct.tipo == tkn.tipo.P_RESERVADA && tokenAct.lexema == "static") {

        METODO(id);

    }
    else if (tokenAct.tipo == tkn.tipo.P_RESERVADA && tokenAct.lexema == "public") {

        METODO(id);

    }
    else {

    }

}


//--------------------------------------- DECLARAION DE VARIABLE ---------------------------------


function DECLARACION(id) {

    let temp = id;
    id = '"' + tokenAct.fila + "" + tokenAct.columna + "lbl" + '"'+"\n";
    grafo += id + "[label=\"DECLARACION\"]\n";
    grafo += temp + "->" + id;

    if (tokenAct.tipo == tkn.tipo.P_RESERVADA && tokenAct.lexema == "int") {

        INT(id);

    }
    else if (tokenAct.tipo == tkn.tipo.P_RESERVADA && tokenAct.lexema == "String") {

        STRING(id);

    }
    else if (tokenAct.tipo == tkn.tipo.P_RESERVADA && tokenAct.lexema == "double") {

        DOUBLE(id);

    }
    else if (tokenAct.tipo == tkn.tipo.P_RESERVADA && tokenAct.lexema == "char") {

        CHAR(id);

    }
    else if (tokenAct.tipo == tkn.tipo.P_RESERVADA && tokenAct.lexema == "boolean") {

        BOOLEAN(id);

    }
    else {
        error = true;
        panicMode();
    }

}


//--------------------------------------- INICIALIZACION DE VARIABLE ---------------------------------

function INICIALIZACION(id) {

    if (tokenAct.tipo == tkn.ID) {

        parea(tokenAct.tipo);

        if (!error && !panico) {

            if (tokenAct.tipo == tkn.IGUAL_AR) {

                parea(tokenAct.tipo);

                if (!error && !panico) {

                    CONDICION(id);

                    if (!error && !panico) {

                        if (tokenAct.tipo == tkn.PUNTO_COMA) {

                            parea(tokenAct.tipo);
                            panico = false;

                        }
                        else {
                            error = true;
                            panicMode("puntoComa");
                        }

                    }

                }

            }
            else {
                error = true;
                panicMode();
            }

        }

    }
    else {
        error = true;
        panicMode();
    }

}


//--------------------------------------- PRINT ---------------------------------

function PRINT(id) {


    if (tokenAct.tipo == tkn.tipo.P_RESERVADA && tokenAct.lexema == "System") {

        let temp = id;
        id = '"' + tokenAct.fila + "" + tokenAct.columna + "lbl" + '"'+"\n";
        grafo += id + "[label=\"PRINT\"]\n";
        grafo += temp + "->" + id;

        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
        parea(tokenAct.tipo);

        if (!error && !panico) {

            if (tokenAct.tipo == tkn.tipo.PUNTO) {

                grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
                grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
                parea(tokenAct.tipo);

                if (!error && !panico) {

                    if (tokenAct.tipo == tkn.tipo.P_RESERVADA && tokenAct.lexema == "out") {

                        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
                        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
                        parea(tokenAct.tipo);


                        if (!error && !panico) {

                            if (tokenAct.tipo == tkn.tipo.PUNTO) {

                                grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
                                grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
                                parea(tokenAct.tipo);


                                if (!error && !panico) {

                                    PRINT1(id);

                                    if (!error && !panico) {

                                        if (tokenAct.tipo == tkn.tipo.PARENTESIS_APERTURA) {

                                            grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
                                            grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
                                            py += "(";
                                            parea(tokenAct.tipo);

                                            if (!error && !panico) {

                                                CONDICION(id);

                                                if (!error && !panico) {

                                                    if (salto) {
                                                        py += ", end=\"\"";
                                                    }

                                                    if (tokenAct.tipo == tkn.tipo.PARENTESIS_CIERRE) {

                                                        py += ")";

                                                        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
                                                        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
                                                        parea(tokenAct.tipo);

                                                        if (!error && !panico) {

                                                            if (tokenAct.tipo == tkn.tipo.PUNTO_COMA) {

                                                                py += "\n";

                                                                grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
                                                                grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
                                                                parea(tokenAct.tipo);
                                                                panico = false;

                                                            }
                                                            else {
                                                                error = true;
                                                                panicMode("puntoComa");
                                                            }

                                                        }

                                                    }
                                                    else {
                                                        error = true;
                                                        panicMode();
                                                    }

                                                }

                                            }

                                        }
                                        else {
                                            error = true;
                                            panicMode();
                                        }

                                    }

                                }

                            } else {
                                error = true;
                                panicMode();
                            }

                        }

                    }
                    else {
                        error = true;
                        panicMode();
                    }

                }

            }
            else {
                error = true;
                panicMode();
            }

        }

    }
    else {
        error = true;
        panicMode();
    }

}

function PRINT1(id) {

    if (tokenAct.tipo == tkn.tipo.P_RESERVADA && tokenAct.lexema == "print") {

        salto = false;
        py += "print";

        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
        parea(tokenAct.tipo);



    }
    else if (tokenAct.tipo == tkn.tipo.P_RESERVADA && tokenAct.lexema == "println") {

        salto = true;
        py += "print";

        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
        parea(tokenAct.tipo);



    }
    else {
        error = true;
        panicMode();
    }

}

//--------------------------------------- INTERFACE ---------------------------------

function INTERFACE(id) {

    PUBLIC(id);

    if (!error && !panico) {

        if (tokenAct.tipo == tkn.tipo.P_RESERVADA && tokenAct.lexema == "interface") {

            py += "class ";

            grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
            grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
            parea(tokenAct.tipo);

            if (!error && !panico) {

                if (tokenAct.tipo == tkn.tipo.ID) {

                    py += tokenAct.lexema + ":\n ";

                    grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
                    grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
                    parea(tokenAct.tipo);

                    if (!error && !panico) {

                        if (tokenAct.tipo == tkn.tipo.LLAVE_APERTURA) {

                            tab++;

                            grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
                            grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
                            parea(tokenAct.tipo);

                            if (!error && !panico) {

                                METODO_INTERFACE(id);

                                if (!error && !panico) {

                                    if (tokenAct.tipo == tkn.tipo.LLAVE_CIERRE) {

                                        tab--;

                                        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
                                        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
                                        parea(tokenAct.tipo);

                                    }
                                    else {
                                        error = true;
                                        panicMode();
                                    }

                                }

                            }

                        }
                        else {
                            error = true;
                            panicMode();
                        }

                    }

                }
                else {
                    error = true;
                    panicMode();
                }

            }

        }
        else {
            error = true;
            panicMode();
        }

    }

}


function METODO_INTERFACE(id) {

    let temp = id;
    id = '"' + tokenAct.fila + "" + tokenAct.columna + "lbl" + '"'+"\n";
    grafo += id + "[label=\"FUNCION\"]\n";
    grafo += temp + "->" + id;


    PUBLIC(id);

    if (!error && !panico) {

        METODO_INTERFACE1(id);

    }

}


function METODO_INTERFACE1(id) {

    if (tokenAct.tipo == tkn.tipo.P_RESERVADA && (tokenAct.lexema == "String" || tokenAct.lexema == "int")
        || tokenAct.lexema == "double" || tokenAct.lexema == "boolean" || tokenAct.lexema == "char"
    ) {

        TIPO(id);

        if (!error && !panico) {

            if (tokenAct.tipo == tkn.tipo.ID) {

                py += "def ";
                py += tokenAct.lexema;

                grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
                grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
                parea(tokenAct.tipo);


                if (!error && !panico) {

                    if (tokenAct.tipo == tkn.tipo.PARENTESIS_APERTURA) {

                        py += "(";

                        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
                        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
                        parea(tokenAct.tipo);


                        if (!error && !panico) {

                            PARAMS_METODO(id);

                            if (!error && !panico) {

                                if (tokenAct.tipo == tkn.tipo.PARENTESIS_CIERRE) {

                                    py += "):\n";

                                    grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
                                    grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
                                    parea(tokenAct.tipo);


                                    if (!error && !panico) {

                                        if (tokenAct.tipo == tkn.tipo.PUNTO_COMA) {


                                            grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
                                            grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
                                            parea(tokenAct.tipo);
                                            panico = false;


                                            if (!error && !panico) {

                                                METODO_INTERFACE(id);

                                            }

                                        } else {
                                            panicMode("puntoComa");
                                        }

                                    }

                                }
                                else {
                                    error = true;
                                    panicMode();
                                }

                            }

                        }

                    }
                    else {
                        error = true;
                        panicMode();
                    }

                }

            }
            else {
                error = true;
                panicMode();
            }

        }

    }
    else if (tokenAct.tipo == tkn.tipo.P_RESERVADA && tokenAct.lexema == "void") {

        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
        parea(tokenAct.tipo);

        if (!error && !panico) {

            if (tokenAct.tipo == tkn.tipo.ID) {

                py += "def ";
                py += tokenAct.lexema;

                grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
                grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
                parea(tokenAct.tipo);


                if (!error && !panico) {

                    if (tokenAct.tipo == tkn.tipo.PARENTESIS_APERTURA) {

                        py += "(";

                        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
                        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
                        parea(tokenAct.tipo);

                        if (!error && !panico) {

                            PARAMS_METODO(id);

                            if (!error && !panico) {

                                if (tokenAct.tipo == tkn.tipo.PARENTESIS_CIERRE) {

                                    py += "):\n";

                                    grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
                                    grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
                                    parea(tokenAct.tipo);


                                    if (!error && !panico) {

                                        if (tokenAct.tipo == tkn.tipo.PUNTO_COMA) {

                                            grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
                                            grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
                                            parea(tokenAct.tipo);
                                            panico = false;

                                            if (!error && !panico) {

                                                METODO_INTERFACE(id);

                                            }

                                        }
                                        else {
                                            panicMode("puntoComa");
                                        }

                                    }

                                }
                                else {
                                    error = true;
                                    panicMode();
                                }

                            }

                        }

                    }
                    else {
                        error = true;
                        panicMode();
                    }

                }

            }
            else {
                error = true;
                panicMode();
            }

        }

    }
    else {

    }

}


function INTERFACE1(id) {


    if (tokenAct.tipo == tkn.tipo.P_RESERVADA && tokenAct.lexema == "public") {

        METODO(id);

        if (!error && !panico) {

            INTERFACE1(id);

        }

    }
    else {

    }

}


//--------------------------------------- INSTRUCCIONES ---------------------------------


function INSTRUCCIONES(id) {

    if (tokenAct.tipo == tkn.tipo.P_RESERVADA) {

        if (tokenAct.lexema == "int" || tokenAct.lexema == "String" || tokenAct.lexema == "double" || tokenAct.lexema == "char" || tokenAct.lexema == "boolean"
            || tokenAct.lexema == "while" || tokenAct.lexema == "do" || tokenAct.lexema == "if" || tokenAct.lexema == "for" || tokenAct.lexema == "System"
            || tokenAct.lexema == "return") {

            INSTRCCIONES1(id);

            if (!error && !panico) {

                INSTRUCCIONES(id);

            }

        }

    }
    else if (tokenAct.tipo == tkn.tipo.ID) {

        INSTRCCIONES1(id);

        if (!error && !panico) {

            INSTRUCCIONES(id);

        }

    } else {

    }

}


function INSTRCCIONES1(id) {


    if (tokenAct.tipo == tkn.tipo.P_RESERVADA && tokenAct.lexema == "while") {

        let temp = id;
        id = '"' + tokenAct.fila + "" + tokenAct.columna + "lbl1" + '"';
        grafo += id + "[label=\"INSTRUCCION\"]\n";
        grafo += temp + "->" + id;

        tabular();
        WHILE(id);

    }
    else if (tokenAct.tipo == tkn.tipo.P_RESERVADA && tokenAct.lexema == "do") {

        let temp = id;
        id = '"' + tokenAct.fila + "" + tokenAct.columna + "lbl1" + '"';
        grafo += id + "[label=\"INSTRUCCION\"]\n";
        grafo += temp + "->" + id;

        tabular();
        DO_WHILE(id);

    }
    else if (tokenAct.tipo == tkn.tipo.P_RESERVADA && tokenAct.lexema == "if") {

        let temp = id;
        id = '"' + tokenAct.fila + "" + tokenAct.columna + "lbl1" + '"';
        grafo += id + "[label=\"INSTRUCCION\"]\n";
        grafo += temp + "->" + id;

        tabular();
        IF(id);

    }
    else if (tokenAct.tipo == tkn.tipo.P_RESERVADA && tokenAct.lexema == "for") {

        let temp = id;
        id = '"' + tokenAct.fila + "" + tokenAct.columna + "lbl1" + '"';
        grafo += id + "[label=\"INSTRUCCION\"]\n";
        grafo += temp + "->" + id;

        tabular();
        FOR(id);

    }
    else if (tokenAct.tipo == tkn.tipo.P_RESERVADA && (tokenAct.lexema == "int" || tokenAct.lexema == "String" || tokenAct.lexema == "double" || tokenAct.lexema == "char" || tokenAct.lexema == "boolean")) {

        let temp = id;
        id = '"' + tokenAct.fila + "" + tokenAct.columna + "lbl1" + '"';
        grafo += id + "[label=\"INSTRUCCION\"]\n";
        grafo += temp + "->" + id;

        tabular();
        DECLARACION(id);

    }
    else if (tokenAct.tipo == tkn.tipo.ID) {

        let temp = id;
        id = '"' + tokenAct.fila + "" + tokenAct.columna + "lbl1" + '"';
        grafo += id + "[label=\"INSTRUCCION\"]\n";
        grafo += temp + "->" + id;

        let temp1 = id;
        id = '"' + tokenAct.fila + "" + tokenAct.columna + "lbl2" + '"';
        grafo += id + "[label=\"ASIGNACION\"]\n";
        grafo += temp1 + "->" + id;

        tabular();
        py += tokenAct.lexema + " ";

        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
        parea(tokenAct.tipo);

        if (!error && !panico) {

            INSTRUCCIONES2(id);

            if (!error && !panico) {

                if (tokenAct.tipo == tkn.tipo.PUNTO_COMA) {

                    py += "\n";

                    grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
                    grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
                    parea(tokenAct.tipo);
                    panico = false;

                }
                else {
                    panicMode("puntoComa");
                }

            }

        }

    }
    else if (tokenAct.tipo == tkn.tipo.P_RESERVADA && tokenAct.lexema == "System") {

        let temp = id;
        id = '"' + tokenAct.fila + "" + tokenAct.columna + "lbl1" + '"';
        grafo += id + "[label=\"INSTRUCCION\"]\n";
        grafo += temp + "->" + id;

        tabular();
        PRINT(id);

    }
    else if (tokenAct.tipo == tkn.tipo.P_RESERVADA && tokenAct.lexema == "return") {

        let temp = id;
        id = '"' + tokenAct.fila + "" + tokenAct.columna + "lbl1" + '"';
        grafo += id + "[label=\"INSTRUCCION\"]\n";
        grafo += temp + "->" + id;

        tabular();
        RETURN(id);

    }
    else {
        error = true;
        panicMode();
    }

}


function INSTRUCCIONES2(id) {

    if (tokenAct.tipo == tkn.tipo.PARENTESIS_APERTURA) {

        py += "(";

        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
        parea(tokenAct.tipo);

        if (!error && !panico) {

            PARAMS(id);

            if (!error && !panico) {

                if (tokenAct.tipo == tkn.tipo.PARENTESIS_CIERRE) {

                    py += ")";

                    grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
                    grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
                    parea(tokenAct.tipo);



                }

            }

        }

    }
    else if (tokenAct.tipo == tkn.tipo.IGUAL_AR) {

        py += "=";

        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
        parea(tokenAct.tipo);

        if (!error && !panico) {

            CONDICION(id);

        }

    }
    else if (tokenAct.tipo == tkn.tipo.INCREMENTO) {

        py += "+=1";

        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
        parea(tokenAct.tipo);



    }
    else if (tokenAct.tipo == tkn.tipo.DECREMENTO) {

        py += "-=1";

        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
        parea(tokenAct.tipo);

    }
    else {
        error = true;
        panicMode();
    }


}

//--------------------------------------- RETURN --------------------------------


function RETURN(id) {

    if (tokenAct.tipo == tkn.tipo.P_RESERVADA && tokenAct.lexema == "return") {

        py += "return ";

        grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
        grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
        parea(tokenAct.tipo);

        if (!error && !panico) {

            CONDICION(id);

            if (!error && !panico) {

                if (tokenAct.tipo == tkn.tipo.PUNTO_COMA) {

                    py += " \n";

                    grafo += '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "[label=\"" + tokenAct.lexema + "\"]\n";
                    grafo += id + "->" + '"' + tokenAct.fila + "" + tokenAct.columna + tokenAct.lexema + '"' + "\n";
                    parea(tokenAct.tipo);
                    panico = false;



                }
                else {
                    panicMode("puntoComa");
                }

            }

        }

    }
    else {
        error = true;
        panicMode();
    }

}


//--------------------------------------- INICIO ---------------------------------


function INICIO(id) {

    if (tokenAct.tipo == tkn.tipo.P_RESERVADA && tokenAct.lexema == "public") {

        if (tokens[indice + 1].tipo == tkn.tipo.P_RESERVADA && tokens[indice + 1].lexema == "class") {

            tabular();

            grafo +=  "RAIZ"+ "[label=\"RAIZ\"]\n";
            id = '"' + tokenAct.fila + "" + tokenAct.columna + "lbl" + '"'+"\n";
            grafo += id + "[label=\"CLASE\"]\n";
            grafo+="RAIZ ->"+id;

            CLASE(id);

            if (!error && !panico) {

                INICIO(id);

            }

        }
        else if (tokens[indice + 1].tipo == tkn.tipo.P_RESERVADA && tokens[indice + 1].lexema == "interface") {

            tabular();

            grafo +=  "RAIZ"+ "[label=\"RAIZ\"]\n";
            id = '"' + tokenAct.fila + "" + tokenAct.columna + "lbl" + '"'+"\n";
            grafo += id + "[label=\"INTERFACE\"]\n";
            grafo+="RAIZ ->"+id;

            INTERFACE(id);

            if (!error && !panico) {

                INICIO(id);

            }

        }

    }
    else if (tokenAct.tipo == tkn.tipo.P_RESERVADA && tokenAct.lexema == "class") {

        tabular();

        grafo +=  "RAIZ"+ "[label=\"RAIZ\"]\n";
        id = '"' + tokenAct.fila + "" + tokenAct.columna + "lbl" + '"'+"\n";
        grafo += id + "[label=\"CLASE\"]\n";
        grafo+="RAIZ ->"+id;

        CLASE(id);

        if (!error && !panico) {

            INICIO(id);

        }

    }
    else if (tokenAct.tipo == tkn.tipo.P_RESERVADA && tokenAct.lexema == "interface") {

        tabular();

        grafo +=  "RAIZ"+ "[label=\"RAIZ\"]\n";
        id = '"' + tokenAct.fila + "" + tokenAct.columna + "lbl" + '"'+"\n";
        grafo += id + "[label=\"INTERFACE\"]\n";
        grafo+="RAIZ ->"+id;

        INTERFACE(id);

        if (!error && !panico) {

            INICIO(id);

        }

    }
    else {

    }

}









function tabular() {

    for (let i = 0; i < tab; i++) {
        py += "\t";
    }

}


function panicMode(tipo) {

    error = false;
    panico = false;

    token = new tkn.Token(tokenAct.lexema, tokenAct.tipo, tokenAct.fila, tokenAct.columna);
    errores.push(token);
    while (tokenAct.tipo != tkn.tipo.PUNTO_COMA) {
        parea(tokenAct.tipo);
    }

    if (tipo == "puntoComa") {
        py += "\n";
        parea(tokenAct.tipo);
    }

}


function parea(tipo) {

    if (tokenAct.tipo == tipo) {

        if (indice < tokens.length - 1) {

            indice++;
            tokenAct = tokens[indice];

            //console.log("Token Actual: " + tokenAct.lexema);

        }
        else if (indice == tokens.length - 1) {
            token = new tkn.Token("FINAL DE LISTA", 37, 0, 0);
            tokens.push(token);

            indice++;
            tokenAct = tokens[indice];
        }

    } else {

        error = true;
        panicMode();

    }

    if (tokenAct.tipo == tkn.tipo.COMENTARIO_ML) {
        parea(tokenAct.tipo);
    }
    else if (tokenAct.tipo == tkn.tipo.COMENTARIO_SIMPLE) {
        parea(tokenAct.tipo);
    }
    else if (tokenAct.tipo == tkn.tipo.DESCONOCIDO) {
        parea(tokenAct.tipo);
    }

}



exports.prueba = prueba;