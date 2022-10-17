function horas() {
    var agora = new Date()
    //var hora = agora.getHours()
    var hora = 19
    let res = document.querySelector('div#hora')
    let resp = document.querySelector('div.hora')
    let img = document.querySelector('img#imagem')
    res.innerHTML=`<p>Agora são extamente ${hora} horas.</p>`
    if (hora >= 0 && hora < 12) {
        //bom dia
        img.src = 'imagens/manha.jpg'
        document.body.style.background = '#EEDCCD'
        resp.innerHTML=`<p>Bom Dia!</p>`
    } else if (hora >= 12 && hora <= 18) {
        //boa tarde
        img.src = 'imagens/tarde.jpg'
        document.body.style.background = '#A15016'
        resp.innerHTML=`<p>Boa Tarde!</p>`
    } else {
        //boa noite
        img.src = 'imagens/noite.jpg'
        document.body.style.background = '#1D6B9F'
        resp.innerHTML=`Boa noite!`
    }
}