function podeSubir(altura, estaAcompanhado){
    
    if (altura >= 1.40 && altura < 2){
        return console.log('Acesso autorizado')
    } else if ((altura > 1.20 && altura <= 1.40) && estaAcompanhado){
        return console.log('Acesso somente com acompanhante')
    } else{
        return console.log('Acesso negado')
    }
}

podeSubir(1.10, true)