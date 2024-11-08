let numeros = [];

for (let i = 0; i < 10; i++) {
    let num = parseInt(prompt('Adicione um número à sua lista:'));
    numeros.push(num);
}

let pares = numeros.filter(numero => numero % 2 === 0);
let impares = numeros.filter(numero => numero % 2 !== 0);

console.log(`{ pares: ${pares.length}, impares: ${impares.length} }`);