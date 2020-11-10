
%{
    const tkn = require("./token/token");
    var lista = [];
    var js ="";



    exports.lista = lista;
    exports.js = js;
%}


%lex
%options case-insensitive

%%

"{"                 %{token = new tkn.Token(yytext, 9, yylloc.first_line, yylloc.first_column); lista.push(token); return 'llaveApertura'; %}
"}"                 %{token = new tkn.Token(yytext, 10, yylloc.first_line, yylloc.first_column); lista.push(token); return 'llaveCierre'; %}
"["                 %{token = new tkn.Token(yytext, 13, yylloc.first_line, yylloc.first_column); lista.push(token); return 'corcheteApertura'; %}
"]"                 %{token = new tkn.Token(yytext, 14, yylloc.first_line, yylloc.first_column); lista.push(token); return 'corcheteCierre'; %}
"("                 %{token = new tkn.Token(yytext, 11, yylloc.first_line, yylloc.first_column); lista.push(token); return 'parentesisApertura'; %}
")"                 %{token = new tkn.Token(yytext, 12, yylloc.first_line, yylloc.first_column); lista.push(token); return 'parentesisCierre'; %}
"."                 %{token = new tkn.Token(yytext, 16, yylloc.first_line, yylloc.first_column); lista.push(token); return 'punto'; %}
","                 %{token = new tkn.Token(yytext, 15, yylloc.first_line, yylloc.first_column); lista.push(token); return 'coma'; %}
";"                 %{token = new tkn.Token(yytext, 18, yylloc.first_line, yylloc.first_column); lista.push(token); return 'puntoComa'; %}
":"                 %{token = new tkn.Token(yytext, 19, yylloc.first_line, yylloc.first_column); lista.push(token); return 'dosPuntos'; %}
"=="                 %{token = new tkn.Token(yytext, 32, yylloc.first_line, yylloc.first_column); lista.push(token); return 'igualLog'; %}
"="                 %{token = new tkn.Token(yytext, 17, yylloc.first_line, yylloc.first_column); lista.push(token); return 'igualAR'; %}
"+"                 %{token = new tkn.Token(yytext, 20, yylloc.first_line, yylloc.first_column); lista.push(token); return 'mas'; %}
"-"                 %{token = new tkn.Token(yytext, 21, yylloc.first_line, yylloc.first_column); lista.push(token); return 'menos'; %}
"*"                 %{token = new tkn.Token(yytext, 22, yylloc.first_line, yylloc.first_column); lista.push(token); return 'multiplicacion'; %}
"/"                 %{token = new tkn.Token(yytext, 23, yylloc.first_line, yylloc.first_column); lista.push(token); return 'division'; %}
'>='                 %{token = new tkn.Token(yytext, 30, yylloc.first_line, yylloc.first_column); lista.push(token); return 'mayorIgual'; %}
"<="                 %{token = new tkn.Token(yytext, 31, yylloc.first_line, yylloc.first_column); lista.push(token); return 'menorIgual'; %}
">"                 %{token = new tkn.Token(yytext, 24, yylloc.first_line, yylloc.first_column); lista.push(token); return 'mayor'; %}
"<"                 %{token = new tkn.Token(yytext, 25, yylloc.first_line, yylloc.first_column); lista.push(token); return 'menor'; %}
"!="                 %{token = new tkn.Token(yytext, 33, yylloc.first_line, yylloc.first_column); lista.push(token); return 'diferente'; %}
"++"                 %{token = new tkn.Token(yytext, 34, yylloc.first_line, yylloc.first_column); lista.push(token); return 'incremento'; %}
"--"                 %{token = new tkn.Token(yytext, 35, yylloc.first_line, yylloc.first_column); lista.push(token); return 'decremento'; %}
"!"                 %{token = new tkn.Token(yytext, 26, yylloc.first_line, yylloc.first_column); lista.push(token); return 'not'; %}
"^"                 %{token = new tkn.Token(yytext, 27, yylloc.first_line, yylloc.first_column); lista.push(token); return 'xor'; %}
"||"                 %{token = new tkn.Token(yytext, 29, yylloc.first_line, yylloc.first_column); lista.push(token); return 'or'; %}
"&&"                 %{token = new tkn.Token(yytext, 28, yylloc.first_line, yylloc.first_column); lista.push(token); return 'and'; %}


"break"                 %{token = new tkn.Token(yytext, 1, yylloc.first_line, yylloc.first_column); lista.push(token); return 'break'; %}
"boolean"                 %{token = new tkn.Token(yytext, 1, yylloc.first_line, yylloc.first_column); lista.push(token); return 'boolean'; %}
"char"                 %{token = new tkn.Token(yytext, 1, yylloc.first_line, yylloc.first_column); lista.push(token); return 'char'; %}
"class"                 %{token = new tkn.Token(yytext, 1, yylloc.first_line, yylloc.first_column); lista.push(token); return 'class'; %}
"continue"                 %{token = new tkn.Token(yytext, 1, yylloc.first_line, yylloc.first_column); lista.push(token); return 'continue'; %}
"do"                 %{token = new tkn.Token(yytext, 1, yylloc.first_line, yylloc.first_column); lista.push(token); return 'do'; %}
"double"                 %{token = new tkn.Token(yytext, 1, yylloc.first_line, yylloc.first_column); lista.push(token); return 'double'; %}
"else"                 %{token = new tkn.Token(yytext, 1, yylloc.first_line, yylloc.first_column); lista.push(token); return 'else'; %}
"extends"                 %{token = new tkn.Token(yytext, 1, yylloc.first_line, yylloc.first_column); lista.push(token); return 'extends'; %}
"false"                 %{token = new tkn.Token(yytext, 1, yylloc.first_line, yylloc.first_column); lista.push(token); return 'false'; %}
"for"                 %{token = new tkn.Token(yytext, 1, yylloc.first_line, yylloc.first_column); lista.push(token); return 'for'; %}
"if"                 %{token = new tkn.Token(yytext, 1, yylloc.first_line, yylloc.first_column); lista.push(token); return 'if'; %}
"int"                 %{token = new tkn.Token(yytext, 1, yylloc.first_line, yylloc.first_column); lista.push(token); return 'int'; %}
"interface"                 %{token = new tkn.Token(yytext, 1, yylloc.first_line, yylloc.first_column); lista.push(token); return 'interface'; %}
"implements"                 %{token = new tkn.Token(yytext, 1, yylloc.first_line, yylloc.first_column); lista.push(token); return 'implements'; %}
"new"                 %{token = new tkn.Token(yytext, 1, yylloc.first_line, yylloc.first_column); lista.push(token); return 'new'; %}
"out"                 %{token = new tkn.Token(yytext, 1, yylloc.first_line, yylloc.first_column); lista.push(token); return 'out'; %}
"print"                 %{token = new tkn.Token(yytext, 1, yylloc.first_line, yylloc.first_column); lista.push(token); return 'print'; %}
"println"                 %{token = new tkn.Token(yytext, 1, yylloc.first_line, yylloc.first_column); lista.push(token); return 'println'; %}
"public"                 %{token = new tkn.Token(yytext, 1, yylloc.first_line, yylloc.first_column); lista.push(token); return 'public'; %}
"return"                 %{token = new tkn.Token(yytext, 1, yylloc.first_line, yylloc.first_column); lista.push(token); return 'return'; %}
"static"                 %{token = new tkn.Token(yytext, 1, yylloc.first_line, yylloc.first_column); lista.push(token); return 'static'; %}
"String"                 %{token = new tkn.Token(yytext, 1, yylloc.first_line, yylloc.first_column); lista.push(token); return 'String'; %}
"System"                 %{token = new tkn.Token(yytext, 1, yylloc.first_line, yylloc.first_column); lista.push(token); return 'System'; %}
"true"                 %{token = new tkn.Token(yytext, 1, yylloc.first_line, yylloc.first_column); lista.push(token); return 'true'; %}
"this"                 %{token = new tkn.Token(yytext, 1, yylloc.first_line, yylloc.first_column); lista.push(token); return 'this'; %}
"void"                 %{token = new tkn.Token(yytext, 1, yylloc.first_line, yylloc.first_column); lista.push(token); return 'void'; %}
"while"                 %{token = new tkn.Token(yytext, 1, yylloc.first_line, yylloc.first_column); lista.push(token); return 'while'; %}
"finalArchivo"                 %{token = new tkn.Token(yytext, 37, yylloc.first_line, yylloc.first_column); lista.push(token); return 'finalArchivo'; %}


"//"[\n]* %{token = new tkn.Token(yytext, 4, yylloc.first_line, yylloc.first_column); lista.push(token); return 'comentarioLinea'; %}
[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/] %{token = new tkn.Token(yytext, 3, yylloc.first_line, yylloc.first_column); lista.push(token); return 'comentarioML'; %} 
[\"][^\\\"]*([\\][\\\"ntr][^\\\"]*)*[\"] %{token = new tkn.Token(yytext, 2, yylloc.first_line, yylloc.first_column); lista.push(token); return 'cadena'; %} 
[\']([^\\\"]*([\\][\\\"ntr][^\\\"]*)*)?[\'] %{token = new tkn.Token(yytext, 5, yylloc.first_line, yylloc.first_column); lista.push(token); return 'caracter'; %} 
[a-zA-Z]([a-zA-Z0-9_])* %{token = new tkn.Token(yytext, 6, yylloc.first_line, yylloc.first_column); lista.push(token); return 'id'; %} 


("-")?[0-9]+\b                %{token = new tkn.Token(yytext, 7, yylloc.first_line, yylloc.first_column); lista.push(token); return 'entero'; %} 
[0-9]+("."[0-9]+)?\b    %{token = new tkn.Token(yytext, 8, yylloc.first_line, yylloc.first_column); lista.push(token); return 'decimal'; %} 


/* Espacios en blanco */
[ \r\t\n\f]            {}

<<EOF>>                 return 'EOF';

. { console.error('Este es un error léxico: ' + yytext + ', en la linea: ' + yylloc.first_line + ', en la columna: ' + yylloc.first_column); token = new tkn.Token(yytext, 36, yylloc.first_line, yylloc.first_column); lista.push(token);}
/lex


%start INICIO
%%

/*
------------------------------------------------------------------------------------------------

--------------------------------------------- TIPOS --------------------------------------------
*/

TIPO: int 
    |boolean
    |double
    |String
    |char ;

/*
------------------------------------------------------------------------------------------------

----------------------------------------- BREAK/CONTINUE ----------------------------------------
*/

BREAK: break puntoComa 
        | ;

CONTINUE: continue puntoComa
           | ;

/*
------------------------------------------------------------------------------------------------

------------------------------------------- OPERADORES -----------------------------------------
*/

OPS: mayor 
      |menor 
      |igualLog 
      |menorIgual 
      |mayorIgual 
      |diferente
      | ;

OP_DEC_INC: incremento 
             |decremento ;

/*
------------------------------------------------------------------------------------------------

------------------------------------------- METODO -----------------------------------------
*/

id_LLAMADA: id id_LLAMADA1 ;

id_LLAMADA1: parentesisApertura PARAMS parentesisCierre
              | ;

/*
------------------------------------------------------------------------------------------------

------------------------------------------- CONDICIONES ----------------------------------------
*/

COND: parentesisApertura EXPS parentesisCierre SYM_COND
       |id_LLAMADA SYM_COND
       |EXP
       |EXP_LOG
       |COND1
       |char CONCAT_LOG ;

COND1: STRING2
        | ;  

SYM_COND: ARITMETICOS_COND
           |LOGICOS EXP_LOG CONCAT_LOG
           | ;

ARITMETICOS_COND: mas CONCAT
                   |menos EXP
                   |multiplicacion EXP
                   |division EXP ;

CONCAT: STRING2
         |parentesisApertura EXP parentesisCierre CONCAT_LOG1 ;
 
CONCAT_LOG: mas cadena CONCAT_LOG1
             | ;

CONCAT_LOG1: mas STRING2
              | ;


/*
------------------------------------------------------------------------------------------------

--------------------------------------- EXPRESIONES parentesisAperturaTODASparentesisCierre ------------------------------------
*/

EXPS: parentesisApertura EXPS parentesisCierre SYM
       |id_LLAMADA SYM
       |EXP
       |EXP_LOG ;

SYM: ARITMETICOS EXP 
      |LOGICOS EXP_LOG ;

ARITMETICOS: mas
              |menos
              |multiplicacion
              |division ;

LOGICOS: or
          |and
          |xor ;

/*
------------------------------------------------------------------------------------------------

----------------------------------------- EXPRESIONES ------------------------------------------
*/

EXP: T EXP1 ;

EXP1: mas T EXP1
       |menos T EXP1
       | ;

T: F T1 ;

T1: multiplicacion F T1
     |division F T1
     | ;


F: parentesisApertura EXP parentesisCierre
    |entero
    |decimal
    |id_LLAMADA ;

/*
------------------------------------------------------------------------------------------------

----------------------------------------- ENTEROS parentesisAperturaintparentesisCierre ----------------------------------------
*/

INT: int id INT1 puntoComa {$$ = "= "+""; console.log("hola"); } ;

INT1: igualAR EXP INT1 {$$ = "= "+""; console.log("hola"); }
       |coma id INT1
       |  ;

/*
------------------------------------------------------------------------------------------------

----------------------------------------- DECIMALES parentesisAperturadoubleparentesisCierre -----------------------------------
*/

DOUBLE: double id DOUBLE1 puntoComa
       |error puntoComa {console.log("error en linea "+this._$.first_line+ "fila "+this._$.first_column)};

DOUBLE1: igualAR EXP DOUBLE1
       |coma id DOUBLE1
       |  ;

/*
------------------------------------------------------------------------------------------------

---------------------------------------- CARACTERES parentesisAperturacharparentesisCierre -----------------------------------
*/

CHAR: char id CHAR1 puntoComa
       |error puntoComa {console.log("error en "+this._$.first_line+ "fila "+this._$.first_column)};

CHAR1: igualAR caracter CHAR1
        |coma id CHAR1
        |  ;

/*
------------------------------------------------------------------------------------------------

----------------------------------------- CADENAS parentesisAperturaStringparentesisCierre -------------------------------------
*/

STRING: String id STRING1 puntoComa 
       |error puntoComa {console.log("error en "+this._$.first_line+ "fila "+this._$.first_column)};

STRING1: igualAR STRING2 STRING1
          |coma id STRING1
          |  ;

STRING2: TEXT
           |TEXT0  ;

TEXT: char mas TEXT4 TEXT1
       |entero mas TEXT4 TEXT1
       |decimal mas TEXT4 TEXT1
       |cadena TEXT1
       |id_LLAMADA TEXT1 ;
       
TEXT0: parentesisApertura EXPS parentesisCierre mas TEXT4 TEXT1 ;
        

TEXT1: mas TEXT2 TEXT1
        | ;

TEXT2: char TEXT3
         |entero TEXT3
         |decimal TEXT3
         |parentesisApertura EXPS parentesisCierre TEXT3
         |id_LLAMADA
         |cadena ;


TEXT3: mas TEXT4
           | ;

TEXT4: cadena
           |id ;

/*
------------------------------------------------------------------------------------------------

----------------------------------------- BOOLEAN parentesisAperturabooleanparentesisCierre -----------------------------------
*/

BOOLEAN: boolen id BOOLEAN1 puntoComa
       |error puntoComa {console.log("error en "+this._$.first_line+ "fila "+this._$.first_column)};

BOOLEAN1: igualAR EXP_LOG BOOLEAN1
           |coma id BOOLEAN1
           |  ;

EXP_LOG: T_LOG EXP_LOG1 ;

EXP_LOG1: or T_LOG EXP_LOG1
           |and T_LOG EXP_LOG1
           | ;

T_LOG: F_LOG T_LOG1 ;

T_LOG1: xor F_LOG T_LOG1
         | ;

F_LOG: not F_LOG1
        |F_LOG1 ;


F_LOG1: parentesisApertura EXP_LOG parentesisCierre
         |true
         |false
         |id_LLAMADA ;

/*
------------------------------------------------------------------------------------------------

----------------------------------------- LLAMADAS A METODOS -----------------------------------
*/

LLAMADA: id parentesisApertura PARAMS parentesisCierre ;

PARAMS: COND PARAMS1 ;

PARAMS1: coma PARAMS PARAMS1
           | ;

/*
------------------------------------------------------------------------------------------------

----------------------------------------- CONDICIONAL ------------------------------------------
*/

CONDICIONAL: COND CONDICIONAL1 ;

CONDICIONAL1: OPS COND
              | ;

/*
------------------------------------------------------------------------------------------------

--------------------------------------------- FOR ----------------------------------------------
*/

FOR: for parentesisApertura FOR1 parentesisCierre llaveApertura INSTRUCCIONES BREAK CONTINUE llaveCierre ;

FOR1: TIPO id igualAR FOR_INST puntoComa CONDICIONAL puntoComa id OP_DEC_INC ;

FOR_INST: entero
           |id ;


/*
------------------------------------------------------------------------------------------------

------------------------------------------- WHILE ----------------------------------------------
*/

WHILE: while parentesisApertura CONDICIONAL parentesisCierre llaveApertura INSTRUCCIONES BREAK CONTINUE llaveCierre ;

/*
------------------------------------------------------------------------------------------------

------------------------------------------- DO WHILE -------------------------------------------
*/

DO_WHILE: do llaveApertura INSTRUCCIONES BREAK CONTINUE llaveCierre whileparentesisApertura CONDICIONAL parentesisCierre puntoComa ;

/*
------------------------------------------------------------------------------------------------

--------------------------------------------- IF -----------------------------------------------
*/

IF: if parentesisApertura CONDICIONAL parentesisCierre llaveApertura INSTRUCCIONES llaveCierre ELSE_IF ;

ELSE_IF: else ELSE
       | ;

ELSE: IF
       |llaveApertura INSTRUCCIONES llaveCierre ;

/*
------------------------------------------------------------------------------------------------

------------------------------------ DECLARACION DE METODOS ------------------------------------
*/

METODO: public MOTODO1  ;

METODO1: TIPO id parentesisApertura PARAMS_METODO parentesisCierre llaveApertura INSTRUCCIONES return COND llaveCierre
       |void id parentesisApertura PARAMS_METODO parentesisCierre llaveApertura INSTRUCCIONES llaveCierre ;

PARAMS_METODO: TIPO id PARAMS_METODO1 ;

PARAMS_METODO1: coma TIPO id PARAMS_METODO1
                 | ;

/*
------------------------------------------------------------------------------------------------

------------------------------------ DECLARACION DE MAIN ---------------------------------------
*/

MAINCLASS: public class id llaveApertura MAIN MAINCLASS1 llaveCierre ;

MAIN: public static void id parentesisApertura String id corcheteApertura corcheteCierre parentesisCierre llaveApertura INSTRUCCIONES llaveCierre ;

MAINCLASS1: METODO
              | ;

/*
------------------------------------------------------------------------------------------------

---------------------------------- DECLARACION DE CLASES ---------------------------------------
*/

CLASE: public class id llaveApertura CLASE1 CLASE2 llaveCierre ;

CLASE1: DECLARACION CLASE1
         | ;

CLASE2: METODO CLASE2
          | ;

/*
------------------------------------------------------------------------------------------------

---------------------------------- DECLARACION DE VARIABLES ------------------------------------
*/

DECLARACION:   INT
              |STRING
              |DOUBLE
              |CHAR
              |BOOLEAN ;

/*
------------------------------------------------------------------------------------------------

---------------------------------- INICIALIZACION DE VARIABLES ---------------------------------
*/

INICIALIZACION: id igualAR COND puntoComa 
       |error puntoComa {console.log("error en "+this._$.first_line+ "fila "+this._$.first_column)};

/*
------------------------------------------------------------------------------------------------

--------------------------------------------- PRINT --------------------------------------------
*/

PRINT: System punto out punto PRINT1 parentesisApertura COND parentesisCierre puntoComa
       |error puntoComa {console.log("error en "+this._$.first_line+ "fila "+this._$.first_column)};

PRINT1: print
         |println ;

/*
------------------------------------------------------------------------------------------------

------------------------------------------- INTERFACE ------------------------------------------
*/

INTERFACE: public interface id llaveApertura INTERFACE1 llaveCierre ;

INTERFACE1: METODO INTERFACE1
             | ;

/*
------------------------------------------------------------------------------------------------

----------------------------------------- INSTRUCCIONES ----------------------------------------
*/

INSTRUCCIONES: INSTRUCCIONES1 INSTRUCCIONES
              | ;

INSTRUCCIONES1: WHILE 
                |DO_WHILE 
                |IF 
                |FOR 
                |INICIALIZACION 
                |DECLARACION
                |LLAMADA puntoComa 
                |PRINT ;

/*
------------------------------------------------------------------------------------------------

-------------------------------------------- INICIO --------------------------------------------
*/

INICIO: MAINCLASS INICIO1 EOF ;

INICIO1:  CLASE INICIO1
          |INTERFACE INICIO1
          | ;
