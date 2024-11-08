let n = parseInt(prompt('Quantos números pares você quer saber?'));

let numerosPares = [];
let i = 0; 

while (numerosPares.length < n) {
    if (i % 2 === 0) { 
        numerosPares.push(i);
    }

    i++; // Incrementa para o próximo número
}

console.log(`Os primeiros ${n} números pares: ${numerosPares}`);
