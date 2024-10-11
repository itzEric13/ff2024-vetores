/*
Crie um algoritmo que leia o salário bruto de 5 pessoas, 
e ao final, mostre o salário líquido de todos, 
considerando 12% de INSS a descontar.
*/
function lerSalarioBruto() {
    let salBruto = [];
    for (let i = 0; i < 5; i++) {
        let salariobruto = prompt(`Informe o ${i + 1}º Salário Bruto`);
        if (isNaN(salariobruto) || salariobruto.trim() == '') {
            alert("Salário Bruto Inválido!");
            salariobruto = prompt(`Informe o ${i + 1}º Salário Bruto novamente:`);
        }
        salariobruto = parseFloat(salariobruto);

        salBruto.push(salariobruto);
    }
    return salBruto;
}

function calcularLiquido(lista) {
    let msg = "";
    for (let i = 0; i < lista.length; i++) {
        msg += `O ${i}º salario líquido sem o INSS é R$ ${(lista[i] * 0.88).toFixed(2)} \n`;
    }
    return msg;
}

let salarios = lerSalarioBruto();
let mensagem = calcularLiquido(salarios);
alert(mensagem);