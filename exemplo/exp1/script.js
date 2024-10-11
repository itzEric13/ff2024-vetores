// // Declaração

// let vetor = [];
// // Adiciono por posição
// vetor [0] = "Nome 1";
// // Adiciono na ultima posição
// vetor.push("Nome 2"); //1




// // Consultando 
// console.log(vetor);

// Crie um algoritimo que leia um vetor de 5 numeros inteiros e mostre-os


let numeros = [];

for (let i = 0; i <5; i++) {
    let numero = prompt(`Insira ${i+1} número!`);
while(isNaN(numero)){
    alert ("Isso não é um número válido");
    numero = prompt("Insira um número novamente!");
}
numero = parseInt (numero);
//Inserindo o número digitado ao vetor
numeros.push(numero);
}
console.log(numeros);