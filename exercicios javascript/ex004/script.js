function tabuada() {
    let num = document.getElementById('txtn')
    let tab = document.getElementById('seltab')
    // se o número estiver vazio envia msg de erro
    if (num.value.length == 0) {
        window.alert('Por favor, digite um número')
    } else {
        let n = Number(num.value)
        // let c = contador
        let c = 1
        // limpa a tabuada
        tab.innerHTML = ''
        while (c <= 10) {
            // cria o elemento 'option' dentro do select
            let item = document.createElement('option')
            // cria o option n x n = n x contador
            item.text = `${n} x ${c} = ${n*c}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++
        }
    }
    
}