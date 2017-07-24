// Função construtora
function Carro(cor, velocMaxima) {
	this.cor = cor;
	this.velocMaxima = velocMaxima;
	this.velocAtual = 0;
}

// Prototype com os métodos
Carro.prototype ={
	Acelerar: function() {
		this.velocAtual += 10;
	}
}