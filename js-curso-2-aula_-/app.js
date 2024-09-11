let listaDeNumerosSorteados = []
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativa = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10'); 
}

exibirMensagemInicial();

function verificarChute(){
    let numero = document.querySelector('input').value;
    let palavraTentativa = tentativa > 1 ? 'tentativas' : 'tentativa';

    let mensagem = `Você acertou! Foi utilizado ${tentativa} ${palavraTentativa}.`;

    if (numero == numeroSecreto) {
        exibirTextoNaTela('h1', 'Você acertou!');
        exibirTextoNaTela('p', mensagem);

        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (numero > numeroSecreto){
            exibirTextoNaTela('p', 'O número é menor que o chute');
        } else {
            exibirTextoNaTela('p', 'O número é maior que o chute');
        }
        tentativa++;
        limparCampo();
    }
    
}

function gerarNumeroAleatorio() {
    let numeroSorteado = parseInt(Math.random() * numeroLimite + 1);
    let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;

    if (quantidadeDeElementosNaLista == numeroLimite) {
        listaDeNumerosSorteados = [];
    }

    if (listaDeNumerosSorteados.includes(numeroSorteado)) {
        return gerarNumeroAleatorio();
    } else {
        listaDeNumerosSorteados.push(numeroSorteado);
        return numeroSorteado;
    }
}

function limparCampo() {
    numero = document.querySelector('input');
    numero.value = '';
}

function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativa = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled', true);
}