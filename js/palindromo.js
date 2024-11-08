alert('Vamos verificar os palindromos!');

let palavra = prompt("Escreva qualquer palavra: ");

console.log(`Sua palavra: ${palavra}`);

function reverseString(palavra) {
    let arrayPalavra = palavra.toLowerCase();
    let letras = arrayPalavra.split(''); // Dividir a string em um array de caracteres
    letras.reverse();
    return letras.join(''); // Junta os elementos do array de volta em uma string e retorna
}

let palavraInvertida = reverseString(palavra);
console.log(`Ao contrário fica: ${palavraInvertida}`);

if (palavra.toLowerCase() == palavraInvertida) {
    console.log('Sua palavra é um palíndromo!');
} else {
    console.log('Sua palavra não é um palíndromo!');
}