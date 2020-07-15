// Passar uma funcao como parametro de outra.

function executarQualquerCoisa(fn) {
  return fn();
}

function dizOiMane() {
  console.log("oi");
}

executarQualquerCoisa(dizOiMane);

// Retornar uma funcao a partir de outra.

function potencia(base) {
  return function (expoente) {
    return Math.pow(base, expoente);
  };
}

const potenciaDe2 = potencia(2)(8);

console.log(potenciaDe2);
