document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("formCadastro");
    const btnAdicionar = document.getElementById("btnAdicionar");
    const tabelaBody = document.querySelector("#tabelaFuncionarios tbody");
    let funcionarios = JSON.parse(sessionStorage.getItem("funcionarios")) || [];

    const validarCampos = (nome, idade, salario) => {
        const nomeValido = /^[a-zA-Z]+\s+[a-zA-Z]+$/.test(nome);
        const idadeValida = idade > 14 && idade < 120;
        const salarioValido = salario >= 1500 && salario <= 15000;

        return nomeValido && idadeValida && salarioValido;
    };

    const exibirFuncionarios = () => {
        tabelaBody.innerHTML = "";
        funcionarios.forEach(func => {
            const tr = document.createElement("tr");
            tr.innerHTML = `<td>${func.nome}</td><td>${func.idade}</td><td>${func.sexo}</td><td>R$ ${func.salario.toFixed(2)}</td>`;
            tabelaBody.appendChild(tr);
        });
    };

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const nome = document.getElementById("nome").value;
        const idade = parseInt(document.getElementById("idade").value);
        const sexo = document.getElementById("sexo").value;
        const salario = parseFloat(document.getElementById("salario").value);

        if (validarCampos(nome, idade, salario)) {
            funcionarios.push({ nome, idade, sexo, salario });
            sessionStorage.setItem("funcionarios", JSON.stringify(funcionarios));
            form.reset();
            exibirFuncionarios();
            btnAdicionar.textContent = "Recomeçar";
        } else {
            alert("Verifique os dados informados.");
        }
    });

    exibirFuncionarios();
});
