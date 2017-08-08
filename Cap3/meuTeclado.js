// atribuir os codeKey do teclado as variaveis SETA_ESQUERDA SETA_DIREITA  
var SETA_ESQUERDA = 37;
var SETA_DIREITA = 39;

function Teclado(elemento){
	this.elemento = elemento;

	// Array de teclas pressionadas
	this.pressionadas = [];

	// Registrado o estado das teclas no array
	var teclado = this;
	elemento.addEventListener('keydown', function(evento){
		teclado.pressionadas[evento.keyCode] = true;
		// bom aqui esta funcionado console.log("tecla pressionada");
	});
	
	elemento.addEventListener('keyup', 	function(evento){
		teclado.pressionadas[evento.keyCode] = false;
		// bom aqui esta funcionado tambem console.log("telaca solta");
	});
	
	// estava dando erro porque o prototype estava junto do evento !!!!!
	}
	// o prototype tem que esta junto da funçao e nao no evento!!!!!!
	Teclado.prototype = {
		pressionada: function(tecla) {
			//  teste se estava funcionado console.log(SETA_ESQUERDA);
			// teste se estava funcionado console.log(SETA_DIREITA); 
			return this.pressionadas[tecla];
		}
}