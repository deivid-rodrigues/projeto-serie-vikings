const botoes = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

let count = 0;

setInterval(() => {
    count++

    if (count > 5) {
        count = 0
    }

    esconderImagem()

    desativarBotao()

    mostrarImagem(count)

    ativarBotao(count)

}, 7 * 1000);

botoes.forEach((botao, indice) => {
    botao.addEventListener('click', () => {

        count = indice

        esconderImagem()

        desativarBotao()

        mostrarImagem(indice)

        ativarBotao(indice)
    })
})

function esconderImagem() {
    const imagemSelecionada = document.querySelector('.ativa');

    imagemSelecionada.classList.remove('ativa');
}

function desativarBotao() {
    const BotaoSelecionado = document.querySelector('.selecionado');

    BotaoSelecionado.classList.remove('selecionado');
}

function mostrarImagem(imagem) {
    imagens[imagem].classList.add('ativa');
}

function ativarBotao(botao) {
    botoes[botao].classList.add('selecionado');
}