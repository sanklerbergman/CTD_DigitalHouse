const email = document.querySelector("#inputEmail").value;

const emailNormalizado = email.toLowerCase();

email.innerHTML = emailNormalizado;

const senha = document.querySelector("#inputPassword").value;

function entrar() {


    if (senha.length >= 8 && senha.length < 12 && /.com$/.test(email)) {

        localStorage.setItem("login", email)



        alert("Login efetuado com sucesso!")

        window.location.href = "tarefas.html"
    } else {
        alert("Login nao efetuado.")
    }


}

// configuracao da API, encontrada na tarefa de criar Usuario.

let configuracaoRequisicao = {
    method: 'POST',
    body: JSON.stringify({
        "id": 0,
        "firstName": "string",
        "lastName": "string",
        "email": emailNormalizado.value
    }),

    headers: {

        'Content-type': 'application/json'
    },
};

// Chamando   a API
fetch("https://ctd-todo-api.herokuapp.com/v1/users", configuracaoRequisicao)

    .then((response) => {
        return response.json()
    }).then(function (resposta) {
        console.log(resposta)
    })
    .catch(error => {
        cadastroErro(error)
        console.error(error)
    })


