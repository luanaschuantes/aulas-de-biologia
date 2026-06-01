let alunos = [

{
    nome:"Maria Oliveira",
    email:"maria@gmail.com"
},

{
    nome:"João Pereira",
    email:"joao@gmail.com"
},

{
    nome:"Ana Costa",
    email:"ana@gmail.com"
}

];

function atualizarTabela(){

    let tabela =
    document.getElementById("listaAlunos");

    tabela.innerHTML = "";

    alunos.forEach(function(aluno){

        tabela.innerHTML += `
            <tr>
                <td>${aluno.nome}</td>
                <td>${aluno.email}</td>
            </tr>
        `;

    });

}

function cadastrarAluno(){

    let nome =
    document.getElementById("nome").value;

    let email =
    document.getElementById("email").value;

    if(nome === "" || email === ""){

        alert("Preencha todos os campos!");
        return;

    }

    alunos.push({
        nome:nome,
        email:email
    });

    document.getElementById("nome").value = "";
    document.getElementById("email").value = "";

    atualizarTabela();

    alert("Aluno cadastrado com sucesso!");

}

atualizarTabela();
