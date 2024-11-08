alert('Quantas letras A tem?');

let palavra = prompt("Escreva qualquer coisa: ");

function contadorLetra(palavra) {
    
    let palavraArray = palavra.toLowerCase()
    let letrasA = palavraArray.split('').filter(letra => letra === 'a');
    return letrasA.length;
}

let contador = contadorLetra(palavra);
console.log(`Em sua inserção "${palavra}", existem ${contador} letra(s) A!`);