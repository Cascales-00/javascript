let valores = [8, 1, 5, 6, 9, 15]
/*
exibe o vetor inteiro
console.log(valores)


exibe o vetor por posição
console.log(valores[0])
console.log(valores[1])
console.log(valores[2])
console.log(valores[3])
console.log(valores[4])
console.log(valores[5])
*/


/*
 exibe o vetor até sua ultima posição
for (let pos=0; pos < valores.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]}`)
}
*/

// para cada posição 'pos' dentro de 'valores' mostre valores[pos] 
// 
for (let pos in valores) {
    console.log(`A posição ${pos} tem o valor ${valores[pos]} `)
}