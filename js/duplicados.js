let listaOriginal = [];

for (let i = 0; i < 6; i++) {
   let objeto = prompt('Adicione um item à sua lista: ');

   listaOriginal.push(objeto);
}

//O método filter percorre todos os elementos de listaOriginal e chama a função de callback para cada um deles,
//passando três parâmetros: o item atual (objeto), o índice do item atual (index) e o próprio array (listaOriginal).
let listaSemDuplicados = listaOriginal.filter((objeto, index) => {
    return listaOriginal.indexOf(objeto) === index;
});

console.log('Lista original:');
console.log(listaOriginal);

console.log('Lista sem duplicados:');
console.log(listaSemDuplicados);
