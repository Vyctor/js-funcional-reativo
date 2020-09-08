let quantidadeExecucoes = 0;

// Função impura
function somar(a, b) {
  quantidadeExecucoes++; // efeitos colaterais observáveis
  return a + b;
}

console.log(somar(12, 13));
