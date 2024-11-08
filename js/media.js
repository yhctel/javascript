alert('Vamos calcular a média');

let num1 = parseFloat(prompt('Digite um número qualquer:'));
let num2 = parseFloat(prompt('Digite novamente um número qualquer:'));
let num3 = parseFloat(prompt('Digite agora um último número qualquer:'));

let media = (num1 + num2 + num3) / 3

console.log(`${num1} + ${num2} + ${num3} = ${(num1 + num2 + num3)} / 3 = ${media.toFixed(2)}`)
console.log(`Média: ${media.toFixed(2)}`)