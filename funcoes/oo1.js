// Função construtora
function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

const produto1 = new Produto("Caneta azul", 8.59);
const produto2 = new Produto("Geladeira", 2345.98);

console.log(produto1, produto2);
