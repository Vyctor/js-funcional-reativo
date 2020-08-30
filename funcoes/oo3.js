function Produto(nome, preco, desconto = 0.5) {
  this.nome = nome;
  this.preco = preco;
  this._desconto = desconto;

  this.precoFinal = () => {
    return this.preco * (1 - this._desconto);
  };
}

Produto.prototype.log = () => {
  console.log(`Nome: ${this.nome} Preço: ${this.preco}`);
};

Object.defineProperty(Produto.prototype, "desc", {
  get: function () {
    return this._desconto;
  },
  set: function (novoDesc) {
    if (novoDesc >= 0 && novoDesc <= 1) {
      this._desconto = novoDesc;
    }
  },
});

Object.defineProperty(Produto.prototype, "descString", {
  get: function () {
    return `${this._desconto * 100}%`;
  },
});

const produto = new Produto("Geladeira", 3500);
produto.desc = 0.1;

console.log(produto.descString);
