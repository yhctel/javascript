let frase = prompt('Escreva uma frase qualquer:');
let palavras = frase.trim().split(/\s+/); //A expressão \s+ divide a frase por um ou mais espaços consecutivos, garantindo que palavras separadas por múltiplos espaços não criem entradas vazias no array.
let numeroDePalavras = palavras.length;

console.log(`Sua frase é: ${frase}`);
console.log(`A frase possui ${numeroDePalavras} palavras`);