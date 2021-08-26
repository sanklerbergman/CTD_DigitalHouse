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

// - Precisamos desenvolver um menu para um microondas super veloz, onde teremos 5 opções de comida com seus respectivos tempos pré-definidos. 

// 1 - Pipoca – 10 segundos (padrão);
// 2 - Macarrão – 8 segundos (padrão);
// 3 - Carne – 15 segundos (padrão);
// 4 - Feijão – 12 segundos (padrão);
// 5 - Brigadeiro – 8 segundos (padrão); 

// - O usuário poderá alterar o tempo padrão, aumentando ou diminuindo de acordo com sua vontade. Se o tempo informado for maior que 2x o necessário, exibir mensagem que a comida queimou.
// - Se o tempo for menor que o padrão, exibir a mensagem: "tempo insuficiente"; 
// - Opções não listadas no menu, devem exibir uma mensagem de erro: "Prato inexistente";
// - Se o tempo for 3x maior que o necessário para o prato, o microondas deve exibir a mensagem: “kabumm”;
// - No final de cada tarefa, o microondas deverá exibir a mensagem: "Prato pronto, bom apetite!!!".
let programaMicro = 1
switch (programaMicro) {
    case 1:
        let pipoca = 50;
        if (pipoca < 10) {
            return console.log('tempo insuficiente')
        } else if (pipoca >= 20 && pipoca < 30) {
            return console.log('Sua pipoca queimou')
        } else if (pipoca >= 30) {
            return console.log('KABUMMMMM')
        } else if (pipoca >= 10 && pipoca < 20) {
            return console.log('Prato pronto, bom apetite!!')
        }
        break;
    case 2:
        let macarrao = 8;
        break;
    case 3:
        let carne = 15;
        break;
    case 4:
        let feijao = 12;
        break;
    case 5:
        let brigadeiro = 8;
        break;
}




// switch (programaMicro){
//     case 1, 10:
//         if (tempoPrograma < 10) {
//             return console.log('tempo insuficiente')
//         } else if (tempoPrograma >= 20 || tempoPrograma < 30) {
//             return console.log('Sua pipoca queimou')
//         } else if (tempoPrograma >= 30){
//             return console.log('KABUMMMMM')
//         } else if (tempoPrograma >= 10 || tempoPrograma < 20){
//             return console.log('Prato pronto, bom apetite!!')
//         }
//         break;
// }

