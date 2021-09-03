// O exercício a seguir é proposto:
// Usando apenas .pop() e .push()
// crie uma função que receba uma matriz de 4 elementos por parâmetro
// retorne uma matriz com os elementos invertidos em sua ordem:
// Então [1,2,3,4]
// retorna [4,3,2,1]

// function matrizInvertido(array) {
//     saida1 = array.pop()
//     saida2 = array.pop()
//     saida3 = array.pop()
//     saida4 = array.pop()
    
//     array.push(saida1)
//     array.push(saida2)
//     array.push(saida3)
//     array.push(saida4)

//     console.log(array)
// }

// matrizInvertido([1, 2, 3, 4])

// let grupoDeAmigos = [ ["Harry", "Ron", "Hermione"], ["Spiderman", "Hulk", "Ironman"], ["Penélope Glamour", "Pierre Nodoyuna","Patán"] ]
// console.log(grupoDeAmigos[1],grupoDeAmigos[0])
// duvida ficou, o por que utilizar dois colchetes de um array dentro do array


// let str = "una string qualquer"
// let grupoDeAmigos = [ [45, 89, 0], ["Digital", "House", true], ["string", "123","false", 54, true, str] ]
// console.log(grupoDeAmigos[2][grupoDeAmigos[2].length - 1])

function somarArray(){
    let soma = [1,2,3,4]
    soma = soma[0] +  soma[1]
    return soma
}
console.log(somarArray())