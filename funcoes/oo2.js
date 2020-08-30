class Produto {
  constructor(nome, preco, desconto) {
    this.nome = nome;
    this.preco = preco;
    this.desconto = desconto;
  }

  precoFinal() {
    return this.preco * (1 - this.desconto);
  }
}

const produto = new Produto("Geladeira", 2800, 0.2);
console.log(produto);
console.log(produto.precoFinal());
