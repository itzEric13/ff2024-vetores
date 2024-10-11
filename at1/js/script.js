// Desenvolva um gerador de tabuada, capaz de gerar através de qualquer número inteiro, 
// solicitando ao usuário o número e mostrando na tela conforme o exemplo abaixo:
// Tabuada de 5:
// 5 x 1 = 5
// 5 x 2 = 10
// ...
// 5 x 10 = 50
// Ao final, pergunte ao usuário se ele deseja realizar uma outra geração ou sair.


// function tabelaPao() {
//     let numero = document.querySelector('#numero').value;

//     if (isNaN(numero) == true || numero == "") {
//         alert("Número Inválido!");
//         document.querySelector('#numero').value = "";
//     } else {
//         let msgPao = "";
//         for (let i = 1; i <= 50; i++) {

//             let ordem = (i === 1) ? "Pão" : "Pães";
//             msgPao += ` ${i} ${ordem} = R$ ${(numero * i).toFixed(2)} <br>`;
//         }
//         document.querySelector('h5').innerHTML = msgPao;
//         document.querySelector('#numero').disabled = true;
//         document.querySelector('.btn-primary').disabled = true;
//         document.querySelector('.btn-dark').disabled = false;
//     }


// }
// function liberarTabuada() {
//     let podeGerar = confirm("Deseja gerar outra tabela de preço?");

//     if (podeGerar == true) {
//         document.querySelector('#numero').disabled = false;
//         document.querySelector('.btn-primary').disabled = false;
//         document.querySelector('.btn-dark').disabled = true;
//     }
// }
// document
//     .querySelector('.btn-primary')
//     .addEventListener('click', tabelaPao);

// document
//     .querySelector('.btn-dark')
//     .addEventListener('click', liberarTabuada);

function gerarTabela() {
    let preco = document.querySelector('#preco').value;
    preco = preco.replace(',','.');
    if (isNaN(preco) || preco == '') {
        alert("Valor inválido!");
    }
    else {
        preco = parseFloat(preco);
        let htmlPreco = "";
        for (let i = 1; i <= 50; i++) {
            if (i == 1) {
                htmlPreco += `
                    <tr><td>1 pão</td>
                        <td>R$ ${preco.toFixed(2)}</td>
                    </tr>`;
            } else {
                htmlPreco += `
                    <tr><td>${i} pães</td>
                        <td>R$ ${(preco * i).toFixed(2)}</td>
                    </tr>`;
            }
        }
        document.querySelector('.tabelaPreco').innerHTML = htmlPreco;
    }
}
document
    .querySelector('.btn-danger')
    .addEventListener('click', gerarTabela);
