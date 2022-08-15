let comida = false;
let escolhaComida = "";
let valorComida = 0;

let bebida = false;
let escolhaBebida = "";
let valorBebida = 0;

let sobremesa = false;
let escolhaSobremesa = "";
let valorSobremesa = 0;

let mensagem = "";
let finalizar = false;

function selecionaComida(botao){
    const opcaoEscolhida = document.querySelector('.pratos .selecionado');
    const checkopt = botao.querySelector("ion-icon");
    if(opcaoEscolhida !== null){
        const lastopt = opcaoEscolhida.querySelector("ion-icon");
        lastopt.classList.toggle("escondido");
        opcaoEscolhida.classList.remove("selecionado");
        
    }

    botao.classList.add("selecionado");
    checkopt.classList.toggle("escondido");

    //Escolhi minha opção
    comida = true;
    escolhaComida = botao.querySelector("h3").innerHTML;

    //Salvando o preço na variável. Tive de fazer uma conversão de "," para "." 
    valorComida = botao.querySelector("h4").innerHTML;
    valorComida = Number(valorComida.replace(/,/,'.'));
   
}

function selecionaBebida(botao){
    const opcaoEscolhida = document.querySelector('.bebidas .selecionado');
    const checkopt = botao.querySelector("ion-icon");
    if(opcaoEscolhida !== null){
        const lastopt = opcaoEscolhida.querySelector("ion-icon");
        lastopt.classList.toggle("escondido");
        opcaoEscolhida.classList.remove("selecionado");
    }

    botao.classList.add("selecionado");
    checkopt.classList.toggle("escondido");

    //Escolhi minha opção
    bebida = true;
    escolhaBebida = botao.querySelector("h3").innerHTML;

    //Salvando o preço na variável. Tive de fazer uma conversão de "," para "." 
    valorBebida = botao.querySelector("h4").innerHTML;
    valorBebida = Number(valorBebida.replace(/,/,'.'));
   
}

function selecionaSobremesa(botao){
    const opcaoEscolhida = document.querySelector('.sobremesas .selecionado');
    const checkopt = botao.querySelector("ion-icon");
    if(opcaoEscolhida !== null){
        const lastopt = opcaoEscolhida.querySelector("ion-icon");
        lastopt.classList.toggle("escondido");
        opcaoEscolhida.classList.remove("selecionado");
    }

    botao.classList.add("selecionado");
    checkopt.classList.toggle("escondido");

    //Escolhi minha opção
    sobremesa = true;
    escolhaSobremesa = botao.querySelector("h3").innerHTML;

    //Salvando o preço na variável. Tive de fazer uma conversão de "," para "." 
    valorSobremesa = botao.querySelector("h4").innerHTML;
    valorSobremesa = Number(valorSobremesa.replace(/,/,'.'));
   
}
function botaoFinalizar(botao){
    const botaoInferior = botao.querySelector('.botao');
    
    if(botaoInferior !== null){
        if(comida && bebida && sobremesa){
            botaoInferior.querySelector("p").innerHTML = "Fechar Pedido";
            botaoInferior.classList.remove("botao");
            botaoInferior.classList.add("finaliza-pedido");
        }
    }
}

function finalizarPedido(botaoFinaliza){
    if(botaoFinaliza.classList.contains("finaliza-pedido")){
        //variável criada para realização do bonus
        finalizar = true;
        fechaPedido();
    }
}

function fechaPedido(){
    const soma = valorBebida + valorComida + valorSobremesa;
    const valorTotal = soma.toFixed(2);
    mensagem = ("Olá, gostaria de fazer o pedido:%0A%0A" + "- Prato: "+ escolhaComida + "%0A%0A- Bebida: "+ escolhaBebida + "%0A%0A- Sobremesa: " + escolhaSobremesa + "%0A%0ATotal: R$" + valorTotal );
    window.open("https://wa.me/5521964511142?text=" + mensagem);
}
