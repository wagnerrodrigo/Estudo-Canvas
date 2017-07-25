//Construtor
function Animacao() {
	this.context = context;
	this.sprites =[];
	this.ligado = false; // Atributo
}
// prototype
Animacao.prototype ={
	novoSprite: function(sprite){
		this.sprites.push(sprite);
	},
// Método
	ligar: function(){
		this.ligado = true;
		this.proximoFrame();
	},
// Método
	desligar: function(){
		this.ligado = false;
	}

},
	proximoFrame: function(){
	// Posso Continuar? ooo Mae eu posso ir brincar hahahahaha
	if ( ! this.ligado ) return;

	// a cada ciclo, ligamos a tela ou desenhamos um fundo
	this.limparTela();

	// Atualizamos o estado dos sprites
	for (var i in this.sprites)
		this.sprites[i].atualizar();

	// desenhamos os sprites
	for (var i in this.sprites)
		this.sprites[i].desenhar();

	// Chamamos o próximo ciclo
	var animacao = this;
	requestAnimationFrame(function() {
		animacao.proximoFrame();
	});

	// limpar a tela
	limparTela: function() {
		var ctx = this.context; // Só para facilitar a escrita
		ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
	}

}
