function composicao(...funcoes) {
  return function (valor) {
    return funcoes.reduce(async (acc, fn) => {
      if (Promise.resolve(acc) === acc) {
        return fn(await acc);
      } else {
        return fn(acc);
      }
      return fn(acc);
    }, valor);
  };
}

function gritar(texto) {
  return texto.toUpperCase();
}
function enfatizar(texto) {
  return `${texto}!!!!`;
}

function tornarLento(texto) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(texto.split("").join(" "));
    }, 3000);
  });
}

const resultado = composicao(
  gritar,
  enfatizar,
  tornarLento
)("PARA").then(console.log);

console.log(resultado);
