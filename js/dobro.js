alert('Vamos criar uma lista!');

let lista = [];
let num;

while (num != 0) {
    num = parseInt(prompt('Adicione um número à sua lista: \nInsira 0 para finalizar sua lista!'));

    if(num === 0){
        break;
    } else {
        lista.push(num); // adiciona o item digitado à lista
    }
    
}

if (lista.length === 0) {
    console.log('Sua lista está vazia!');
} else {
    let dobro = lista.map(num => num * 2);
    console.log(`Lista Original:${lista}`);
    console.log(`Lista Dobrada: ${dobro}`);
}


