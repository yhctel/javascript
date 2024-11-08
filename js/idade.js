alert('Para acessar você precisa ter mais de 18 anos');

let idade = parseInt(prompt('Insira a idade:'));

function maiorIdade(idade) {
    return idade >= 18;
}

if (maiorIdade(idade) === true) {
    console.log(`Você é maior de idade, tem ${idade} anos, pode acessar!`);
} else {
    console.log(`Tá maluco menor!? Tu só tem ${idade}! Mete o pé`);
}