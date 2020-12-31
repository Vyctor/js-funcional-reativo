const path = require("path");
const funcoes = require("./funcoes");

const caminho = path.join(__dirname, "legendas");

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

const palavrasMaisDitas = funcoes.composicao(
  funcoes.lerDiretorio,
  funcoes.elementosTerminadosCom(".srt"),
  funcoes.lerArquivos,
  funcoes.mesclarElementos,
  funcoes.separarTextoPor("\n"),
  funcoes.removerElementosSeVazio,
  funcoes.removerElementosSeIncluir("-->"),
  funcoes.removerElementosSeApenasNumero,
  funcoes.removerSimbolos(simbolos),
  funcoes.mesclarElementos,
  funcoes.separarTextoPor(" "),
  funcoes.removerElementosSeVazio,
  funcoes.agruparPalavras,
  funcoes.ordenarPorAtributoNumerico("qtde", "asc")
);

palavrasMaisDitas(caminho).then(console.log);
