alert('Vamos inverter o que você escrever!');

let palavra = prompt("Escreva qualquer coisa: ");

console.log(`Sua palavra: ${palavra}`);

function reverseString(palavra) {
    let strArray = palavra.split('');
    strArray.reverse();
    return strArray.join(''); // Junta os elementos do array de volta em uma string e retorna
}

let palavraInvertida = reverseString(palavra);
console.log(`Ao contrário fica: ${palavraInvertida}`);
