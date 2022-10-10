function parOuImpar() {
    let num = Number(window.prompt('Digite um número:'))
    let msg
    if (num%2 == 0) {
        msg = 'PAR!'
    } else {
        msg = 'IMPAR!'
    }

    let res = document.querySelector('section#resultado')
    res.innerHTML = `<p>O número ${num} que foi digitado é <strong>${msg}!</strong></p>`
}