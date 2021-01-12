const path = require("path");
const fn = require("./funcoes");

const dirPath = path.join(__dirname, "legendas");

const simbolos = [
  ".",
  "?",
  "-",
  ",",
  '"',
  "",
  "_",
  "<i>",
  "</i>",
  "\r",
  "[",
  "]",
  "(",
  ")",
];

function agruparPalavras(palavras) {
  return Object.values(
    palavras.reduce((acc, palavra) => {
      const elemento = palavra.toLowerCase();
      const qtde = acc[elemento] ? acc[elemento].qtde + 1 : 1;

      acc[elemento] = { elemento: elemento, qtde };

      return acc;
    }, {})
  );
}

function ordenarPorAtributoNumerico(atributo, ordem) {
  return function (array) {
    const asc = (o1, o2) => o2[atributo] - o1[atributo];
    const desc = (o1, o2) => o1[atributo] - o2[atributo];
    return array.sort(ordem === "asc" ? asc : desc);
  };
}

fn.readPath(dirPath).subscribe(console.log);
