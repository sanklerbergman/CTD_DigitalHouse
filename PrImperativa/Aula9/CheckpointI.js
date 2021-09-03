
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
let programaMicro = 1   // aqui você escolhe a comida que estará sendo feita
switch (programaMicro) {
    case 1:
        let pipoca = 50; // aqui você devera colocar o tempo de preparo para o seu prato 
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
        let macarrao = 50; // aqui você devera colocar o tempo de preparo para o seu prato 
        if (macarrao < 10) {
            return console.log('tempo insuficiente')
        } else if (macarrao >= 20 && macarrao < 30) {
            return console.log('Seu macarrao queimou')
        } else if (macarrao >= 30) {
            return console.log('KABUMMMMM')
        } else if (macarrao >= 10 && macarrao < 20) {
            return console.log('Prato pronto, bom apetite!!')
        }
        break;
    case 3:
        let carne = 50; // aqui você devera colocar o tempo de preparo para o seu prato 
        if (carne < 10) {
            return console.log('tempo insuficiente')
        } else if (carne >= 20 && carne < 30) {
            return console.log('Sua carne queimou')
        } else if (carne >= 30) {
            return console.log('KABUMMMMM')
        } else if (carne >= 10 && carne < 20) {
            return console.log('Prato pronto, bom apetite!!')
        }
        break;
    case 4:
        let feijao = 50; // aqui você devera colocar o tempo de preparo para o seu prato 
        if (feijao < 10) {
            return console.log('tempo insuficiente')
        } else if (feijao >= 20 && feijao < 30) {
            return console.log('Seu feijao queimou')
        } else if (feijao >= 30) {
            return console.log('KABUMMMMM')
        } else if (feijao >= 10 && feijao < 20) {
            return console.log('Prato pronto, bom apetite!!')
        }
        break;
    case 5:
        let brigadeiro = 50; // aqui você devera colocar o tempo de preparo para o seu prato 
        if (brigadeiro < 10) {
            return console.log('tempo insuficiente')
        } else if (brigadeiro >= 20 && brigadeiro < 30) {
            return console.log('Seu brigadeiro queimou')
        } else if (brigadeiro >= 30) {
            return console.log('KABUMMMMM')
        } else if (brigadeiro >= 10 && brigadeiro < 20) {
            return console.log('Prato pronto, bom apetite!!')
        }
        break;
}