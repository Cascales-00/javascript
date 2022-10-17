function agora() {
    let agora = new Date
    let resp = document.querySelector('section#saida')

    resp.innerHTML = `<p>O que recebi do sistema foi <mark>${agora}</mark></p>` 
}