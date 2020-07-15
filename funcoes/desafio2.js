const carrinho = [
  { nome: "Caneta", qtde: 10, preco: 7.99, fragil: true },
  { nome: "Impressora", qtde: 1, preco: 787.8, fragil: true },
  { nome: "Lapis", qtde: 4, preco: 5, fragil: false },
  { nome: "Caderno", qtde: 3, preco: 27, fragil: false },
  { nome: "Tesoura", qtde: 1, preco: 17.8, fragil: true },
];

// 1. fragil: true
const frageis = carrinho.filter((item) => item.fragil);
console.log(frageis);

// 2. qtde * preco => total
const totais = carrinho.map((value) => value.preco * value.qtde);

console.log(totais);

// 3. media totais
const media = carrinho.reduce(
  (total, numero) => total + (numero.preco * numero.qtde) / carrinho.length,
  0
);

console.log(media);

const isFragile = (item) => item.fragil;
const getTotal = (item) => item.qtde * item.preco;
const getMedia = (acc, el) => {
  const novaQtde = acc.qtde + 1;
  const novaTotal = acc.total + el;
  console.log(acc, el);
  return {
    qtde: novaQtde,
    total: novaTotal,
    media: novaTotal / novaQtde,
  };
};
const mediaInicial = { qtde: 0, total: 0, media: 0 };

const novaMedia = carrinho
  .filter(isFragile)
  .map(getTotal)
  .reduce(getMedia, mediaInicial);

console.log(novaMedia);
