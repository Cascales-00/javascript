let num = [5, 8, 2, 9 ,3]
num.push(1) // adiciona o valor '1'
num.sort() // ordena o vetor 'crescente'
console.log(num)
console.log(`Seu vetor tem ${num.length} pocições`)
console.log(`o primeiro valor do vetor é ${num[0]}`)

let posicao = num.indexOf(8)
if (pos == -1) {
    console.log('O valor não foi encontrado!')
} else {
    console.log(`o valor está na posição ${pos}`)
}