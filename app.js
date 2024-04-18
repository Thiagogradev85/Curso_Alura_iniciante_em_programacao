let numeroSecreto = gerarNumeroAleatorio();
let tentativas = 1;

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirTextoNaTela('h1', 'Jogo do Número Secreto');
exibirTextoNaTela('p', 'Escolha um número entre 1 e 10');

function verificarChute() {
    let chute = document.querySelector('input').value;
    
    if(chute == numeroSecreto){
        exibirTextoNaTela('h1', 'Acertou!');
        let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';   
        let mensagemtentativas = `Você descobriu o numero secreto com ${tentativas} ${palavraTentativa}`;
        exibirTextoNaTela('p', mensagemtentativas);
    } else{
        if (chute > numeroSecreto) {
            exibirTextoNaTela('p','Errou! O seu chute foi maior que o número secreto');
        }else {
            exibirTextoNaTela('p', 'Errou! O seu chute foi menor que o número secreto');
        }
        tentativas++;
    }
}

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * 10 + 1);
}