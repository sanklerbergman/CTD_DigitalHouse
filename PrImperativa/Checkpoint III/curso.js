const nomeAlunos = require('./dados')
const Aluno = require('./construtora')

let curso = {
    nomeDoCurso:"CTD",
    notaDeAprovacao:6,
    faltasMaximas:3,
    listaDeEstudantes:[
        nomeAlunos,
        function updateAluno(){
            nomeAlunos.listaDeEstudantes.push(new Aluno('Romeu',1,[7, 7, 5]))
            return
        },
        // this.listaDeEstudantes.push(new Aluno('Romeu',1,[7, 7, 5])),
        // new this.Aluno.push('Romeu',1,[7, 7, 5]),
        // nome,faltas,[nota1,nota2,nota3]
    ],

    processoAprovacao(Aluno){
        if (Aluno.calcularMedia >= curso.notaDeAprovacao && Aluno.faltas < curso.faltasMaximas) {
            return console.log('APROVADO!')
        }else{
            return console.log('REPROVADO!')
        }
    },
}





