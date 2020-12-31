// Closure é quando uma função lembra seu escopo léxico, mesmo
// quando a função é executada fora desse escopo léxico.
// Escopo léxico é o local onde a função foi definida.
const somarXMais3 = require("./closure_escopo");

const soma = somarXMais3(3);

console.log(soma);
