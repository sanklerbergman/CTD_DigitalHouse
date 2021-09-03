// função de entrada de senha com valores padrão de 1234 e printando no console o resultado se valido(true) ou invalida (false)
function senhaUsuario(entradaSenha) {
    if (entradaSenha === 1234) {
        return console.log('Login efetuado')
    } else {
        return console.log('Senha invalida')
    }
}
//senhaUsuario(134) ----- teste da função acima

// 2 - Escreva uma função utilizando a estrutura IF/ELSE-IF/ELSE que receba dois inteiros e diga qual deles é o maior, qual deles é menor OU se são iguais.
function valoresInteiros(numeroA, numeroB) {
    if (numeroA > numeroB) {
        return console.log(numeroA, ' é o maior.')
    } else if (numeroA < numeroB) {
        return console.log(numeroA, ' é o menor.')
    } else if (numeroA == numeroB) {
        return console.log('Os valores são iguais.')
    } else {
        return console.log('Não é um número valido')
    }
}
//valoresInteiros(30,29) ----- teste da função acima


// 3 - Escreva um programa utilizando a estrutura de switch que imprima o mês de acordo com o número fornecido.
//	- Exemplo: quando envio o número 9, o retorno será: 'SETEMBRO'
// let mes = 0
// switch(mes){
//     case 1:
//         console.log('Janeiro');
//         break;
//     case 2:
//         console.log('Fevereiro');
//         break;
//     case 3:
//         console.log('Março');
//         break;
//     case 4:
//         console.log('Abril');
//         break;
//     case 5:
//         console.log('Maio');
//         break;
//     case 6:
//         console.log('Junho');
//         break;
//     case 7:
//         console.log('Julho');
//         break;
//     case 8:
//         console.log('Agosto');
//         break;
//     case 9:
//         console.log('Setembro');
//         break;
//     case 10:
//         console.log('Setembro');
//         break;
//     case 11:
//         console.log('Setembro');
//         break;
//     case 12:
//         console.log('Setembro');
//         break;
//     default:
//         console.log('Este mês não existe')
// }
// 4 - Reescreva função do exercício 1, utilizando o operador ternário.
// condition ? expr1 : expr2 

//senhaUsuario === entradaSenha ? console.log('Login efetuado') : console.log('Senha invalida')
// chamda de teste no exec 4
