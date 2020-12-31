// Functor é um wrapper de um valor. São objetos que implementam a função MAP

const numeros = [1, 2, 3, 4, 5, 6];

const novosNumeros = numeros
  .map((elemento) => elemento + 10)
  .map((elemento) => elemento * 10);

console.log(numeros, novosNumeros);

function TipoSeguro(valor) {
  return {
    valor,
    invalido() {
      return this.valor === null || this.valor === undefined;
    },
    map(fn) {
      if (this.invalido()) {
        return TipoSeguro(null);
      } else {
        const novoValor = fn(this.valor);
        return TipoSeguro(novoValor);
      }
    },
  };
}

const resultado = TipoSeguro("Esse é um texto")
  .map((texto) => texto.toUpperCase())
  .map((texto) => `${texto} !!!!!`)
  .map((texto) => texto.split("").join(" "));

console.log(resultado.valor);
