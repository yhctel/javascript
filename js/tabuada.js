let num = parseInt(prompt('Qual tabuada vamos aprender?'))

for (let i = 1; i <= 10; i++) {
    let multiplicacao = num * i
    console.log(`${num} x ${i} = ${multiplicacao}`)
}