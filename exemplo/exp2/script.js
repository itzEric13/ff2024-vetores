/*
Crie um algoritmo que leia 4 notas, 
mostre as notas e a média na tela.
*/
let notas = [];
for (let i = 0; i < 4; i++) {
    let nota = prompt(`Informe a ${i + 1}ª nota:`);
    nota = nota.replace(',', '.');
    while (isNaN(nota) || nota.trim() === "") {
        alert("Nota inválida!");
        nota = prompt(`Informe a ${i + 1} nota novamente:`);
    }
    nota = parseFloat(nota);
    notas[i] = nota;
}
let soma = 0;
let media = 0;
let quant = notas.length;
for (let j = 0; j < quant; j++) {
    soma += notas[j];
}
media = soma / quant;
alert(`A média das notas informadas é: ${media.toFixed(2)}`)