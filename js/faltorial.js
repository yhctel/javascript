alert('Vamos calcular o fatorial!');

let num = parseInt(prompt('Insira um número: '));

let fatorial = 1;

console.log(`${num}! =`)

for (let i = 1; i <= num; i++) {
    fatorial *= i;
    console.log(`${i} x`)
}

console.log(`${num}! = ${fatorial}`)