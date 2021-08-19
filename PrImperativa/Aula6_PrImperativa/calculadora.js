//Alunos: Sankler Bergman, Renan Miranda, Alan Veloso, Tamyres, Mayara Dias
// calculadora nivel 1
function adicionar(valorA, valorB){
    return valorA + valorB
}

function subtracao(valorA, valorB){
    return valorA - valorB
}

function multiplicacao(valorA, valorB){
    return valorA * valorB
}
console.log
function divisao(valorA, valorB){
    return valorA / valorB
}
// calculadora nivel 2
console.log("-------------- Teste de Operações / Calculadora --------------")
console.log(adicionar(10,5))
console.log(subtracao(3,2))

console.log("-------------- Teste de Operações / Calculadora --------------")
console.log(multiplicacao(56,1))
console.log(divisao(8,2))
// calculadora nivel 3
function quadradoDoNumero(valorA){
    // return 56**valorA -- esse vai certo com a elevação
    // return Math.pow(multiplicacao(),valorA)
    return multiplicacao()**valorA  //esse não vai, me imprimir com NaN :'(
}
console.log(quadradoDoNumero(2))