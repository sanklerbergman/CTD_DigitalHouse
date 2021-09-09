// ! Integrantes
// * Marcelo Garofalo
// * Izabella de Paula Leite
// * Daniel Martins
// * Sankler Bergman


// Número da conta (somente números)
// ● Tipo de conta (conta corrente ou poupança em $)
// ● Saldo em $ (valor apenas)
// ● Titular da conta (nome completo)
// 5486273622	Conta Corrente	27771	Abigael Natte

function ClienteNovo(numeroDaConta,tipoDaConta,saldo,NomeDoTitular){
    this.numeroDaConta = numeroDaConta;
    this.tipoDaConta = tipoDaConta;
    this.saldo = saldo;
    this.NomeDoTitular = NomeDoTitular;
    }

let accountMaster = [
        //aqui receberia todas as contas dos usuarios
        5486273622,
        1183971869,
        9582019689,
        1761924656,
        7401971607,
        630841470,
        4223508636,
        185979521,
        3151956165,
        2138105881
    
]

let typeOfAccount = [
    "Conta Corrente",
    "Conta Poupança",
    "Conta Poupança",
    "Conta Poupança",
    "Conta Poupança",
    "Conta Corrente",
    "Conta Corrente",
    "Conta Poupança",
    "Conta Corrente",
    "Conta Poupança"
]

let balance = [
    27771,
    8675,
    27363,
    32415,
    18789,
    28776,
    2177,
    25994,
    7601,
    33196
]

let nameOfOwner = [
    "Abigael Natte",
    "Ramon Connell",
    "Jarret Lafuente",
    "Ansel Ardley",
    "Jacki Shurmer",
    "Jobi Mawtus",
    "Thomasin Latour",
    "Lonnie Verheijden",
    "Alonso Wannan",
    "Bendite Huggett"
]

let clienteNumberOne = new ClienteNovo(accountMaster[0], typeOfAccount[0], balance[0], nameOfOwner[0])



console.log(clienteNumberOne)

// let clienteNovo = {
//     numeroDaConta: 5486273622,
//     tipoDaConta: "Conta Corrente", 
//     saldo: 27771,
//     NomeDoTitular: "Abigael Natte"

// }

// console.log (clienteNovo)