function lerNumeros() {
    let numeros = [];
    for (let i = 0; i < 20; i++) {
        let numero = prompt(`Informe o ${i + 1}º numero`);
        if (isNaN(numero) || numero.trim() == '') {
            alert("Numero Invalido");
            salariobruto = prompt(`Informe o ${i + 1}º Salário Bruto novamente:`);
        }
        numero = parseFloat(numero);

        numeros.push(numero);
    }
    return numeros;
}



let listaGeral = lerNumeros();
let listaPares = listaGeral.filter(num =>(num % 2 === 0));
let listaImpares = listaGeral.filter(num =>(num % 2 === 0));

let msg = `A lista de numeros gerais é ${listaGeral.join (' ,')} \n
A lista de numeros pares é ${listaPares.join(',')} \n
A lista de numeros impares é ${listaImpares.join(',')}`
alert(msg);