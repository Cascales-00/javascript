function contar() {
    let ini = document.getElementById('txtini')
    let fim = document.getElementById('txtfim')
    let passo = document.getElementById('txtpasso')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        window.alert('[ERRO] verifique os dados e tente novamente!')
    } else {
        res.innerHTML = 'Contanto: '
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)
        //se passo não for preenchido considera 1 como passo
        if (p <= 0) {
            window.alert('Passo inválido! Considerando PASSO1')
            p = 1
        }
        if (i < f) {   
            // contagem crescente      
            for (let c = i; c <= f; c += p) {
                res.innerHTML += `${c} \u{1F449}`
            }
        } else {
            // contagem regressiva
            for(let c= i; c >= f; c -= p) {
                res.innerHTML += `${c} \u{1F449}` 
            }
        }
        res.innerHTML += ` \u{1F3C1}` 
    }
}