const carrinho = [
  { nome: "Caneta", qtde: 10, preco: 7.99 },
  { nome: "Impressora", qtde: 0, preco: 649.5 },
  { nome: "Caderno", qtde: 4, preco: 27.1 },
  { nome: "Lápis", qtde: 3, preco: 5.82 },
  { nome: "Tesoura", qtde: 1, preco: 19.2 },
];

const getNome = carrinho.map((item) => item.nome);
const getPrecoConsolidado = carrinho.map((item) => item.preco * item.qtde);
const precoTotal = getPrecoConsolidado.reduce((prev, curr) => prev + curr);

console.log(getNome, getPrecoConsolidado, precoTotal);
