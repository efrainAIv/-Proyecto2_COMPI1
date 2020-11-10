const tkn = require("../token/token");


lista = [];
s = "";
tab = 0;
variable = false;
punto = true;
params = false;

function traducir(tokens) {

    let n = 0;
    tokens.forEach(t => {

        switch (t.tipo) {


            case 1://palabras reservadas

                if (t.lexema == "break") {
                    s += "brak ";
                }
                else if (t.lexema == "boolean") {
                    if(!params){
                        s += "var ";
                    }
                }
                else if (t.lexema == "char") {
                    if(!params){
                        s += "var ";
                    }
                }
                else if (t.lexema == "class") {
                    s += "class ";
                }
                else if (t.lexema == "continue") {
                    s += "continue ";
                }
                else if (t.lexema == "do") {
                    s += "do ";
                }
                else if (t.lexema == "double") {
                    if(!params){
                        s += "var ";
                    }
                }
                else if (t.lexema == "else") {
                    s += "else ";
                }
                else if (t.lexema == "extends") {
                    s += "extends ";
                }
                else if (t.lexema == "false") {
                    s += "false ";
                }
                else if (t.lexema == "for") {
                    s += "for ";
                }
                else if (t.lexema == "if") {
                    s += "if ";
                }
                else if (t.lexema == "int") {
                    if(!params){
                        s += "var ";
                    }
                }
                else if (t.lexema == "interface") {
                    s += "class ";
                }
                else if (t.lexema == "implements") {
                    s += "impements ";
                }
                else if (t.lexema == "new") {
                    s += "new ";
                }
                else if (t.lexema == "out") {

                }
                else if (t.lexema == "print") {

                }
                else if (t.lexema == "println") {
                    punto = true;
                    s += "console.log";
                }
                else if (t.lexema == "public") {
                    
                    if(!variable && tab!=0){
                        s += "function ";
                    }else{
                        s += "public ";
                    }
                }
                else if (t.lexema == "return") {
                    s += "return ";
                }
                else if (t.lexema == "static") {

                }
                else if (t.lexema == "String") {
                    if(!params){
                        s += "var ";
                    }
                }
                else if (t.lexema == "System") {
                    punto = false;
                }
                else if (t.lexema == "true") {
                    s += "true ";
                }
                else if (t.lexema == "this") {
                    s += "this ";
                }
                else if (t.lexema == "void") {

                }
                else if (t.lexema == "while") {
                    s += "while ";
                }

                break;

            case 2: // cadenas

                s += t.lexema;
                break;

            case 3: // comentario ml

                break;

            case 4: // cometario


                break;

            case 5: // caracter

                s += t.lexema;
                break;

            case 6: // id

                s += t.lexema;
                break;

            case 7: //entero

                s += t.lexema;
                break;

            case 8: // decimal

                s += t.lexema;
                break;

            case 9: //llave apertura

                tab++;
                s += "{ \n";
                if(tokens[n+1].tipo!=10){
                    tabular();
                }
                if(tab==1){
                    variable = false;
                }
                else{
                    variable = true;
                }
                
                break;

            case 10: //llave cierre

                tab--;
                tabular();
                s += "} \n";
                if (tab <= 1) {
                    variable = false;
                }
                break;

            case 11://parentesis apertura

                params = true;
                s += "(";
                break;

            case 12://parentesis cierre

            params = false;
                s += ")";
                break;

            case 13: //corchete apertura

                break;

            case 14: // corchete cierre

                break;

            case 15: // coma

                s += ", ";
                break;

            case 16: // punto

                if (punto) {
                    s += ".";
                }
                break;

            case 17: // igual ar

                s += "=";
                break;

            case 18: // punto coma

                s += "; \n";
                if(tokens[n+1].tipo!=10){
                    tabular();
                }
                
                break;

            case 19: // dos puntos

                break;

            case 20: // mas

                s += "+";
                break;

            case 21: // menos

                s += "-";
                break;

            case 22: // multiplicacion

                s += "*";
                break;

            case 23: //division

                s += "/";
                break;

            case 24: //mayor

                s += ">";
                break;

            case 25: //menor

                s += "<";
                break;

            case 26: //not

                s += "!";
                break;

            case 27: //xor

                s += "^";
                break;

            case 28: //and

                s += "&&";
                break;

            case 29: //or

                s += "||";
                break;

            case 30: // mayor igual

                s += ">=";
                break;

            case 32: // menor igual

                s += "<=";
                break;

            case 32: // igual log

                s += "==";
                break;

            case 33: // diferente

                s += "!=";
                break;

            case 34: // incremento

                s += "++";
                break;

            case 35: // decremento

                s += "--";
                break;

            case 36: //desconocido

                break;

            case 37: //vacio

                break;

            default:
                break;





        }

        n++;
    });

    return s;

}


function tabular() {

    for (let i = 0; i < tab; i++) {
        s += "\t";
    }

}

exports.traducir = traducir;



