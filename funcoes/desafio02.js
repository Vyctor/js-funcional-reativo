const carrinho = [
  { nome: "Caneta", qtde: 10, preco: 7.99, fragile: true },
  { nome: "Impressora", qtde: 1, preco: 649.5, fragile: true },
  { nome: "Caderno", qtde: 4, preco: 27.1, fragile: false },
  { nome: "Lápis", qtde: 3, preco: 5.82, fragile: false },
  { nome: "Tesoura", qtde: 1, preco: 19.2, fragile: true },
];

// 1. Apenas os elementos que possuem fragile === true
const isFragile = (item) => item.fragile;
// 2. qtde * preco => total
const getTotal = (item) => item.preco * item.qtde;
// 3. media dos totais
const getMedia = (acc, element) => {
  const novaQtde = acc.qtde + 1;
  const novoTotal = acc.total + element;
  return {
    qtde: novaQtde,
    total: novoTotal,
    media: novoTotal / novaQtde,
  };
};

const mediaInicial = { qtde: 0, total: 0, media: 0 };

const media = carrinho
  .filter(isFragile)
  .map(getTotal)
  .reduce(getMedia, mediaInicial);

console.log(media);
