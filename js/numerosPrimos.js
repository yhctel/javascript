alert('Vamos verificar se o número é primo!?');

let num = parseInt(prompt('Insira um número: '));

function primo(num) {
    if (num <= 1) { // verifica se ele não se encaixa em números naturais a partir de 1.
       return false; 
    }

    for (let i = 2; i < num; i++) { //loop que procura se número terá um divisor entre 2 e anteriores a ele mesmo.
        if (num % i === 0) {
            return false; // se houver algum divisor exato, ele não é primo, porque é divisível por outro número.
        }
    }

    return true; // se ele não se encaixar nenhuma das condições propostas, ele é um número primo.

}

if (primo(num)) { // se o número inserido se encaixa nas determinaçõpes da função
    console.log(`SIM! ${num} é um número primo.`);
} else {
    console.log(`NÃO! ${num} não é um número primo.`);
}
