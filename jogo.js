//Dimensão da tela

var altura = 0
var largura = 0
var vidas=1
var tempo = 40
var pontos = 0

var criaMosquitoTempo = 1500

//recuperando parametro passado no index.html
var nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel == 'facil'){
	criaMosquitoTempo = 1800

}else if (nivel == 'normal'){
	criaMosquitoTempo = 1400

}else if( nivel = 'dificil'){
	criaMosquitoTempo = 1000

}

function ajustaTamanhoPalcoJogo() {
	altura = window.innerHeight
	largura = window.innerWidth

	console.log(largura, altura)
}

ajustaTamanhoPalcoJogo()

//Cronometro
var cronometro = setInterval(function() {
	tempo= tempo-1
	if(tempo<0){
		clearInterval(cronometro)
		clearInterval(criaMosquito)
		window.location.href= 'you_win.html'
	}else{
		document.getElementById('cronometro').innerHTML = tempo
	}
}, 1000)

//Posição Mosca

function posicaoRandomica() {

	//remover o mosquito anterior (caso exista)
	if(document.getElementById('mosquito')){
		document.getElementById('mosquito').remove()

		if(vidas>5){
			window.location.href= 'game_over.html'
			
		}else{
			document.getElementById('v' + vidas).src="imagens/coracao_vazio.png"
			vidas++
		}

	}

	//gerando posição aleatoria
	var posicaoX = Math.floor(Math.random() * largura) - 90
	var posicaoY = Math.floor(Math.random() * altura) - 90

	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY

	console.log(posicaoX, posicaoY)

	//criar o elemento html
	var mosquito = document.createElement('img')
	mosquito.src = 'imagens/mosquito.png'
	mosquito.className = tamanhoAleatorio() +' '+ ladoAleatorio()
	mosquito.style.left = posicaoX + 'px'
	mosquito.style.top = posicaoY + 'px'
	mosquito.style.position = 'absolute'
	mosquito.id = 'mosquito'
	mosquito.onclick = function(){
		this.remove()
		pontos= pontos + 5
		document.getElementById('score').innerHTML = pontos
		
	}

	document.body.appendChild(mosquito)


}

//função que gera de forma aleatoria o tamanho do mosquito
function tamanhoAleatorio(){
	var classe = Math.floor(Math.random() * 3)
	
	switch(classe){
		case 0:
			return 'mosquito1'

		case 1:
			return 'mosquito2'

		case 2:
			return 'mosquito3'
	}
}

//função que gera de forma aleatoria a orientação do mosquito
function ladoAleatorio(){
	var classe = Math.floor(Math.random() * 2)
	
	switch(classe){
		case 0:
			return 'ladoA'

		case 1:
			return 'ladoB'
	}
}


