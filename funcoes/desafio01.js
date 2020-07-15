// criar funcao somar(2)(3)(4)
function somar(a) {
  return function outraSoma(b) {
    return function maisUmaSoma(c) {
      return a + b + c;
    };
  };
}

const soma = somar(1)(1)(1);

console.log(soma);

// criar funcao calcular(3)(4)(fn)
function calcular(a) {
  return function recebeOutroNumero(b) {
    return function executaTudo(fn) {
      return fn(a, b);
    };
  };
}

const calculo = calcular(3)(4)((a, b) => a * b);

console.log(calculo);
