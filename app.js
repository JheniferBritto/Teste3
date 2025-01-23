{let listaDoNumeroSecreto = [];
let numeroLimites = 10;
let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;
function exibirTextoNaTela(tag, texto) {
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
    responsiveVoice.speak(texto, 'Brazilian Portuguese Femela',
    {rate:1.2});
    if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(texto);
        utterance.lang = 'pt-BR'; 
        utterance.rate = 1.2; 
        window.speechSynthesis.speak(utterance); 
    } else {
        console.log("Web Speech API não suportada neste navegador.");
    }
    function exibirTextoNaTela(tag, texto) {
        let campo = document.querySelector(tag);
        campo.innerHTML = texto;
        if ('speechSynthesis' in window) {
            let utterance = new SpeechSynthesisUtterance(texto);
            utterance.lang = 'pt-BR'; 
            utterance.rate = 1.2; 
            window.speechSynthesis.speak(utterance); 
        } else {
            console.log("Web Speech API não suportada neste navegador.");
        }
    }
    function exibirTextoNaTela(tag, texto) {
        let campo = document.querySelector(tag);
        campo.innerHTML = texto;
        if ('speechSynthesis' in window) {
            let utterance = new SpeechSynthesisUtterance(texto);
            utterance.lang = 'pt-BR'; 
            utterance.rate = 1.2; 
            window.speechSynthesis.speak(utterance); 
        } else {
            console.log("Web Speech API não suportada neste navegador.");
        }
    }
}
function exibirMensagemInicial() {
    exibirTextoNaTela('h1', 'Jogo do número secreto');
    exibirTextoNaTela('p', 'Escolha um número entre 1 e 10')

}

exibirMensagemInicial();

function verificarChute() {
    let chute = parseInt(document.querySelector('input').value); // Garante que o input é tratado como número.

    if (chute === numeroSecreto) {
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
        let mensagemTentativas = `Você descobriu o número secreto com ${tentativas} ${palavraTentativa}!`;
        exibirTextoNaTela('p', mensagemTentativas);
        document.getElementById('reiniciar').removeAttribute
        ('disabled');
    } else {
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p', 'O número secreto é menor');
        } else {
            exibirTextoNaTela('p', 'O número secreto é maior');
        }
        tentativas++;
    } limparCampo();
}

function gerarNumeroAleatorio() {
    let numeroEscolhido = parseInt(Math.random() * numeroLimites + 1);
    let quantidadeDeElementoDaLista =listaDoNumeroSecreto.length;
    if (quantidadeDeElementoDaLista == 3) {
    listaDoNumeroSecreto = [];

} 
if (listaDoNumeroSecreto.includes(numeroEscolhido)) {
return gerarNumeroAleatorio();

} else {
    listaDoNumeroSecreto.push(numeroEscolhido);
    console.log(listaDoNumeroSecreto);
    return numeroEscolhido;
}

}


function limparCampo() {
    chute = document.querySelector('input');
    chute.value = '';
}
function reiniciarJogo() {
    numeroSecreto = gerarNumeroAleatorio();
    limparCampo();
    tentativas = 1;
    exibirMensagemInicial();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}}