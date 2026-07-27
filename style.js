let jogador = "X"; 
function jogar(celula) {
    if (celula.innerHTML == "") {
        celula.innerHTML = jogador;
        jogador = jogador == "X" ? "O" : "X";
    }
}

let trilho = document.getElementById('trilho')
let body = document.querySelector('body')
let container = document.querySelector('container')

 trilho.addEventListener('click', ()=>{
        trilho.classList.toggle('dark')
        body.classList.toggle('dark')
        container.classList.toggle('dark')
 })