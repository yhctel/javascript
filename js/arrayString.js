alert('Vamos criar uma lista!');

let lista = []

for (let i = 0; i < 5; i++) { // somente < 5 porque é 0, 1, 2, 3, 4 (lista de 5 itens), se a lista começasse com 1 poderia ser <= 5
    let item = prompt('Adicione um item à sua lista: ')
    lista.push(item); // adiciona o item digitado à lista
}

alert('Sua lista tem o limite de 5 itens')

let listaFinal = lista.join(' ')

console.log(`Sua Lista:\n${listaFinal}`)