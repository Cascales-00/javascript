function calcularIdade() {
    let ano = Number(window.prompt('Em que ano você nasceu?'))
    let anoAtual = 2022
    idade = 2022 - ano
    let res = document.querySelector('section#saida')
    res.innerHTML = `<p>Quem nasceu em ${ano} vai completar <strong>${idade}</strong> anos em 2022.</p>`
}