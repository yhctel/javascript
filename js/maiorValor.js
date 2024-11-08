alert('Vamos criar uma lista!');

let lista = [];

for (let i = 0; i < 7; i++) { 
    let num = parseInt(prompt('Adicione um número à sua lista:'));
    lista.push(num); 
}

let maior = lista.sort((a, b) => a - b); // Ordena a lista de números em ordem crescente

console.log(`Sua Lista: ${lista}`)

// O comprimento da lista é dado por `lista.length`, e como os índices começam do 0, o último elemento tem índice `length - 1`.
console.log(`O maior número da sua lista é: ${maior[maior.length - 1]}`); // O maior número da lista estará no último índice, já que a lista foi ordenada em ordem crescente.
