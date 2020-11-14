/*
error puntoComa {console.log(yytext+" error en "+this._$.first_line+ "fila "+this._$.first_column); token = new tkn.Token(yytext, 36, this._$.first_line, this._$.first_column); };
*/

%{
    const tkn = require("./token/token");
    var lt = require('./rutas/rutas')

%}


%lex
%options case-insensitive

%%

[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/] %{token = new tkn.Token(yytext, 3, yylloc.first_line, yylloc.first_column); lt.tokens(token, false); return 'comentarioML'; %}

"{"                 %{token = new tkn.Token(yytext, 9, yylloc.first_line, yylloc.first_column); lt.tokens(token, false); return 'llaveApertura'; %}
"}"                 %{token = new tkn.Token(yytext, 10, yylloc.first_line, yylloc.first_column); lt.tokens(token, false); return 'llaveCierre'; %}
"["                 %{token = new tkn.Token(yytext, 13, yylloc.first_line, yylloc.first_column); lt.tokens(token, false); return 'corcheteApertura'; %}
"]"                 %{token = new tkn.Token(yytext, 14, yylloc.first_line, yylloc.first_column); lt.tokens(token, false); return 'corcheteCierre'; %}
"("                 %{token = new tkn.Token(yytext, 11, yylloc.first_line, yylloc.first_column); lt.tokens(token, false); return 'parentesisApertura'; %}
")"                 %{token = new tkn.Token(yytext, 12, yylloc.first_line, yylloc.first_column); lt.tokens(token, false); return 'parentesisCierre'; %}
"."                 %{token = new tkn.Token(yytext, 16, yylloc.first_line, yylloc.first_column); lt.tokens(token, false); return 'punto'; %}
","                 %{token = new tkn.Token(yytext, 15, yylloc.first_line, yylloc.first_column); lt.tokens(token, false); return 'coma'; %}
";"                 %{token = new tkn.Token(yytext, 18, yylloc.first_line, yylloc.first_column); lt.tokens(token, false); return 'puntoComa'; %}
":"                 %{token = new tkn.Token(yytext, 19, yylloc.first_line, yylloc.first_column); lt.tokens(token, false); return 'dosPuntos'; %}
"=="                 %{token = new tkn.Token(yytext, 32, yylloc.first_line, yylloc.first_column); lt.tokens(token, false); return 'igualLog'; %}
"="                 %{token = new tkn.Token(yytext, 17, yylloc.first_line, yylloc.first_column); lt.tokens(token, false); return 'igualAR'; %}
"+"                 %{token = new tkn.Token(yytext, 20, yylloc.first_line, yylloc.first_column); lt.tokens(token, false); return 'mas'; %}
"-"                 %{token = new tkn.Token(yytext, 21, yylloc.first_line, yylloc.first_column); lt.tokens(token, false); return 'menos'; %}
"*"                 %{token = new tkn.Token(yytext, 22, yylloc.first_line, yylloc.first_column); lt.tokens(token, false); return 'multiplicacion'; %}

'>='                 %{token = new tkn.Token(yytext, 30, yylloc.first_line, yylloc.first_column); lt.tokens(token, false); return 'mayorIgual'; %}
"<="                 %{token = new tkn.Token(yytext, 31, yylloc.first_line, yylloc.first_column); lt.tokens(token, false); return 'menorIgual'; %}
">"                 %{token = new tkn.Token(yytext, 24, yylloc.first_line, yylloc.first_column); lt.tokens(token, false); return 'mayor'; %}
"<"                 %{token = new tkn.Token(yytext, 25, yylloc.first_line, yylloc.first_column); lt.tokens(token, false); return 'menor'; %}
"!="                 %{token = new tkn.Token(yytext, 33, yylloc.first_line, yylloc.first_column); lt.tokens(token, false); return 'diferente'; %}
"++"                 %{token = new tkn.Token(yytext, 34, yylloc.first_line, yylloc.first_column); lt.tokens(token, false); return 'incremento'; %}
"--"                 %{token = new tkn.Token(yytext, 35, yylloc.first_line, yylloc.first_column); lt.tokens(token, false); return 'decremento'; %}
"!"                 %{token = new tkn.Token(yytext, 26, yylloc.first_line, yylloc.first_column); lt.tokens(token, false); return 'not'; %}
"^"                 %{token = new tkn.Token(yytext, 27, yylloc.first_line, yylloc.first_column); lt.tokens(token, false); return 'xor'; %}
"||"                 %{token = new tkn.Token(yytext, 29, yylloc.first_line, yylloc.first_column); lt.tokens(token, false); return 'or'; %}
"&&"                 %{token = new tkn.Token(yytext, 28, yylloc.first_line, yylloc.first_column); lt.tokens(token, false); return 'and'; %}


"break"                 %{token = new tkn.Token(yytext, 1, yylloc.first_line, yylloc.first_column); lt.tokens(token, false); return 'break'; %}
"boolean"                 %{token = new tkn.Token(yytext, 1, yylloc.first_line, yylloc.first_column); lt.tokens(token, false); return 'boolean'; %}
"char"                 %{token = new tkn.Token(yytext, 1, yylloc.first_line, yylloc.first_column); lt.tokens(token, false); return 'char'; %}
"class"                 %{token = new tkn.Token(yytext, 1, yylloc.first_line, yylloc.first_column); lt.tokens(token, false); return 'class'; %}
"continue"                 %{token = new tkn.Token(yytext, 1, yylloc.first_line, yylloc.first_column); lt.tokens(token, false); return 'continue'; %}
"do"                 %{token = new tkn.Token(yytext, 1, yylloc.first_line, yylloc.first_column); lt.tokens(token, false); return 'do'; %}
"double"                 %{token = new tkn.Token(yytext, 1, yylloc.first_line, yylloc.first_column); lt.tokens(token, false); return 'double'; %}
"else"                 %{token = new tkn.Token(yytext, 1, yylloc.first_line, yylloc.first_column); lt.tokens(token, false); return 'else'; %}
"extends"                 %{token = new tkn.Token(yytext, 1, yylloc.first_line, yylloc.first_column); lt.tokens(token, false); return 'extends'; %}
"false"                 %{token = new tkn.Token(yytext, 1, yylloc.first_line, yylloc.first_column); lt.tokens(token, false); return 'false'; %}
"for"                 %{token = new tkn.Token(yytext, 1, yylloc.first_line, yylloc.first_column); lt.tokens(token, false); return 'for'; %}
"if"                 %{token = new tkn.Token(yytext, 1, yylloc.first_line, yylloc.first_column); lt.tokens(token, false); return 'if'; %}
"int"                 %{token = new tkn.Token(yytext, 1, yylloc.first_line, yylloc.first_column); lt.tokens(token, false); return 'int'; %}
"interface"                 %{token = new tkn.Token(yytext, 1, yylloc.first_line, yylloc.first_column); lt.tokens(token, false); return 'interface'; %}
"implements"                 %{token = new tkn.Token(yytext, 1, yylloc.first_line, yylloc.first_column); lt.tokens(token, false); return 'implements'; %}
"new"                 %{token = new tkn.Token(yytext, 1, yylloc.first_line, yylloc.first_column); lt.tokens(token, false); return 'new'; %}
"out"                 %{token = new tkn.Token(yytext, 1, yylloc.first_line, yylloc.first_column); lt.tokens(token, false); return 'out'; %}
"print"                 %{token = new tkn.Token(yytext, 1, yylloc.first_line, yylloc.first_column); lt.tokens(token, false); return 'print'; %}
"println"                 %{token = new tkn.Token(yytext, 1, yylloc.first_line, yylloc.first_column); lt.tokens(token, false); return 'println'; %}
"public"                 %{token = new tkn.Token(yytext, 1, yylloc.first_line, yylloc.first_column); lt.tokens(token, false); return 'public'; %}
"return"                 %{token = new tkn.Token(yytext, 1, yylloc.first_line, yylloc.first_column); lt.tokens(token, false); return 'return'; %}
"static"                 %{token = new tkn.Token(yytext, 1, yylloc.first_line, yylloc.first_column); lt.tokens(token, false); return 'static'; %}
"String"                 %{token = new tkn.Token(yytext, 1, yylloc.first_line, yylloc.first_column); lt.tokens(token, false); return 'String'; %}
"System"                 %{token = new tkn.Token(yytext, 1, yylloc.first_line, yylloc.first_column); lt.tokens(token, false); return 'System'; %}
"true"                 %{token = new tkn.Token(yytext, 1, yylloc.first_line, yylloc.first_column); lt.tokens(token, false); return 'true'; %}
"this"                 %{token = new tkn.Token(yytext, 1, yylloc.first_line, yylloc.first_column); lt.tokens(token, false); return 'this'; %}
"void"                 %{token = new tkn.Token(yytext, 1, yylloc.first_line, yylloc.first_column); lt.tokens(token, false); return 'void'; %}
"while"                 %{token = new tkn.Token(yytext, 1, yylloc.first_line, yylloc.first_column); lt.tokens(token, false); return 'while'; %}
"finalArchivo"                 %{token = new tkn.Token(yytext, 37, yylloc.first_line, yylloc.first_column); lt.tokens(token, false); return 'finalArchivo'; %}
 
[\"][^\\\"]*([\\][\\\"ntr][^\\\"]*)*[\"] %{token = new tkn.Token(yytext, 2, yylloc.first_line, yylloc.first_column); lt.tokens(token, false); return 'cadena'; %} 
[\']([^\\\"]*([\\][\\\"ntr][^\\\"]*)*)?[\'] %{token = new tkn.Token(yytext, 5, yylloc.first_line, yylloc.first_column); lt.tokens(token, false); return 'caracter'; %} 
[a-zA-Z]([a-zA-Z0-9_])* %{token = new tkn.Token(yytext, 6, yylloc.first_line, yylloc.first_column); lt.tokens(token, false); return 'id'; %} 
"/"                 %{token = new tkn.Token(yytext, 23, yylloc.first_line, yylloc.first_column); lt.tokens(token, false); return 'division'; %}

("-")?[0-9]+\b                %{token = new tkn.Token(yytext, 7, yylloc.first_line, yylloc.first_column); lt.tokens(token, false); return 'entero'; %} 
[0-9]+("."[0-9]+)?\b    %{token = new tkn.Token(yytext, 8, yylloc.first_line, yylloc.first_column); lt.tokens(token, false); return 'decimal'; %} 


/* Espacios en blanco */
[ \r\t\n\f]            {}

<<EOF>>                 return 'EOF';

. { console.error('Este es un error léxico: ' + yytext + ', en la linea: ' + yylloc.first_line + ', en la columna: ' + yylloc.first_column); token = new tkn.Token(yytext, 36, yylloc.first_line, yylloc.first_column); lt.erroresL(token, false);}
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
|error puntoComa {console.log(yytext+" error en linea "+this._$.first_line+ "fila "+this._$.first_column); token = new tkn.Token(yytext, 36, this._$.first_line, this._$.first_column); r.erroresS(token, false) }
        | ;

CONTINUE: continue puntoComa
|error puntoComa {console.log(yytext+" error en linea "+this._$.first_line+ "fila "+this._$.first_column); token = new tkn.Token(yytext, 36, this._$.first_line, this._$.first_column); r.erroresS(token, false) }
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
              | incremento
              | decremento
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
         |COND ;
 
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
    |menos entero
    |menos decimal
    |id_LLAMADA ;

/*
------------------------------------------------------------------------------------------------

----------------------------------------- ENTEROS parentesisAperturaintparentesisCierre ----------------------------------------
*/

INT: int id INT1 puntoComa {$$ = "= "+""; console.log("hola"); } 
|error puntoComa {console.log(yytext+" error en linea "+this._$.first_line+ "fila "+this._$.first_column); token = new tkn.Token(yytext, 36, this._$.first_line, this._$.first_column); r.erroresS(token, false) };

INT1: igualAR EXP INT1 {$$ = "= "+""; console.log("hola"); }
       |coma id INT1
       |  ;

/*
------------------------------------------------------------------------------------------------

----------------------------------------- DECIMALES parentesisAperturadoubleparentesisCierre -----------------------------------
*/

DOUBLE: double id DOUBLE1 puntoComa
       |error puntoComa {console.log(yytext+" error en linea "+this._$.first_line+ "fila "+this._$.first_column); token = new tkn.Token(yytext, 36, this._$.first_line, this._$.first_column); r.erroresS(token, false) };;

DOUBLE1: igualAR EXP DOUBLE1
       |coma id DOUBLE1
       |  ;

/*
------------------------------------------------------------------------------------------------

---------------------------------------- CARACTERES parentesisAperturacharparentesisCierre -----------------------------------
*/

CHAR: char id CHAR1 puntoComa
       |error puntoComa {console.log(yytext+" error en linea "+this._$.first_line+ "fila "+this._$.first_column); token = new tkn.Token(yytext, 36, this._$.first_line, this._$.first_column);}
       | ;


CHAR1: igualAR caracter CHAR1
        |coma id CHAR1
        |  ;

/*
------------------------------------------------------------------------------------------------

----------------------------------------- CADENAS parentesisAperturaStringparentesisCierre -------------------------------------
*/

STRING: String id STRING1 puntoComa
|error puntoComa {console.log(yytext+" error en linea "+this._$.first_line+ "fila "+this._$.first_column); token = new tkn.Token(yytext, 36, this._$.first_line, this._$.first_column); r.erroresS(token, false) } 
       | ;

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
|error puntoComa {console.log(yytext+" error en linea "+this._$.first_line+ "fila "+this._$.first_column); token = new tkn.Token(yytext, 36, this._$.first_line, this._$.first_column); r.erroresS(token, false) }
       | ;

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

CONDICIONAL: COND CONDICIONAL1 OPS_CONDICIONAL ;

OPS_CONDICIONAL: or CONDICIONAL
                  |and CONDICIONAL
                  | ;

CONDICIONAL1: OPS COND
              | ;

/*
------------------------------------------------------------------------------------------------

--------------------------------------------- FOR ----------------------------------------------
*/

FOR: for parentesisApertura FOR1 parentesisCierre llaveApertura INSTRUCCIONES BREAK CONTINUE llaveCierre ;

FOR1: TIPO id igualAR FOR_INST puntoComa CONDICIONAL puntoComa id OP_DEC_INC ;

FOR_INST: entero
           |id 
           |double ;


/*
------------------------------------------------------------------------------------------------

------------------------------------------- WHILE ----------------------------------------------
*/

WHILE: while parentesisApertura CONDICIONAL parentesisCierre llaveApertura INSTRUCCIONES BREAK CONTINUE llaveCierre ;

/*
------------------------------------------------------------------------------------------------

------------------------------------------- DO WHILE -------------------------------------------
*/

DO_WHILE: do llaveApertura INSTRUCCIONES BREAK CONTINUE llaveCierre whileparentesisApertura CONDICIONAL parentesisCierre puntoComa 
   |error puntoComa {console.log(yytext+" error en linea "+this._$.first_line+ "fila "+this._$.first_column); token = new tkn.Token(yytext, 36, this._$.first_line, this._$.first_column); r.erroresS(token, false) };

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

METODO: public METODO1
       |METODO1
       | ;

METODO1: TIPO id parentesisApertura PARAMS_METODO parentesisCierre llaveApertura INSTRUCCIONES llaveCierre METODO
       |void id parentesisApertura PARAMS_METODO parentesisCierre llaveApertura INSTRUCCIONES llaveCierre METODO
       |static void id parentesisApertura String id corcheteApertura corcheteCierre parentesisCierre llaveApertura INSTRUCCIONES llaveCierre METODO ;

PARAMS_METODO: TIPO id PARAMS_METODO1
              | ;

PARAMS_METODO1: coma TIPO id PARAMS_METODO1
                 | ;

/*
------------------------------------------------------------------------------------------------

------------------------------------ DECLARACION DE MAIN ---------------------------------------
*/

MAINCLASS: public class id llaveApertura MAIN MAINCLASS1 llaveCierre ;

PUBLIC: public
         | ;

MAINCLASS1: METODO
              | ;

/*
------------------------------------------------------------------------------------------------

---------------------------------- DECLARACION DE CLASES ---------------------------------------
*/

CLASE: PUBLIC class id llaveApertura CLASE1 llaveCierre ;

CLASE1: METODO CLASE1
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
|error puntoComa {console.log(yytext+" error en linea "+this._$.first_line+ "fila "+this._$.first_column); token = new tkn.Token(yytext, 36, this._$.first_line, this._$.first_column); r.erroresS(token, false) }
       | ;

/*
------------------------------------------------------------------------------------------------

--------------------------------------------- PRINT --------------------------------------------
*/

PRINT: System punto out punto PRINT1 parentesisApertura COND parentesisCierre puntoComa
|error puntoComa {console.log(yytext+" error en linea "+this._$.first_line+ "fila "+this._$.first_column); token = new tkn.Token(yytext, 36, this._$.first_line, this._$.first_column); r.erroresS(token, false) }
       | ;

PRINT1: print
         |println ;

/*
------------------------------------------------------------------------------------------------

------------------------------------------- INTERFACE ------------------------------------------
*/

INTERFACE: PUBLIC interface id llaveApertura METODO_INTERFACE llaveCierre ;

METODO_INTERFACE: public METODO_INTERFACE1
              | METODO_INTERFACE1
              | ;

METODO_INTERFACE1: TIPO id parentesisApertura PARAMS_METODO parentesisCierre puntoComa METODO_INTERFACE
                     |void id parentesisApertura PARAMS_METODO parentesisCierre puntoComa METODO_INTERFACE
                     |error puntoComa {console.log(yytext+" error en linea "+this._$.first_line+ "fila "+this._$.first_column); token = new tkn.Token(yytext, 36, this._$.first_line, this._$.first_column); r.erroresS(token, false) }
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
                |DECLARACION
                |id INSTRUCCIONES2 puntoComa
                |PRINT
                |comentarioLinea
                |comentarioML 
                |RETURN ;

INSTRUCCIONES2: parentesisApertura PARAMS parentesisCierre
                 |igualAR COND
                 |incremento
                 |decremento ;


//-------------------------------------------- RETURN --------------------------------------------


RETURN: return CONDICION puntoComa
|error puntoComa {console.log(yytext+" error en linea "+this._$.first_line+ "fila "+this._$.first_column); token = new tkn.Token(yytext, 36, this._$.first_line, this._$.first_column); r.erroresS(token, false) }
       | ;


/*
------------------------------------------------------------------------------------------------

-------------------------------------------- INICIO --------------------------------------------
*/

INICIO: CLASE INICIO
       |INTERFACE INICIO
       |EOF
       | ;


