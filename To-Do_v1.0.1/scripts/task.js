// configuracao da API, encontrada na tarefa de criar Usuario.
const tokenJson = localStorage.getItem("login")
let valorToken = JSON.parse(tokenJson)

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