const letras = [
  "O",
  "l",
  "á",
  " ",
  "m",
  "u",
  "n",
  "d",
  "o",
  "!",
  "!",
  "!",
  "!",
];

const resultado = letras
  .map((letra) => letra.toUpperCase())
  .reduce((a, b) => a + b);

console.log(resultado);
