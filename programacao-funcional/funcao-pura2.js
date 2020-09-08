function gerarNumeroAleatorio(numMin, numMax) {
  const fator = numMax - numMin + 1;
  return parseInt(Math.random() * fator) + numMin;
}

console.log(gerarNumeroAleatorio(1, 60));
console.log(gerarNumeroAleatorio(1, 60));
console.log(gerarNumeroAleatorio(1, 60));
console.log(gerarNumeroAleatorio(1, 60));
console.log(gerarNumeroAleatorio(1, 60));
console.log(gerarNumeroAleatorio(1, 60));
