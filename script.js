// Aqui realizamos a consulta da promisse, esperando sua resposta assíncrona
fetch('https://randomuser.me/api/')
    .then(response => {
        return response.json()
    })
    .then(data => {
        //manipulamos a resposta
        
        return renderizarDadosUsuario(data);

    });

function renderizarDadosUsuario(dados) {
    /* -------------------------------- Tarefa 1 -------------------------------- */
    // Aqui devem desenvolver uma função que seja exibida na tela:
    // a foto, o nome completo do usuário e o e-mail.
    // Isto deve ser baseado nas informações que obtemos da API e inseridas no HTML.
    let card = document.querySelector(".card")
    console.log(dados)
    let resultado = dados.results
    return resultado.map((dado)=>{
        let ul = document.createElement('ul')
        let li = document.createElement('li')
        let img = document.createElement('img')
        let p = document.createElement('p')
        let span = document.createElement('span')

        card.appendChild(ul);
        ul.appendChild(li);
        li.appendChild(img);
        li.appendChild(p);
        li.appendChild(span);

        p.innerHTML = `${dado.email}`
        img.src = dado.picture.medium ;
        span.innerHTML = `${dado.name.first} ${dado.name.last}`;
    })
   
}   


function randomizarUsuario(e){
    const preventEnviar = document.querySelector("#random")

    preventDefault(e)
}

/* --------------------------- Tarefa 2 (extra) --------------------------- */
// Aqui você pode ir para o ponto extra de usar o botão que está comentado no HTML.
// Você pode descomentar o código no index.html e usar esse botão para executar uma nova solicitação API, sem recarregar a página.
// Cabe aos desenvolvedores decidirem qual bloco de código deve ser contido dentro de uma função para que ele possa ser executado toda vez que um clique de botão for realizado.