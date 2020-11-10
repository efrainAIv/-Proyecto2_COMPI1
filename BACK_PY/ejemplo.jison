
%lex
%options case-insensitive

%%

"{"                 %{return 'llaveApertura'; %}
"}"                 %{return 'llaveCierre'; %}
"["                 %{return 'corcheteApertura'; %}
"]"                 %{return 'corcheteCierre'; %}
"("                 %{return 'parentesisApertura'; %}
")"                 %{return 'parentesisCierre'; %}
"."                 %{return 'punto'; %}
","                 %{return 'coma'; %}
";"                 %{return 'puntoComa'; %}
":"                 %{return 'dosPuntos'; %}
"="                 %{return 'igualAR'; %}
"+"                 %{return 'mas'; %}
"-"                 %{  return 'menos'; %}
"*"                 %{  return 'multiplicacion'; %}
"/"                 %{  return 'division'; %}
">"                 %{  return 'mayor'; %}
"<"                 %{  return 'menor'; %}
">="                 %{  return 'mayorIgual'; %}
"<="                 %{  return 'menorIgual'; %}
"=="                 %{  return 'igualLog'; %}
"!="                 %{  return 'diferente'; %}
"++"                 %{  return 'incremento'; %}
"--"                 %{  return 'decremento'; %}
"!"                 %{  return 'not'; %}
"^"                 %{  return 'xor'; %}
"||"                 %{  return 'or'; %}
"&&"                 %{  return 'and'; %}


"break"                 %{  return 'break'; %}
"boolean"                 %{  return 'boolean'; %}
"char"                 %{  return 'char'; %}
"class"                 %{  return 'class'; %}
"continue"                 %{  return 'continue'; %}
"do"                 %{  return 'do'; %}
"double"                 %{  return 'double'; %}
"else"                 %{  return 'else'; %}
"extends"                 %{  return 'extends'; %}
"false"                 %{  return 'false'; %}
"for"                 %{  return 'for'; %}
"if"                 %{  return 'if'; %}
"int"                 %{  return 'int'; %}
"interface"                 %{  return 'interface'; %}
"implements"                 %{  return 'implements'; %}
"new"                 %{  return 'new'; %}
"out"                 %{  return 'out'; %}
"print"                 %{  return 'print'; %}
"println"                 %{  return 'println'; %}
"public"                 %{  return 'public'; %}
"return"                 %{  return 'return'; %}
"static"                 %{  return 'static'; %}
"String"                 %{  return 'String'; %}
"System"                 %{  return 'System'; %}
"true"                 %{  return 'true'; %}
"this"                 %{  return 'this'; %}
"void"                 %{  return 'void'; %}
"while"                 %{  return 'while'; %}
"finalArchivo"                 %{  return 'finalArchivo'; %}


"//"[\n]* %{  return 'comentarioLinea'; %}
[/][*][^*]*[*]+([^/*][^*]*[*]+)*[/] %{  return 'comentarioML'; %} 
[\"][^\\\"]*([\\][\\\"ntr][^\\\"]*)*[\"] %{  return 'cadena'; %} 
[\']([^\\\"]*([\\][\\\"ntr][^\\\"]*)*)?[\'] %{  return 'caracter'; %} 
[a-zA-Z]([a-zA-Z0-9_])* %{  return 'id'; %} 


("-")?[0-9]+\b                %{  return 'entero'; %} 
[0-9]+("."[0-9]+)?\b    %{  return 'decimal'; %} 


/* Espacios en blanco */
[ \r\t\n\f]            {}

<<EOF>>                 return 'EOF';

. { console.error('Este es un error léxico: ' + yytext + ', en la linea: ' + yylloc.first_line + ', en la columna: ' + yylloc.first_column);  }
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
       |cadena COND1
       |char CONCAT_LOG ;

COND1: mas STRING2
        | ;  

SYM_COND: ARITMETICOS_COND
           |LOGICOS EXP_LOG CONCAT_LOG
           | ;

ARITMETICOS_COND: mas CONCAT
                   |- EXP
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

INT: int id INT1puntoComa ;

INT1: igualAR EXP INT1
       |coma id INT1
       |  ;

/*
------------------------------------------------------------------------------------------------

----------------------------------------- DECIMALES parentesisAperturadoubleparentesisCierre -----------------------------------
*/

DOUBLE: double id DOUBLE1puntoComa ;

DOUBLE1: igualAR EXP DOUBLE1
       |coma id DOUBLE1
       |  ;

/*
------------------------------------------------------------------------------------------------

---------------------------------------- CARACTERES parentesisAperturacharparentesisCierre -----------------------------------
*/

CHAR: char id CHAR1puntoComa ;

CHAR1: igualAR caracter CHAR1
        |coma id CHAR1
        |  ;

/*
------------------------------------------------------------------------------------------------

----------------------------------------- CADENAS parentesisAperturaStringparentesisCierre -------------------------------------
*/

STRING: String id STRING1puntoComa ;

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

BOOLEAN: boolen id BOOLEAN1 puntoComa ;

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

CONDICIONAL1: OP COND
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

MAINCLASS: public class id llaveApertura MAIN MAINCLASS1 llaveCierre
       | error llaveCierre {console.log("falta llaveCierre en  MAINCLASS")}
       | error finalArchivo {console.log("falta llaveCierre en  MAINCLASS")} ;

MAINCLASS1: METODO
              | ;

MAIN: public static void id parentesisApertura String id corcheteApertura corcheteCierre parentesisCierre llaveApertura INSTRUCCIONES llaveCierre
       | error llaveCierre {console.log("falta llaveCierre en  MAIN")}
       | error finalArchivo {console.log("falta llaveCierre en  MAINCLASS")} ;

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

DECLARACION: INT
              |STRING
              |DOUBLE
              |CHAR
              |BOOLEAN ;

/*
------------------------------------------------------------------------------------------------

---------------------------------- INICIALIZACION DE VARIABLES ---------------------------------
*/

INICIALIZACION: id igualAR COND puntoComa ;

/*
------------------------------------------------------------------------------------------------

--------------------------------------------- PRINT --------------------------------------------
*/

PRINT: System punto out punto PRINT1 parentesisApertura COND parentesisCierre puntoComa ;

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

INICIO: MAINCLASS INICIO1 INICIO2 EOF;

INICIO1:  CLASE INICIO1
          |INTERFACE INICIO1
          | ;

INICIO2: finalArchivo
       | ;
