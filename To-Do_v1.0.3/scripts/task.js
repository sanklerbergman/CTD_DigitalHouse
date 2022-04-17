// configuracao da API, encontrada na tarefa de criar Usuario.
const tokenJson = localStorage.getItem("login")
let valorToken = JSON.parse(tokenJson)
let statusTarefa = false

// elementos para criar novas tarefas
let button = document.getElementById("submit");
let clientValue = document.getElementById("novaTarefa");


//skeleton style 
let skeleton = document.querySelector('#skeleton')

// selecionar o elemento onde vamos adicionar novos tasks
const tarefasPendentes = document.querySelector('.tarefas-pendentes')
const finalizarSessao = document.querySelector('#closeApp')
let tarefasTerminadas = document.querySelector('.tarefas-terminadas')

let configuracaoRequisicao = {
    method: 'GET',
    headers: {
        'Content-type': 'application/json',
        'Authorization': valorToken.token.jwt
    },

};
// Chamando   a API para achar o usario
fetch("https://ctd-todo-api.herokuapp.com/v1/users/getMe", configuracaoRequisicao)
    .then((response) => response.json())
    .then((data) => {
        const nomeUser = document.querySelector('p')
        nomeUser.innerHTML = `${data.firstName} ${data.lastName}`
    })
    .catch(error => console.error(error))

window.onload = getTasks()
// Receive all tasks
function getTasks() {

    let urlGetTask = 'https://ctd-todo-api.herokuapp.com/v1/tasks'
    let configTask = {
        method: "GET",
        headers: {
            'Content-type': 'application/json',
            'Authorization': valorToken.token.jwt
        },
    }

    fetch(urlGetTask, configTask)
        .then(res => res.json())
        .then(data => {
            // skeleton.style.display = 'none'
            console.log(data)
            data.map((info) => {

                if (info.completed === true) {
                    
                    let tarefasDone = document.querySelector('.tarefas-terminadas')
                    let liDone = document.createElement('li')
                    liDone.setAttribute('class', 'tarefa')
                    let divList = document.createElement('div')
                    divList.setAttribute('class', 'not-done')
                    // divList.setAttribute('id', data.id)
                    let divListSecond = document.createElement('div')
                    divListSecond.setAttribute('class', 'descricao')
                    let divListThird = document.createElement('div')
                    let pDesc = document.createElement('p')
                    pDesc.setAttribute('class', 'nome')
                    let btnEdit = document.createElement('button')
                    let btnRemove = document.createElement('button')

                    let iEdit = document.createElement('i')
                    iEdit.setAttribute('class', 'fas fa-undo-alt change')
                    iEdit.setAttribute('id', info.id)
                    let iRemove = document.createElement('i')
                    iRemove.setAttribute('class', 'far fa-trash-alt')
                    iRemove.setAttribute('id', info.id)

                    let description = document.createTextNode(info.description)
                    //Mostrar no html 
                    tarefasDone.appendChild(liDone)
                    liDone.appendChild(divList)
                    liDone.appendChild(divListSecond)
                    divListSecond.appendChild(pDesc)
                    pDesc.appendChild(description)

                    divListSecond.appendChild(divListThird)
                    divListThird.appendChild(btnEdit)
                    divListThird.appendChild(btnRemove)
                    btnEdit.appendChild(iEdit)
                    btnRemove.appendChild(iRemove)
                }
                else {
                    let li = document.createElement('li')
                    li.setAttribute('class', 'tarefa')
                    let divList = document.createElement('div')
                    divList.setAttribute('class', 'not-done')
                    divList.setAttribute('status', info.completed)
                    divList.setAttribute('id', info.id,)
                    let divListSecond = document.createElement('div')
                    divListSecond.setAttribute('class', 'descricao')
                    let pDesc = document.createElement('p')
                    pDesc.setAttribute('class', 'nome')
                    let pTime = document.createElement('p')
                    pTime.setAttribute('class', 'timestamp')
                    let i = document.createElement('i')
                    i.setAttribute('class', 'far fa-calendar-alt')

                    let description = document.createTextNode(info.description)
                    let time = document.createTextNode(info.createdAt)


                    tarefasPendentes.appendChild(li)
                    li.appendChild(divList)
                    li.appendChild(divListSecond)
                    divListSecond.appendChild(pDesc)
                    pDesc.appendChild(description)
                    divListSecond.appendChild(pTime)
                    pTime.appendChild(i)
                    i.appendChild(time)
                }

            })

        })
        .catch(error => console.error(error))
}


// create tasks
button.addEventListener('click', (e) => {
    e.preventDefault()
    let clientValue = document.getElementById("novaTarefa");
    let urlCreatTask = 'https://ctd-todo-api.herokuapp.com/v1/tasks'
    let configCreateTask = {
        method: "POST",
        body: JSON.stringify(
            {
                description: clientValue.value,
                completed: false
            }
        ),
        headers: {
            'Content-type': 'application/json',
            'Authorization': valorToken.token.jwt
        },

    }
    // console.log(urlCreatTask)
    // console.log(configCreateTask)
    fetch("https://ctd-todo-api.herokuapp.com/v1/tasks", configCreateTask)
        .then(res => res.json())
        .then(data => {
            // console.log(data)

            // console.log(clientValue)
            let li = document.createElement('li')
            li.setAttribute('class', 'tarefa')
            let divList = document.createElement('div')
            divList.setAttribute('class', 'not-done')
            divList.setAttribute('id', data.id)
            // divList.setAttribute('onclick', `tarefaTerminada(${data.id})`)
            let divListSecond = document.createElement('div')
            divListSecond.setAttribute('class', 'descricao')
            let pDesc = document.createElement('p')
            pDesc.setAttribute('class', 'nome')
            let pTime = document.createElement('p')
            pTime.setAttribute('class', 'timestamp')
            let i = document.createElement('i')
            i.setAttribute('class', 'far fa-calendar-alt')

            let description = document.createTextNode(data.description)
            let time = document.createTextNode(data.createdAt)

            tarefasPendentes.appendChild(li)
            li.appendChild(divList)
            li.appendChild(divListSecond)
            divListSecond.appendChild(pDesc)
            pDesc.appendChild(description)
            divListSecond.appendChild(pTime)
            pTime.appendChild(i)
            i.appendChild(time)
            clientValue.value = " ";
        })


        .catch(error => console.error(error))
})

// Get terminated element
let terminatedBtn = document.querySelector('.tarefas-pendentes')
terminatedBtn.addEventListener('click', (e) => {
    let item = e.target
    // console.log(item)
    if (item.classList[0] === 'not-done') {
        //   let id = item.dataget.id
        atualizarTarefas(item.id)
        // nao mostrar o elemento que foi selecionado
        item.parentNode.classList.toggle('display')
        
    }
})

// Selecionar uma tarefa especifica

function tarefaTerminada(id) {
    fetch(`https://ctd-todo-api.herokuapp.com/v1/tasks/${id}`, {
        method: "GET",
        headers: {
            'Content-type': 'application/json',
            'Authorization': valorToken.token.jwt
        },
    })
        .then(res => res.json())
        .then(data => {
            let tarefasDone = document.querySelector('.tarefas-terminadas')
            let liDone = document.createElement('li')
            liDone.setAttribute('class', 'tarefa')
            let divList = document.createElement('div')
            divList.setAttribute('class', 'not-done')
            // divList.setAttribute('id', data.id)
            let divListSecond = document.createElement('div')
            divListSecond.setAttribute('class', 'descricao')
            let divListThird = document.createElement('div')
            let pDesc = document.createElement('p')
            pDesc.setAttribute('class', 'nome')
            let btnEdit = document.createElement('button')
            let btnRemove = document.createElement('button')

            let iEdit = document.createElement('i')
            iEdit.setAttribute('class', 'fas fa-undo-alt change')
            iEdit.setAttribute('id', data.id)
            let iRemove = document.createElement('i')
            iRemove.setAttribute('class', 'far fa-trash-alt')
            iRemove.setAttribute('id', data.id)

            let description = document.createTextNode(data.description)
            //Mostrar no html 
            tarefasDone.appendChild(liDone)
            liDone.appendChild(divList)
            liDone.appendChild(divListSecond)
            divListSecond.appendChild(pDesc)
            pDesc.appendChild(description)

            divListSecond.appendChild(divListThird)
            divListThird.appendChild(btnEdit)
            divListThird.appendChild(btnRemove)
            btnEdit.appendChild(iEdit)
            btnRemove.appendChild(iRemove)

        })
}

// deletar a tarefa selecionada

let deleteBtn = document.querySelector('.tarefas-terminadas')
deleteBtn.addEventListener('click', (e) => {
    let item = e.target

    if (item.classList[0] === 'far') {
        // console.log(item)
        //   let id = item.dataget.id
        deletarTarefaTerminada(item.id)
        // nao mostrar o elemento que foi selecionado
        //   item.parentNode.parentNode.parentNode.style.display = "none"
        item.parentNode.parentNode.parentNode.remove()

    }
    // selecionar o icon de atualizar para chamar a function atualizar tarefa
    if (item.classList[0] === 'fas') {
        // console.log(item)
        atualizarTarefas(item.id)
    }
    if (item.classList[0] === 'done') {
        // console.log(item)
        item.parentNode.classList.toggle('display')
    }
})
function deletarTarefaTerminada(id) {
    fetch(`https://ctd-todo-api.herokuapp.com/v1/tasks/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-type': 'application/json',
            'Authorization': valorToken.token.jwt
        },

    })
        .then(res => res.json())
        .then(data => console.log(data))
}

function atualizarTarefas(id) {
    // let edit = prompt('Edit value')
    fetch(`https://ctd-todo-api.herokuapp.com/v1/tasks/${id}`, {
        method: "PUT",
        headers: {
            'Content-type': 'application/json',
            'Authorization': valorToken.token.jwt
        },
        body: JSON.stringify({
            description: clientValue.value,
            completed: statusTarefa? false : true
        })
    })
        .then(res => res.json())
        .then(data => tarefaTerminada(data.id))

}
