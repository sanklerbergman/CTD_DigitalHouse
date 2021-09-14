let carro = {

    marca: 'Ford',
    modelo: 'Ka',
    ano: 2020,

    verificarCambio: function(){
        return 'Cambio não é automatico ' + this.modelo ;
    }

};

function Carro(veiculoModelo,fabricante, veiculoAno){
    
    this.modelo = veiculoModelo
    this.marca = fabricante
    this.ano = veiculoAno

};


console.log(new Carro('Etios', 'Toyota', 2010));

console.log(carro.verificarCambio()) // se passar na linha de cima o JS interpreta como parametro e não puxa a function