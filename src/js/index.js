// p1 pegar html dos botões
const botoesCarrossel = document.querySelectorAll('.botao');

const imagens = document.querySelectorAll('.imagem');

// p2 identificar o clique

botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        desativarBotaoSelecionado();

        SelecionarBotaoCarrossel(botao);

        EsconderImagemAtiva();

        MostrarImagemDeFundo(indice);
    })
})
function MostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function SelecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function EsconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}

