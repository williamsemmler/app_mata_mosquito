// Variáveis
let altura = 0;
let largura = 0;
let vidas = 1;
let tempo = 15;
let tempoMosquito = 1000

var nivel = window.location.search;
nivel = nivel.replace('?','');

if (nivel == "normal") {
	tempoMosquito = 1500;
} else if (nivel == "dificil") {
	tempoMosquito = 1000
} else if (nivel == "hard") {
	tempoMosquito = 800
}

let criaMosca = setInterval ( function () {
	posicaoRandomica();
},tempoMosquito)

function alteraTamanhoTela () {
	altura = window.innerHeight;
	largura = window.innerWidth;
}
//Chama a função para captar o tamanho da tela
alteraTamanhoTela();

// Controlando o cronometro do jogo
document.getElementById('cronometro').innerText = tempo;
let cronometro = setInterval (function () {
	tempo -=1;
	if (tempo < 0) {
		clearInterval (cronometro);
		clearInterval (criaMosca);
		window.location.href = "vitoria.html";
	} else {
		document.getElementById('cronometro').innerText = tempo;
	}
}, 1000)

function posicaoRandomica () {

	if (document.getElementById("mosquito")) {
		document.getElementById("mosquito").remove();

		if (vidas > 3) {
			window.location.href = "fim_de_jogo.html";
		} else {
			document.getElementById('v' + vidas).src = "imagens/coracao_vazio.png"

			vidas ++;
		}
	}
	// Cria uma posição X e Y de forma randômica.
	// Colocar o valor de random arredondado para baixo.
	// Retira 90px para que o mosquito não ultrapasse a largura e altura da tela
	let posicaoX = Math.floor(Math.random() * largura) - 120;
	let posicaoY = Math.floor(Math.random() * altura) - 120;

	posicaoX = posicaoX <0 ? 0 : posicaoX
	posicaoY = posicaoY <0 ? 0 : posicaoY

	// Criar o elemento HTML para reposição randomicamente a mosca
	let mosca = document.createElement('img');
	mosca.src = "imagens/mosca.png";
	mosca.className = tamanhoAleatorio() + " " + ladoAleatorio ();
	mosca.style.position = "absolute";
	mosca.style.left = posicaoX + "px";
	mosca.style.top = posicaoY + "px";
	mosca.id = "mosquito"

	mosca.onclick = function () {
		this.remove();
	}

	document.body.appendChild(mosca);
}

function tamanhoAleatorio() {
	let classe = Math.floor(Math.random() * 3)

	switch (classe){
		case 0:
			return "mosquito1"
		case 1:
			return "mosquito2"
		case 2:
			return "mosquito3"
	}
}

function ladoAleatorio () {
	let classe = Math.floor(Math.random() * 2)

	switch (classe){
		case 0:
			return "ladoA"
		case 1:
			return "ladoB"
	}
}

