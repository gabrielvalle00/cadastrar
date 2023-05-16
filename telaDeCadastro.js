var area = document.getElementById('area');

var nomeCadastro = "Gabriel Valle"

let botao = document.createElement("button");
    botao.innerText = " Acessar";
    botao.onclick = entrar;
    area.appendChild(botao);

function entrar() {
    var nome = prompt("Digite seu nome");
    console.log(nomeCadastro);

    if (nome === "Gabriel Valle") {
        area.innerHTML = "Bem vindo! "+nomeCadastro+" .<br>";

    }
    else {
        alert("Algo deu errado, tente novamente!");
        area.innerHTML = "Clique no botão para acessar. <br>"
    }

    let botaoSair = document.createElement("button");
    botaoSair.innerHTML = " Sair da conta";
    botaoSair.onclick = sair;
    area.appendChild(botaoSair);
    

}

function sair() {
    alert("Até mais!");
    area.innerHTML = "Você saiu!";

    let botao = document.createElement("button");
    botao.innerText = " Acessar";
    botao.onclick = entrar;
    area.appendChild(botao);

}

// 1 - Criar uma pasta em documentos com o nome cadastra;
// 2 - Criar repositorio local;
// 3 - Criar um repositorio no github e sincroniza-los;
// 4 - Criar uma tela de boas vindas igual ao exercicio da aula anterio;
// 5 - Acresentar uma variavel nomeCadastro e colocar os seu nome;
// 6 - O usuario so entrara se estiver cadastrado