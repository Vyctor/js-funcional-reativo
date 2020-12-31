// Currying é o processo de transformar uma função que espera vários argumentos
// em uma função que espera um único argumento e retorna outra função curried.

// Sem utilizar currying
function soma(a, b, c) {
  return a + b + c;
}

// Utilizando currying
function somaCurrying(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}

// Sem currying
function textoComTamanhoEntre(min, max, erro, texto) {
  const tamanho = (texto || "").trim().length;

  if (tamanho < min || tamanho > max) {
    throw erro;
  }
}

// Com currying
function textoComTamanhoEntreCurrying(min) {
  return function (max) {
    return function (erro) {
      return function (texto) {
        // Lazy Evaluation
        const tamanho = (texto || "").trim().length;
        if (tamanho < min || tamanho > max) {
          throw erro;
        }
      };
    };
  };
}

const forcarTamanhoPadrao = textoComTamanhoEntreCurrying(4)(255);

const p1 = {
  nome: "A",
  preco: 14.99,
  desc: 0.25,
};
textoComTamanhoEntre(4, 255, "Nome inválido!", p1.nome);
textoComTamanhoEntreCurrying(4)(255)("Nome inválido!")(p1.nome);
