let jogador = "X"; 

function jogar(celula) {
    if (celula.innerHTML == "") {
        celula.innerHTML = jogador;
        jogador = jogador == "X" ? "O" : "X";
    }
}