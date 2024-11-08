alert('Vamos somar os números pares da sua lista!')

let numeros = [];

for (let i = 0; i < 10; i++) {
    let num = parseInt(prompt('Adicione um número à sua lista:'));
    numeros.push(num);
}

let pares = numeros.filter(numero => numero % 2 === 0);

let soma = pares.reduce((acumulador, numeroAtual) => acumulador + numeroAtual);

console.log(`Sua lista: ${numeros.join(", ")}\nSeus números pares: ${pares.join(" + ")}\nResultado: ${soma}`)