// função para conseguir comparar a sua idade ao do cachorro
// passar uma função com o parametro e após o calculo chamar a função no escopo global passar o valor do parametro
function calculadoraIdadeDogs(idadeHumano){
    let idadeCachorro = idadeHumano * 7
    console.log('A idade do seu cachorro comparada a sua é ' + idadeCachorro + ' anos')
}
calculadoraIdadeDogs(15)