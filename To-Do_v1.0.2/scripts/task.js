// configuracao da API, encontrada na tarefa de criar Usuario.
const tokenJson = localStorage.getItem("login")
let valorToken = JSON.parse(tokenJson)
let button = document.getElementById("submit");
const tarefasPendentes = document.querySelector('.tarefas-pendentes')
const finalizarSessao = document.querySelector('#closeApp')

let configuracaoRequisicao = {
    method: 'GET',

    headers: {

        'Content-type': 'application/json',
        'Authorization': valorToken.token.jwt
    },
};

// Chamando   a API
fetch("https://ctd-todo-api.herokuapp.com/v1/users/getMe", configuracaoRequisicao)

    .then((response) => {
        return response.json()
    })
    .then(function (resposta) {
        const nomeUser = document.querySelector('p')
        nomeUser.innerHTML = `${resposta.firstName} ${resposta.lastName}`
        // localStorage.setItem("login", JSON.stringify({ token: resposta }))

        // alert("Login realizado com sucesso")


        // // e então redirecionamos para a pagina de tarefas;
        // window.location.href = "tarefas.html"

    })
    .catch(error => {
        // cadastroErro(error)
        console.log(error)

    })

listarTarefa()
// função para conseguir dar GET nas tasks criadas no db da API
function listarTarefa() {

    const urlTarefa = 'https://ctd-todo-api.herokuapp.com/v1/tasks'

    const tarefa = document.querySelector('.nome')

    const dataCriada = document.querySelector('.timestamp')

    let skeletonRef = document.querySelector('#skeleton')


    // const jwt = this.localStorage.getItem("jwt")

    // console.log(jwt);

    const settings = {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            authorization: valorToken.token.jwt
        }
    }

    fetch(urlTarefa, settings)


        .then((resp) => resp.json())


        .then(function (tasks) {


            // é necessário que o skeleton, que nada mais é que a parte do código sem os dados inseridos com template string, fiquem desabilitado
            //quando é recebido o response pela API


            skeletonRef.style.display = 'none'

            // e então efetuamos o map, onde trazemos de cada tarefa,a  sua descrição especifica, e quando ela foi criada
            //usando template string.
            tasks.map((task) => {

                console.log(task.description)
                console.log(task.createdAt)

                tarefasPendentes.innerHTML += ` <li class="tarefa">
                <div class="not-done"></div>
                <div class="descricao">
                <p class="nome">${task.description}</p>
                <p class="timestamp">${task.createdAt}</p>
                <p id="idtarefa">${task.id}</p>
                <button type="submit" id="iconeLixeira">
                <img src="https://cdn.discordapp.com/attachments/943941406710435857/963495254219173889/lixeira.png" alt="Icone da Lixeira" height="50px" width="50px" >
                </button>
                </div>
                </li>`
            })
            
        })

        // neste console log validamos se ele está trazendo o nome do usuario corretamente do login que acessamos no JWT.


        .catch(err => {
            console.log(err);
            alert("Falha ao validar as tarefas do usuario!")
        })

}

// função descrevendo o POST de adicionar tasks
function adicionandoTarefas() {
    
    const taskValue = document.getElementById("novaTarefa");
    let taskList = document.querySelector('.tarefas-pendentes');

    
    let configurationTask = {
        method: 'POST',

        headers: {
            'Content-type': 'application/json',
            'Authorization': valorToken.token.jwt
        },

        body: JSON.stringify(
            {
                description: taskValue.value,
                completed: false
            }
        )
    };

    

    fetch("https://ctd-todo-api.herokuapp.com/v1/tasks", configurationTask)

        .then((response) => {
            return response.json()
        })
        .then(function (resposta) {
           
            tarefasPendentes.innerHTML += ` <li class="tarefa">
                <div class="not-done"></div>
                <div class="descricao">
                <p class="nome">${resposta.description}</p>
                <p class="timestamp">${resposta.createdAt}</p>
                </div>
                </li>`

            taskValue.value = '';
        });

}

// eventlistener para utilizar o POST e conseguir adicionar tarefas novas
button.addEventListener("click", function (e) {
    e.preventDefault();
    adicionandoTarefas()
})

// adicioanndo a função de deletar/excluir tarefas da lista
function removendoTarefas(){

    //let idTask = document.querySelector("#idtarefa").value // não está funcionando
    let idTask = document.querySelector("#idtarefa").textContent // está funcionando
    let settings = {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json',
            authorization: valorToken.token.jwt
        }
    }

    fetch("https://ctd-todo-api.herokuapp.com/v1/tasks/", settings) // precisamos trazer o id de forma dinamica para a URL
    .then((response) => {
        return response.json()
    })
    .then(function (data) {
        console.log(data)
        alert("Tarefa excluida com sucesso!")
    })
    .catch(err => {
        console.log(err);
        alert("Falha ao excluir a tarefa do usuario!")
    })
}

const iconeLixeira = document.querySelector('#iconeLixeira')
iconeLixeira.addEventListener("click", function(e){
    e.preventDefault();
    removendoTarefas();
}) 


// finalizando a sessao atraves do botao "Finalizar Sessão"
finalizarSessao.addEventListener("click", function(event){
    localStorage.removeItem("login")

    window.location.href = "index.html"
})
