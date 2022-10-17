function maior() {
    let n1 = window.prompt('Digite um número:')
    let n2 = window.prompt('Digite outro número:')
    let res = document.querySelector('section#resultado')
    
    if (n1 > n2) {
       res.innerHTML = `<p>Analisando os valores <mark>${n1}</mark> e <mark>${n2}</mark>, o maior valor é <strong>${n1}.</strong></p>`
    } else if (n1 < n2) {
        res.innerHTML = `<p>Analisando os valores <mark>${n1}</mark> e <mark>${n2}</mark>, o maior valor é <strong>${n2}.</strong></p>` 
    } else {
        res.innerHTML = `<p>Os valores são <strong>IGUAIS</strong>.</p>`
    }
}