const path = require("path");
const fn = require("./funcoes");
const {
  first,
  toArray,
  map,
  groupBy,
  mergeMap,
  reduce,
} = require("rxjs/operators");
const _ = require("lodash");

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
  "!",
  "&",
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

fn.readPath(dirPath)
  .pipe(
    fn.elementsEndingWith(".srt"),
    fn.readFile(),
    fn.separateTextBy("\n"),
    fn.removeElementIfEmpty(),
    fn.removeElementIfOnlyNumbers(),
    fn.removeSymbols(simbolos),
    fn.separateTextBy(" "),
    fn.removeElementIfEmpty(),
    fn.removeElementIfOnlyNumbers(),
    groupBy((element) => element),
    mergeMap((group) => group.pipe(toArray())),
    map((words) => ({ element: words[0], qtde: words.length })),
    toArray(),
    map((array) => _.sortBy(array, (element) => -element.qtde))
  )
  .subscribe(console.log);
