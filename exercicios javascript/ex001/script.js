function carregar () {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    //var hora = 19
    
    if (hora >= 0 && hora < 12){
        msg.innerHTML = `Bom Dia!<br>Agora são ${hora} horas.`
        img.src = 'amanhecer.png'
        document.body.style.background ='#EFDD94'
    }else if (hora >= 12 && hora < 18) {
        msg.innerHTML = `Boa Tarde!<br>Agora são ${hora} horas.`
        img.src = 'entardecer.png'
        document.body.style.background = '#C75717'
    } else {
        msg.innerHTML = `Boa Noite!<br>Agora são ${hora} horas.`
        img.src = 'anoitecer.png'
        document.body.style.background = '#3D3236'
    }
}