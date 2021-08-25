/* ==========================
ATRIBUIÇÃO
========================== */

// O operador "=" serve para atribuir o valor 40 a uma variável chamada "idade"

let idade = 40

/* ==========================
ARITMÉTICOS
========================== */

// Nos permitem fazer operações matemáticas

10 + 15 //---> Soma
10 - 15 //---> Subtração
10 * 15 //---> Multiplicação
10 / 15 //---> Divisão
15++    //---> Incremento de um em um: 15 + 1
15--    //---> Decremento de um em um: 15 - 1
15 % 5  //---> Módulo. O resto obtido da divisão de 15 por 5: 0
15 % 2  //---> Módulo. O resto obtido da divisão de 15 por 2: 1

/* ==========================
COMPARAÇÃO SIMPLES
========================== */
10 == 15 // Igualdade => irá retornar como false pois 10 não é igual a 15
10 != 15 // Desigualdade => irá retornar como true pois 10 é diferente de 15

/* ==========================
COMPARAÇÃO ESTRITA - Valida tanto valor como o tipo de dado, se é string, number ou boolean
========================== */
10 === "10" //ira retornar valor de false pois são diferentes
10 !== 15 // ira retornar como true pois o valor é diferente e são o mesmo tipo de dado(number)


/* ==========================
OPERADORES RELACIONAIS - operadores de comparação simples como maior igual e menor igual
========================== */
15 > 15
15 >= 15
10 < 15
10 <= 15


/* ==========================
LÓGICOS
========================== */
(15) && (10); // AND, todos valores dentro da declaração precisam ser verdadeiros
(10),(15) || (20),(15) // OR, pelo menos uma das declarações precisam ser verdadeiras
// (10) ! (10); // NOTls, nega a condição inteira

// Permitem combinar valores booleanos e seu resultado ao mesmo tempo, também é um booleano