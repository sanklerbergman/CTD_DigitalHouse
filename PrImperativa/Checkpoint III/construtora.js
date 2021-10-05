function Aluno (nome,faltas,[nota1,nota2,nota3]){
    this.nome = nome;
    this.faltas = faltas;
    this.notas = [nota1,nota2,nota3];
    this.calcularMedia = function calcularMedia(){
        return (this.notas[0]+this.notas[1]+this.notas[2]) / 3;
    }
    this.somaFaltas = function somaFaltas(){
        return this.faltas++
    }
}

module.exports = Aluno;
