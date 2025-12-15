
let imagem = document.querySelector(".imagem-copo")

function trocaImagem(endereco) {
    imagem.src = endereco
}

function trocaFundo(cor) {
    let fundo = document.querySelector(".circulo");
    fundo.style.background = cor; }